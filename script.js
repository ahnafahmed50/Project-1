const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme on every page
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

// Toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    toggleBtn.textContent = isDark ? "☀️" : "🌙";
  });
}