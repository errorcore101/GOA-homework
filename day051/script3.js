function checkData() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  if (password === "Password123" && name === "SecretName") {
    document.getElementById("result").innerText =
      "Welcome to the website";
  } else {
    document.getElementById("result").innerText =
      "Wrong Password";
  }
}
 