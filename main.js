// Variables

// // function scoped i.e. it is defined thourgh the enterire prgram and it's legact
// function example1() {var i = 4; }
// i = 5;


// // Block scoped i.e. the variable can only be accessed with the block it is declared
// function example() {let j = 4; }
// j = 4;


// const pi = 3.142;
// pi = 3;

// console.log(pi);


// Primitive Data Types
// Fundamental data type in JS that represents sumple atomic values. Building blocks for more complex data structures

// let name = "nish";
// let num = 42.1;
// let isTrue = true;
// let n = null;
// let undefined;


// Dynamic Typing

// let variable = 42;
// variable = 43;
// variable = "nish";

// // Type coercion
// let num = 50;
// let str= "10";
// let result = num + str;
// console.log(result);

// Arrays

// let  trainers = ["Nish", "Alex", "David"];
// let num = new Array(1,2,3,5,8);
// console.log(trainers[0]);
// console.log(trainers);
// console.log(trainers.length);

// // arrat methods
// // Ads a new element to the array
// trainers.push("Safee");
// console.log(trainers);

// // Remoevs the last alement from an array
// // They "pop off the array"
// // WHen they pop off in the code below, they are assigned the the lastTrainer vraiable
// let lastTrainer = trainers.pop();
// console.log(trainers);
// console.log(lastTrainer);

// // delete removes an element by index

// delete trainers[0];
// console.log(trainers);

// trainers[0] = lastTrainer;
// console.log(trainers);


// let myArray = ["JavaScript", "is", "fun"];

// // Add "!" to the end of the array
// myArray.push("!");
// console.log(myArray);  // ["JavaScript", "is", "fun", "!"]

// // Remove the last element from the array
// myArray.pop();
// console.log(myArray);  // ["JavaScript", "is", "fun"]

// // Change the second element of the array to "really"
// myArray[1] = "really";
// console.log(myArray);  // ["JavaScript", "really", "fun"]

// // Remove the first element from the array
// myArray.shift();
// console.log(myArray);  // ["really", "fun"]

// // Add "Coding" to the start of the array
// myArray.unshift("Coding");
// console.log(myArray);  // ["Coding", "really", "fun"]

// // Replace the third element of the array with "is"
// myArray.splice(2, 1, "is");
// console.log(myArray);  // ["Coding", "really", "is"]

// // Add "awesome" to the end of the array
// myArray.push("awesome");
// console.log(myArray);  // ["Coding", "really", "is", "awesome"]


// Strings

var char = 'c';
let firstName = "Nish";
let lastName = 'Mandal';

// let book = "Catch-22";
// console.log(book.length);
// console.log(book[0]);
// var num = book.length - 1;
// console.log("last char " + num);
// console.log(book[book.length]);

// // Concatenation

// console.log(firstName + " " + lastName);
// let fullname = firstName.concat(" ", lastName, " is the best" );

// console.log(fullname);


// // Template Literals
// let country = "UK";
// let city = "Birmingham";
// console.log(`Hello, I am from ${city} in the ${country}.`);


// let s1 = "Sparta ";
// let s2 = "Global";

// let s3 =s1.concat(s2);
// console.log(s3);

// // extract a portation of a string
// let s4 = s3.slice(0, 6);
// console.log(s4);

// // Extract a portation of a string starting from index 8 until the end
// let s5 = s3.substring(7);
// console.log(s5);

// let s6 = s3.replace("Sparta", "Athena");
// console.log(s6);



// let myString = "  JavaScript Fundamentals ";
// myString = myString.trim();  // "JavaScript Fundamentals"
// myString = myString.toUpperCase();  // "JAVASCRIPT FUNDAMENTALS"
// myString = myString.replace("FUNDAMENTALS", "BASICS");  // "JAVASCRIPT BASICS"
// let position = myString.indexOf("JAVASCRIPT");  // 0
// console.log(position);  // 0

// Opeartors

// Decrement and increment operators

// let a = 5;
// let b = 5;

// let prefixResult = ++a;
// let postfixResult = b++;

// console.log(a); // 6
// console.log(b); // 6
// console.log(prefixResult);
// console.log(postfixResult);

// for(let i = 1; i <=5; ++i){
//     console.log(i);
// }


// let j = 5, k = 3, m = 4;
// m += +j++ + ++k;

// console.log(m); // 4
// console.log(j); //
// console.log(k);

// let m = 3;
// m *= 3;
// m = m * 3;
// console.log(m);

// Modulus %

// let totalSweets = 100;
// const numberOfChildren = 15;
// let leftOfSweets = totalSweets % numberOfChildren;
// let message = "After distributing " + totalSweets + " sweets among " + numberOfChildren + " children, there will be " +leftOfSweets;
// console.log(message);


// let arr = [1,5,2,6,3,7,4,8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }console.log(sum); // Output: 20

// == and ===

// var i = 1;
// var j = "1";

// console.log(i === j); 


// More operators - Logical Operators

// let x = 5;
// let y = 10;

// if(x > 0  && y > 0){
//     console.log("Both x and y are greater than 0");
// } else {
//     console.log("At least one of x and y is not greater than 0");
// }


// if(x > 0  || y > 0){
//     console.log("Either x and y are greater than 0");
// } else {
//     console.log("Neither of x and y is not greater than 0");
// }


// Functions

// define it as a function
// provide a name
// optional: we can give it paramters
// function add(num1,num2){
//     return num1 + num2;
// }

// var result = add("fdjskl", 10);
// console.log(result);


// Create a funtion that returns true if a number is divisible by 3 OR 4, otherwise return false
// function isDivisibleByThreeOrFive(input){
//     return input % 3 === 0 || input % 5 === 0;
//   }
// console.log(isDivisibleByThreeOrFive(15));


// // Other functions

// let number = 3.7;
// let roundedNumber = Math.floor(number);

// console.log("Original number: " + number);
// console.log("Rounded number: " + roundedNumber);


// Control flows

// function grade(mark){
//     if(mark < 0 || mark > 100){
//         return "Invalid argument";
//     } else if(mark >= 70){
//         return "pass with distinction";
//     } else if(mark >= 40){
//         return "pass";
//     } else {
//         return "Fail";
//     }
// }

// console.log(grade(0)); // Fail
// console.log(grade(39)); // Fail
// console.log(grade(40)); // Pass
// console.log(grade(69)); // Pass
// console.log(grade(70)); // Pass with distinctions
// console.log(grade(100)); // Pass with distinctions
// console.log(grade(101)); // Invalid argument
// console.log(grade(-1)); // Invalid argument

// function grade(mark) {
//     let result = mark >= 40 ? (mark > 40 ? "Pass": "Pass with Distinctions") 
//     : (mark < 0 || mark > 100) ? "Invalid argument" :"Fail";
//     return result;
//   }

//   console.log(grade(0)); // Fail
//   console.log(grade(40)); // Pass
//   console.log(grade(70)); // Pass with distinctions
//   console.log(grade(101)); // Invalid argument

// Update the grade function so that it returns "Invalid argument if mark is less than 0 or more than 100. DO NOT USE IF ELSE, JUST USE ? and :

//// Switch statements

// function priority(level){
//     let result = "Code ";

//     switch(level){
//         case 3:
//             result += "Red";
//             break;
//         case 2:
//         case 1:
//             result += "Amber";
//             break;
//         case 0: 
//             result += "Green";
//             break;
//         default:    
//             result += "Error";
//     }

//     return result;
// }

// console.log(priority(0));


// Iterations


let nums = [ 10, 6, 22, -7, 3];

function highestForOfLoop(nums) {
    // We are choosing the first element of the array as the initial highest number.
    // This approach accounts for arrays with all negative numbers.
    let highest = nums[0];

    // Iterate over each number in the array.
    for (let num of nums) {
        // If the current number is greater than the highest, update the highest.
        if (num > highest) {
            highest = num;
        }
    }

    return highest;
}

function highestForLoop(nums){
    let highest = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > highest){
            highest = nums[i];
        }
    }
    return highest;
}


function highestWhileLoop(nums){
    let highest = nums[0];
    let i = 0;
    while(i < nums.length){
        if(nums[i] > highest){
            highest = nums[i];
        }
        i++;
    }
    return highest;
}

function highestDoWhileLoop(nums){
    let highest = nums[0];
    let i = 0;
    do{
        if(nums[i] > highest){
            highest = nums[i];
        }
        i++;  
    }while(i < nums.length);
    return highest;
}

console.log("Highest for loop: " + highestForOfLoop(nums));
console.log("Highest for-of loop: " + highestForLoop(nums));
console.log("Highest while loop: " + highestWhileLoop(nums));
console.log("Highest do-while loop: " + highestDoWhileLoop(nums));