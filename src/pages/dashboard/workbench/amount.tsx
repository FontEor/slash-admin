import { Card } from "antd";
import { useMemo } from "react";
import { usePrice, useGetTotalAmount } from "@/store/priceStore";
import { useQuantity } from "@/store/quantityStore";
export function Amount() {
  const price = usePrice();
  const getTotalAmount = useGetTotalAmount();
  const quantity = useQuantity();
  const totalAmount = useMemo(() => {
    return getTotalAmount();
  }, [price, quantity]);
  return (
    <Card title="总金额信息" className="shadow-sm">
      <div className="space-y-2">
        <div className="text-lg font-semibold text-green-600">
          总金额: ¥{totalAmount}
        </div>
      </div>
    </Card>
  );
}
