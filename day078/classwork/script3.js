let button = document.getElementById("btn");
let text = document.getElementById("text");

button.addEventListener("click", function() {
    alert("ღილაკზე დააჭირე!");
});

text.addEventListener("mouseover", function() {
    text.style.color = "red";
});