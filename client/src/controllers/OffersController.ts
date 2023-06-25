import Offer from "../models/Offer";
import { OfferI } from "../types/offer";

const OffersController = {
  getBySku: async (req: any, res: any): Promise<OfferI | any> => {
    const sku = req.params.sku;
    const offers = await Offer.getBySku(sku);
    return res.json(offers);
  },
  getBySkuBestOffer: async (req: any, res: any): Promise<OfferI | any> => {
    const sku = req.params.sku;
    const offers = await Offer.getBySkuBestOffer(sku);
    return res.json(offers);
  },
};

export default OffersController;
