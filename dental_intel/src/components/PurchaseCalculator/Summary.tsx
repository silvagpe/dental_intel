import { formatCurrency, formatPercentage } from "@/util/formatters";
import { FC } from "react";

interface SummaryProps {
    subTotal: number,
    tax: number, 
    total: number,
    taxRate: number
}

export const Summary: FC<SummaryProps> = ({
    subTotal,
    tax,
    total,
    taxRate
}) => {
    return (
        <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatCurrency(subTotal)}</span>
            </div>
            <div className="flex justify-between">
                <span>Tax ({formatPercentage(taxRate)}):</span>
                <span>{formatCurrency(tax)}</span>
            </div>
            <div className="flex justify-between">
                <span>Total:</span>
                <span>{formatCurrency(total)}</span>
            </div>
        </div>
    )
}