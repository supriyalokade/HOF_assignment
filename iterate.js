const originalNumbers = [2, 5, 8, 10, 3];

// Use forEach to double each number in the array
originalNumbers.forEach((number, index) => {
    originalNumbers[index] = number * 2; // Double the value of each element
});

console.log(originalNumbers);
