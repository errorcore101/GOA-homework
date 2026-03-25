const text = document.createTextNode("გამარჯობა, მე ვარ ტექსტი");
document.body.appendChild(text);

const p = document.createElement("p");
p.id = "P1";

const pText = document.createTextNode("გამარჯობა, მე ვარ javascriptში შექმნილი p თეგი");

p.appendChild(pText);
document.body.appendChild(p);