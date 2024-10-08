const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 150, category: 'Groceries' },
    { amount: 200, category: 'Transport' },
    { amount: 250, category: 'Groceries' },
    { amount: 300, category: 'Entertainment' },
    { amount: 400, category: 'Rent' }
];

const groceriesExpenses = expenses.filter(expense => expense.category === 'Groceries');

console.log(groceriesExpenses);
