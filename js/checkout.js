var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});

var payM = document.getElementById('payment');
function getPayment() {
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
    if (JSON.parse(sessionStorage.order)["orders"].length == 0) {
        console.log("empty cart");
        payM.innerHTML = 'No payment was made';
    }
    else {
        payM.innerHTML = 'Payment of ₹' + sessionStorage.amount + ' has been made<br>Thank You';
        getPayment();
    }
};
