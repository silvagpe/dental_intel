import test, { beforeEach, describe } from "node:test";
import { StateTaxCalculator } from "../TaxService";


describe("StateTaxCalculator", () => {
    let taxCalculator: StateTaxCalculator;

    beforeEach(() => {
        taxCalculator = new StateTaxCalculator();
    })

    describe("calculateTax", () => {
        it('should calculate high tax rate (8%) for California', () => {
            const result = taxCalculator.calculateTax("California", 100);
            expect(result).toBe(8);
        })        
    });
    describe("calculateTax", () => {
        it('should calculate high tax rate (5%) for Washington', () => {
            const result = taxCalculator.calculateTax("Washington", 100);
            expect(result).toBe(5);
        })
    });

    describe("calculateTax", () => {
        it('should calculate high tax rate (0%) for Alaska', () => {
            const result = taxCalculator.calculateTax("Alaska", 100);
            expect(result).toBe(0);
        })
    });


    describe("getTaxRate", () => {
        it('should return 0.08 for high tax states', () => {            
            expect(taxCalculator.getTaxRate("California")).toBe(0.08);
            expect(taxCalculator.getTaxRate("Texas")).toBe(0.08);
        })
        it('should return 0.05 for mid tax states', () => {            
            expect(taxCalculator.getTaxRate("Washington")).toBe(0.05);
            expect(taxCalculator.getTaxRate("Oregon")).toBe(0.05);
        })
        test('should return 0.0 for mid tax states', () => {            
            expect(taxCalculator.getTaxRate("Alaska")).toBe(0.0);            
        })
    });

})