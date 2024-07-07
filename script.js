// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// 1 
for (let i =0 ; i > 3 ; i++){
    console.log(i);
}

// 2

 let multidimensional = [0,1,2,3];

for (let i = 0; i < multidimensional.length; i++) {
  console.log(multidimensional[i]);
}
for (let i = 4; i < multidimensional.length; i--) {
    console.log(multidimensional[i]);
  }


// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++){
    document.write(i+ "<br>")
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

  // Prompt the user to enter the table number
  let number = parseInt(prompt("Enter the number for the multiplication table:"));
    
  // Prompt the user to enter the length of the multiplication table
  let length = parseInt(prompt("Enter the length of the multiplication table:"));

    // Print the multiplication table
    console.log(`Multiplication table of: `+number);
    for (let i = 1; i <= length; i++) {
        console.log(number +" x "+ i + " = " + (number*i) );
    }

    // 5. Write a program to print items of the following array
    // using for loop:
    // fruits = [“apple”, “banana”, “mango”, “orange”,
    // “strawberry”]

    let fruits = ["apple", "banana", "mango", "orange","strawberry"];
    document.write(fruits[0] + "<br>")
    document.write(fruits[1] + "<br>")
    document.write(fruits[2] + "<br>")
    document.write(fruits[3] + "<br>")
    document.write(fruits[4] + "<br>")

    document.write("element at index 0 is:" + fruits[0] + "<br>")
    document.write("element at index 1 is:" + fruits[1] + "<br>")
    document.write("element at index 2 is:" + fruits[2] + "<br>")
    document.write("element at index 3 is:" + fruits[3] + "<br>")
    document.write("element at index 4 is:" + fruits[4] + "<br>")

//     6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a 

let counting = (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15) 
document.write("<h1> Counting:</h1>" + "<br>")
for (let i = 1; i <= 15; i++){
document.write(i + " ,")
}

//b 
document.write ("<br>Reverse counting:<br>")
for (let b = 15; b >= 1; b--){
document.write(b + " "+ " ,")
}

//c 
document.write ("<br>Even:<br>")
for (let i = 0; i <= 20; i=i +2){
document.write(i + " "+ " ,")
}  

// d
document.write ("<br>Odd:<br>")
for (let i = 1; i <= 19; i=i +2){
document.write(i + " "+ " ,")
}

// e
document.write ("<br>series:<br>")
for (let i = 0; i <= 20; i=i +2){
document.write(i + "k"+ " ,")
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

let found = bakeryItems.includes(userInput);

if (found) {
  document.write("<br>"+userInput +  " is available in our bakery. <br>");
} else {
  document.write("Sorry, " + userInput + " is not available in our bakery.<br>");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let A = [24.53,78,91,12];
document.write("Array items : " + A);

// Initialize the variable to store the largest number
let largest = A[0];

// Loop through the array to find the largest number
for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

console.log("The largest number in Array is : "+ largest +"<br>");

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

let b = [24,53,78,91,12];
document.write("Array items : " + b);

// Initialize the variable to store the largest number
let smallest = b[0];

// Loop through the array to find the largest number
for (let i = 1; i < b.smallest; i++) {
    if (b[i] < smallest) {
        smallest = b[i];
    }
}

console.log("The smallest number in Array is : "+ smallest +"<br>");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the current number is a multiple of 5
    if (i % 5 === 0) {
        console.log(i);
    }
}