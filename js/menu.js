var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});
var order = JSON.parse('{"orders":[]}');
function addItem(element) {
    console.log(element.id);
    console.log(element.title);
    var orderString = '{order: "'+element.id.toString+'" price: "'+element.title+'"}';
    var item = {};
    item.itemName = element.id;
    item.price = element.title;
    order["orders"].push({ itemName: element.id, itemPrice: element.title });
    sessionStorage.order = JSON.stringify(order);
}
var welcome = document.getElementById('welcome');
window.onload = function () {
    sessionStorage.order = JSON.stringify(order);
    if (sessionStorage.userInfo.length == 1 || sessionStorage.userInfo.length==0) {
        welcome.style.visibility="hidden";
    } else {
        var user = JSON.parse(sessionStorage.userInfo);
        welcome.innerHTML = 'Welcome '+ user.name;
        welcome.style.visibility = "visible";
    }
};