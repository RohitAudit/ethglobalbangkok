import { ethers, JsonRpcProvider } from "ethers";
import { Chains } from "./constants";
import {
    getRouterConfig,
    getTokenAdminRegistryConfig,
    NETWORK
  } from "./ccip";
import {
    Router__factory,
    IERC20Metadata__factory,
    TokenAdminRegistry__factory,
  } from "./typechain-types";
import { Client } from "./typechain-types/Router";

async function crossChainUSDC(privateKey:string,sourceChain:NETWORK,destinationChain:NETWORK,destinationAddress:string,amount:bigint,dataSend:string){
    const provider = new JsonRpcProvider(Object(Chains)[sourceChain]["rpc"]);
    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(provider);
    const { router, chainSelector: sourceChainSelector } = getRouterConfig(sourceChain); 
    const sourceRouterAddress = router.address;
    const { chainSelector: destinationChainSelector } = getRouterConfig(destinationChain);
    const sourceRouter = Router__factory.connect(sourceRouterAddress, signer);
    const DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS = 2;
    const tokenAdminRegistryConfig = getTokenAdminRegistryConfig(sourceChain);
    const tokenAddress = Object(Chains)[sourceChain]["assets"]["USDC"];
    if (!tokenAdminRegistryConfig) {
        // TokenAdminRegistry not present, proceed as before
        const supportedTokens = await sourceRouter.getSupportedTokens(
          destinationChainSelector
        );
    
        if (!supportedTokens.includes(tokenAddress)) {
          throw new Error(
            `Token address ${tokenAddress} not in the list of supported tokens ${supportedTokens}`
          );
        }
    } else {
        // TokenAdminRegistry is present, use getPool to check if token is supported
        const tokenAdminRegistryAddress = tokenAdminRegistryConfig.address;
        const tokenAdminRegistry = TokenAdminRegistry__factory.connect(
          tokenAdminRegistryAddress,
          provider
        );
    
        const poolAddress = await tokenAdminRegistry.getPool(tokenAddress);
    
        if (poolAddress === ethers.ZeroAddress) {
          throw new Error(
            `Token address ${tokenAddress} is not supported (no pool found)`
          );
        }
    }
    
    // Build message
    const tokenAmounts: Client.EVMTokenAmountStruct[] = [
        {
          token: tokenAddress,
          amount: amount,
        },
    ];
    // Encoding the data
    const functionSelector = ethers.id("CCIP EVMExtraArgsV2").slice(0, 10);
    // Extra arguments are encoded as [ 'uint256','bool']
    // ExtraArgs are { gasLimit: 0, allowOutOfOrderExecution: true }
    // uint256: Set gasLimit to 0 because we are not sending any data
    // bool: allowOutOfOrderExecution is set to true
    const defaultAbiCoder = ethers.AbiCoder.defaultAbiCoder();
    const extraArgs = defaultAbiCoder.encode(["uint256", "bool"], [0, true]);

    const encodedExtraArgs = functionSelector + extraArgs.slice(2);

    const message: Client.EVM2AnyMessageStruct = {
      receiver: defaultAbiCoder.encode(["address"], [destinationAddress]),
      data: dataSend, // No data
      tokenAmounts: tokenAmounts,
      feeToken:  ethers.ZeroAddress, // If fee token address is provided, fees must be paid in fee token
      extraArgs: encodedExtraArgs,
    };

    const fees = await sourceRouter.getFee(destinationChainSelector, message);
    console.log(`Estimated fees (native): ${fees}\n`);

    const erc20 = IERC20Metadata__factory.connect(tokenAddress, signer);
    let sendTx, approvalTx;

    console.log( `Approving router ${sourceRouterAddress} to spend ${amount} of token ${tokenAddress}\n`);
    approvalTx = await erc20.approve(sourceRouterAddress, amount);
    await approvalTx.wait(DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS); // Wait for the transaction to be mined
    console.log(`Approval done. Transaction: ${approvalTx.hash}\n`);
    console.log(`Calling the router to send ${amount} of token ${tokenAddress} to account ${destinationAddress} on destination chain ${destinationChain} using CCIP\n`);
    sendTx = await sourceRouter.ccipSend(destinationChainSelector, message, {
        value: fees,
    });
    const receipt = await sendTx.wait(DEFAULT_VERIFICATION_BLOCK_CONFIRMATIONS); // Wait for the transaction to be mined
    // Simulate a call to the router to fetch the message ID
  
    if (!receipt) throw new Error("Transaction not mined yet");
    const call = {
      from: sendTx.from,
      to: sendTx.to,
      data: sendTx.data,
      gasLimit: sendTx.gasLimit,
      gasPrice: sendTx.gasPrice,
      value: sendTx.value,
      blockTag: receipt.blockNumber - 1, // Simulate a contract call with the transaction data at the block before the transaction
    };
  
    const messageId = await provider.call(call);
    
    console.log(
      `\n✅ ${amount} of Tokens(${tokenAddress}) sent to account ${destinationAddress} on destination chain ${destinationChain} using CCIP. Transaction hash ${sendTx.hash} - Message ID is ${messageId}\n`
    );
    return messageId;

}


crossChainUSDC("7890e5dde07a27b01ceca52a61fb425bbae2c3072b3dded99c0e8f7b9b341aa2","Sepolia","Base","0xBEfBf15cac02B1cB30dADb1AA4CfA181E26DBfA1",BigInt(10000000),"0x").catch((e) => {
    console.error(e);
    process.exit(1);
  });