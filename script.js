const users = {
  "guimelgoulart09@gmail.com": {
    name: "Guímel Henrique",
    treino: [
      { exercicio: "Supino Reto", series: "4x10", video: "https://www.youtube.com/watch?v=video1" },
      { exercicio: "Remada Curvada", series: "3x12", video: "https://www.youtube.com/watch?v=video2" },
    ]
  },
  "romildagoulart26@gmail.com": {
    name: "Romilda Rosa",
    treino: [
      { exercicio: "Agachamento Livre", series: "4x8", video: "https://www.youtube.com/watch?v=video3" },
      { exercicio: "Puxada Frontal", series: "3x10", video: "https://www.youtube.com/watch?v=video4" },
    ]
  }
};

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (users[email] && password === "treino123") {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("user-name").innerText = "Olá, " + users[email].name + "!";
    const treinoContainer = document.getElementById("treino-container");
    treinoContainer.innerHTML = "";
    users[email].treino.forEach(item => {
      treinoContainer.innerHTML += `
        <p><strong>${item.exercicio}</strong> - ${item.series}
        <a href="${item.video}" target="_blank">Ver vídeo</a></p>`;
    });
  } else {
    alert("Email ou senha inválidos.");
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login-container").classList.remove("hidden");
}