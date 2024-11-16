import { PriceServiceConnection } from "@pythnetwork/price-service-client";

export class PythPriceService {
  connection;
  priceId;

  constructor() {
    this.connection = new PriceServiceConnection("https://hermes.pyth.network");
    this.priceId = "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace";
  }

  async getEmaPrice() {
    try {
      // Fetch the latest price feed
      const priceFeed = await this.connection.getLatestPriceFeeds([this.priceId]);

      // Ensure price feed exists
      if (!priceFeed || priceFeed.length === 0) {
        throw new Error(`No price feed found for priceId: ${this.priceId}`);
      }

      // Extract and return only the emaPrice
      const emaPrice = priceFeed[0].getEmaPriceUnchecked().price || "N/A";
      const result = Number(emaPrice)/100000000
      return result;
    } catch (error) {
      console.error("Error fetching EMA price:", error);
      throw error;
    }
  }
}
