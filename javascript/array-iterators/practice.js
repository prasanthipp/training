// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (arr) {
  var reverse_arr = [];
  for (var i=arr.length-1;i>=0;i--){
    reverse_arr.push(arr[i]);
  }
  return reverse_arr;
  };

  var reverse = function (arr) {
    return arr.reverse();
    };


console.log(reverse([ 1, 2, 3, 4, 5 ]));
console.log(reverse([ "world", "hello" ]));

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
/* remove the start comments after getting right code to current test.
var flatten = function flatten(arr) {
  return arr.reduce(function(explored, toExplore) {
    return explored.concat(
      Array.isArray(toExplore)?
      flatten(toExplore) : toExplore
    )
  })
}

console.log(flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]));

var sum = function(n){
  var value3 = 0;
  var value5 = 0;
  for(i=1;i>0;i++){
    if(value3<=n){
      value3 += 3*i;
    }
    else if(value5<=n){
      value5 += 5*i;
    }
  }
  return value3+value5;
}
remove the end comments after getting right code to current test.*/

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
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

var sumOfMultiplesOf3And5 = function(n){
var numsBet3AndN = range(3,n);
var numsBet5AndN = range(5,n);
var multiplesOf3 = numsBet3AndN.filter(function(item){
											return item%3 === 0;
													});
var multiplesOf5 = numsBet5AndN.filter(function(item){
											return item%5 === 0;
													});
var multiplesOf3And5 = multiplesOf3.concat(multiplesOf5);
var multiplesOf3And5Sum = multiplesOf3And5.reduce(function(a,b){
								return a+b;
											});
return multiplesOf3And5Sum;
}
/*var sumOfMultiplesOf3And5 = function(n){
  var value = 0;

  for(i=1;i>0;i++){
    if(value<=n){
      value = value + (3*i);
    }
    }
  return value;
}*/

console.log(sumOfMultiplesOf3And5(100));
// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel = function (word){
var word_Array = word.split("");
return word_Array.some(function(el){
    return "aeiou".indexOf(el) != -1;
})}
console.log(atLeastOneVowel("hello"));
console.log(atLeastOneVowel("dry"));
console.log(atLeastOneVowel("sdfjkl"));

// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     longestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function (arr) {
var awesomeTweetLong = "";
if(Array.isArray(arr) && arr.length !=0){ //cheking if input is array & also whether it is not an empty array//
    if( arr.every(function(item){ //cheking if each element of the array is a string//
      return typeof(item) === "string"})
    ){
      var awesomeTwetsArray = arr.filter(function(item){ //cheking for the word 'awesome' in each string & creating a new array with all such strings with the word 'awesome' in it//
        return item.indexOf("awesome")>=0;})

        awesomeTwetsArray.forEach(function(item){ //cheking for the longest length string - in the newly created array(of strings with the word 'awesome' in it)
          if(item.length > awesomeTweetLong.length){
            awesomeTweetLong = item;
          }
        }
      )
    }
    else{
      throw "All elements of the array must be strings";
    }
return awesomeTweetLong;
  }
else {
  throw "Argument must be array";
  }
}
####################
var longestAwesomeTweet = function (arr) {
var awesomeTweetLong = "";
if(Array.isArray(arr) && arr.length !=0){
    if( arr.every(function(item){
      return typeof(item) === "string"})
    ){
      var awesomeTwetsArray = arr.filter(function(item){
        return item.indexOf("awesome")>=0;})
if(awesomeTwetsArray){

       awesomeTwetsArray.forEach(function(item){
          if(item.length > awesomeTweetLong.length){
            awesomeTweetLong = item;
          }
        }
      )}
else{
throw "Sorry! no 'awesome' in any tweets";
}
    }
    else{
      throw "All elements of the array must be strings";
    }
return awesomeTweetLong;
  }
else {
  throw "Argument must be array";
  }
}
####################
console.log(longestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]));
console.log(longestAwesomeTweet([ "hello", "world"]));

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var isHTMLElement = function (txt)
{
 var startTag=txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
 var endTag=txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'));
 return startTag===endTag;
}
var getTxt = function (txt) {
  if ( txt.slice(txt.indexOf('<')+1, txt.indexOf('>')) ===
  txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'))){
    return txt.slice(txt.indexOf('>')+1, txt.lastIndexOf('<'));
  }
  else{
    throw "Not an HTML Element!"
  }
};

var elementsToContent = function(arr){
  if(Array.isArray(arr)){
    return arr.map(function(item){
      if(isHTMLElement(item)){
        return getTxt(item);
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

console.log(elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]));
console.log(elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]));

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function (length, max) {
var randArr = [];
for(var i=0; i<length;i++){
randArr.push(Math.floor(Math.random()*max));
}
return randArr;
}


/* Seqential Xplanation:
Core concept:
I. first we need to get a random no. from the 'max' no.
II. Then we need to get such random no.s 'length' times
III. Ex. if (length,max = 5,10) - we need to get a 10 random whole no.s bet 5
1. "Math.floor(Math.random()*max)" - this code gives us a random no. bet. our no.(max)
2. Since we need such random no.s as long as the 'length' - we use a for loop, which starts at 0(i=0) &
stops before the length(i<length) so that we could get the 'random no.s' - the exact no. of times (length times)
3. Various combinations to get the random no. - 'length' times:
(i) i=0; i<length
Ex. if length = 5 => i=0; i<5 => 0,1,2,3,4 (giving us exactly 5 no.s)
(ii) i=1; i<=length
Ex. if length = 5 => i=1; i<=5 => 1,2,3,4,5 (giving us exactly 5 no.s)
*/

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (arr, n) {
var randArr = [];
for(var i=0; i<n;i++){
randArr.push(arr[Math.floor(Math.random()*arr.length)]);
}
return randArr;
}
