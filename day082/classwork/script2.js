document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault()

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let confirmPassword = document.getElementById("confirmPassword").value

  document.getElementById("nameError").textContent = ""
  document.getElementById("emailError").textContent = ""
  document.getElementById("passwordError").textContent = ""
  document.getElementById("confirmError").textContent = ""
  document.getElementById("success").textContent = ""

  let valid = true

  if (name === "") {
    document.getElementById("nameError").textContent = "შეიყვანე სახელი"
    valid = false
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "შეიყვანე ელფოსტა"
    valid = false
  }

  if (password === "") {
    document.getElementById("passwordError").textContent = "შეიყვანე პაროლი"
    valid = false
  }

  if (confirmPassword === "") {
    document.getElementById("confirmError").textContent = "გაიმეორე პაროლი"
    valid = false
  } else if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "პაროლები არ ემთხვევა"
    valid = false
  }

  if (valid) {
    document.getElementById("success").textContent = "წარმატებით გაიგზავნა"
  }
})