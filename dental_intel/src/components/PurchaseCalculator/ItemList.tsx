import { PurchaseItem } from "@/types"
import { formatCurrency } from "@/util/formatters"
import { FC } from "react"

interface ItemListProps {
    items: PurchaseItem[]
}

export const ItemList: FC<ItemListProps> = ({ items }) => {
    return (
        <div className="space-y-2 mb-6">
            {items?.map((item, index) => (
                <ItemRow
                    key={index}
                    item={item}
                />
            ))}
        </div>
    )
}

const ItemRow: FC<{ item: PurchaseItem }> = ({ item }) => {
    return (
        <div className="flex justify-between p-2 bg-gray-50 rounded">
            <span>{item.name}</span>
            <span>{formatCurrency(item.cost)}</span>
        </div>
    )
}