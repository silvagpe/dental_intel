import {  TaxCalculator } from "@/types";

export class StateTaxCalculator implements TaxCalculator {

    private readonly HIGH_TAX_RATE = 0.08;
    private readonly MID_TAX_RATE = 0.05;
    private readonly NO_TAX_RATE = 0.0;

    private readonly HIGH_TAX_STATES = ['California', 'Texas', 'New York', 'Florida'];
    private readonly MID_TAX_STATES = ['Washington', 'Oregon', 'Idaho', 'Utah', 'Montana', 'New Mexico', 'Arizona', 'Wyoming', 'Kansas', 'Arkansas', 'Georgia', 'Alabama',  'Louisiana'];


    calculateTax(state:string, subTotal: number): number {
        return subTotal * this.getTaxRate(state);
    };

    getTaxRate(state: string): number {
        if (this.HIGH_TAX_STATES.includes(state)) return this.HIGH_TAX_RATE;
        if (this.MID_TAX_STATES.includes(state)) return this.MID_TAX_RATE;   
        return this.NO_TAX_RATE;
    }

}