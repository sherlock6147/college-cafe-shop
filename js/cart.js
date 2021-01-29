var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});
var welcome = document.getElementById('welcome');
var empty = document.getElementById('empty');
var tbody = document.getElementById('body');
var amountH = document.getElementById('amount');
function enterOrders() {
    var data = JSON.parse(sessionStorage.order);
    var orders = data["orders"];
    console.log(data);
    var finalHTML = "";
    var i = 0;
    var amount=0;
    for (i = 0; i < orders.length;++i){
        finalHTML += '<tr>';
        finalHTML += '<td>' + (i+1).toString() + '</td>';
        finalHTML += '<td>' + orders[i].itemName + '</td>';
        finalHTML += '<td>' + orders[i].itemPrice + '</td>';
        finalHTML += '<td>' + '<button class="remove-btn" onclick="removeItem(this)" id="' + (i+1) + '">Remove</button>' + '</td>';
        finalHTML += '</tr>';
        amount += parseInt(orders[i].itemPrice);
    }
    tbody.innerHTML = finalHTML;
    amountH.innerHTML = '₹' + amount;
    sessionStorage.amount = amount.toString();
}
window.onload = function () {
    if(sessionStorage.userInfo!=null){
        if (sessionStorage.userInfo == "") {
            welcome.style.visibility="hidden";
        } else {
            var user = JSON.parse(sessionStorage.userInfo);
            welcome.innerHTML = user.name+'\'s Cart';
            welcome.style.visibility = "visible";
        }
    }
    if(sessionStorage.order!=null){
        if (JSON.parse(sessionStorage.order)["orders"].length == 0) {
            console.log("empty cart");
            empty.style.visibility = "visible";
        }
        else {
            empty.style.visibility = "hidden";
            enterOrders();
        }
    }
};

function removeItem(element) {
    var data = JSON.parse(sessionStorage.order);
    var j = parseInt(element.id) - 1;
    console.log(data.orders.splice(j, 1));
    console.log(data)
    sessionStorage.order = JSON.stringify(data);
    window.location.reload();
}
