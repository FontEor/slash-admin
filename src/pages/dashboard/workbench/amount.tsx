import { Card } from "antd";
import { useTotalAmount } from "@/store/priceStore";
export function Amount() {
  const totalAmount = useTotalAmount();
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
