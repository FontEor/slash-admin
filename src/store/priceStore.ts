import { create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import useQuantityStoreBase from "./quantityStore";

type PriceState = {
	price: number;
  decrementPrice: () => void;
  incrementPrice: () => void;
};

const usePriceStoreBase = createSelectorHooks(create<PriceState>((set,get) => ({
	price: 100,
	decrementPrice: () => {	set((state) => ({ price: state.price - 1 }))},
  incrementPrice: () => {  set((state) => ({ price: state.price + 1 }))},
})));

export const useTotalAmount = () => {
  console.log("useTotalAmount called");
  const price = usePriceStoreBase(state => state.price);
  const quantity = useQuantityStoreBase(state => state.quantity);
  return price * quantity;
};

export const { usePrice, useDecrementPrice, useIncrementPrice } = usePriceStoreBase;