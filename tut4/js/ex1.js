
console.log("Example 1");

const num1 = prompt("Enter a number from 1 - 100:")
if (isNaN(num1) ) {
    alert(`Sorry, ${num1} is not a valid entry`);
}
else {
    alert(`Thank you! You entered ${num1}, a valid number`);
}