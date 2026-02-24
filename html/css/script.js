function toggleDescripcion(id) {
  const desc = document.getElementById(id);
  const button = desc.previousElementSibling;

  if (desc.style.display === "none" || desc.style.display === "") {
    desc.style.display = "block";
    button.textContent = "Ocultar descripción";
  } else {
    desc.style.display = "none";
    button.textContent = "Ver descripción";
  }
}


const darkModeToggle = document.getElementById("darkModeToggle");


if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeToggle.textContent = "☀️ Modo claro";
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkModeToggle.textContent = "☀️ Modo claro";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkModeToggle.textContent = "🌙 Modo oscuro";
  }
});
