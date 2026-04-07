// click — როცა აჭერ ღილაკს

// mouseover — როცა მაუსი გადააქვს ელემენტზე

// mouseout — როცა მაუსი გადის ელემენტიდან

// input — როცა რაღაცას წერ input-ში

// change — როცა input-ს შეცვლი და მერე დააკლიკებ სხვაგან

// submit — როცა ფორმას აგზავნი

// keydown — როცა კლავიატურაზე აჭერ ღილაკს

// load — როცა საიტი ბოლომდე ჩაიტვირთება

window.addEventListener("load", function() {
    console.log("loaded");
});

const btn = document.getElementById("btn");
const box = document.getElementById("box");
const input = document.getElementById("input");
const form = document.getElementById("form");

btn.addEventListener("click", function() {
    alert("clicked");
});

box.addEventListener("mouseover", function() {
    box.style.background = "orange";
});

box.addEventListener("mouseout", function() {
    box.style.background = "lightblue";
});

input.addEventListener("input", function() {
    console.log(input.value);
});

input.addEventListener("change", function() {
    console.log("changed");
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("submitted");
});

document.addEventListener("keydown", function(e) {
    console.log(e.key);
});