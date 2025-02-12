// External JavaScript file: script.js

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      if (window.location.pathname === new URL(link.href).pathname) {
        event.preventDefault();
      }
    });
  });
});
