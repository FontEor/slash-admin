import { create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import useQuantityStoreBase from "./quantityStore";

type PriceState = {
	price: number;
	totalAmount: number;
  decrementPrice: () => void;
  incrementPrice: () => void;
  getTotalAmount: () => number;
};

const usePriceStoreBase = createSelectorHooks(create<PriceState>((set,get) => ({
	price: 100,
  totalAmount: 0,
  getTotalAmount: () => {
    console.log("Calculating total amount...");
    const currentPrice = get().price;;
    const currentQuantity = useQuantityStoreBase.getState().quantity;
    return currentPrice * currentQuantity;
  },
	decrementPrice: () => {	set((state) => ({ price: state.price - 1 }))},
  incrementPrice: () => {  set((state) => ({ price: state.price + 1 }))},
})));

export const { usePrice, useDecrementPrice, useIncrementPrice,useGetTotalAmount } = usePriceStoreBase;