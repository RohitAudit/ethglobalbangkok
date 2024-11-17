import { AppContext } from "@/App"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserData } from "@/types/userData"
import { useDynamicContext } from "@dynamic-labs/sdk-react-core"
import { Loader } from "lucide-react"
import { useContext, useEffect, useState } from "react"

type HomeScreenProps = {
}

const HomeScreen = ({ }: HomeScreenProps) => {
  const { BalanceFetcher, PriceFetcher } = useContext(AppContext)
  const { primaryWallet } = useDynamicContext()

  const [userBalanceState, setUserBalanceState] = useState<UserData>();
  const [balanceLoading, setisBalanceLoading] = useState<boolean>(true);


  useEffect(() => {
    if (primaryWallet == null || primaryWallet.address == "") return;

    const fetchAssetBalance = async () => {
      setisBalanceLoading(true)
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
      setisBalanceLoading(false)
    }

    fetchAssetBalance()
  }, [primaryWallet?.address])

  return (
    <>
      {
        !!balanceLoading ?
          <div className="flex min-w-[256px] content-center items-center justify-center align-center"><Loader /></div> :
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  ${userBalanceState?.totalBalance.toLocaleString()}
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              {userBalanceState?.assets.map(asset => (
                <Card key={asset.name}>
                  <CardHeader>
                    <CardTitle>{asset.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-semibold">${asset.value.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{asset.amount} {asset.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      }
    </>
  )
}

export default HomeScreen