const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "ელემენტი 1";

const li2 = document.createElement("li");
li2.textContent = "ელემენტი 2";

const li3 = document.createElement("li");
li3.textContent = "ელემენტი 3";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);