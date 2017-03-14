
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay.length == 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
};

var flipCard = function() {
  var cardID = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardID].cardImage);
  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit);
  console.log(cardID);
  cardsInPlay.push(cards[cardID].rank);
  console.log(cardsInPlay.length);
  checkForMatch();
};

var createBoard = function () {
  for (i=0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', 'activeCards');
    document.getElementById('game-board').appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
};

var gameReset = function () {
  for (i=0; i < cards.length; i++){
    var resetCard = document.getElementsByClassName('activeCards')[i];
    resetCard.setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  console.log(cardsInPlay.length);
};

document.getElementsByTagName('button')[0].addEventListener('click', gameReset);

createBoard();
