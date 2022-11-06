// function xyz() {
//   {
//     let w = "name";
//     console.log(w);
//   }
//   console.log(w);

//   function abc() {
//     console.log(w);
//   }
//   abc();
// }

// xyz();

// console.log(q);

// var c; // Variable declaration

// x = 100;
// // console.log(x);

// console.log(window.x);
// console.log(window.a);

// alert("Hi this is an alert");

// let num1 = 100;
// let num2 = 20.2;
// let num3 = num1 + num2;
// console.log(num3);
// num1 = 50; //updating num1 with new value

// let str1 = "string1";
// let str2 = "string2";
// console.log(str1, str2); //concatenating two strings
// console.log(str1 + " " + str2);

// console.log(str1.substring(0, 3)); //str
// console.log(str1); //string1 or ing1

// let isLoggedIn = true;
// console.log(typeof num3); // to get the data type of a variable

// let numm = "2" + (21 + 1);
// console.log(numm);

let var1 = null;
let var2;
// console.log(var1);
// console.log(var2);

let sub1 = 80;
let sub2 = 78;
let sub3 = 100;

let marks = [80, 78, 100];
// console.log(marks[1]);

// let student1 = [80, 78, 100]
// let student2 = [59, 89, 68]

let studentMarks = { student1: [80, 78, 100], student2: [59, 89, 68] }; //Object
// console.log(studentMarks.student1);

let studentMarks1 = [
  { name: "stundent1", sub1: 80, sub2: 78, sub3: 100 },
  { name: "stundent2", sub1: 59, sub2: 89, sub3: 68 },
];

// Conditional statements
// if...else
let isLoggedIn = false;
if (isLoggedIn) {
  console.log("User logged in");
} else {
  console.log("User not logged in");
}

// if...elseif...else
let mark = 50;
if (mark > 80) {
  console.log("First class");
} else if (mark > 60) {
  console.log("Second class");
} else {
  console.log("Fail");
}

// Looping statements
// for loop
for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// while loop
let a = 0;
while (a < 5) {
  //   console.log(a);
  a++;
}

// do...while loop
let i = 0;
do {
  i++;
  if (i == 3) {
    continue;
  }
  console.log(i);
} while (i < 5);

// Array Methods
let array1 = [10, 20, 31, 40];
console.log(array1);

// array.at()
console.log(array1.at(1)); // "at" method takes index as a parameter and returns that index value

// array.concat()
let array2 = [1, 2, 10];
console.log(array1.concat(array2));

// array.every()
console.log(array1.every((value) => value % 3 == 0));

// array.filter()
console.log(array1.filter((value) => value % 2 == 0));
console.log(array1);

// array.map()
console.log(array1.map((item) => item * 2));

// push ----
let sampleArray = ["a", "b", "c"];
console.log("Initial value --> ", sampleArray);
sampleArray.push(23);
sampleArray.push("new");
console.log("After push() --> ", sampleArray);
// pop ----
sampleArray.pop();
console.log("After pop() -->", sampleArray);
// shift ----
sampleArray.shift();
console.log("After shift() --> ", sampleArray);
// unshift ----
sampleArray.unshift(1000);
console.log("After unshift() --> ", sampleArray);

// for...of --- Used in array
let results = [];
for (let i of array1) {
  results.push(i * 5);
}
// console.log(results);

console.log(array1);
// array.reduce()
console.log(
  array1.reduce((total, currentValue) => (total += currentValue), 1000)
);

// first --> total

// for...in --- Used in Object

// Assignment - JavaScript
let studentsInfo = [
  {
    studentName: "a",
    age: 20,
    marks: { sub1: 90, sub2: 89, sub3: 75 },
  },
  {
    studentName: "b",
    age: 23,
    marks: { sub1: 100, sub2: 58, sub3: 66 },
  },
  {
    studentName: "c",
    age: 29,
    marks: { sub1: 89, sub2: 70, sub3: 95 },
  },
];

// Question 1 ----
// Find the total marks for each student
// Output as follows:
// {a: 254, b: 224, c: 254}

// Question 2 ----
// Filter the students who are all having the total mark is above 250
// Output as follows:
// {a: 254, c: 254}
