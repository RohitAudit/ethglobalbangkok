from web3.types import Address
from typing import Union
from utils.request_items import TransferBody,SwapBody,YieldGeneration,Borrowing
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return "ok"

@app.get("/balance/{address}")
def get_balance(userAddress: Address):
    print(userAddress)

@app.post("/fetchTransferRoutes/")
def get_transfer_routes(postData: TransferBody):
    print(postData)

@app.post("/fetchSwapRoutes/")
def get_swap_routes(postData: SwapBody):
    print(postData)

@app.post("/earnYields/")
def get_yield_routes(postData: YieldGeneration):
    print(postData)

@app.post("/borrow/")
def get_borrow_routes(postData: Borrowing):
    print(postData)

