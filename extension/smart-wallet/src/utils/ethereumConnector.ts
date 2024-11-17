import { ethers } from "ethers";
import { Chains } from "./constants";
import { JsonRpcSigner } from "ethers";
export class EthereumConnection{
    provider: ethers.JsonRpcProvider

    constructor(url?: string) {
        this.provider = new ethers.JsonRpcProvider(url);
    } 

    getERC20Contract(address:string): ethers.Contract{
        const ERC20Abi = [
            // Some details about the token
            "function name() view returns (string)",
            "function symbol() view returns (string)",
          
            // Get the account balance
            "function balanceOf(address) view returns (uint)",
          
            // Send some of your tokens to someone else
            "function transfer(address to, uint amount)",
          
            // An event triggered whenever anyone transfers to someone else
            "event Transfer(address indexed from, address indexed to, uint amount)"
          ];
          
        return new ethers.Contract(address,ERC20Abi,this.provider);
    }

    public getContract(address:string, abi:ethers.InterfaceAbi): ethers.Contract{
        return new ethers.Contract(address,abi,this.provider);
    }
    async getErc20Balance(address: string, tokenAddress: string): Promise<bigint> {
        const erc20Contract = this.getERC20Contract(tokenAddress);
        return await erc20Contract.balanceOf(address);
    }

    public async getAddressBalance(address:string){
        const balance = await this.provider.getBalance(address);
        return balance;
    }

    public async sendETHTransaction(signer: JsonRpcSigner , toAddress:string, valueAmount:bigint){
        const nonce_tx = await this.provider.getTransactionCount(signer.address);

        let txHash = await signer.sendTransaction( {
            from: signer.address,
            to: toAddress,
            chainId:(await this.provider.getNetwork()).chainId,
            nonce:nonce_tx,
            // gasPrice: gas_data.gasPrice,
            // gasLimit: 50000,
            value: valueAmount});
        return txHash;
    }

    public async sendUSDCTransaction(tokenAddress:string, signer: JsonRpcSigner, toAddress:string, valueAmount:bigint){
        const usdcCon = this.getERC20Contract(tokenAddress);
        usdcCon.connect(signer)
        const data_tx = await usdcCon.transfer(toAddress,valueAmount);
        console.log(data_tx)
        return data_tx.hash;
    }
}

export class MultiChainBalanceFetcher {
    chains: Record<string, { rpc: string; assets: Record<string, string> }>;

    constructor() {
        this.chains = Chains;
    }

    async getUSDCBalance(address: string): Promise<bigint> {
        let totalUSDCBalance = 0n; // Using BigInt for cumulative balance

        for (const [_, chainData] of Object.entries(this.chains)) {
            const connection = new EthereumConnection(chainData.rpc);
            const usdcAddress = chainData.assets["USDC"];

            const balance = await connection.getErc20Balance(address, usdcAddress);
            totalUSDCBalance += balance; // Accumulate balance as BigInt
        }

        return totalUSDCBalance;
    }

    async getTotalETHBalance(address: string): Promise<bigint> {
        let totalETHBalance = 0n; // Using BigInt for cumulative balance

        for (const [chainName, chainData] of Object.entries(this.chains)) {
            const connection = new EthereumConnection(chainData.rpc);

            try {
                const balance = await connection.getAddressBalance(address);
                totalETHBalance += balance; // Accumulate balance as BigInt
            } catch (error) {
                console.error(`Failed to fetch ETH balance on ${chainName}:`, error);
            }
        }

        return totalETHBalance;
    }
}
