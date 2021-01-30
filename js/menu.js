var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});
var order = JSON.parse('{"orders":[]}');
function addItem(element) {
    console.log(element.id);
    console.log(element.title);
    if (sessionStorage.userInfo != null) {
        order["orders"].push({ itemName: element.id, itemPrice: element.title });
        sessionStorage.order = JSON.stringify(order);
    } else {
        alert("Please Login");
    }
}
var welcome = document.getElementById('welcome');
window.onload = function () {
    sessionStorage.order = JSON.stringify(order);
    if (sessionStorage.userInfo!=null){
        if (sessionStorage.userInfo == "") {
            welcome.style.visibility="hidden";
        } else {
            var user = JSON.parse(sessionStorage.userInfo);
            welcome.innerHTML = 'Welcome '+ user.name;
            welcome.style.visibility = "visible";
        }
    }
};