import { Card } from "antd";
import { useState, useMemo } from "react";
import {
  usePrice,
  useDecrementPrice,
  useIncrementPrice,
  useGetTotalAmount,
} from "@/store/priceStore";
import { useQuantity } from "@/store/quantityStore";
export function PriceDisplay() {
  const price = usePrice();
  const decrement = useDecrementPrice();
  const increment = useIncrementPrice();
  const getTotalAmount = useGetTotalAmount();
  const quantity = useQuantity();
  const [num, setNum] = useState(0);
  const totalAmount = useMemo(() => {
    return getTotalAmount();
  }, [price, quantity, getTotalAmount]);
  return (
    <Card title="价格信息" className="shadow-sm">
      <div className="space-y-2">
        <div className="text-lg font-semibold text-green-600">
          总金额: ¥{totalAmount}
        </div>
        <div className="text-lg font-semibold">价格: ¥{price}</div>
        <div className="text-lg font-semibold">数量: {num}</div>
      </div>

      <button
        onClick={decrement}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        减少 ¥1
      </button>
      <button
        onClick={increment}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        增加 ¥1
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
