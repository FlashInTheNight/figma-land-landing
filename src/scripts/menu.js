document.querySelectorAll(".hamburger").forEach((hamburger) => {
  hamburger.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").classList.toggle("expanded");
  });
});
