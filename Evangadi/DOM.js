// // DOM

// const headerOne = document.getElementById("header-one");

// headerOne.style.color = "red";

// // But it returns only the first matching element.
// const messageElement = document.querySelector(".message");

// messageElement.style.color = "purple";

// const messageTest = document.getElementsByClassName("message");

// messageTest[1].style.backgroundColor = "white";


// const list = document.getElementsByTagName("li");

// for (let i=0; i < list.length; i++) {
//     // list[i].style.color = "green";
//     list.item(i).style.color = "green";
// }

// // querySelectorAll --> but they are not array


// // Date Object
// const date = new Date("2022-03-25");

// console.log(date.getDate());
// console.log(date.getDay());


// // Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {firstName, lastName} = person;

// console.log(firstName, lastName);



// // Create an Object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {firstName, lastName, country = "US"} = person;

// let text = "";
// for (let key in person) {
//   text += `${key}: ${person[key]}<br>`;
// }

// document.getElementById("demo").innerHTML = text;

// // You can not loop in getElementByClassName(because it return live DOM) but you can loop in GetElementByTagName(because it doesn't return live DOM) also getQuerySelectionAll
// // but you can convert it to Array before you start working the live DOM cause Array is not live DOM


// i dont have the index for this but here a code from evanagadi dom manipulation traversing between multiple elements
let element = document.querySelector(".yellow");
let bigBrother = element.previousElementSibling;
let littleBrother = element.nextElementSibling;
let bigBrother = element.firstElementChild;
let littleBrother = element.lastElementChild;

// we can select the parent which is in this case ul by using parentNode
// the whole list
let bigBrother = element.parentNode;

