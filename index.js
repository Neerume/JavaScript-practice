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
// // students = students + 1;
// // students = students - 1;
// // students = students * 2;
// // students = students / 2;
// // students = students ** 2; // exponent (power of 2)
// // let extraStudents = students % 3; // remainder

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
// age += 1; // mathematical addition now works
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

// console.log("Happy new yeear");



// for(let i =1; i<=20; i++){
//   if(i==8){
//     continue;
//   }
//   else{
//     console.log(i);
//   }
// }


// //Number guessing game 

// let min =1;
// let max =100;
// let answer = Math.floor(Math.random()*(max-min+1))+min;
// let guess;
// let isrunning =true; //to set the condition for a while loop

// while(isrunning){
//   let guess= window.prompt(`Enter any number between ${min} to ${max} `);
//   guess=Number(guess); //converting teh string that user inputs to the number with type conversion

//   if(isNaN(guess)){
//     window.alert("Please enter a valid number");
//   }
//   else if(guess>max || guess<min){
//     window.alert("Please enter the number in range!");
//   }
//   else{
//     if(guess>answer){
//       window.alert("The number is too big");
//     }
//     else if(guess<answer){
//       window.alert("Your guess is too low! Please try again!");
//     }
//     else{
//       window.alert("Congratulations!!!! you'r guess is correct ");
//       isrunnig =false;

//     }

//   }
  
// }