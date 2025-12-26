
document.getElementById("submitBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Age:", age);
});