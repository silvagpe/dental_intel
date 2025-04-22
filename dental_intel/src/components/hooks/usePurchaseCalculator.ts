import { StateTaxCalculator } from "@/services/TaxService";
import { PurchaseItem, TaxCalculator } from "@/types";
import { useMemo, useState } from "react";

export const usePurchaseCalculator = () => {
    const [selectedState, setSelectedState] = useState<string>('');
    const [items, setItems] = useState<PurchaseItem[]>([]);
    const [newItem, setNewItem] = useState<PurchaseItem>({ name: '', cost: 0 });
    const [error, setError] = useState<string | null>(null);

    const taxCalculator:TaxCalculator = useMemo(() => new StateTaxCalculator(), []);    

    const subtotal = useMemo(() => {
        return items.reduce((sum, item) => sum + item.cost, 0);
    }, [items]);

    const tax = useMemo(() => {        
        return taxCalculator.calculateTax(selectedState, subtotal);
    }, [subtotal, selectedState, taxCalculator]);

    const total = useMemo(() => { return subtotal + tax; }, [subtotal, tax]);

    const addItem = (item: PurchaseItem) => {
        try {
            if (!item.name.trim()) {
                throw new Error("Item name is required");
            }
            if (item.cost <= 0) {
                throw new Error("Cost must be greater than zero");
            }
            
            setItems(prev => [...prev, item]);
            setNewItem({ name: '', cost: 0 });
            setError(null);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unknown error occurred");
        }
    }

    return {
        newItem,
        setNewItem,
        items,
        addItem,
        selectedState, 
        setSelectedState,
        subtotal,
        tax,
        total,
        getTaxRate: (state: string) => taxCalculator.getTaxRate(state)
    }
}