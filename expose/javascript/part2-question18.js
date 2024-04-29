//Declare a function to be able to repeatedly call it to print the current time
function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

//Call printTime() to immediately print the time
printTime();

//Call printTime every second
setInterval(printTime, 1000)