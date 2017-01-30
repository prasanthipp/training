var isSuit = function (suit) {

  if ((suit == suit.toLowerCase() && "clubs") || (suit == suit.toUpperCase() && "CLUBS")){
    return true;
  }
  else if ((suit == suit.toLowerCase() && "diamonds") || (suit == suit.toUpperCase() && "DIAMONDS")){
    return true;
  }
  else if ((suit == suit.toLowerCase() && "hearts") || (suit == suit.toUpperCase() && "HEARTS")){
    return true;
  }
  else if ((suit == suit.toLowerCase() && "spades") || (suit == suit.toUpperCase() && "SPADES")){
    return true;
  }
 else {
    return false;
  }
};

console.log(isSuit("diamonds"));

#################################

var isSuit = function (suit) {
  if (suit.toLowerCase == "clubs" || "diamonds" || "hearts" || "spades" ){
    return true;
  }
else if (suit.toUpperCase == "CLUBS" || "DIAMONS" || "HEARTS" || "SPADES" ){
    return true;
  }
 else {
    return false;
  }
};

console.log(isSuit("SEVEN"));
