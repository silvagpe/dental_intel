import { PurchaseItem } from "@/types";
import React, { FC } from "react";

interface ItemFormProps {
    newItem: PurchaseItem;
    onItemChange: (item: PurchaseItem) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export const ItemForm: FC<ItemFormProps> = ({ newItem, onItemChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="mb-6 space-y-4">
            <div className="flex gap-4">
                <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) => onItemChange({ ...newItem, name: e.target.value })}
                    placeholder="Item Name"
                    className="border rounded p-2 flex-1"
                    required
                />
                <input
                    type="number"
                    value={newItem.cost || ''}
                    onChange={(e) => onItemChange({ ...newItem, cost: Number(e.target.value) })}
                    placeholder="Cost"
                    className="w-32 p-2 border rounded"
                    min="0"
                    step="0.01"
                    required />

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white p-2 rounded">
                    Add Item
                </button>
            </div>
        </form>

    );
}