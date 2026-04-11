const paragraph = document.createElement("p");
paragraph.innerText = "ეს არის ახალი პარაგრაფი";
document.body.appendChild(paragraph);

function Person(name) {
  this.name = name;
}

const div = document.createElement("div");
div.innerText = "ეს არის div ელემენტი";
document.body.appendChild(div);

const person1 = new Person("Giorgi");
const person2 = new Person("Nino");

console.log(person1);
console.log(person2);

const button = document.createElement("button");
button.innerText = "დააჭირე";
document.body.appendChild(button);