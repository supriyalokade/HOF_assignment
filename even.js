const originalNumbers = [2, 5, 8, 10, 3];
const evenNumbers = [];

// Use forEach to collect only the even numbers
originalNumbers.forEach(number => {
    if (number % 2 === 0) {  // Check if the number is even
        evenNumbers.push(number);  // Add the even number to the new array
    }
});

console.log(evenNumbers);
