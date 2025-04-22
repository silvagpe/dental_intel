export interface PurchaseItem {
    name: string;
    cost: number;
}

export interface TaxCalculator{
    calculateTax: (state: string, subTotal: number) => number;
    getTaxRate: (state:string) => number;
}