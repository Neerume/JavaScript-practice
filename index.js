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

// // .map() → applies a function to each element and returns a new array
// const dates =["2024-01-2", "2025-02-28", "2023-09-23"];
// const arrangedDates= dates.map(formatDates);

// function formatDates(element){
//   const parts =element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// console.log(arrangedDates);



//fiter() -> creates an array foltering out the otehr elements.
//keeps only the element that is true 

// let numbers =[2,3,4,5,6];
// let evennumbers = numbers.filter(even);

// function even(element){
//   return element%2===0;
  
// }console.log(evennumbers);


// const age =[15,16,20,21,23,24,25];
// // const adult = age.filter(isuniStudent);
// // const child = age.filter(isChild);
// const adult = age.forEach(isuniStudent);

// function isuniStudent(element){
//    element>=21;
// }
// function isChild(element){
//   return element<18;
// }
// console.log(adult);

// // console.log(`The age of childrens are ${child}`);

//.reduce() -> reduce the elemt of an array to single value 

// const prices =[20,30,40,50,60];

// const total = prices.reduce(sum);

// console.log(total.toFixed(2));

// function sum(previus, next){
//   return previus + next;
// }



// const grade =[30,40,50,60,70,80];
// const max = grade.reduce(getMax);
// console.log(max);
// const totalval =grade.reduce(total);
// console.log(totalval);
// function getMax(prev, next){
//   return Math.max(prev, next);
// }
// function total(prev, next){
//   return prev+next;
// }


// //function expression: way to define funciton as value or varaibale 
// const hello =function(){
//   console.log("Hello");
// }

// hello();

// setTimeout(function(){
//   console.log("Hello");
// },3000);


// const nums =[1,2,3,4,5,6];
// const ans = nums.map(function(element){
//   return Math.pow(element,2);
// });

// const cube= nums.map(function(element){
//   return Math.pow(element,3);
// })
// const even = nums.filter(function(element){
//   return element %2 ===0;
// });
// const odd = nums.filter(function(element){
//   return element %2 !==0;
// })
// const total = nums.reduce(function(prev, element){
//   return prev+element;
// })
// console.log(ans);
// console.log(cube);
// console.log(even);
// console.log(odd);
// console.log(total);


//Arrow functions -> short way to write function expression, good for function we only use once

// function hello(){   //noraml function
//   console.log("hello");
// }


// const hello = function(){ //function ex[ression
//   console.log("hello");
// }

// const hello = (name) =>console.log(`hello ${name}`);  //hello function

// hello("neera");


// settimeout(function(){
//   console.log("hello");
// },3000);


// setTimeout = () => {console.log("hello")},3000;
// setTimeout();

// const nums = [1,2,3,4,5,6];

// const square = nums.map((element) =>  Math.pow(element, 2));
// const cube = nums.map((element) => Math.pow(element, 3));
// const even = nums.filter((element) => element%2===0);
// const total = nums.reduce((accumulator, element)=> accumulator+element);

// console.log(square);
// console.log(cube);
// console.log(even);
// console.log(total);

//objects -> collection of properties or methods,, properties are the key value pairs
//represents real world objects like people, product, EventCounts.
//  const person1 = {
//   firstname: "Luffy",
//   lastName:"D",
//   age :19,
//   isPirate: true,
//   sayHello: function(){console.log("Khaizoko oni owera naru")},
//       eat: () => console.log("I eat meat"),

//  }

//  const person2 = {
//   firstname :"Zoro",
//   lastname :"Zuiro",
//   age:20,
//   isPirate:true,
//     sayHello: function(){console.log("OOO")},
//     eat: ()=> console.log("Give me booze"),
//  }


//  console.log(person1.firstname);
//   console.log(person1.isPirate);
//   person1.sayHello();
//   person1.eat();
//  console.log(person2.firstname);
//   console.log(person2.isPirate);
//   person2.sayHello();
//   person2.eat();


//this = refrence to the object where this is used
//this does nto work with arrow function
// const person1 ={
//   fname: "Nami",
//   food: "salad",
//   sayHello: function(){console.log(`Hi I am ${this.fname}`)},
//   eat: function(){console.log(`I only eat ${this.food}`)},
// }
// person1.sayHello();
// person1.eat();



//constructor -> special method for defining methods and properties of obj

// function Car(make, model, color){
//   this.make = make,
//   this. model= model,
//   this.color = color
//   this.drive = function(){
//     console.log(`You drive the ${this.make} `);
//   }
// }

// const car1 = new Car ("Mercedes","sfasd", "black");
// const car2 = new Car("ford","mustang", "red");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.color);
// car2.drive();


//classes -> propvieds more sturcured and cleaner way to work with obj
// class Products{
//   constructor(name, price){
//     this.name= name,
//     this.price= price
//   }
//   displayProduct(){
//     console.log(`Product ${this.name}`);
//     console.log(`Price: ${this.price}`);
//   }
//   calculatetotal(salesTax){
//     return this.price+(this.price*salesTax);
//   }
// }
// const salesTax=0.05;
// const product1 = new Products("Shirt", 10.99);
// const product2 = new Products("pant", 20.99);
// const product3 = new Products("Vest", 22.50);

// product1.displayProduct();
// const total = product1.calculatetotal(salesTax);

// console.log(`the total with tax is $${total.toFixed(2)}`);



//static -> keyword that defines propertiesa or methods of a class.

// class Math{
//   static PI =3.14159;
//   static getDiameter(radius){
//     return radius*2;
//   }
//   static getCircumference(radius){
//     return 2* this.PI * radius;
//   }
// }
// console.log(Math.PI);
// console.log(Math.getDiameter(10));
// console.log(Math.getCircumference(10));


// class User {
//   static userCount =0;

//   constructor (username){
//     this.username = username;
//     User.userCount++;
//   }
//   sayhello(){
//     console.log(`Hello my name is ${this.username}`);
//   }
//   static getuserCount(){
//     console.log(`Active users are ${User.userCount}`);
//   }
// }

// const user1 = new User("Luffy");
// const user2 = new User("Zoro");

// user1.sayhello();
// console.log(user1.username);
// console.log(User.userCount);
// User.getuserCount();


//Inheritence -> inherites from parent 

// class animal{
//   alive= true;

//   eat(){
//     console.log(`${this.name} is eating`);
//   }
//   sleep(){
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends animal {
//   name ="rabit";
//   run(){
//     console.log(`${this.name} is running`);
//   }
// }
// class Fish extends animal {
//   name ="fish";
//   swim(){
//     console.log(`$(this.name) is swimming`)
//   }
// }
// class Racoon extends animal{
//   name ="racoon";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const racoon =new Racoon();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.eat();
// fish.sleep();
// fish.swim();

// racoon.eat();
// racoon.sleep();


//super -> this can be used to call the consutrucotr of paren helps in code reusuabilty 
// class Animal{
//   constructor(name,age){
//        this.name =name;
//     this.age =age;
//   }
//   move(){
//     console.log(`The ${this.name} moves at a pace of ${this.speed} npm`);
//   }

// }

// class Rabbit extends Animal{
//   constructor(name,age,runSpeed){
//     super(name,age);
//     this.runSpeed = runSpeed;
  
//   }
//   run(){
//     console.log(`THis ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }
// class Fish extends Animal {
//  constructor(name,age,swimSpeed){
//   super(name, age);
//     this.swimSpeed = swimSpeed;
  
//   }
//   swim()
// {
//   console.log(`This ${this.name} can swim`);
//   super.move(this.swimSpeed);
// }}
// class Hwak extends Animal{
//  constructor(name,age,flySpeed){
//   super(name,age);
//     this.flySpeed = flySpeed;
  
//   }
//   fly(){
//     console.log(`THis ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
  
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 1, 25);
// const hwak = new Hwak("hwak", 1, 25);

// // console.log(rabbit);
// // console.log(fish);
// // console.log(hwak);

// hwak.fly();


//getters and setters in js -> geeter makes property readable adn setter makes then writable
// class Rectangle{
//   constructor(width, height){
//     this.width =width;
//     this.height=height;
//   }
//   set width(newwidth){
//     if(newwidth>0){
//       this._width = newwidth; //_this makes it a private property 
//      }
//      else{
//       console.error("Width must be a positive number");
//      }
//   }  
//   set height(newheight){
//     if(newheight>0){
//       this._height = newheight; //_this makes it a private property 
//      }
//      else{
//       console.error("Height must be a positive number");
//      }
//     }
//     get width(){
//       return `${this._width.toFixed(1)} cm^2`;
//     }
//     get height(){
//       return this._height;
//     }
//     get area(){
//       return (this._width * this._height).toFixed(1);
//     }
// }

// const rectangle = new Rectangle(4, 2); //this is a grabage value inorder to make the user not input these that's were getters and setters comes in 
// console.log(rectangle.height);
// console.log(rectangle.width);
// console.log(rectangle.area);


// class Person{
//   constructor(first_name, last_name){
//     this.first_name=first_name;
//     this.last_name=last_name;
//   }
//   set first_name(newfirst_name){
//     if(typeof newfirst_name=== "string" && newfirst_name.length>1){
//       this._first_name = newfirst_name;
//     }
//     else{
//       console.error('first name must be a non-empty string');
//     }
//   }
//   set last_name(newlast_name){
//     if(typeof newlast_name === "string" && newlast_name.length>0){
//       this._last_name = newlast_name;
//     }
//     else{
//       console.error("last name must be valid non empty string.");
//     }
//   }
//   get first_name(){
//     return this._first_name;
//   }
//   get last_name(){
//     return this._last_name;
//   }
//   get fullname(){
//     return this._first_name + " "+ this._last_name;
//   }
// }
// const person = new Person("Luffy", "D");
// console.log(person.first_name);
// console.log(person.last_name);
// console.log(person.fullname);


///destructuring
//[] for array destructuring and {} for object destructing
// let a =1;
// let b=2;
// [a,b] =[b,a];

// console.log(a);
// console.log(b);

//swap elements
const colors =["red","green", "blue", "black","white"];

// [colors[0],colors[4]]= [colors[4],colors[0]];
// console.log(colors);
// const [firstcolor, secondcolor, thirdcolor, fourthcolor, ...extracolors] =colors;
// console.log(firstcolor);

// console.log(extracolors);

//extract value from object 
// const person1={
//   firstname:"Monkey",
//   middlename:"D",
//   lastname:"luffy",
// }
// const person2={
//   firstname:"Trafalugar",
//   lastname:"Law",
// }

// const {firstname, lastname, middlename, age} =person1;
// console.log(firstname);

// function displayperson({firstname, middlename=" ",lastname}){
//   console.log(`name: ${firstname} middlename: ${middlename} lastname: ${lastname}`);
// }
// const person1={
//   firstname:"Monkey",
//   middlename:"D",
//   lastname:"luffy",
// }
// const person2={
//   firstname:"Trafalugar",
//   lastname:"Law",
// }
// displayperson(person2);


//nested objects -> objects inside othe object
// const person ={
//   fullname: "Monkey D luffy",
//   isPirate: true,
//   hobbies:["eat", "fight", "help friends"],
//   address:{
//     street:"1233 sea",
//     country:"sea"
//   }
// }

// console.log(person.fullname);
// console.log(person.isPirate);
// console.log(person.hobbies);
// console.log(person.address.street);



//example here, address is the child obj of person object.

// class Address{
//   constructor(street, city, country){
//     this.street=street;
//     this.counrtry=country;
//     this.city =city;
//   }
// }
// class Person{
//   constructor(name, age, ...address){
//     this.name= name;
//     this.age= age;
//     this.address= new Address(...address);
//   }
// }
// const person1 = new Person("Monkey D Luffy", "20", "123 sea",
//                                                    "All Blue",
//                                                    "Ocean/Sea"
// );
// const person2 = new Person("Zoro", "20", "224 sea",
//                                                    "All Blue",
//                                                    "Ocean/Sea"
// );
// const person3 = new Person("Sanji", "20", "454 sea",
//                                                    "East Blue",
//                                                    "Ocean/Sea"
// );

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.street);

// console.log(person3.name);
// console.log(person3.age);
// console.log(person3.address.street);

// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.address.street);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//example (array of objects) 
//array of objetcs
// const fruits =[{name: "apple", color: "red", calories:95},
//               {name: "bananna", color: "yellow", calories:55},
//               {name: "orange", color: "orange", calories:65},
//               {name: "mango", color: "yellow", calories:85},
//               {name: "pineapple", color: "yellow", calories:45}];

// console.log(fruits[0].name);
// fruits.push({name:"grapes", color:"green", calories:23});

// console.log(fruits);

// //...............forEach..........

// fruits.forEach(fruit => console.log(fruit));

// //...........map...........
// const fruitnames = fruits.map(fruit => fruit.name);
// const fruitcolor = fruits.map(fruit => fruit.color);
// console.log(fruitnames);
// console.log(fruitcolor);

//...........filter..................
// const yellowfruits = fruits.filter(fruit => fruit.color==="yellow");
// const lowcalories = fruits.filter(fruit=> fruit.calories<60);
// console.log(yellowfruits);
// console.log(lowcalories);

//..............reduce...................................
// const highcal = fruits.reduce((max,fruit)=> fruit.calories>max.calories?fruit:max);
// const lowcal = fruits.reduce((min, fruit)=> fruit.calories<min.calories?fruit:min);
// console.log(highcal);
// console.log(lowcal);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort() -> sort elemnt of arry in place, we trat numbers as string as well

// let fruits =["apple", "orange", "banana", "conconut", "mango"];

// fruits.sort();
// console.log(fruits);


// let numbers =[2,4,1,3,4,10];
// numbers.sort((a,b)=> a-b);
// console.log(numbers);

const people =[{name:"Neeru", age:20, gpa:4.0},
                {name:"Mandira", age:23, gpa:3.75},
                {name:"Aastha", age:21, gpa:3.75}
];
people.sort((a,b)=> a.age-b.age);
console.log(people);