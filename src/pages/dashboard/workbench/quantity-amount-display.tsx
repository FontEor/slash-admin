import { Card } from "antd";
import {
  useQuantity,
  useIncrementQuantity,
  useDecrementQuantity,
} from "@/store/quantityStore";

export function QuantityAmountDisplay() {
  const quantity = useQuantity();
  const increment = useIncrementQuantity();
  const decrement = useDecrementQuantity();

  return (
    <Card title="数量与总金额" className="shadow-sm">
      <div className="space-y-2">
        <div className="text-lg font-semibold">数量: {quantity}</div>
      </div>
      <div className="mt-4 space-x-2 flex">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          减少
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          增加
        </button>
      </div>
    </Card>
  );
}
