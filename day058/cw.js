function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.birthYear = new Date().getFullYear() - age;
}

function showInfo() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = Number(document.getElementById("age").value);

    let user = new Person(name, surname, age);

    document.getElementById("result").textContent =
        `გამარჯობა, ${user.name} ${user.surname}, თქვენ დაიბადეთ ${user.birthYear} წელს`;
}