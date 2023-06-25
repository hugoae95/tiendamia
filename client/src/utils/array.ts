import { ProductI } from "../types/product";

export function compareOffers(a: ProductI, b: ProductI) {
  return total(a) - total(b);
}

function total(a: ProductI) {
  return a.price + a.shipping_price;
}
