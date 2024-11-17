import { MultiChainBalanceFetcher } from "@/utils/ethereumConnector"
import { PythPriceService } from "@/utils/priceFeed"

export type AppContextType = {
    BalanceFetcher: MultiChainBalanceFetcher
    PriceFetcher: PythPriceService
}