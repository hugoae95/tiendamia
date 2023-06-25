import axios from "axios";
import { API_PROVIDER } from "../config/data";
import { OfferI } from "../types/offer";

const OfferRepository = async (sku: string): Promise<OfferI | undefined> => {
  const res = await axios.get(`${API_PROVIDER}/getAllSkuOffers/${sku}`);
  if (res.status === 200) {
    return res.data;
  }
  return undefined;
};

export default OfferRepository;
