// alert("Hello World ");

// var num;
// num = 3;
// var myName;
// myName = "Buhari"

// var firstname = "Maryam";

// var carSpec = {
//     numWheels: 4,
//     engine: "V6",
//     interior: "cloth"
// }
// // Variable Re-assignment
// var a;
// a = 25;
// a = 13;
// a = "Hello";

// // Copying Values

// var a = 23;
// var b = a; //b is now 23

// // Re-Assigning Null: to set a variable to an empty value use null.

// var a = 23;
// a = null;

// var b;
// console.log(b);

// b = 23;
// console.log(b);

// b = "Adam";
// console.log(b);

// b = null;

// var x;
// console.log(x);

// // Datatypes
// // Objects represents a group of key/value pairs
// // Array represents a collection of data

// // Operators

// var y = 2;
// var z = 6;

// console.log(y + z);
// console.log(y - z);
// console.log(y * z);
// console.log(y / z);
// console.log(y % z);
// console.log(y / 0);

var p;
p = true;
n = false;
console.log(p);

var num = 14;
var s = "Hello";
s = s + num + 23;
console.log(s);

//Boolean Logic and Algebra

//Conditional Statements

// if Statements

/* if (condition) {
    //statements
} */

var a = 5;

if (a > 4) {
    console.log("The number is greater than 3");
} else {
    console.log("The opposite case ran");
}

// LOOPS

//ForLoop
for (let i = 0; i < 5; i++) {
    console.log("executed")
}

//whileLoop

let i = 0;

while (i < 10) {
    console.log("executed " + i + " times");
    i++;

    //using break statement
    if (i = 5) {
        break;
    }
    //using continue statement
    if (i = 10) {
        continue;
    }
}