import OfferRepository from "../repository/offer";
import { ProductI } from "../types/product";
import { compareOffers } from "../utils/array";

const offers: any = [];

const Offer = {
  async getAll() {
    return offers;
  },
  async getBySku(sku: string) {
    try {
      return await OfferRepository(sku);
    } catch (error) {
      console.error(error);
    }
  },
  async getBySkuBestOffer(sku: string) {
    try {
      const skuOffers = await OfferRepository(sku);
      const offers = skuOffers?.offers.sort(compareOffers);
      if (offers && offers?.length > 0) {
        return offers[0];
      }
      return {};
    } catch (error) {
      console.error(error);
    }
  },
};
export default Offer;
