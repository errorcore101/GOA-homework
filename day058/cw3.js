let a1 = [];
let a2 = ["Ana", "Nika", "Gio"];

let a3 = new Array();
let a4 = new Array("Ana", "Nika", "Gio");

let a5 = Array.of("Ana", "Nika", "Gio");

let a6 = Array.from(["Ana", "Nika", "Gio"]);

let base = ["Ana", "Nika"];
let a7 = [...base, "Gio"];

function makeArray() {
  return Array.from(arguments);
}
let a8 = makeArray("Ana", "Nika", "Gio");