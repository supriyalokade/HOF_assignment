const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 150, category: 'Groceries' },
    { amount: 200, category: 'Transport' },
    { amount: 250, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' },
    { amount: 400, category: 'Rent' }
];

// Function to categorize an expense based on the amount
function categorizeExpense(amount) {
    return amount > 100 ? 'High Expense' : 'Low Expense';
}

// Use map to generate a new array where each expense is categorized
const categorizedExpenses = expenses.map(expense => {
    return categorizeExpense(expense.amount);
});

console.log(categorizedExpenses);
