console.log("Example 6");

const hours = Number(prompt("Please pick the time, \n  enter the hours:"));
const minutes = Number(prompt("Enter the minutes:"));
const seconds  = Number(prompt("Enter the seconds :"));

//hours
switch (true){
    case (hours >= 0 || hours <= 23):
        if (minutes == 59 || seconds == 59) {
            var newHour = hours + 1;
    }    
        else { (newHour === 24) 
            newHour = 0
        }
    //minutes
    case (minutes >= 0 || minutes <= 59):
        if (seconds = 59){  
            var newMin = minutes + 1;
        }
        else { (newMin === 60) 
            newMin = 0
        }
    
    //seconds
    case (seconds >= 0 || seconds <= 59):
        var newSec = seconds + 1;
        if (newSec === 60) {
            newSec = 0
        }
        
    default:
    console.log("One the entries is not a vaild input")
    
console.log(`Time input: ${hours}h${minutes}m${seconds}s \n One second later: ${newHour}h${newMin}m${newSec}s`)
}


