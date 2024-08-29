import { CartProduct } from "@/types/cartProduct";
import { Product } from "@/types/products";
import { StateCreator } from "zustand";

type CartState = {
    products: (Product & { qty: number })[];
    total: number;
};

type CartActions = {
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    incQty: (productId: string) => void;
    decQty: (productId: string) => void;
    getProductById: (productId: string) => CartProduct | undefined;
    setTotal: (total: number) => void, 
    reset: () => void;
}

export type CartSlice = CartState & CartActions;

const inititalState: CartState = {
    products: [],
    total: 0,
}

export const createCartSlice: StateCreator<
  CartSlice,
  [['zustand/immer', never]],
  [],
  CartSlice
> = ( set ) => ({
    ...inititalState,
    incQty: (productId) => set((state) => {
        const foundProduct = state.products.find((product) => product.id === productId);
        if(foundProduct) {
            foundProduct.qty += 1;
        }
    })
});

