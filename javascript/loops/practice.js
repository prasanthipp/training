// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (x) {
  return "aeiou".indexOf(x.toLowerCase())>=0;
};

console.log(isVowel("A"));

// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (input) {
  if(input == input.toLowerCase() && isNaN(input) && input.length == "1")
  {
    return true;
  }
  else{
    return false;
  }
};
console.log(isLowerCaseLetter('a'));
console.log(isLowerCaseLetter('A'));
console.log(isLowerCaseLetter('1'));
console.log(isLowerCaseLetter('ae'));
console.log(isLowerCaseLetter('true'));


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (n) {
  if(n<0){
    return "input must be zero or a positive number";
  }else{
  return n*(n+1)/2;
}
};
console.log(sumUpTo(10));
console.log(sumUpTo(-10));


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a,b)
{
  if((typeof(a) !== "number") || (typeof(b) !== "number"))
  {
    return "inputs should be numbers";
  }
  var sum = 0;
  if(a<=b)
  {
     for(var i=a;i<=b;i++)
     {
     sum = sum + i;
     }
   return sum;
 }
 else if(a>b)
 {
   for(var i=b;i<=a;i++)
    {
      sum = sum + i;
    }
    return sum;
 }
};
console.log(sumAToB(2,4));
console.log(sumAToB(9,4));
console.log(sumAToB(-3,4));
console.log(sumAToB(9,9));
console.log(sumAToB(9,"gjh"));
//-----
var sumAToB = function (a,b)
{
  if((typeof(a) !== "number") || (typeof(b) !== "number"))
  {
    return "inputs should be numbers";
  }
  var list = [a,b];
  var sorted = list.sort();
  var a=sorted[0];
  var b=sorted[1];
  var sum = 0;
  for(var i=a;i<=b;i++)
   {
     sum = sum + i;
   }
   return sum;

};
console.log(sumAToB(5,1));


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (s)
{
  var arrLetters = s.split("");
  var value = 0;
  for(var i=0;i<arrLetters.length;i++)
   {
    if(isVowel(arrLetters[i])){
      value = value+1;
    }
  }
  return value;
};
console.log(countVowels("helloworld"));


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (sen) {
  var sen = sen.split("");
 var reverse=sen.reverse();
  return sen=reverse.join('');
};
console.log(reverseString("hello world"));
//----------
var reverseString = function (word)
{
  var newword = "";
  for(var i=word.length-1;i>=0;i--) //for(i=0;i<=word.length;i++)
    {
    newword = newword + word[i];     //newword = word[word.length-i] + newword;
    }
  return newword;
};
console.log(reverseString("hello world"));


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (n) {
  if(n===1 || typeof(n) !== "number" || n<1){
    return false;
  }

  for(var p=n-1;p>1;p--){
    if(n%p===0){
      return false;
    }
  }

  return true;
};
// below is prasanti code
var isPrime = function (p) {
  if(p==1 || p<=0 || typeof(p) !== "number")
  {
    return false;
  }
  else if (p===2) {
    return true;
  }else{
  for(var i=2; i<p; i++)
  {
    if(p%i===0)
    {
    return false;
  }
  return true;
}
}
};
console.log(isPrime(100));
console.log(isPrime(101));
console.log(isPrime(-101));
console.log(isPrime("hello"));
// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (num)
 {
   if(typeof(num) !== "number")
    {
    return  "input should be a number";
    }
   var sum = 0;
   for(var i=0;i<=num;i++)
    {
      if(isPrime(i) )
        {
       sum = sum + i;
        }
    }
  return sum;
};
console.log(sumPrimesUpTo(5));
console.log(sumPrimesUpTo(11));
console.log(sumPrimesUpTo("xxx"));

// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function () {
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function () {
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (str)
{
  //var new1 = "";
  //for(var i=str.length-1;i>=0;i--)
  //{
  //  new1 =  new1 + str[i] ;
  //}

 if(str == reverseString(str))
  {
  return "is palindrome";
  }
  else
  {
    return "not palindrome";
  }
};
console.log(isPalindrome("kanak"));
console.log(isPalindrome("kanaka"));
