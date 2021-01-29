var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});