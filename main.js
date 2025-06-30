
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');
  if (password === 'treino123') {
    window.location.href = 'dashboard.html';
  } else {
    error.textContent = 'Senha incorreta. Use: treino123';
  }
}
