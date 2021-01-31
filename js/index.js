var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});
window.onload = function () {
    if (sessionStorage.userInfo != null && sessionStorage.userInfo != "") {
        var loginBtn = document.getElementById('login-btn');
        loginBtn.text = "Logout";
    }
}