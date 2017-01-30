// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (n) {
  return (n%3==0);
};

var isDivisibleBy3_v2 = function (n) {
  if(n%3==0)
  {
    return "Yes it is";
  }
  {
    return "No it is not";
  }
};

console.log(isDivisibleBy3(6));
console.log(isDivisibleBy3(8));


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var Celsius;
var Fahrenheit;
var celsToFahr = function (Celsius) {
  return (Celsius*9)/5+32;
};
console.log(celsToFahr(34));

var fahrToCels = function (Fahrenheit) {
  return (Fahrenheit-32)*5/9;
};
console.log(fahrToCels(87));


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (n) {
return Math.floor(Math.random()*n);
}// my code

var randUpTo = function (n1) {
  return Math.floor(Math.random()*n1)+1;
}; // prasanti code
console.log(randUpTo(8));
console.log(randUpTo(11));


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (x,y) {
  return Math.floor(Math.random()*(y-x+1))+x;
};
console.log(randBetween(3,9));


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (suit) {
  if (suit.toLowerCase()=="heart" || suit.toLowerCase()=="club" || suit.toLowerCase()=="diamond" || suit.toLowerCase()=="spade" )
  {
    return true;
  }
  else {
    return false;
  }
};
  console.log(isSuit("heart"));
  console.log(isSuit("coin"));
console.log(isSuit("heaRt"));

// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (cards) {
  if(cards=="two" || cards=="three" || cards=="four" || cards=="five" ||
  cards=="six" || cards=="seven" || cards=="eight" || cards=="nine" ||
cards=="ten" || cards=="jack" || cards=="queen" || cards=="king" || cards=="ace" )
{
  return true;
}
else{
  return false;
}
};
console.log(isRank("two"));
console.log(isRank("one"));


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (suit,cards) {
  if(isSuit(suit) && isRank(cards)){
    return true;
  }
  else {
    {
      return false;
    }
  }
};
console.log(isCard("spade","two"));
console.log(isCard("coin","two"));


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (capital) {
  if( capital[0]==capital[0].toUpperCase())
  {
    return true;
  }
  else {
    {
      return false;
    }
  }
};
console.log(isCapitalized("prasanthi"));
console.log(isCapitalized("Prasanthi"));


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (content) {
  return content.slice(content.indexOf('>')+1,content.lastIndexOf('<'));

};
console.log(getHTMLText('<p> this is para </p>'));


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (content) {
  if(content.slice(content.indexOf('<')+1,content.indexOf('>')) ==
  content.slice(content.lastIndexOf('<')+2,content.lastIndexOf('>'))){
    return true;
  }else if (content.slice(content.indexOf('>')+1,content.lastIndexOf('<'))) {
    return false;
  }
  else{
    return false;
  }
};
console.log(isHTMLElement("<p> this is para </p>"));
console.log(isHTMLElement("<p> this is para </div>"));
console.log(isHTMLElement(" this is para "));
