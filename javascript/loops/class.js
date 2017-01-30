console.log("Hello Loops");

var num=20;

if(num%2 === 0)
{
    console.log("Number is divisible by 2");
}

var num2=150;

while(num2%3 === 0){
  console.log("Number is divisible by 3");
  num2=num2+1;
}

console.log("I am out of loop");

var num=0;

while(num<=10){
  console.log(num);
  num=num+1;
}

var printOddEvenBelow100=function()
{
  var num=1;

  while(num<=10){
    if(num % 2 === 0){
      console.log(num + " is even");
    }
    else {
      console.log(num + " is odd");
    }

    num++;
  }
}

printOddEvenBelow100();

var k=0;

for(;k<100;)
{
  console.log(k);
  k++;
}

for(n=100;n>0;n--){
  console.log(n);
}

var hello="Hello World";

for(var s=0;s<hello.length;s++)
{
  console.log(hello.charAt(s));
}
