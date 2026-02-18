const form = document.getElementById("signupForm")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  alert("Form submitted")
  form.reset()
})