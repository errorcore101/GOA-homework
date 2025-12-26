// Dot notation არის სინტაქსი, რომელიც გამოიყენება ობიექტის შიგნით არსებული
// თვისებების (properties) და მეთოდების (methods) მისაწვდომად
// წერტილის (.) გამოყენებით

// object.property – ამ გზით ვიღებთ ან ვცვლით ობიექტის კონკრეტულ თვისებას
// object.method() – ამ გზით ვიძახებთ ობიექტის მეთოდს

// მაგალითი:
// car.color – გვაძლევს მანქანის ფერს
// car.start() – ასრულებს მანქანის დაქოქვის ფუნქციას

const box = document.getElementById("box")
const changeBtn = document.getElementById("changeBtn")
const resetBtn = document.getElementById("resetBtn")

box.style.width = "150px"
box.style.height = "150px"
box.style.backgroundColor = "blue"

changeBtn.onclick = function () {
    box.style.backgroundColor = "red"
}

resetBtn.onclick = function () {
    box.style.backgroundColor = "blue"
}