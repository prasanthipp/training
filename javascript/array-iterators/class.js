console.log("Hello Array Iterators");

var myNumbers=[1,2,8,10];

/*
for(var i=0;i<myNumbers.length;i++)
{
  console.log(myNumbers[i]);
}

for(var k=myNumbers.length-1;k>=0;k--)
{
  console.log(myNumbers[k]);
}
*/

//forEach

var total=0;

myNumbers.forEach(function(item,index){
  console.log(item + " at position of " + index);
  total+=item;
})

console.log(total);

var isAllMyNumbersPositive=myNumbers.every(function(n){
  return n>=0;
})

console.log(isAllMyNumbersPositive);

var names=["sarma","snay","sictor","vijay"];

var isAllNameStartV=names.every(function(name){
  console.log(name[0]);
  return name[0]==="v";
});

//console.log(checkFirstLetterV);


var isAnyNameStartV=names.some(function(name){
  console.log(name[0]);
  return name[0]==="v";
});

var vNameCount=0;
var isTwoNameStartV=names.some(function(name){
  if(name[0]==="v"){
    vNameCount+=1;
  }
  return vNameCount>=2;
});

console.log(isTwoNameStartV);

var namesStartWithS=names.filter(function(name){
  return name[0]==="s";
})
console.log(namesStartWithS);
