console.log("Example 4");

const num1 = Number(prompt("Enter a number  #1:"));
const num2 = Number(prompt("Enter a number  #2:"));
if (number1 > number2) {
  alert(`${number1} is bigger than ${number2}`);
} else if (number1 < number2) {
  alert(`${number1} is smaller than ${number2}`);
} else {
  alert(`The numbers are equal`);
}

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;

if ((isNaN(num1)) && (isNaN(num2))) {
    alert(`${num1}, ${num2} are not numbers.`);
} 
else if ((isNaN(num1)) || (isNaN(num2))) {
    alert(`${num1}, ${num2}: One of these is not a number.`);
}

else {
    alert(`You entered the numbers: ${num1} and ${num2}. \n ${num1} + ${num2} = ${addition}`);
    alert(`You entered the numbers: ${num1} and ${num2}. \n ${num1} - ${num2} = ${subtraction}`);
    alert(`You entered the numbers: ${num1} and ${num2}. \n ${num1} *
     ${num2} = ${multiplication}`);
    alert(`You entered the numbers: ${num1} and ${num2}. \n ${num1} / ${num2} = ${division}`);
    alert(`You entered the numbers: ${num1} and ${num2}. \n ${num1} % ${num2} = ${modulo}`);

}
