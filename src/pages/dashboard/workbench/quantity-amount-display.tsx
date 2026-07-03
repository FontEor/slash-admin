import { Card } from "antd";
import {
  useQuantity,
  useIncrementQuantity,
  useDecrementQuantity,
} from "@/store/quantityStore";

export function QuantityAmountDisplay() {
  // 1. 正确调用 Hooks 来获取状态和操作方法
  const quantity = useQuantity();

  // 获取增减数量的函数（这些是普通函数，可以在事件中使用）
  const increment = useIncrementQuantity();
  const decrement = useDecrementQuantity();

  return (
    <Card title="数量与总金额" className="shadow-sm">
      <div className="space-y-2">
        <div className="text-lg font-semibold">数量: {quantity}</div>
      </div>
      <div className="mt-4 space-x-2 flex">
        <button
          // 2. 在事件回调中直接调用获取到的普通函数
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          减少
        </button>
        <button
          // 2. 在事件回调中直接调用获取到的普通函数
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          增加
        </button>
      </div>
    </Card>
  );
}
