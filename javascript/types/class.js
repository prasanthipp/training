console.log("Hello Types");

var add = function(x,y){
  return x+y;
}

console.log(typeof(5));

console.log(typeof("Varma"));

console.log(typeof(true));

console.log(typeof(add));

console.log(typeof(add(2,3)));

console.log(typeof(add("Varma","Bhupatiraju")));

//Operators + - / * %

console.log((2+6)/3);

console.log(24/(6+2));

console.log(24 % 6);
console.log(25 % 6);

console.log(Math.pow(2,3));
console.log(Math.max(3,7,10,9));
console.log(Math.min(3,7,10,9));

//Research floor and ceil

var myName="Varma Bhupatiraju";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.indexOf("B")); //6
console.log(myName.indexOf("Varma"));//0
console.log(myName.length);//17
console.log(myName.charAt(6)); //B
console.log(myName.indexOf("a")); //1
console.log(myName.lastIndexOf("a")); //14

var age=25;

//Boolean > < == === != !== && ||

//Logical AND
if(age>10 && age<50)
{
  console.log("Yes age is greater");
}
else
{
  console.log("Yes age is not greater");
}


//Logical OR
if(age>10 || age>50){
  console.log("Yes age is greater");
}
else {
  console.log("Yes age is not greater");
}

console.log(age<=25);

console.log(age>=50);

console.log(age!=25);

var isStudent=true;

if(!isStudent){
  console.log("This is true")
}
else {
  console.log("This is false")
}

//== and ===
console.log(1=="1"); //only compares value
console.log(1==="1"); //only compares value & type

console.log(1!="1"); //only compares value
console.log(1!=="1"); //only compares value & type
