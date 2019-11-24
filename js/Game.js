// Event Cards
var eventDrawPile = EventCards;
shuffle(eventDrawPile);
var eventDiscardPile = [];

// Attack Cards
var attackDrawPile = AlienAttackCards;
var attackDiscardPile = [];
shuffle(attackDrawPile);

// Token Piles
var larvaPile = LarvaTokens;
shuffle(larvaPile);
var creeperPile = CreeperTokens;
shuffle(creeperPile);
var adultPile = AdultTokens;
shuffle(adultPile);
var breederPile = BreederTokens;
shuffle(breederPile);

// Token Bag
var alienBag = [];


// Set up according to player amount.
function setupAlienBag(players) {
console.log("setting up game for " + players + " players")
alienBag.push(BlankToken);
alienBag.push(QueenToken);
alienBag.push(creeperPile.pop())
for(let i = 0; i < 4; i++) {
    alienBag.push(larvaPile.pop());
}
let adultAmount = 3 + players;

for(let b = 0; b < adultAmount; b++) {
        alienBag.push(adultPile.pop());
}

shuffle(alienBag);
console.log("alien bag set up, contents: ");
console.log(alienBag)
document.getElementById("playerSelector").style.display = 'none';
document.getElementById("playerTurnWindows").style.display = '';
};

// Shuffle Decks
function shuffleBag() {
console.log("shuffling token bag");
    shuffle(alienBag);
    console.log(alienBag);
}
function shuffleEventDeck() {
    console.log("shuffling event deck");
    shuffle(eventDrawPile);
    console.log(eventDrawPile);
}
function shuffleAttackDeck() {
console.log("shuffling attack deck");
    shuffle(attackDrawPile);
    console.log(attackDrawPile);
}
// Draw alien token
function drawFromBag() {
    let drawnToken = alienBag.pop();
    console.log("drew alien from bag: ")
    console.log(drawnToken)
    console.log("bag now contains " + alienBag.length + " tokens")
    if(drawnToken.AlienId == 6 && alienBag.length == 0) {
        console.log("drew blank token from bag and it was the last token.")
        alienBag.push(drawnToken);
        console.log("returned blank token to bag")
        if(adultPile.length == 0) {
            console.log("Pile of adult tokens was empty, nothing added to bag")
        } else {
            alienBag.push(adultPile.pop())
            console.log("Adult pile was not empty, added 1 adult token into the bag")
        }

    }
    else if(drawnToken.AlienId == 6) {
        alienBag.push(drawnToken);
        console.log("Drawn token was blank, returning it to bag")

    } else {
        switch(drawnToken.AlienId) {
            case 1: larvaPile.push(drawnToken)
                console.log("token was larva, returning it to larva pile")
                shuffle(larvaPile)
                break;
            case 2: creeperPile.push(drawnToken)
                console.log("token was creeper, returning it to creeper pile")
                shuffle(creeperPile)
                break;
            case 3: adultPile.push(drawnToken)
                console.log("token was adult, returning it to adult pile")
                shuffle(adultPile)
                break;
            case 4: breederPile.push(drawnToken)
                console.log("token was breeder, returning it to breeder pile")
                shuffle(breederPile)
                break;
        }
    };
    shuffleBag()
    return drawnToken;
}

function drawAttackCard() {
    if(attackDrawPile.length == 0) {
        console.log("Attack Draw pile is empty, creating new draw pile from discard pile")
        console.log("discard Pile:")
        console.log(attackDiscardPile)
        attackDrawPile.push(...attackDiscardPile)
        attackDiscardPile = []
        console.log("new draw pile: ")
        console.log(attackDrawPile)
        shuffleAttackDeck()
    }
    let drawnCard = attackDrawPile.pop()
    console.log(drawnCard);

    console.log("discarding card")
    attackDiscardPile.push(drawnCard);

    console.log("Discard Pile:")
    console.log(attackDiscardPile)

    return drawnCard;


}

function resolveHealthCheck(type) {

    let health = 0;

    if(type == 1) {
        let card = drawAttackCard()
        console.log("attack card:")
        console.log(card)
        if(card.AlienHealth != 0) {

            document.getElementById("healthAmount").innerText = card.AlienHealth
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText = "Intruder flees, direction: " + eCard.Direction
        }

    } else {

        if (attackDrawPile.length < 2) {
            console.log("Attack Draw pile is empty, creating new draw pile from discard pile")
            console.log("discard Pile:")
            console.log(attackDiscardPile)
            attackDrawPile.push(...attackDiscardPile)
            attackDiscardPile = []
            console.log("new draw pile: ")
            console.log(attackDrawPile)
            shuffleAttackDeck()
        }
        let card1 = attackDrawPile.pop();
        let card2 = attackDrawPile.pop();
        console.log("attack cards:")
        console.log(card1)
        console.log(card2)
        if(card1.AlienHealth != 0 && card2.AlienHealth != 0) {
            let health = card1.AlienHealth + card2.AlienHealth
            document.getElementById("healthAmount").innerText = health
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText = "Intruder flees, direction: " + eCard.Direction
        }

        console.log("discarding card")
        attackDiscardPile.push(card1, card2);
        console.log("Discard Pile:")
        console.log(attackDiscardPile)

    }

}

function drawEventCardForRetreat() {
    if(eventDrawPile.length == 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }
    let eventCard = eventDrawPile.pop()
    eventDiscardPile.push(eventCard)
    return eventCard;

}

function drawEventCard() {
    if(eventDrawPile.length == 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }

    let eventCard = eventDrawPile.pop()
    if (eventCard.RemoveAndReshuffleDeck == true) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    } else if (eventCard.ReshuffleBack == true) {
        eventDrawPile.push(eventCard);
        shuffleEventDeck();
    } else {
        eventDiscardPile.push(eventCard)
    }
    return eventCard;
}




function resolveEvent() {
    event = drawEventCard()
    console.log(event)
    let groups = "";
    for(let group of event.Movers) {
        console.log(group)
      groups += alienDict[group] + ", ";
    }

    document.getElementById("movers").innerText = groups;
    document.getElementById("direction").innerText = event.Direction;
    document.getElementById("eventName").innerText = event.CardName;
    document.getElementById("eventDesc").innerText = event.AppCardText;
}



function spawnAlien(){

    let token = drawFromBag();

    document.getElementById("tokenName").innerText = token.AlienName;
    document.getElementById("dangerLevel").innerText = token.DangerLevel;
    document.getElementById("tokenDescription").innerText = token.SummoningText;


}

function resolveAnAttack(type) {
console.log("Resolving an attack")
            let attackCard = drawAttackCard()
            if(attackCard.AttackingTypes.includes(type)) {
                document.getElementById("attackName").innerText = attackCard.AttackName;
                if(attackCard.SpecialRule == 0) {
                    document.getElementById("attackDesc").innerText = attackCard.AttackDescriptionApp;
                } else {
                    let token = drawFromBag()
                    document.getElementById("attackDesc").innerText = token.AlienName + attackCard.AttackDescriptionApp;
                }

            } else {
                document.getElementById("attackName").innerText = "-";
                document.getElementById("attackDesc").innerText = "No Attack";
            }

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
