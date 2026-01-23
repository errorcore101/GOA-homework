let name = prompt("შეიყვანეთ სახელი");
let surname = prompt("შეიყვანეთ გვარი");
let age = prompt("შეიყვანეთ ასაკი");
let country = prompt("შეიყვანეთ ქვეყანა");

let user = {
    name: name,
    surname: surname,
    age: age,
    country: country
};

document.getElementById("output").innerHTML =
    "სახელი: " + user.name + "<br>" +
    "გვარი: " + user.surname + "<br>" +
    "ასაკი: " + user.age + "<br>" +
    "ქვეყანა: " + user.country;