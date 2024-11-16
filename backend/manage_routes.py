from collections import Counter
import asyncio

from utils.ethconnector import EthereumConnector

class ManageRoutes:

    chain_settings = {
        "Arb": {
            "rpc": "https://arb-mainnet.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
            "assets": ["0xaf88d065e77c8cC2239327C5EDb3A432268e5831","0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9","0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f"]
        },
        "Scroll":{
            "rpc": "https://scroll-mainnet.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
            "assets": ["0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1","0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1","0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df"]
        },
        "optimism": {
            "rpc": "https://opt-mainnet.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
            "assets": ["0x68f180fcCe6836688e9084f035309E29Bf0A2095","0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85","0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"]
        },
        "polygonzkEVM":{
            "rpc":"https://polygonzkevm-mainnet.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
            "assets": ["0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1","0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035","0x1E4a5963aBFD975d8c9021ce480b42188849D41d"]
        },
        "base": {
            "rpc": "https://base-mainnet.g.alchemy.com/v2/8EbEVKiQ3VNG1kZdvAJXG73ylk50WaSB",
            "assets": ["0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf","0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913","0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"]
        }
    }

    def fetch_balance_route(self, user_address):
        balances_all = Counter({})
        for key in self.chain_settings.keys():
            eth_connector = EthereumConnector(self.chain_settings[key]["rpc"])
            balances_all + Counter(eth_connector.fetch_erc20_balances(self.chain_settings[key]["assets"],user_address))
        return balances_all


if __name__ == '__main__':
    mm = ManageRoutes()
    bb = mm.fetch_balance_route("0xBEfBf15cac02B1cB30dADb1AA4CfA181E26DBfA1")
    print(bb)