const expenses = [
    { amount: 100, category: 'Food' },
    { amount: 150, category: 'Groceries' },
    { amount: 200, category: 'Transport' },
    { amount: 250, category: 'Groceries' },
    { amount: 300, category: 'Entertainment' },
    { amount: 400, category: 'Rent' }
];

const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
}, 0);  // Initial value of accumulator is set to 0

console.log(totalAmount);
