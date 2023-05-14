// write a funtction that takes a number and returns the number of digits in the number

function numDigits(num) {
    return num.toString().length;
}
//write a function that takes an 3 arrays of numbers and returns the sum of the numbers of all arrays
function sumOfArrays(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3).reduce((a, b) => a + b);
}

//write a function that takes a string and returns a string with all the vowels removed
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}
//write a function that evalidates two inputs with possible value of Rock, Paper , Scisscors and returns the winner of the game
function rockPaperScissors(input1, input2) {
    if (input1 === input2) {
        return "It's a tie";
    }
    if (input1 === "rock") {
        if (input2 === "scissors") {
            return "Player 1 wins";
        } else {
            return "Player 2 wins";
        }
    }
    if (input1 === "paper") {
        if (input2 === "rock") {
            return "Player 1 wins";
        } else {
            return "Player 2 wins";
        }
    
}

//Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.
function timeConversion(time) {
    let ampm = time.slice(-2);
    let hour = time.slice(0, 2);
    if (ampm === "PM") {
        if (hour === "12") {
            return time.slice(0, -2);
        }
        return (parseInt(hour) + 12).toString() + time.slice(2, -2);
    }
    if (hour === "12") {
        return "00" + time.slice(2, -2);
    }
    return time.slice(0, -2);
}

// write a test console.log for each function
console.log(numDigits(1234));
console.log(sumOfArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(removeVowels("This is a test string"));
console.log(rockPaperScissors("paper", "scissors"));
console.log(timeConversion("12:45:54PM"));