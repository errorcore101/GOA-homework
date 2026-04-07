const div = document.getElementById("myDiv");

div.addEventListener("mouseenter", function() {
  div.style.backgroundColor = "red";
});

div.addEventListener("mouseleave", function() {
  div.style.backgroundColor = "yellow";
});