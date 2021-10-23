

// variables
const hamburger = document.querySelector(".navbar-toggler");

const closeButton = document.querySelector(".close-navbar-toggler");

const collapseMenu = document.querySelector(".nav-show")

function showNavbar() {
    collapseMenu.classList.remove("hide");
}

function hideNavbar() {
    collapseMenu.classList.add("hide");
}



