console.log("Hello Arrays");
var myNumbers=[];

myNumbers.push("one");
myNumbers.push("two");
myNumbers.push("three");

console.log(myNumbers);

myNumbers.unshift("zero");
console.log(myNumbers); //add item to beginning of array

myNumbers.pop();
console.log(myNumbers);

myNumbers.shift();
console.log(myNumbers);

var myFruits=["orange","apple","mango","banana"];
myFruits.splice(2,0,"grape","strawberry");

console.log(myFruits);

myFruits.splice(2,1);
console.log(myFruits);

//join

var myLetters=["a","b","c"];
var s=myLetters.join();
console.log(s);
console.log(myLetters.join('|'));
console.log(myLetters.join(''));

//slice
var fruits = ["Banana", "Orange", "Apple", "Mango","Apple"];
var citrus = fruits.slice(1, 4);
console.log(citrus);
