const button = document.getElementById("startBtn");

button.addEventListener("click", function() {
  setInterval(function() {
    console.log("Hello, i'll be back soon");
  }, 5000);
});