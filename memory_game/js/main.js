var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

var cardThree = cards[2];
cardsInPlay.push(cardThree);

var cardFour = cards[3];
cardsInPlay.push(cardFour);

console.log("user flipped " + cardsInPlay[0]);
console.log("user flipped " + cardsInPlay[1]);
console.log("user flipped " + cardsInPlay[2]);
console.log("user flipped " + cardsInPlay[3]);

if (cardsInPlay.length === 4) {
    if (cardsInPlay[2] === cardsInPlay[3]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
    
}
