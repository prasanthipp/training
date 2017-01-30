// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
// the below is containsTwice code using 'for'//
var containsTwice = function (a,array) {
  var counter = 0;
  for (var i = 0; i<array.length; i++){
    if (array[i] == a){
      counter+=1;
    }
  }
  return counter == 2;
};
// the below is containsTwice code using 'forEach' instead of 'for'//
var containsTwice = function (a,array) {
  var counter = 0;
  array.forEach(function(item,index){
    if (item == a){
      counter+=1;
    }
  });
  return counter == 2;
};
console.log(containsTwice(true, [ true, false, false, true ]))


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//

var containsNTimes = function (n,a,array) {
  var counter = 0;
  array.forEach(function(item,index){
    if (item == a){
      counter+=1;
    }
  });
  if(counter == n){
    return true;
  }
  else {
    return false;
  }
}
console.log(containsNTimes(5, true, [ true, true, true, true, false ]));

// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//

  var atLeastOneEven = function(x){
  if(Array.isArray(x)){
  return x.some(function(item){return item%2 == 0;})}
  else { return "Enter a valid array";}
  }

console.log(atLeastOneEven([ 3, 5, 6, 7, 9 ]));
console.log(atLeastOneEven([]));
console.log(atLeastOneEven([ 101, 203, 401 ]));
console.log(atLeastOneEven("hello"));//returning correctly 'Enter a valid array'


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (x) {
  if(Array.isArray(x)){
return x.every(function(item){
return typeof(item) === 'string';
})}
else {
return "Enter a valid array";
}
};

console.log(allStrings([ "these", "are", "all", "strings" ]));
console.log(allStrings([ "these", "are", "not", 5 ]));
console.log(allStrings([ ]));
console.log(allStrings("hello"));

// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//

//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function (arr1,arr2){
if (Array.isArray(arr1) && Array.isArray(arr2)){
return arr1.some(function(item){
return containsTwice(item,arr2);
})}
else{return "Make sure both the inputs are valid arrays";}
}

console.log(containsAnyTwice([1, 2], ["hello", 1, "world", 1]));
console.log(containsAnyTwice([], ["always", "will", "return", "false"]));
console.log(containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]));
console.log(containsAnyTwice("hello", ["hello", "world"]));




// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (arr){
if(Array.isArray(arr)){
var repeat = [];
arr.forEach(function(item){
if(containsTwice(item,arr) && !(repeat.indexOf(item)>=0)){
repeat.push(item);
}
})
return repeat;}
else{
return"Enter a valid array";
}
}
/* above code is for "getValuesAppearingTwice". working fine till getting all the
 duplicates of the array, but not reflecting singles of*/
console.log(getValuesAppearingTwice ([1,2,3])); // return []
console.log(getValuesAppearingTwice ([1,1,2,2,3])); // returns [1, 1, 2, 2]
console.log(getValuesAppearingTwice(["hello", 1, "world", 1])) //[ 1 ]
console.log(getValuesAppearingTwice(["always", "will", "return", "empty"]))//[]
console.log(getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]))//[ "hello", "world" ]
console.log(getValuesAppearingTwice(["hello", "world", "goodbye"]))//[]

// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function(a,b){
var nums = [];

if (typeof(a) != 'number' && typeof(b) != 'number'){
return "Both the inputs must be numbers"
}

else{
  if(a<b){
    for(i=a; i<=b; i++){
      nums.push(i);
    }
  }
  else if(a>b) {
    for(i=a;i>=b;i--){
      nums.push(i);
    }
  }
  return nums;
}
}


console.log(range(5,10)); // [5, 6, 7, 8, 9, 10]
console.log(range(0,3)); // [0, 1, 2, 3]
console.log(range(10,3)); // returning [] instead of [10, 9, 8, 7, 6, 5, 4, 3]
console.log(range("hello", "world")); //Both the inputs must be numbers


// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
var isHTMLElement = function (txt)
{
 var startTag=txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
 var endTag=txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'));
 return startTag===endTag;
}
var getTagName = function (txt) {
  if ( txt.slice(txt.indexOf('<')+1, txt.indexOf('>')) ===
  txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'))){
    return txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
  }
  else{
    throw "Not an HTML Element!"
  }
};

var mapToTags = function(arr){
  if(Array.isArray(arr)){
    return arr.map(function(item){
      if(isHTMLElement(item)){
        return getTagName(item);
      }
      else {
        throw "Make sure your input array has valid HTML elements!!";
      }
    })

  }
  else {
    throw "Enter a valid array, with valid HTML elements!!";
  }
}

console.log(mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>"]));
 //["p", "span", "li"]
 console.log(mapToTags([]))//[]
 console.log(mapToTags(5))//wat?
 console.log(mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]))
 //"this is a tweet" is not an HTML element!
 console.log(mapToTags([ "not an html element" ]))//all entries must be html elements!
 console.log(mapToTags(["<p>this is a paragraph</p>", "<div>this is a span</span>"]));
 //

// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function (arr) {
if(Array.isArray(arr) && arr.length !=0){
    if( arr.every(function(item){
      return typeof(item) === "string"})
    ){
      return arr.filter(function(item){
        return item.toLowerCase().indexOf("lol")>=0;})
      }
    else{
      throw "All elements of the array must be strings";
    }
  }
else {
  throw "Argument must be array";
  }
}

console.log(filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]));
     //=> ["this is a tweet lol"]
console.log(filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]));
     //=> ["lol", "LOL", "LoL", "lollerskates"]
console.log(filterToLol(["omg", "this is a tweet"]));
    //=> []
console.log(filterToLol(5));
     //=> no can do.
console.log(filterToLol(["this is a string", false, 5]));
    //=> all entries must be strings!
console.log(filterToLol([]));
  // => input must be an array
