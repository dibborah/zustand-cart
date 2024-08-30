import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { Store } from "@/types/store";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
    devtools(
      subscribeWithSelector(
        immer((...a) => ({ // a is the setter and getter utities that the store and create method provides us
          ...createUserSlice(...a),
          ...createCartSlice(...a),
})))));
 