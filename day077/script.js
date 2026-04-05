let tipPercent = 0;

let billInput = document.getElementById("bill");
let peopleInput = document.getElementById("people");

billInput.addEventListener("input", update);
peopleInput.addEventListener("input", update);

function setTip(value) {
  tipPercent = value;
  update();
}

function update() {
  let bill = billInput.value;
  let people = peopleInput.value;

  if (bill === "" || people === "" || people == 0) {
    document.getElementById("tip").innerText = 0;
    document.getElementById("total").innerText = 0;
    return;
  }

  let tipTotal = (bill * tipPercent) / 100;
  let tipPerPerson = tipTotal / people;
  let totalPerPerson = (Number(bill) + tipTotal) / people;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("total").innerText = totalPerPerson.toFixed(2);
}