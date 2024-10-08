function printRandomNumber() {
    // Generate a random number between 0 and 100
    const randomNumber = Math.floor(Math.random() * 101);
    
    // Print the random number to the console
    console.log(randomNumber);
}

// Set an interval to run the printRandomNumber function every 2 seconds (2000 milliseconds)
setInterval(printRandomNumber, 2000);
