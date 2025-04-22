# Sales Tax Calculator

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Application Requirements

The application calculates sales tax based on user purchases and their US state. Key features include:

### Purchase Input
- Users can input purchases with:
  - Item name
  - Item cost
- Running total of all items is displayed

### State Selection
- Dropdown menu with all US states
- Tax rates applied based on state selection:
  - **8% Sales Tax States:**
    - California
    - Texas
    - New York
    - Florida
  - **5% Sales Tax States:**
    - Washington
    - Oregon
    - Idaho
    - Utah
    - Montana
    - New Mexico
    - Arizona
    - Wyoming
    - Kansas
    - Arkansas
    - Georgia
    - Alabama
    - Louisiana
  - All other states: No sales tax

### Real-time Updates
- Total updates automatically when:
  - New items are added
  - State selection changes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Testing Setup
Install testing dependencies:
```bash
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  ts-node \
  typescript \
  @types/node \
  ts-jest \
  jest \
  jest-environment-jsdom \
  @types/jest
```


// ...existing code...

## SOLID Principles Implementation

### Single Responsibility Principle (SRP)
- `TaxService.ts` handles tax calculations exclusively
- `usePurchaseCalculator.ts` manages purchase state logic
- UI components (`ItemForm.tsx`, `ItemList.tsx`, `Summary.tsx`) each handle specific view responsibilities

### Open/Closed Principle (OCP)
- `TaxCalculator` interface allows extending tax calculation behavior
- Component interfaces are designed for extension without modification
- State tax rules can be modified without changing core calculation logic

### Liskov Substitution Principle (LSP)
- `StateTaxCalculator` implements `TaxCalculator` interface completely
- All derived components can be substituted for their base types
- Tax calculation implementations are interchangeable

### Interface Segregation Principle (ISP)
- Small, focused interfaces (`PurchaseItem`, `TaxCalculator`)
- Component props are specific to their needs
- No component is forced to implement unnecessary methods

### Dependency Inversion Principle (DIP)
- High-level components depend on abstractions
- Tax calculation logic depends on interfaces rather than concrete implementations
- Dependency injection used for tax calculation services
