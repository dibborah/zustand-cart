import { Product } from "./products";

export type CartProduct = Product & { qty: number };
