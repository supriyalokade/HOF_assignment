const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 200, category: 'Transport' },
    { amount: 300, category: 'Entertainment' },
    { amount: 400, category: 'Rent' }
];

const taxRate = 0.10; // 10% tax rate

const expensesWithTax = expenses.map(expense => {
    // Calculate tax for the current expense
    const tax = expense.amount * taxRate;

    // Return a new object with the tax included
    return {
        ...expense,  // Copy all properties of the original object
        tax: tax     // Add the calculated tax
    };
});

console.log(expensesWithTax);
