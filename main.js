function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email === "caiovictorarantes@gmail.com" && password === "Caio") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-message").innerText = "Senha incorreta";
  }
}
