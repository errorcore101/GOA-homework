let input = document.getElementById("myInput");
let output = document.getElementById("outputText");

input.addEventListener("copy", function() {
    document.body.style.backgroundColor = "yellow";
});

input.addEventListener("input", function() {
    output.textContent = input.value;
});