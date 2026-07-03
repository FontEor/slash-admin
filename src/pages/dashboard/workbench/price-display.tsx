import { Card } from "antd";
import { useState } from "react";
import {
  usePrice,
  useDecrementPrice,
  useIncrementPrice,
} from "@/store/priceStore";
export function PriceDisplay() {
  const price = usePrice();
  const decrement = useDecrementPrice();
  const increment = useIncrementPrice();
  const [num, setNum] = useState(0);
  return (
    <Card title="价格信息" className="shadow-sm">
      <div className="space-y-2">
        <div className="text-lg font-semibold">价格: ¥{price}</div>
        <div className="text-lg font-semibold">数量: {num}</div>
      </div>

      <button
        onClick={decrement}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        减少价格
      </button>
      <button
        onClick={increment}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        增加价格
      </button>
      <button
        onClick={() => setNum((prev) => prev + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        num
      </button>
    </Card>
  );
}
