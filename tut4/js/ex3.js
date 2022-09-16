console.log("Example 3");

const input1 = String(prompt("Hello, what day is it of the week? \n please enter your answer in a 3 letters form and lower case:"));

switch (true) {
    case input1 === "sun":
        alert("You entered: ${input1} \n The folloeing day is: Monday.");
        break;
    case input1 === "mon":
        alert("You entered: ${input1} \n The folloeing day is: Tuesday.");
        break;
    case input1 === "tue":
        alert("You entered: ${input1} \n The folloeing day is: Wednesday.");
        break;
    case input1 === "wed":
        alert("You entered: ${input1} \n The folloeing day is: Thursday.");
        break;
    case input1 === "thu":
        alert("You entered: ${input1} \n The folloeing day is: Friday.");
        break;
    case input1 === "fri":
        alert("You entered: ${input1} \n The folloeing day is: Saturday.");
        break;
    case input1 === "sat":
        alert("You entered: ${input1} \n The folloeing day is: Sunday.");
        break;

    default:
        alert("Not a valid week day!");
}
