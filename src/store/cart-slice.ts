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
    getProductById: (productId: string) => (Product & { qty: number }) | undefined;
}

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (
    set
) => ({
    address: '',
    age: 0,
    fullName: '',
    userName: '',
    setAddress: (address) => 
        set((state) => { // This is not a object which is returned it is an object which is returned
        state.address = address
     }),
});

