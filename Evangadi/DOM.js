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



// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person;

let text = "";
for (let key in person) {
  text += `${key}: ${person[key]}<br>`;
}

document.getElementById("demo").innerHTML = text;