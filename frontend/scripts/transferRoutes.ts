import {BigNumberish, ethers} from "ethers";
import { EthereumConnection } from "./ethereumConnector";
import { Chains } from "./constants";
import { OperationCanceledException } from "typescript";

export async function calculateTransferRoute(transferFromAddress: string, transferToAddress:string,tokenTicker:string, value:bigint){
    let balances = {"chains":{
        "Arbitrum": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Optimism": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Polygon": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Base": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Unichain": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Sepolia": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        }
    },
    "total":{"ETH":10,"USDC":10}
    }
    let transaction_builder:any;
    if(tokenTicker=="ETH"){
        let eth_transfer1:bigint=BigInt(0),eth_transfer0:bigint=BigInt(0);
        if (balances.total.ETH>value){
            eth_transfer1+=balances.chains.Arbitrum.ETH.balance;
            if (eth_transfer1>value){
               return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":value}}
            }
            eth_transfer1+=balances.chains.Base.ETH.balance;
            eth_transfer0+=balances.chains.Arbitrum.ETH.balance
            if (eth_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":value-eth_transfer0}}
            }
            eth_transfer1+=balances.chains.Optimism.ETH.balance;
            eth_transfer0+=balances.chains.Base.ETH.balance
            if (eth_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":value-eth_transfer0}}
            }
            eth_transfer1+=balances.chains.Polygon.ETH.balance;
            eth_transfer0+=balances.chains.Optimism.ETH.balance;
            if (eth_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":value-eth_transfer0}}
            }
            eth_transfer1+=balances.chains.Unichain.ETH.balance;
            eth_transfer0+=balances.chains.Polygon.ETH.balance;
            if (eth_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":balances.chains.Polygon.ETH.balance},"Unichain":{"ETH":value-eth_transfer0}}
            }
            eth_transfer1+=balances.chains.Sepolia.ETH.balance;
            eth_transfer0+=balances.chains.Unichain.ETH.balance;
            if (eth_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":balances.chains.Polygon.ETH.balance},"Unichain":{"ETH":balances.chains.Unichain.ETH.balance},"Sepolia":{"ETH":value-eth_transfer0}}
            }
        }
        else{
            return "low balance"
        }
    }else if (tokenTicker=="USDC"){
        let usdc_transfer1:bigint=BigInt(0),usdc_transfer0:bigint=BigInt(0);
        if (balances.total.USDC>value){
            usdc_transfer1+=balances.chains.Arbitrum.USDC.balance;
            if (usdc_transfer1>value){
               return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":value}}
            }
            usdc_transfer1+=balances.chains.Base.USDC.balance;
            usdc_transfer0+=balances.chains.Arbitrum.USDC.balance
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":balances.chains.Arbitrum.ETH.balance},"Base":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Optimism.USDC.balance;
            usdc_transfer0+=balances.chains.Base.USDC.balance
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"USDC":balances.chains.Base.ETH.balance},"Optimism":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Polygon.USDC.balance;
            usdc_transfer0+=balances.chains.Optimism.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.USDC.balance},"Base":{"ETH":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Unichain.USDC.balance;
            usdc_transfer0+=balances.chains.Polygon.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.USDC.balance},"Base":{"USDC":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":balances.chains.Polygon.ETH.balance},"Unichain":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Sepolia.USDC.balance;
            usdc_transfer0+=balances.chains.Unichain.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":balances.chains.Arbitrum.USDC.balance},"Base":{"USDC":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":balances.chains.Polygon.USDC.balance},"Unichain":{"USDC":balances.chains.Unichain.USDC.balance},"Sepolia":{"USDC":value-usdc_transfer0}}
            }
        }
        else{
            return "low balance"
        }
    }
}

export async function swap(userAddress:string, swapFromTokenTicker:string, value:bigint){
    let balances = {"chains":{
        "Arbitrum": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Optimism": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Polygon": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Base": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Unichain": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        },
        "Sepolia": {
            "USDC" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)},
            "ETH" : {"address":"0x","balance":BigInt(10),"price":BigInt(10)}
        }
    },    
    "total":{"ETH":10,"USDC":10}
    }
    let transaction_builder:any;
    if (swapFromTokenTicker=="ETH"){
        if(value<balances.total.ETH){
            let eth_transfer1:bigint=BigInt(0),eth_transfer0:bigint=BigInt(0);
            if (balances.total.ETH>value){
                eth_transfer1+=balances.chains.Arbitrum.ETH.balance;
                if (eth_transfer1>value){
                   return transaction_builder["swap"] = {"Arbitrum":{"ETH":value}}
                }
                eth_transfer1+=balances.chains.Base.ETH.balance;
                eth_transfer0+=balances.chains.Arbitrum.ETH.balance
                if (eth_transfer1>=value){
                    return transaction_builder["swap"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":value-eth_transfer0}}
                }
                eth_transfer1+=balances.chains.Optimism.ETH.balance;
                eth_transfer0+=balances.chains.Base.ETH.balance
                if (eth_transfer1>=value){
                    return transaction_builder["swap"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":value-eth_transfer0}}
                }
                eth_transfer1+=balances.chains.Polygon.ETH.balance;
                eth_transfer0+=balances.chains.Optimism.ETH.balance;
                if (eth_transfer1>=value){
                    return transaction_builder["swap"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":value-eth_transfer0}}
                }
                eth_transfer1+=balances.chains.Unichain.ETH.balance;
                eth_transfer0+=balances.chains.Polygon.ETH.balance;
                if (eth_transfer1>=value){
                    return transaction_builder["swap"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":balances.chains.Polygon.ETH.balance},"Unichain":{"ETH":value-eth_transfer0}}
                }
                eth_transfer1+=balances.chains.Sepolia.ETH.balance;
                eth_transfer0+=balances.chains.Unichain.ETH.balance;
                if (eth_transfer1>=value){
                    return transaction_builder["swap"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"ETH":balances.chains.Base.ETH.balance},"Optimism":{"ETH":balances.chains.Optimism.ETH.balance},"Polygon":{"ETH":balances.chains.Polygon.ETH.balance},"Unichain":{"ETH":balances.chains.Unichain.ETH.balance},"Sepolia":{"ETH":value-eth_transfer0}}
                }
            }
        }
    }
    else{
        if(value<balances.total.USDC){
            let usdc_transfer1:bigint=BigInt(0),usdc_transfer0:bigint=BigInt(0);
            if (usdc_transfer1>value){
               return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":value}}
            }
            usdc_transfer1+=balances.chains.Base.USDC.balance;
            usdc_transfer0+=balances.chains.Arbitrum.USDC.balance
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":balances.chains.Arbitrum.ETH.balance},"Base":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Optimism.USDC.balance;
            usdc_transfer0+=balances.chains.Base.USDC.balance
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.ETH.balance},"Base":{"USDC":balances.chains.Base.ETH.balance},"Optimism":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Polygon.USDC.balance;
            usdc_transfer0+=balances.chains.Optimism.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.USDC.balance},"Base":{"ETH":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Unichain.USDC.balance;
            usdc_transfer0+=balances.chains.Polygon.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"ETH":balances.chains.Arbitrum.USDC.balance},"Base":{"USDC":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":balances.chains.Polygon.ETH.balance},"Unichain":{"USDC":value-usdc_transfer0}}
            }
            usdc_transfer1+=balances.chains.Sepolia.USDC.balance;
            usdc_transfer0+=balances.chains.Unichain.USDC.balance;
            if (usdc_transfer1>=value){
                return transaction_builder["trasnfer"] = {"Arbitrum":{"USDC":balances.chains.Arbitrum.USDC.balance},"Base":{"USDC":balances.chains.Base.USDC.balance},"Optimism":{"USDC":balances.chains.Optimism.USDC.balance},"Polygon":{"USDC":balances.chains.Polygon.USDC.balance},"Unichain":{"USDC":balances.chains.Unichain.USDC.balance},"Sepolia":{"USDC":value-usdc_transfer0}}
            }
        }
    }
    return "low balance"
}
