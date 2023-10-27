// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// describe("fiboSeq", () => {
//   it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
//     const fibonacciLength1 = 6
//     // Expected output: [1, 1, 2, 3, 5, 8]
//     const fibonacciLength2 = 10
//     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(fiboSeq(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
//     expect(fiboSeq(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//   })
// })

// b) Create the function that makes the test pass.
// Pseudo code: 
// Declare a function called fiboSeq
// parameter will be the fibonacciLength
// use a loop
// initialize the index with a value of 2 because our sequence already includes index 0 and 1
// the next index will be the sum of the two indexes behind it
//return the new sequence array

// const fiboSeq = (length) => {
//   let sequence = [1, 1];
//   for (let i = 2; i < length; i++){
//     sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
//   return sequence;
// }

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sorted", () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
  // Expected output: [10, 15, 20, 45, 60, 65, 100]
  expect(sorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
  expect(sorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
})
})

// b) Create the function that makes the test pass.

// Pseudo code:
//declare a function called sorted 
//parameter will be studyMinutesWeek1 and studyMinutesWeek2
//declare another const that will call on the values in the object
// use .sort to sort the values
//return the sorted array

const sorted = (studyArr) => {
  const valuesArray = Object.values(studyArr);
  valuesArray.sort((a, b) => a - b);
  return valuesArray;
}
