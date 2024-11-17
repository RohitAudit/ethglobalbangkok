export const Chains = {
    "Arbitrum": {
        "rpc": "https://arb-sepolia.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
        "assets": {
            "USDC": "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
        },
        "chainID": 421614
    },
    "Optimism": {
        "rpc": "https://opt-sepolia.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
        "assets": {
            "USDC": "0x5fd84259d66Cd46123540766Be93DFE6D43130D7"
        },
        "chainID": 11155420

     },
    "Polygon":{
        "rpc":"https://polygon-amoy.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
        "assets": {
            "USDC": "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582"
        },
        "chainID": 80002
    },
    "Base": {
        "rpc": "https://base-sepolia.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
        "assets": {
            "USDC": "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
        },
        "chainID": 84532
    },
    "Sepolia": {
        "rpc": "https://eth-sepolia.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
        "assets": {
            "USDC": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
        },
        "chainID": 11155111
    }
}

export const Userbalance ={"chains":{
    "Arbitrum": {
        "USDC" : {"address":"0x","balance":"","price":""},
        "ETH" : {"address":"0x","balance":"","price":""}
    }
},
"total":{"ETH":"","USDC":""}
}

export const transaction_builder = {"swap":{"Arbitrum":{"ASSET":"VALUE"}},"bridge":{"Arbitrum":{"ASSET":"VALUE"}},"transfer":{
    "Arbitrum":{"ASSET":"VALUE"}
}}

export const transactionDefi = {}
