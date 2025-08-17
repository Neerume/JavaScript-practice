// console.log("Hello");
// window.alert("Warning");
// This is a single-line comment

/* This is a multi-line comment */

// document.getElementById("heading").textContent = "Hello";
// document.getElementById("paragraph").textContent = "I am making a calculator";

// Variable declaration
// let x; // Declaration
// x = 100; // Assignment
// console.log(x);

// let age = 18;
// let price = 10.99;
// console.log(`The price is ${price}`);
// console.log(`You are ${age} years old`);

// let name = "Nerume";
// console.log(typeof name);
// console.log(typeof age);

// let firstName = "Neera";
// let hobby = "coding";
// let email = "nee@gmail.com";
// console.log(`Your name is ${firstName}`);
// console.log(`Your hobby is ${hobby}`);
// console.log(`Your email is ${email}`);

// Boolean example
// let isGood = true;
// console.log(`Is this class good? ${isGood}`);

// let fullName = "Neera Khatri";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = isStudent;

// let students = 30;
// // students = students + 1;  // increment
// // students = students - 1;  // decrement
// // students = students * 2;  // multiply
// // students = students / 2;  // divide
// // students = students ** 2; // exponentiation (power of 2)
// // let extraStudents = students % 3; // remainder after division

// console.log(students);

// let result = 1 + 2 * 3 + 4 ** 2;
// console.log(result);
// Order: Parentheses → Exponents → Multiplication/Division/Modulo → Addition/Subtraction

// Accept user input
// let username;
// username = window.prompt("Enter your username");
// console.log(username);

// let username;
// let password;
// document.getElementById("submit").onclick = function() {
//   username = document.getElementById("username").value;
//   password = document.getElementById("password").value;
//   document.getElementById("myh1").textContent = `Hello ${username}`;
//   console.log(username);
//   console.log(password);
// }

// Type Conversion
// let age = window.prompt("Enter your age:"); // input is a string
// age = Number(age); // convert to number
// age += 1; // mathematical addition works after conversion
// console.log(age, typeof age);

// let x = "1";
// let y = "1";
// let z = "1";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// Constants (cannot be changed)
// const PI = 3.14159;
// let radius;
// let circumference;
// document.getElementById("submit").onclick = function() {
//   radius = document.getElementById("radius").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myh3").textContent = `The circumference of the circle is ${circumference} cm`;
//   console.log(`The circumference of the circle is ${circumference}`);
// }

// let fullname;
// let email;

// document.getElementById("submit").onclick = function() {
//   fullname = document.getElementById("fname").value;
//   email = document.getElementById("email").value;
//   document.getElementById("heading").textContent = `Hi, Welcome ${fullname}`;
// }

// let x = 45;
// let y = 2;
// let z = 3;
// let max = Math.max(x, y, z);
// console.log(max);

// Random number example
// let randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);

// Ternary operator
// let age = 21;
// let message = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(message);

// let isStudent = true;
// let message2 = isStudent ? "You are a student" : "You are not a student";
// console.log(message2);

// let purchaseAmt = 200;
// let discount = purchaseAmt >= 100 ? 10 : 0;
// console.log(`Your total after discount is ${purchaseAmt - purchaseAmt * (discount / 100)}`);

// Switch statement
// let day = 1;
// switch(day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//     break;
//   case 3:
//     console.log("It is Wednesday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is Friday");
//     break;
//   case 6:
//     console.log("It is Saturday");
//     break;
//   case 7:
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is not a valid day`);
// }

// String slicing
// const email = "neera@email.com";
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(extension);

// Method chaining
// let username = window.prompt("Enter your username");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// Logical operators
// const temp = 30;
// if (temp > 0 && temp <= 30) {
//   console.log("Weather is good");
// } else {
//   console.log("Weather is bad");
// }

// const isSunny = true;
// if (!isSunny) {
//   console.log("It is cloudy");
// } else {
//   console.log("It is sunny");
// }

// While loop
// let username = "";
// while (username === "" || username === null) {
//   username = window.prompt("Enter your username");
// }
// console.log(`Hi! How are you, ${username}?`);

// Login loop
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt("Enter your username");
//   password = window.prompt("Enter your password");

//   if (username === "neera" && password === "neera") {
//     loggedIn = true;
//     console.log("You are logged in.");
//   } else {
//     console.log("Wrong credentials.");
//   }
// }


//for loop

// for(let i=10; i>0; i--){
//   console.log(i);
// }

// console.log("Happy new year");

// for(let i =1; i<=20; i++){
//   if(i==8){
//     continue; // skips iteration when i == 8
//   }
//   else{
//     console.log(i);
//   }
// }


// Number guessing game 
// let min =1;
// let max =100;
// let answer = Math.floor(Math.random()*(max-min+1))+min;
// let guess;
// let isrunning =true; // loop condition

// while(isrunning){
//   let guess= window.prompt(`Enter any number between ${min} to ${max} `);
//   guess=Number(guess); // convert string input to number

//   if(isNaN(guess)){
//     window.alert("Please enter a valid number");
//   }
//   else if(guess>max || guess<min){
//     window.alert("Please enter a number in range!");
//   }
//   else{
//     if(guess>answer){
//       window.alert("The number is too big");
//     }
//     else if(guess<answer){
//       window.alert("Your guess is too low! Please try again!");
//     }
//     else{
//       window.alert("Congratulations! Your guess is correct.");
//       isrunning =false; // typo fixed from "isrunnig"
//     }
//   }
// }


// Functions in JavaScript
// function happyBirthday(username){
//   console.log("Happy birthday to you");
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday to you dear ${username}`);
// }

// happyBirthday("Neera");
// happyBirthday("Doraemon")


// function add(x,y){
//   return x+y;
// }
// console.log(add(2,3));


// function mul(x,y){
//   return x*y;
// }
// console.log(mul(2,3));

// let num= window.prompt("Enter any number");
// function iseven(num){
//     return num%2 ===0; // typo fixed: num2 → num
// }
// console.log(iseven(num));


// function isvalidemail(email){
//   return email.includes("@"); // cleaner return
// }
// console.log(isvalidemail("neera@gmail.com"));
// console.log(isvalidemail("neeragmail.com"));


// Variable scope
// function function1(){
//   let x=1; // local variable
//   console.log(x);
// }
// function function2(){
//   let x=2; // separate local variable
//   console.log(x);
// }
// function1();

// Global scope
// let x=2; // global variable
// function function1(){
//   console.log(x);
// }
// function function2(){
//   console.log(x);
// }
// function1();


// Arrays: variables that can hold more than one value
// let fruits =["mango","orange", "banana","coconut"];
// fruits.push("pineapple"); // adds to end
// fruits.pop(); // removes last element
// fruits.unshift("pineapple"); // adds to beginning
// fruits.shift(); // removes from beginning
// console.log(fruits);


// Spread operator
// let num =[1,2,3,4,5];
// console.log(num);
// let max=Math.max(...num); // ... unpacks array elements
// console.log(max);

// let min = Math.min(...num);
// console.log(min);

// let name ="Neera";
// let letters =[...name]; // splits string into array of characters
// console.log(letters);

// let fruits=["apple","orange","banana"];
// let vegetable=["potato","tomato","spinach"];
// let foods =[...fruits, ...vegetable];
// console.log(foods);


// Rest parameters = (...rest) bundle multiple arguments into an array (opposite of spread)
// function openFridge(...foods){
//   console.log(...foods);
// }
// function getFood(...foods){
//   return foods;
// }

// const food1="pizza";
// const food2="sushi";
// const food3="burger";
// const food4="hotdog";

// openFridge(food1,food2,food3,food4);
// const foods =getFood(food1, food2, food3, food4);
// console.log(foods);


// function sum(...numbers){
//   let result=0;
//   for(let number of numbers){
//     result+=number;
//   }
//   return result;
// }

// function avg(...numbers){
//   let result=0;
//    for(let number of numbers){
//     result+=number;
//   }
//   return result/numbers.length;
// }

// const total=sum(1,2,3,4,5,6,7,8);
// console.log(`total is ${total}`);

// const average=avg(30,40,50,60);
// console.log(`avg is ${average}`);


// Callback = pass a function as an argument to another function
// Used when reading files, making network requests, or working with databases
// sum(displayPage,2,3);

// function sum(callback,x,y){
//   let result= x+y;
//   callback(result);
// }
// function displayResult(result){
//   console.log(result);
// }
// function displayPage(result){
//   document.getElementById("myh1").textContent =result;
// }


// forEach = executes a function for each array element
// let numbers =[1,2,3,4,5];
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element,index,array){
//   array[index] = element*2;
// }
// function display(element){
//   console.log(element)
// }


// .map() → applies a function to each element and returns a new array
const dates =["2024-01-2", "2025-02-28", "2023-09-23"];
const arrangedDates= dates.map(formatDates);

function formatDates(element){
  const parts =element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

console.log(arrangedDates);
