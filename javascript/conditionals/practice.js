// We'll consider a password's strength to be "strong" if it is at least 10
// characters long. If it's between 7 and 10 characters long, we'll consider it to
// have "medium" strength, and if it's less than 7 characters, we'll say it is a
// "weak" password. Write a function that accepts as input a potential password and
// returns either "weak", "medium" or "strong" depending on its length.
//
//     passwordStrength("hello");
//     //=> weak
//
//     passwordStrength("longerpassword");
//     //=> strong
//
//     passwordStrength("helloone");
//     //=> medium
var passwordStrength = function (password) {
  if(password.length >= 10 )
  {
    return "strong";
  }
  else if (password.length >7 && password.length < 10) {
return "medium";
  }
  else{
return "weak";
  }
};
console.log(passwordStrength("menu"));
console.log(passwordStrength("prasanthi"));
console.log(passwordStrength("prasanthi penumatsa"));

// A year is a leap year if it is divisible by 4, unless it is also divisible by
// 100 in which case it is not a leap year unless it is also divisible by
// 400. Phew. Got that? Good. Write a function that accepts a number and outputs
// true if the number is a leap year, false if not.
//
//      isLeapYear(1988);
//      //=> true
//
//      isLeapYear(2001);
//      //=> false
//
//      isLeapYear(1800);
//      //=> false
//
//      isLeapYear(2000);
//      //=> true
//
// It should also throw an error if the input is not a number.
//
//      isLeapYear("hello");
//      //=> THAT'S NOT A NUMBER!
var isLeapYear = function (year) {
  if(isNaN(year)){
    return "thats not a number";
  }
  if (year%4===0 && year%100!==0 || year%400 === 0 ) {
    return true;
  } else {
    return false;
  }
};
console.log(isLeapYear(1800));
console.log(isLeapYear(2000));
console.log(isLeapYear("kjffj"));

// Write a function that accepts three strings and input, and returns the one
// that would come earliest in the dictionary.
//
//      firstInDictionary("rhino", "aardvark", "zebra");
//      //=> aardvark
//
//      firstInDictionary("whale", "zebra", "yak");
//      //=> whale
//
//      firstInDictionary("whale", "zebra", "aardvark");
//      //=> aardvark
//
// It should throw an error string if any of the arguments are not strings.
//
//      firstInDictionary("whale", 5, 10);
//      //=> ALL THREE ARGS MUST BE STRINGS!
var firstInDictionary = function (a,b,c) {
  var sort_words = [a,b,c];
  if (typeof a !== 'string' || typeof b !== 'string' || typeof c !== 'string'){
    return "make sure all 3 inputs are strings";
  }
  else {
    var sortedWords=sort_words.sort();
    return sortedWords[0];
  }
};
console.log(firstInDictionary('ram','ee', 'ab'));


// Write a function that extracts a tag from a string representing an HTML
// element, but throws an error if the string is not an HTML element. You may reuse
// one of your functions from the previous section (or, better yet, see if you can
// remember how to re-write it).
//
//     getTagName("<p>this is a paragraph</p>");
//     //=> p
//
//     getTagName("<p>this is wrong</div>");
//     //=> Error: Not an HTML Element!
var getTagName = function (content) {
if(content.slice(content.indexOf('<')+1,content.indexOf('>')) !==
content.slice(content.lastIndexOf('<')+2,content.lastIndexOf('>'))){
  return "not HTML element";}
  else{
  return content.slice(content.indexOf('<')+1,content.indexOf('>'));
}
};
console.log(getTagName('<p> this is para </p>'));
console.log(getTagName('<p> this is para </div>'));

// Re-implement our improveTweet function so it can generate any of lol, omg,
// lmao, and rofl.
var improveTweet = function () {
};


// Write a function called `isQuestion` that returns true if the input is a
// string and it ends in a question mark. We'll use this function in the next
// practice problem.
var isQuestion = function (con) {
  var ques = '?';
  if(con.slice(con.length-1,con.length )== ques )
  {
    return true;
  }
  else{
    return false;
  }
};

console.log(isQuestion("hjhjh?"));
console.log(isQuestion("hjhjhgdfgf"))


// The Magic 8 Ball is a classic toy that allows you to ask a yes/no
// question and it responds with a random answer. Most of the time (at least half)
// it responds with a "positive" answer, about a quarter of the time it responds
// with a "neutral" answer, and about a quarter of the time it responds with a
// "negative" answer. You can read more about the Magic 8 Ball toy (and see it's
// actual responses) on Wikipedia.
//
// Write a function that simulates the Magic 8 Ball by generating a random
// number. Try to make it match the probabilities of the real toy.
//
//     magic8Ball("Will people like this problem?");
//     //=> Very doubtful
//
//     magic8Ball("Do people like these videos?");
//     //=> My reply is no
//
//     // throw an error if there's no question mark at the end
//     // use your isQuestion function from the previous question
//     magic8Ball("you suck");
//     //=> THAT DOESN'T SOUND LIKE A QUESTION!
//
//     magic8Ball("Is this a question?");
//     //=> Signs point to yes
var magic8Ball = function (question) {
  var answers=["Very doubtful","My reply is no","Signs point to yes"];

  var q=question.slice(question.length-1,question.length);

  if(q != "?")
  {
    throw "THAT DOESN'T SOUND LIKE A QUESTION!"
  }
  else
  {
    var random = Math.floor(Math.random() * 3);
    return answers[random];
  }
};

console.log(magic8Ball("Will people like this problem?"));

console.log(magic8Ball("you are bad"));


// Suppose we wanted to randomly interject "-lol-" or "-omg-" into a random
// place in a string. For example:
//
//     randomInterject("this is a tweet");
//     //=> this is -omg- a tweet
//
// Notice that it may break into the middle of words as well.
//
//     randomInterject("hilarious, I'm having a great day");
//     //=> hil-lol-arious, I'm having a great day");
//
// This is a little tricky, so here are some tips. It may be helpful to break down
// this problem into two steps. First, you may want to write a function called
// interjection that accepts a number and two strings -- the interjection and the
// actual string.
//
//     interjectAt("interjection", 5, "hello world!");
//     //=> hello-interjection- world!
//
//     interjectAt("lol", 0, "this is a tweet");
//     //=> -lol-this is a tweet
//
//     interjectAt("omg", 15, "hello");
//     //=> the string doesn't have that many letters!
//
//     interjectAt(5, "omg", "hello");
//     //=> expected first arg to be a string, second arg to be a number and third arg to be a string
//
// You can interject by using two slices. For instance:
//
//     var str = "hello world!";
//     var beginning = str.slice(0,5);
//     var end = str.slice(5,str.length);
//     var strWithInterjection = beginning + "-lol-" + end;
//
// You just have to generalize this to an arbitrary index and wrap it in a function.

/* the below 2 tests 'interjectAt' & 'randomInterject' are the same, where-in
'interjectAt' is a helper function for randomInterject*/

var randomInterject = function(str){
if (typeof(str) === "string"){
var randomStrPosition = Math.floor(Math.random()*str.length);
var strBeginning = str.slice(0,randomStrPosition);
var strEnd = str.slice(randomStrPosition,str.length);

var interjectWords = ["-lol-", "-omg-"];
var randomInterject = Math.floor(Math.random()*interjectWords.length);

return strBeginning + interjectWords[randomInterject] + strEnd;
}
else{
throw "Input must be a string";
}
}

[9:47]
console.log(randomInterject("this is a tweet"));
console.log(randomInterject("hilarious, I'm having a great day"));

//prasanti code belowvar interjectAt = function (inter,no,str) {
  var str = "";
  var beginning = str.slice(0,'no');
  var end = str.slice('no',str.length);
  return beginning + "inter" +   end;
};
console.log(interjectAt("omg",5,"hello world!"));


// Now that you have a robust function to do your interjection, your actual
// `randomInterjection` function consists of generating a random message and a
// random location within the string, and then calling into the `interjectAt`
// function with the appropriate arguments.
var randomInterject = function () {
};
