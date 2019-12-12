// Event Cards
var eventDrawPile;
var eventDiscardPile = [];

// Attack Cards
var attackDrawPile;
var attackDiscardPile = [];

// Void Seeder Panic Cards

var panicDrawPile;
var panicDiscardPile;

// Token Bag
var alienBag = [];
var BlankToken;
var alienDict;

var playerCount = 0;
var QueenDialogOpen = false;
var InfestDialogOpen = false;
var fullscreen = false;
var eventPeek = false;

// Base Token Piles
var larvaPile = LarvaTokens;
var creeperPile = CreeperTokens;
var adultPile = AdultTokens;
var breederPile = BreederTokens;

// Void Seeders Token Pile
var voidSeederTokenPile = voidSeederTokens;


const enemies = {

    1: "Intruders",
    2: "Void Seeders",
    3: "Carnomorphs"
}

const playerColors = {
    1: "Blue",
    2: "Red",
    3: "Yellow",
    4: "Green",
    5: "Purple",
    6: "Gray",
    7: "Pink"
};

var enemyType;



// Set up according to player amount.
function setupAlienBag(players, enemyId) {
console.log("setting up game for " + players + " players" + ", the enemy is " + enemies[enemyId]);
enemyType = enemyId;
playerCount = players;
    if(enemyType === 1) {

        shuffle(breederPile);
        shuffle(adultPile);
        shuffle(creeperPile);
        shuffle(larvaPile);

        alienDict = baseAlienDict;
        BlankToken = baseBlankToken;

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

        eventDrawPile = BaseEventCards;
        shuffle(eventDrawPile);

        attackDrawPile = BaseAttackCards;
        shuffle(attackDrawPile);



    } if(enemyType === 2) {
        alienDict = voidSeederAlienDict;
        BlankToken = voidSeedersBlankToken;
        alienBag.push(BlankToken);
        alienBag.push(redInsanityToken, blueInsanityToken, greenInsanityToken, greyInsanityToken, pinkInsanityToken, yellowInsanityToken, purpleInsanityToken)
        shuffle(voidSeederTokenPile);
        let voidSeederTokenAmount = 2 + players;
        for(let o = 0; o < voidSeederTokenAmount; o++) {
            alienBag.push(voidSeederTokenPile.pop())
        }

        eventDrawPile = voidSeederEventCards;
        shuffle(eventDrawPile);

        attackDrawPile = voidSeederAttackCards;
        shuffle(attackDrawPile);

        panicDrawPile = voidSeederPanicCards;
        shuffle(panicDrawPile);

    }




shuffle(alienBag);
console.log("alien bag set up, contents: ");
console.log(alienBag)
document.getElementById("playerSelector").style.display = 'none';
document.getElementById("playerTurnWindows").style.display = '';
document.getElementById("eventWindows").style.display = '';
document.getElementById("shuffleFooter").style.display = ''

playerCount = players;
// document.getElementById("players").innerText = playerCount + "P";

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

function shufflePanicDeck() {
    console.log("shuffling panic deck");
    shuffle(panicDrawPile);
    console.log(panicDrawPile);
}



// Draw alien token
function drawFromBag() {
    let drawnToken = alienBag.pop();
    console.log("drew alien from bag: ")
    console.log(drawnToken)
    console.log("bag now contains " + alienBag.length + " tokens")
    if(drawnToken.AlienId === 0 && alienBag.length == 0) {
        console.log("drew blank token from bag and it was the last token.")
        alienBag.push(drawnToken);
        console.log("returned blank token to bag")
        if(adultPile.length === 0) {
            console.log("Pile of adult tokens was empty, nothing added to bag")
        } else {
            alienBag.push(adultPile.pop())
            console.log("Adult pile was not empty, added 1 adult token into the bag")
        }

    }
    else if(drawnToken.AlienId === 0) {
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
    }
    shuffleBag()
    return drawnToken;
}

function drawFromVoidSeederBag() {
    let drawnToken = alienBag.pop();
    console.log("drew alien from bag: ")
    console.log(drawnToken)
    console.log("bag now contains " + alienBag.length + " tokens")

        switch(drawnToken.AlienId) {
            case 0:
                alienBag.push(drawnToken);
                console.log("Drawn token was blank, returning it to bag")
                break;
            case 1: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 2: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 3: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 4: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 5: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 6: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 7: alienBag.push(drawnToken)
                console.log("Blue insanity token drawn, returning it to the bag")
                break;
            case 8: voidSeederTokenPile.push(drawnToken)
                console.log("Voidseeder token drawn, setting it aside");
                shuffle(voidSeederTokenPile)
                break;
        }

    shuffleBag()
    return drawnToken;

}



function drawAttackCard() {
    if(attackDrawPile.length === 0) {
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

function voidSeederHealthCheck(type) {
let card1;
    let card2;
    let health;
    let healthInfo1 = "";
    let healthInfo2 = "";
    switch(type) {
        case 2:
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
            card1 = attackDrawPile.pop();
            card2 = attackDrawPile.pop();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if(card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if(card1.AlienHealth <= card2.AlienHealth) {
                        health = card1.AlienHealth;
                } else {
                    health = card2.AlienHealth;
                }


            } else {
                let eCard = drawEventCardForRetreat()
                health ="";
                healthInfo1 = "Lurker flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }

            console.log("discarding card")
            attackDiscardPile.push(card1, card2);
            console.log("Discard Pile:")
            console.log(attackDiscardPile)

            break;

        case 3:
            card1 = drawAttackCard()
            console.log("attack card:")
            console.log(card1)
            if(card1.AlienHealth !== 0) {

                health = card1.AlienHealth

            } else {
                let eCard = drawEventCardForRetreat()
                health = "";
                healthInfo1 = "Whisperer flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }
            break;

        case 4:

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
            card1 = attackDrawPile.pop();
            card2 = attackDrawPile.pop();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if(card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if(card1.AlienHealth >= card2.AlienHealth) {
                    health = card1.AlienHealth;
                } else {
                    health = card2.AlienHealth;
                }

            } else {
                let eCard = drawEventCardForRetreat()
                health = "";
                healthInfo1 = "Stalker flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }

            console.log("discarding card")
            attackDiscardPile.push(card1, card2);
            console.log("Discard Pile:")
            console.log(attackDiscardPile)

            break;
        case 5:
            card1 = drawAttackCard()
            console.log("attack card:")
            console.log(card1)
            if(card1.AlienHealth !== 0) {
                healthInfo1 = "The Despoiler is not affected.";
                healthInfo2 = "";
                health = "";

            } else {
                let eCard = drawEventCardForRetreat()
                health ="";
                healthInfo1 = "Despoiler flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }
            break;

        case 6:
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
            card1 = attackDrawPile.pop();
            card2 = attackDrawPile.pop();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if(card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if(card1.AlienHealth >= card2.AlienHealth) {
                    health = card1.AlienHealth;
                } else {
                    health = card2.AlienHealth;
                }

            } else {

                health = "";
                healthInfo1 = "The lair resists."
            }

            console.log("discarding card")
            attackDiscardPile.push(card1, card2);
            console.log("Discard Pile:")
            console.log(attackDiscardPile)

            break;

    }


    document.getElementById("healthInfo").innerText = healthInfo1;
    document.getElementById("healthInfo2").innerText = healthInfo2;
    document.getElementById("healthAmount").innerText = health;




}

function resolveHealthCheck(type) {

    let health = 0;

    if(type === 1) {
        let card = drawAttackCard()
        console.log("attack card:")
        console.log(card)
        if(card.AlienHealth !== 0) {
            document.getElementById("healthInfo").innerText = "";
            document.getElementById("healthInfo2").innerText = "";
            document.getElementById("healthAmount").innerText = card.AlienHealth
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText ="";
            document.getElementById("healthInfo").innerText = "Intruder flees!"
            document.getElementById("healthInfo2").innerText = "direction: " + eCard.Direction
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
        if(card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {
            let health = card1.AlienHealth + card2.AlienHealth
            document.getElementById("healthInfo").innerText ="";
            document.getElementById("healthInfo2").innerText = "";
            document.getElementById("healthAmount").innerText = health
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText ="";
            document.getElementById("healthInfo").innerText = "Intruder flees!"
            document.getElementById("healthInfo2").innerText = "direction: " + eCard.Direction
        }

        console.log("discarding card")
        attackDiscardPile.push(card1, card2);
        console.log("Discard Pile:")
        console.log(attackDiscardPile)

    }

}

function drawEventCardForRetreat() {
    if(eventDrawPile.length === 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }
    let eventCard = eventDrawPile.pop()
    eventDiscardPile.push(eventCard)
    return eventCard;

}

function peekEventCard() {
    document.getElementById("peekDialog").style.display = '';
    if(eventDrawPile.length === 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }
    console.log(eventDrawPile)
    let topEventCard = eventDrawPile[eventDrawPile.length -1];
    let alienGroups = " ";
    for(let group of topEventCard.Movers) {
        console.log(group)
        alienGroups += alienDict[group] + " ";
    }

    document.getElementById("movers").innerText = alienGroups;
    document.getElementById("direction").innerText = "Move to: " + topEventCard.Direction;
    document.getElementById("eventName").innerText = topEventCard.CardName;
    document.getElementById("eventDesc").innerText = topEventCard.AppCardText;


}

function returnEventToBottom() {
    eventDrawPile.unshift(eventDrawPile.pop());
    console.log(eventDrawPile);

}

function drawEventCard() {



    if(eventDrawPile.length === 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }

    let eventCard = eventDrawPile.pop();
    if (eventCard.RemoveAndReshuffleDeck === true) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    } else if (eventCard.ReshuffleBack === true) {
        eventDrawPile.push(eventCard);
        shuffleEventDeck();
    } else {
        eventDiscardPile.push(eventCard)
    }
    return eventCard;
}

function resolveEvent() {
    document.getElementById("peekDialog").style.display = 'none';
    let eventCard = drawEventCard()
    console.log(eventCard)
    let groups = " ";
    for(let group of eventCard.Movers) {
        console.log(group)
      groups += alienDict[group] + " ";
    }

    document.getElementById("movers").innerText = groups;
    document.getElementById("direction").innerText = "Move to: " + eventCard.Direction;
    document.getElementById("eventName").innerText = eventCard.CardName;
    document.getElementById("eventDesc").innerText = eventCard.AppCardText;

    if(eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID === 1) {
        document.getElementById("addTokensDialog1").style.display = '';
        document.getElementById("eventModalOkButton").disabled = true;
        InfestDialogOpen = true;

    }

    if(eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID === 3) {
        document.getElementById("eventDesc").innerText += "Functionality not implemented";
    }


    /*else if(eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID == 2){
        document.getElementById("addTokensDialog2").style.display = '';
    }*/
};

function addTokensToBag(type, amount) {
    switch(type) {
        case 1:
            if(amount > 0) {
                for(let i = 0;i < amount && larvaPile.length > 0;i++)
                alienBag.push(larvaPile.pop())
            }
            if(InfestDialogOpen === true) {
                document.getElementById("eventModalOkButton").disabled = false;
                InfestDialogOpen = false;
            }
            break;
        case 2:
            if(amount > 0) {
                for(let i = 0;i < amount && creeperPile.length > 0;i++)
                    alienBag.push(creeperPile.pop())
            }
            break;
        case 3:
            if(amount > 0) {
                for(let i = 0;i < amount && adultPile.length > 0;i++)
                    alienBag.push(adultPile.pop())
            }
            break;
        case 4:
            if(amount > 0) {
                for(let i = 0;i < amount && breederPile.length > 0;i++)
                    alienBag.push(breederPile.pop())
            }
            break;
        case 5:
            if(amount > 0) {
                alienBag.push(QueenToken)
            }
            if(QueenDialogOpen === true) {
                document.getElementById("devButton").disabled = false;
                QueenDialogOpen = false;
            }
            break;
    }

    shuffleBag();

    document.getElementById("addTokensDialog1").style.display = 'none';
    // document.getElementById("addTokensDialog2").style.display = 'none';
    document.getElementById("queenAttackDialog").style.display = 'none';


}

function initiateBagDevelopment() {

    if(enemyType === 1) {

        let bagToken = alienBag.pop()
        console.log("Drew token from bag:")
        console.log(bagToken)
        document.getElementById("bagDevMessage").innerText = bagToken.BagDevelopmentEffectTextApp;
        switch(bagToken.AlienId) {
            case 1: if(adultPile.length > 0) {
                alienBag.push(adultPile.pop())
            }
                larvaPile.push(bagToken);
                break;

            case 2: if(breederPile.length > 0) {
                alienBag.push(breederPile.pop())

            }
                creeperPile.push(bagToken)
                break;

            case 3:
            case 4:
                alienBag.push(bagToken)
                break;
            case 5:
                document.getElementById("queenAttackDialog").style.display = '';
                document.getElementById("devButton").disabled = true;
                QueenDialogOpen = true;
                break;
            case 0: if(adultPile.length > 0) {
                alienBag.push(adultPile.pop())
            }
                alienBag.push(bagToken)
                break;
        }

        shuffleBag();

    } else if(enemyType === 2) {
        initiateVoidSeederBagDevelopment();
    }

}

function initiateVoidSeederBagDevelopment() {

    let bagToken = alienBag.pop()
    console.log("Drew token from bag:")
    console.log(bagToken)
     let message

    if(bagToken.AlienId === 0) {

        console.log("Blank token drawn, returning it to bag")
        if(voidSeederTokenPile.length !== 0) {
            alienBag.push(voidSeederTokenPile.pop())
            console.log("Void seeker token pile was not empty, added one void seeder token to the bag")
        }
        message = bagToken.BagDevelopmentEffectTextApp;

        alienBag.push(bagToken)
        shuffle(alienBag)

    } else if(bagToken.AlienId === 8) {
        console.log("Void seeder Token pulled, returning it to bag")
        alienBag.push(bagToken);
        message = bagToken.BagDevelopmentEffectTextApp;

    } else {
        console.log("Player insanity token was drawn, color: " + playerColors[bagToken.AlienId])
        alienBag.push(bagToken);
        message =  playerColors[bagToken.AlienId] + " " + bagToken.BagDevelopmentEffectTextApp;
    }

    document.getElementById("bagDevMessage").innerText = message;
    shuffleBag();

}

function fullScreen() {

    var b = document.documentElement;

    if(fullscreen === false) {
        if (b.requestFullscreen) {
            b.requestFullscreen()
        } else {
            if (b.mozRequestFullScreen) {
                b.mozRequestFullScreen()
            } else {
                if (b.webkitRequestFullscreen) {
                    b.webkitRequestFullscreen()
                } else {
                    if (b.msRequestFullscreen) {
                        b.msRequestFullscreen()
                    }
                }
            }
        }
        fullscreen = true;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else {
                if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen()
                } else {
                    if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    }
                }
            }
        }
        fullscreen = false;
    }
}

function spawnAlien(){

    let token;

    if(enemyType === 1) {
        token = drawFromBag();

        if(token.AlienId !== 0) {
            document.getElementById("tokenName").innerText = token.AlienName;
            document.getElementById("dangerTitle").innerText = "Danger Level:"
            document.getElementById("dangerLevel").innerText = token.DangerLevel;
        } else {
            document.getElementById("dangerTitle").innerText = ""
            document.getElementById("dangerLevel").innerText = "";
            document.getElementById("tokenName").innerText = "Nothing appears";
        }


    } else if(enemyType === 2) {

        token = drawFromVoidSeederBag();

        if(token.AlienId === 0) {
            document.getElementById("tokenName").innerText = token.SummoningText;
            document.getElementById("dangerTitle").innerText = "";
            document.getElementById("dangerLevel").innerText = "";
        } else if(token.AlienId === 8){
            document.getElementById("dangerTitle").innerText = "Surprise attack: 1 Contamination card and resolve a Panic card "
            document.getElementById("dangerLevel").innerText = token.DangerLevel;
            document.getElementById("tokenName").innerText = token.SummoningText;
        } else {
            document.getElementById("tokenName").innerText = "Insanity";
            document.getElementById("dangerTitle").innerText = token.SummoningText;
            document.getElementById("dangerLevel").innerText = "";
        }

    } else {
        document.getElementById("tokenName").innerText = "Error";
    }



    //document.getElementById("tokenDescription").innerText = token.SummoningText;
    //mySound.play();


}

function resolveAnAttack(type) {
console.log("Resolving an attack")
            let attackCard = drawAttackCard()
            if(attackCard.AttackingTypes.includes(type)) {
                document.getElementById("attackName").style.color = "red";
                document.getElementById("attackName").innerText = attackCard.AttackName;
                if(attackCard.SpecialRule === 0) {
                    document.getElementById("attackDesc").innerText = attackCard.AttackDescriptionApp;
                } else {
                    let token = drawFromBag()
                    if(token.AlienId === 0) {
                        document.getElementById("attackDesc").innerText = "The Intruder fails to summon anything, nothing happens"
                    } else {
                        document.getElementById("attackDesc").innerText = token.AlienName + attackCard.AttackDescriptionApp;
                    }

                }

            } else {
                document.getElementById("attackName").style.color = "black";
                document.getElementById("attackName").innerText = "Miss";
                document.getElementById("attackDesc").innerText = "";
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
