console.log("Hello Functions");

var phone= 100.50;
var book = 250.25;
var shirt = 95.50;
var totalPrice = 0;

var itemTotal = function(itemPrice, qty){
  var totalPrice=itemPrice * qty;
  return totalPrice  + totalPrice * 15/100;
}

var phoneTotal=itemTotal(phone);
var bookTotal=itemTotal(book);
var shirtTotal=itemTotal(shirt);
