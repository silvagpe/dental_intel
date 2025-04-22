import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { PurchaseCalculator } from "..";
describe("PurchaseCalculator Component", () => {
    const setup = () => {
        render(<PurchaseCalculator />);
        return {
            nameInput: screen.getByPlaceholderText('Item Name'),
            costInput: screen.getByPlaceholderText('Cost'),
            addButton: screen.getByText('Add Item'),
            stateSelect: screen.getByRole('combobox'),
        }
    };

    it('should add item and calculate tax correctly', async () =>{
        const { nameInput, costInput, addButton, stateSelect } = setup();

        // Add item
        await userEvent.type(nameInput, 'Test Item');;
        await userEvent.type(costInput, '100');
        await userEvent.click(addButton);

        //verify item is added
        expect(screen.getByText('Test Item')).toBeInTheDocument();
        const itemPrice = screen.getByText('Test Item').parentElement;
        expect(itemPrice).toHaveTextContent('$100.00');
        
        //Set California (8% tax)
        await userEvent.selectOptions(stateSelect, 'California');

        //Verify tax calculations
        const subTotalDiv = screen.getByText('Subtotal:').parentElement;
        expect(subTotalDiv).toHaveTextContent('$100.00');

        expect(screen.getByText('Tax (8.00%):')).toBeInTheDocument();

        const totalDiv = screen.getByText('Total:').parentElement;
        expect(totalDiv).toHaveTextContent('$108.00');
    })
})