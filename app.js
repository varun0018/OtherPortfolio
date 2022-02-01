const toggleBtn = document.querySelector(".ham");

const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show-links");
});
