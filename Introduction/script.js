// Comments in JavaScript -----------------------
// Single line comment
/*
Multi-line
comment
*/

// Variables and Data types ---------------------
// Variable declarations
var a; // Variable 'a' declared using var
let b; // Variable 'b' declared using let
//const c;  // Variable 'c' declared using const; But it will throw an error.
//We cannot declare a variable using const without initialiazing it

// Variable initializations
var x = 10; // Variable 'x' initialized with the value 10
let y = "Coding Tuition"; // Variable 'y' initialized with the value 'Coding Tuition'
const z = true; // Variable 'z' initialized with the value true

// Let's see the data type of these variables
// To check data type in JavaScript, we have to use 'typeof' operator as follows
// The syntax to use 'typeof' operator is --> typeof variableName
console.log(typeof x); // Returns number in console
console.log(typeof y); // Returns string in console
console.log(typeof z); // Returns boolean in console

// Data types in JavaScript
// There are two major categories in data types
// 1. Primitive values
// NUll, undefined, Number, Boolean, String, BigInt, Symbol
var num = 10; // Number
var str = "Coding Tuition"; // String
var bool = true; // Boolean
var noValue = null; // Null
var notInitialized; // undefined
var notInitialized = undefined; // undefined
var largeNum = 1224141141452332437n; // BigInt
var symbolValue = Symbol("Coding Tuition"); // Symbol
var symbolValue1 = Symbol("Coding Tuition"); // Symbol
console.log(symbolValue === symbolValue1); // Returns false in console
console.log(symbolValue); // Returns Symbol(Coding Tuition) in console
console.log(symbolValue1); // Returns Symbol(Coding Tuition) in console

// 2. Reference values
// Array, Object, Map, WeakMap, Set, WeakSet
var arr1 = [
  10,
  "Coding Tuition",
  true,
  ["student1", "student2"],
  { student1: "A", student2: "A+" },
];

var obj1 = {
  courseName: "JavaScript",
  classDuration: 2,
  students: ["student1", "student2"],
  grades: { student1: "A", student2: "A+" },
};

// Array and Array methods ----------------------
// How to create an array in JavaScript?
// Arrays consist of square brackets and items separated by comma
let arr2 = [10, 20, 30]; // Array arr2 created using square bracket notation
let arr3 = new Array(1, { 1: "one", 2: "two" }, 2, 3); // Array arr3 created using Array() constructor
console.log(arr3);

// -------------

let str1 = 40;
console.log(str1.length);

let passage = "I've a car";
let passage1 = "I've a       car";
let paragraph = "My name is " + str1 + " forty";
let paragraph2 = "one shou     ld";
let paragraph1 = `My name is ${str1}      venkumahanti`;
// console.log(paragraph);
console.log(paragraph);

// 1. Introduction
// 2. Variables
// 3. Datatypes-- progress (Number, null, undefined, String, Boolean)
// 4. Operators -- Completed
// 5. Arrays
// 6. Objects
// 7. Functions
// 8. Class
// 9. DOM manipulations

// Numbers - JavaScript
// Integer, float, double

let number1 = 12.0;
let number2 = 13.0;
let number3 = number1 + number2;
console.log(number1 + number2);

console.log(typeof number1);

console.log(null == undefined); // true
// The value for null is 'no value'; The data type of null is 'object'
// The value for undefined is 'no value'; The data type of undefined is 'undefined'
console.log(null === undefined); // false

let noVal = undefined; // !!!Not recommended
let noValue1 = null;
console.log(typeof noValue1); // object
console.log(typeof noVal); // undefined

// String and String methods
let courseName = "Coding Tuition";
console.log(typeof courseName); // string
let length = courseName.length;
console.log(courseName.length); // 14
console.log(courseName[5]); // g
console.log(courseName[length - 1]); // n
console.log(courseName.includes("a")); // false
console.log(courseName.includes("on")); // true
console.log(courseName.charAt(5)); // g
console.log(courseName.indexOf("i")); // 3

// Arithmetic operators
let num1 = 10;
let string1 = "string";
let newVariable = num1 + string1;
console.log(newVariable);
console.log(9 + "7"); // 9 converted to string then concatenate with "7"
console.log(9 - "7"); // "7" converted to number then subtracted from 9
console.log(9 * "7"); // "7" converted to number then multiplied by 9
console.log(9 * "seven"); // "seven" cannot be converted to number, so it will return NaN.

// Increment and Decrement operators
// console.log(10++);    // 10 = 10 + 1

let q = 10;
q = 12;
console.log(++q); //

let r = 2;
s = (r, ++r); // 98
console.log(s);

// Assignment operators
let numm = 10;
numm += 20; // numm = numm + 20  // 30
numm -= 20; // numm = numm - 20  // -10

// Arrays
// It is list-like object contains multiple values in it.
// How to create an array
let myArray = [10, 12, 9, 23, 20];

myArray.length; // 3
console.log(myArray.indexOf(12)); // 1

function square(x) {
  // x: parameter which contains the arguement 10
  return x * x;
}

const squareArrow = (x) => {
  return x * x;
};

console.log(squareArrow(9)); //81

console.log(square(10)); // 100

let squareArray1 = myArray.map(square); // calling square function from map method; and execution happens at square function

let squareArray2 = myArray.map(function square(x) {
  // Executing function square inside map method
  return x * x;
});

// Array methods
// map, filter, reduce, find

// map ----------
// map method iterates through an array and returns an array

// Filter

function filterOdd(x) {
  if (x % 2 != 0) return true;
  return false;
}

function filterEven(x) {
  if (x % 2 == 0) return true;
  return false;
}

let oddArray = myArray.filter(filterOdd);
let evenArray = myArray.filter(filterEven);
console.log(oddArray);
console.log(evenArray);

// Reduce
// Return value - Single item
// Parameter - Callback function
// Definition: reduce method iterates through an array and returns single value from it.
// Get largest number from an array
let largestNum = myArray.reduce(function getLargest(acc, currentValue) {
  if (acc > currentValue) return acc;
  acc = currentValue;
  return acc;
}, 0);

console.log(largestNum);

// Sum of all the items in an array
// [22,12,10,7,45,6]
let SumNum = myArray.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(SumNum);

let NumSum = myArray.reduce(function getSum(acc, currentValue) {
  const x = acc + currentValue;
  return x;
}, 0);
console.log(NumSum);

// find
// let myArray = [10, 12, 9, 23, 20];
let findOdd = myArray.find((x) => x % 2 != 0);
console.log(findOdd);
