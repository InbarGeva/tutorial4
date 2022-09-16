
console.log("Example 2");

const input1 = prompt("Hello, what is your name:");

const input2 = prompt("How many units have you completed at college:");
if ((input2 >= 0) && (input2 <= 30)) {
    let a = "Freshmen";
    alert(`Hello ${input1}, your grade standing is${a}.`);
}
 else if ((inputNumber >= 31) && (inputNumber <= 60)) {
    let b = "Sophomore";
    alert(`Hello ${input1}, your grade standing is${b}.`);
} 
else if ((inputNumber >= 61) && (inputNumber <= 90)) {
    let c = "Junior";
    alert(`Hello ${input1}, your grade standing is${c}.`);
}
else if (inputNumber > 90) {
    let d = "Senior";
    alert(`Hello ${input1}, your grade standing is${d}.`);
}


//italics()
