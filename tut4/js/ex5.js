console.log("Example 2");

var num1 = 0
while (num1 < 3){
    const psw = prompt("Please enter a password:");
    num1++;
    if(psw == "secret"){
        alert(`You entered the correct password after ${num1} attempts.`);
        break;
    }
    else{
        alert('You entrered the password incorrect.');
        if (num1 === 3)[
            alert(`Your account is locked! You failed to enter the correct password ${num1} times`)
        ]
    }

}