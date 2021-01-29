var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});

var form = document.getElementById('login');
var loginText = document.getElementById('logged-in');
// Login Logic
var userBtn = document.getElementById('submit-btn');
userBtn.addEventListener("click", function () {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var name = nameInput.value;
    var email = emailInput.value; var password = passwordInput.value;
    if (!(name=="" || email=="" || password=="")) {
        var myObject = {};
        myObject.name = name;
        myObject.email = email;
        myObject.password = password;
        console.log(myObject);
        sessionStorage.userInfo = JSON.stringify(myObject);
        form.style.visibility="hidden";    
        form.style.height = "0px";
        loginText.classList.toggle("visible");
    }
});

window.onload = function () {
    if (sessionStorage.userInfo!={}) {
        form.style.visibility = "hidden";
        form.style.height = "0px";
        loginText.style.visibility = "visible";
    }
    if (sessionStorage.length==1) {
        form.style.visibility = "visible";
        form.style.height = "auto";
        loginText.style.visibility = "hidden";
    }
};

var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
    sessionStorage.clear();
    window.location.reload();
});