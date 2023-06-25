import { ProductI } from "./product";

export interface OfferI {
  sku: string;
  offers: ProductI[];
}
