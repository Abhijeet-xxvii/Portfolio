const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".navbar nav");
const themeToggle = document.getElementById("theme-toggle");

// Mobile navbar toggle
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Dark/Light theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});
