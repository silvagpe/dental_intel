import { FC } from "react";
import { ItemForm } from "./ItemForm";
import { usePurchaseCalculator } from "../hooks/usePurchaseCalculator";
import { US_STATES } from "@/constants";
import { ItemList } from "./ItemList";
import { Summary } from "./Summary";


export const PurchaseCalculator: FC = () => {

    const {
        newItem,
        setNewItem,
        items,
        addItem,
        selectedState, 
        setSelectedState,
        subtotal,
        tax,
        total,
        getTaxRate
    } = usePurchaseCalculator();

    const handdleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addItem(newItem);
    }

    return (
        <div className="min-h-screen p-8  max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Purchase Calculator</h1>

            <ItemForm
                newItem={newItem}
                onItemChange={setNewItem}
                onSubmit={handdleSubmit}
            ></ItemForm>

            <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2 border rounded mb-6">
                <option value="">Select State</option>
                {
                    US_STATES.map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))
                }
            </select>

            <ItemList items={items}>

            </ItemList>

            <Summary
                subTotal={subtotal}
                tax={tax}
                total={total}
                taxRate={getTaxRate(selectedState)}
            />
        </div>
    );
}