const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusText");

let isOn = true;

toggleBtn.addEventListener("click", () => {
    isOn = !isOn;
    statusText.textContent = isOn ? "ჩართულია" : "გამორთულია";
});

const counterEl = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let count = 0;

plusBtn.addEventListener("click", () => {
    count++;
    counterEl.textContent = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    counterEl.textContent = count;
});

const square = document.getElementById("square");
const toggleSquareBtn = document.getElementById("toggleSquareBtn");

toggleSquareBtn.addEventListener("click", () => {
    if (square.style.display === "none") {
        square.style.display = "block";
    } else {
        square.style.display = "none";
    }
});

const list = document.getElementById("list");
const addItemBtn = document.getElementById("addItemBtn");

let itemCount = 0;

addItemBtn.addEventListener("click", () => {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `ახალი ელემენტი ${itemCount}`;
    list.appendChild(li);
});