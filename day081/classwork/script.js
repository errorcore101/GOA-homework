var colors = ["red", "blue", "green", "yellow"];
var index = 0;

function nextColor() {
  index = index + 1;

  if (index >= colors.length) {
    index = 0;
  }

  document.getElementById("box").style.backgroundColor = colors[index];
}

function prevColor() {
  index = index - 1;

  if (index < 0) {
    index = colors.length - 1;
  }

  document.getElementById("box").style.backgroundColor = colors[index];
}