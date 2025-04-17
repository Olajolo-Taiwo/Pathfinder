document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => loadingScreen.style.display = "none", 1000);
  }, 2000);
});