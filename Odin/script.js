// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Hey I’m red!";
p.setAttribute("style", "color: red;");

content.appendChild(p);

content.innerHTML += "<p style='color: red;'>Hey I’m red!</p>";

const content2 = document.createElement("div");
content2.classList.add("class1");

content2.innerHTML = "<h1>I'm in a div</h1>";
content2.innerHTML += "<p>ME TOO</p>";

container.appendChild(content2);


// Event

const btn = document.querySelector("#btn");
btn.onclick = () => {
    alert("Hello World second!");
}