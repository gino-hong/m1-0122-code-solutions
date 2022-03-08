console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'player1', hand: [] },
  { name: 'player2', hand: [] },
  { name: 'player3', hand: [] },
  { name: 'player4', hand: [] }];

var Ace = 11; var Jack = 10; var Queen = 10; var King = 10;
var rank = [Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var deck = [];

for (var i = 0; i < rank.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    deck.push({ rank: rank[i], suit: suit[j] });
  }
}

var shuffledDeck = _.shuffle(deck);

for (var k = 0; k < players.length * 2; k += 2) {
  players[k / 2].hand = [shuffledDeck[k], shuffledDeck[k + 1]];
  players[k / 2].score = shuffledDeck[k].rank + shuffledDeck[k + 1].rank;
}

if (players[0].score > players[1].score && players[0].score > players[2].score &&
  players[0].score > players[3].score) {
  console.log('Winner: ', players[0].name);
} else if (players[1].score > players[0].score && players[1].score > players[2].score &&
  players[1].score > players[3].score) {
  console.log('Winner: ', players[1].name);
} else if (players[2].score > players[0].score && players[2].score > players[1].score &&
  players[2].score > players[3].score) {
  console.log('Winner: ', players[2].name);
} else if (players[3].score > players[0].score && players[3].score > players[1].score &&
  players[3].score > players[2].score) {
  console.log('Winner: ', players[3].name);
} else {
  console.log('No winners! :(');
}
