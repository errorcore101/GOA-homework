document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "") {
        alert("სახელი არ უნდა იყოს ცარიელი");
        return;
    }

    if (!email.includes("@")) {
        alert("ელ-ფოსტა არასწორია");
        return;
    }

    if (password.length < 6) {
        alert("პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო");
        return;
    }

    alert("რეგისტრაცია წარმატებულია");
});