// DOM

const headerOne = document.getElementById("header-one");

headerOne.style.color = "red";

// But it returns only the first matching element.
const messageElement = document.querySelector(".message");

messageElement.style.color = "purple";

const messageTest = document.getElementsByClassName("message");

messageTest[1].style.backgroundColor = "white";


const list = document.getElementsByTagName("li");

for (let i=0; i < list.length; i++) {
    // list[i].style.color = "green";
    list.item(i).style.color = "green";
}

// querySelectorAll --> but they are not array
