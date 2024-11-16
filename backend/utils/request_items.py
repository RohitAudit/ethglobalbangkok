from pydantic import BaseModel
from web3.types import Address


class TransferBody(BaseModel):
    fromAddress: Address
    toAddress: Address
    tokenAddress: Address
    value: int

class SwapBody(BaseModel):
    swapTokenFrom: Address
    swapTokenValue: int
    swapTokenTo: Address

class YieldGeneration(BaseModel):
    tokenAddress: Address
    tokenAmount: int
    lend: bool
    yieldVaults: bool

class Borrowing(BaseModel):
    tokenAddress: Address
    tokenAmount: int
