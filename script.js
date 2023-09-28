const menuBars = document.getElementById("menu-bars");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const overlay = document.getElementById("overlay");

const navItems = [nav1, nav2, nav3, nav4, nav5];

function animateItem(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`${direction1}-${i + 1}`, `${direction2}-${i + 1}`);
  });
}

function toggleNav() {
  menuBars.classList.toggle("change");
  // ^ We are using below overlay-active as boolean not to add as styling class

  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    animateItem("slide-out", "slide-in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    animateItem("slide-in", "slide-out");
  }
}

menuBars.addEventListener("click", toggleNav);

navItems.forEach((nav) => nav.addEventListener("click", toggleNav));
