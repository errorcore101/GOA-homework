document.getElementById("text").innerText = "ახალი ტექსტი";


function changeColor() {
  document.getElementById("title").style.color = "red";
}


document.getElementById("box").style.backgroundColor = "lightblue";


function increaseSize() {
  document.getElementById("paragraph").style.fontSize = "30px";
}


let elements = document.getElementsByClassName("item");
elements[1].innerText = "ტექსტი შეიცვალა";