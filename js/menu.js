var menuBtn = document.getElementById('menu-btn');
var navMenu = document.getElementById('mobile-nav');
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("visible");
});
var order = JSON.parse('{"orders":[]}');
var i = 0;
function addItem(element) {
    console.log(element.id);
    console.log(element.title);
    var qtyInput = document.getElementById(element.id + 'Qty');
    console.log(qtyInput.value);
    if (sessionStorage.userInfo != null) {
        if (qtyInput.value >= 1) {
            order["orders"].push({ itemName: element.id, itemPrice: element.title, itemQty: qtyInput.value});
            sessionStorage.order = JSON.stringify(order);
            ++i;
        } else {
            alert("wrong quantity");
        }
    } else {
        alert("Please Login");
    }
    if (i >= 1) {
        console.log("changing color of cart");
        var cartBtn = document.getElementById('cart-btn');
        cartBtn.style.background = "#26b981";
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
            var loginBtn = document.getElementById('login-btn');
            loginBtn.text = "Logout";
        }
    }
    if (sessionStorage.ratings != null) {
        var ratedItems = JSON.parse(sessionStorage.ratings).ratings;
        for (var i = 0; i < ratedItems.length; ++i){
            var ratingHeader = document.getElementById(ratedItems[i].ratingId);
            ratingHeader.innerHTML = ratedItems[i].ratingValue + '/5';
        }
    }
};
var ratings = JSON.parse('{"ratings":[]}');
function rateItem(element) {
    if (sessionStorage.ratings != null) {
        ratings = JSON.parse(sessionStorage.ratings);
    }
    if (sessionStorage.userInfo != null) {
        var idForRating = "rating";
        idForRating += element.id.slice(4);
        var rating = document.getElementById(idForRating);
        var value = prompt("Enter rating from 0 to 5");
        if (value == "" || parseInt(value) < 0 || parseInt(value) > 5) {
            alert("wrong valuet");
        } else {
            rating.innerHTML = value + '/5';
            ratings.ratings.push({ ratingId: idForRating, ratingValue: value });
            sessionStorage.ratings = JSON.stringify(ratings);
        }
        console.log(rating);
    } else {
        alert("Please Login");
    }
}