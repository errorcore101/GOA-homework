function checkPassword() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  if (password === "Password123") {
    document.getElementById("result").innerText =
      "Welcome to the website " + name;
  } else {
    document.getElementById("result").innerText =
      "Wrong Password";
  }
}