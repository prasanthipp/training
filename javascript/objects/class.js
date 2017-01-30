// your notes here!
console.log("hello objects!");
var cards = [{"suit":"clubs","rank":"six"},
{"suit":"diamonds","rank":"jack"},
{"suit":"diamonds","rank":"eight"}];

var suitArray = function(myCards)
{
    var suits = [];

    myCards.forEach(function(card){
      var suit = Object.values(card)[0];
      console.log(suit);
      suits.push(suit);
    });

    console.log("i am retunring");
    return suits;
}

var getSuits = function(cards)
{
      return cards.map(function(card){
          return Object.values(card)[0];
      });
}



var suitAndRankArray = function(cards)
{ var suitAndRankArr = [];
  cards.forEach(function(card){
          suitAndRank = Object.values(card);
          console.log(suitAndRank);
      });
return suitAndRankArr.concat(suitAndRank);
}
