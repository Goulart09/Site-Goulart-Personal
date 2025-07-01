
function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (email === "caiovictorarantes@gmail.com" && password === "Caio") {
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Senha incorreta";
    }
}
