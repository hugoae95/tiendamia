import { SellerI } from "./seller";

export interface ProductI {
  id: number;
  price: number;
  stock: number;
  shipping_price: number;
  delivery_date: Date;
  can_be_refunded: boolean;
  status: string;
  guarantee: boolean;
  seller: SellerI;
}
