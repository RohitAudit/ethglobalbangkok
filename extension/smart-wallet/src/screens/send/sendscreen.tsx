import { useState, useEffect, useContext } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Wallet, CheckCircle2 } from "lucide-react";
import { addNewTransaction } from '@/utils/transactions';
import { Transaction } from '@/types/transactions';
import { AppContext } from '@/App';
import { useDynamicContext, useEmbeddedWallet, useSwitchNetwork } from '@dynamic-labs/sdk-react-core';
import { UserData } from '@/types/userData';
import { calculateTransferRoute } from '@/utils/transferRoutes';
import { EthereumConnection } from '@/utils/ethereumConnector';
import { Chains } from '@/utils/constants';
import { isEthereumWallet } from '@dynamic-labs/ethereum';
import { getSigner } from '@dynamic-labs/ethers-v6';

const SendScreen = () => {
  const {BalanceFetcher, PriceFetcher} = useContext(AppContext);
  const { primaryWallet } = useDynamicContext();
  const {} = useSwitchNetwork();

  const [userBalanceState, setUserBalanceState] = useState<UserData>();

  const [selectedAsset, setSelectedAsset] = useState('');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');
  const [startedComputation, setStartedComputation] = useState(false);

  useEffect(() => {
    if (primaryWallet == null || primaryWallet.address == "") return;

    const fetchAssetBalance = async () => {
      const ethBalance = Number(await BalanceFetcher.getTotalETHBalance(primaryWallet?.address ?? "")) / Math.pow(10, 18)
      const usdcBalance = Number(await BalanceFetcher.getUSDCBalance(primaryWallet?.address ?? "")) / Math.pow(10, 6)
      const ethUsdcPrice = await PriceFetcher.getEmaPrice()
      const ethAmount = Number(ethBalance) * ethUsdcPrice

      setUserBalanceState({
        totalBalance: (ethAmount + Number(usdcBalance)),
        assets: [{
          name: 'ETH',
          value: ethAmount,
          amount: ethBalance.toLocaleString(),
        }, {
          name: 'USDC',
          value: Number(usdcBalance),
          amount: usdcBalance.toLocaleString(),
        }]
      })
    }

    fetchAssetBalance()
  }, [primaryWallet?.address])

  

  // Mock user assets data
  const userAssets = userBalanceState?.assets;

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    if (!selectedAsset || !amount || !address) {
      setError('Please fill in all fields');
      return;
    }

    const selectedAssetData = userAssets?.find(asset => asset.name === selectedAsset);
    if (parseFloat(amount) > parseFloat(selectedAssetData?.amount ?? "0")) {
      setError('Insufficient balance');
      return;
    }

    const submitTransaction = async () => {
      console.log("computation started")
      setStartedComputation(true);
      const finalValue = selectedAsset == 'USDC' ? 
        parseFloat(amount) * Math.pow(10, 6) : 
        parseFloat(amount) * Math.pow(10, 18);
      
      const finalSendValue = BigInt(Math.round(finalValue))
      console.log(finalSendValue, finalValue)
      const strategy = await calculateTransferRoute(primaryWallet?.address ?? "", selectedAsset, finalSendValue)

      console.log(strategy)
      if(strategy == "low balance") {
        setStartedComputation(false);
        return;
      }      

      for (const chain in strategy) {
        if(primaryWallet == null || !isEthereumWallet(primaryWallet)) return;
        if(primaryWallet?.connector.supportsNetworkSwitching()) {
          await primaryWallet.switchNetwork(Chains[chain].chainID);
          console.log("switched network")
        }
        const conn = new EthereumConnection(Chains[chain].rpc)
        const signer = await getSigner(primaryWallet);
        if (selectedAsset == 'ETH') {
          const txHash = await conn.sendETHTransaction(signer, address, strategy[chain].ETH)
          console.log(txHash)
        } else {
          const txHash = await conn.sendUSDCTransaction(Chains[chain].assets['USDC'], signer, address, strategy[chain].USDC)
          console.log(txHash)          
        }
      }

      submitSendTransaction();
      setStartedComputation(false);
    }

    submitTransaction().then(() => setShowConfirmation(true));
  };

  const handleCloseModal = () => {
    setShowConfirmation(false);
    setSelectedAsset('');
    setAmount('');
    setAddress('');
    window.location.reload();
  };

  const submitSendTransaction = () => {
    const newTransaction: Transaction = {
        id: "0xtest",
        type: "Send",
        status: "Pending",
        timestamp: (new Date()).toISOString(),
        amount: amount,
        to: address
    }
    console.log(newTransaction)

    addNewTransaction(newTransaction)
  }

  const ConfirmationModal = () => (
    <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center p-6 space-y-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="text-lg font-medium text-center">Transaction Queued</h3>
          <div className="w-full space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Amount</span>
              <span className="font-medium">{amount} {selectedAsset}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">To</span>
              <span className="font-medium truncate max-w-[200px]">{address}</span>
            </div>
          </div>
          <Button 
            className="w-full mt-4"
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Send Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Asset</label>
              <Select 
                value={selectedAsset} 
                onValueChange={setSelectedAsset}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an asset" />
                </SelectTrigger>
                <SelectContent>
                  {userAssets?.map((asset) => (
                    <SelectItem key={asset.name} value={asset.name}>
                      <div className="flex justify-between w-full">
                        <span>{asset.name}</span>
                        <span className="text-gray-500">
                          Balance: {asset.amount}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pr-16"
                />
                {selectedAsset && (
                  <span className="absolute right-3 top-2 text-gray-500">
                    {selectedAsset}
                  </span>
                )}
              </div>
              {selectedAsset && (
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:text-blue-600"
                  onClick={() => {
                    const asset = userAssets?.find(a => a.name === selectedAsset);
                    setAmount(asset?.amount ?? "0");
                  }}
                >
                  Use max
                </button>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Destination Address</label>
              <div className="relative">
                <Wallet className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter recipient address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={!selectedAsset || !amount || !address || startedComputation}
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              Send
            </Button>
          </form>
        </CardContent>
      </Card>

      <ConfirmationModal />
    </div>
  );
};

export default SendScreen;