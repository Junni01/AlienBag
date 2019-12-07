var players = [];
var defaultPlayerNames = ["Player One", "Player Two", "Player Three", "Player Four"];
var numberOfPlayers = 4;
var claimedLots = [];
var drawPile = vegasCards;
var discardPile = [];

var stripDrawn = 0;
var purpleDrawn = 0;
var brownDrawn = 0;
var aquaDrawn = 0;
var silverDrawn = 0;
var goldDrawn = 0;
var gameOver = false;


function setUpPlayers(numberOfPlayers) {
    for(let i = 0; i < numberOfPlayers; i++) {
        players.push( {
            playerNumber: i,
            playerName: defaultPlayerNames[i],
            playerLots: []
        })
    }
}
function setupDrawDeck() {
  shuffle(drawPile)
  let oneFourthDeck = drawPile.splice(0, 11);
  oneFourthDeck.push(gameOverCard);
    shuffle(oneFourthDeck);
    drawPile.unshift(...oneFourthDeck);
};

function drawCard() {
     var drawnCard = drawPile.pop()
    switch(drawnCard.CasinoId) {
        case 1: stripDrawn += 1;
            document.getElementById("stripCounter").innerText = "Strip: " + stripDrawn + "/3"
        break;
        case 2: purpleDrawn += 1;
            document.getElementById("purpleCounter").innerText = "Purple: " + purpleDrawn + "/9"
            break;
        case 3: brownDrawn += 1;
            document.getElementById("brownCounter").innerText = "Brown: " + brownDrawn + "/9"
            break;
        case 4: aquaDrawn += 1;
            document.getElementById("aquaCounter").innerText = "Aqua: " + aquaDrawn + "/9"
            break;
        case 5: silverDrawn += 1;
            document.getElementById("silverCounter").innerText = "Silver: " + silverDrawn + "/9"
            break;
        case 6: goldDrawn += 1;
            document.getElementById("goldCounter").innerText = "Gold: " + goldDrawn + "/9"
            break;
        case 0: gameOver = true;
            break;

    }


    claimedLots.push(drawnCard.LotLocation)
    document.getElementById("claimedLots").innerText = claimedLots.toString();
    return drawnCard;
}

function startingAssets() {
    for(let p = 0; p < players; p++) {
        let card1 = drawCard();
        let card2 = drawCard();
        let startingMoney = card1.StartingMoney + card2.StartingMoney;
        let startingLots = [];
        startingLots.push(card1.LotLocation, card2.LotLocation)
    }

}

function showCard() {
    let drawnCard = drawCard();
    document.getElementById("cardInfo").innerText = drawnCard.CasinoName + " " + drawnCard.LotLocation + " " + drawnCard.StartingMoney;
}




function shuffle (array) {
    console.log("S H U F F L E")
    let i,j = 0,temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
};