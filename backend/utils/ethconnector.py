from web3 import Web3
from collections import Counter

class EthereumConnector:
    TOKEN_ABI = [{
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },{
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }]

    web3Node = None
    native_token = None

    def __init__(self, rpc_url,native=None):
        self.web3Node = Web3(Web3.HTTPProvider(rpc_url))
        self.native_token = "ETH" if native is None else native

    def fetch_erc20_balances(self, token_addresses, user_address):
        balances_token = {}
        for address in token_addresses:
            token_contract = self.web3Node.eth.contract(Web3.to_checksum_address(address), abi=self.TOKEN_ABI)
            name = token_contract.functions.symbol().call()
            balance = token_contract.functions.balanceOf(Web3.to_checksum_address(user_address)).call()
            balances_token[name] = balance
        balances_token[self.native_token] = self.fetch_eth_balance(user_address)
        return balances_token

    def fetch_eth_balance(self,user_address):
        return self.web3Node.eth.get_balance(user_address)

