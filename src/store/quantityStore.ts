import { create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

type QuantityState = {
	quantity: number;
	incrementQuantity: () => void;
	decrementQuantity: () => void;
};

const useQuantityStoreBase = createSelectorHooks(create<QuantityState>((set) => ({
	quantity: 10,
	incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
	decrementQuantity: () => set((state) => ({ quantity: state.quantity - 1 })),
})));

export const { useQuantity, useIncrementQuantity, useDecrementQuantity } = useQuantityStoreBase;

export default useQuantityStoreBase;