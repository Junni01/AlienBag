// Event Cards
var eventDrawPile;
var eventDiscardPile = [];

// Attack Cards
var attackDrawPile;
var attackDiscardPile = [];

// Void Seeder Panic Cards

var panicDrawPile;
var panicDiscardPile = [];

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

const noiseDie = [1,1,2,2,3,3,4,4,5,6]
const attackDie = [1,2,3,4,5,6]


const enemies = {

    1: "Intruders",
    2: "Void Seeders",
    3: "Carnomorphs"
}

let BaseIntruders = 1;
let VoidSeeders = 2;

const playerColors = {
    1: "Blue",
    2: "Red",
    3: "Yellow",
    4: "Green",
    5: "Purple",
    6: "Gray",
    7: "Pink"
};

let players = [
    {
        color: "Zero",
        id: 0,
        active: false
    },
    {
        color: "Blue",
        id: 1,
        active: true
    },
    {
        color: "Red",
        id: 2,
        active: true
    },
    {
        color: "Yellow",
        id: 3,
        active: true
    },
    {
        color: "Green",
        id: 4,
        active: true
    },
    {
        color: "Purple",
        id: 5,
        active: true
    },
    {
        color: "Gray",
        id: 6,
        active: true
    },
    {
        color: "Pink",
        id: 7,
        active: true
    }]

var enemyType = 1;


// Set up according to player amount and enemy type.
function setupAlienBag(players) {
    console.log("setting up game for " + players + " players" + ", the enemy is " + enemies[enemyType]);
    playerCount = players;
    if (enemyType === 1) {

        shuffle(breederPile);
        shuffle(adultPile);
        shuffle(creeperPile);
        shuffle(larvaPile);

        alienDict = baseAlienDict;
        BlankToken = baseBlankToken;

        alienBag.push(BlankToken);
        alienBag.push(QueenToken);
        alienBag.push(creeperPile.pop())
        for (let i = 0; i < 4; i++) {
            alienBag.push(larvaPile.pop());
        }
        let adultAmount = 3 + players;

        for (let b = 0; b < adultAmount; b++) {
            alienBag.push(adultPile.pop());
        }

        eventDrawPile = BaseEventCards;
        shuffle(eventDrawPile);

        attackDrawPile = BaseAttackCards;
        shuffle(attackDrawPile);
        document.getElementById("baseAlienAddModal").style.display = '';
        document.getElementById("voidSeederAddModal").style.display = 'none';

        document.getElementById("baseAlienHealthButtons").style.display = '';
        document.getElementById("voidSeederHealthButtons").style.display = 'none';


        document.getElementById("panicButton").style.display = 'none';

        document.getElementById("attackInfo").innerHTML =
                            `
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(2)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Creeper
                                    </button>
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(3)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Adult
                                    </button>
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(4)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Breeder
                                    </button>
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(5)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Queen
                                    </button>
                            `

    }

    if (enemyType === 2) {
        alienDict = voidSeederAlienDict;
        BlankToken = voidSeedersBlankToken;
        alienBag.push(BlankToken);
        alienBag.push(redInsanityToken, blueInsanityToken, greenInsanityToken, greyInsanityToken, pinkInsanityToken, yellowInsanityToken, purpleInsanityToken)
        shuffle(voidSeederTokenPile);
        let voidSeederTokenAmount = 2 + players;
        for (let o = 0; o < voidSeederTokenAmount; o++) {
            alienBag.push(voidSeederTokenPile.pop())
        }

        eventDrawPile = voidSeederEventCards;
        shuffle(eventDrawPile);

        attackDrawPile = voidSeederAttackCards;
        shuffle(attackDrawPile);

        panicDrawPile = voidSeederPanicCards;
        shuffle(panicDrawPile);

        document.getElementById("baseAlienAddModal").style.display = 'none';
        document.getElementById("voidSeederAddModal").style.display = '';

        document.getElementById("baseAlienHealthButtons").style.display = 'none';
        document.getElementById("voidSeederHealthButtons").style.display = '';

        document.getElementById("panicButton").style.display = '';

        document.getElementById("attackInfo").innerHTML = `
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(2)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Lurker
                                    </button>
                                
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(3)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Whisperer
                                    </button>
                        
                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(4)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Stalker
                                    </button>

                                    <button type="button" class="btn btn-dark attack-button"
                                            onclick="resolveAnAttack(5)"
                                            data-toggle="modal" data-target="#attackModal">
                                        Despoiler
                                    </button>
                            `

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

// Shuffle Draw Decks
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

// Token Bag
function drawFromBag() {
    let drawnToken = alienBag.pop();
    console.log("drew alien from bag: ")
    console.log(drawnToken)
    console.log("bag now contains " + alienBag.length + " tokens")
    if (drawnToken.AlienId === 0 && alienBag.length == 0) {
        console.log("drew blank token from bag and it was the last token.")
        alienBag.push(drawnToken);
        console.log("returned blank token to bag")
        if (adultPile.length === 0) {
            console.log("Pile of adult tokens was empty, nothing added to bag")
        } else {
            alienBag.push(adultPile.pop())
            console.log("Adult pile was not empty, added 1 adult token into the bag")
        }

    } else if (drawnToken.AlienId === 0) {
        alienBag.push(drawnToken);
        console.log("Drawn token was blank, returning it to bag")

    } else {
        switch (drawnToken.AlienId) {
            case 1:
                larvaPile.push(drawnToken)
                console.log("token was larva, returning it to larva pile")
                shuffle(larvaPile)
                break;
            case 2:
                creeperPile.push(drawnToken)
                console.log("token was creeper, returning it to creeper pile")
                shuffle(creeperPile)
                break;
            case 3:
                adultPile.push(drawnToken)
                console.log("token was adult, returning it to adult pile")
                shuffle(adultPile)
                break;
            case 4:
                breederPile.push(drawnToken)
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

    switch (drawnToken.AlienId) {
        case 0:
            alienBag.push(drawnToken);
            console.log("Drawn token was blank, returning it to bag")
            break;
        case 1:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 2:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 3:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 4:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 5:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 6:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 7:
            alienBag.push(drawnToken)
            console.log("Blue insanity token drawn, returning it to the bag")
            break;
        case 8:
            voidSeederTokenPile.push(drawnToken)
            console.log("Voidseeder token drawn, setting it aside");
            shuffle(voidSeederTokenPile)
            break;
    }

    shuffleBag()
    return drawnToken;

}
function addTokensToBag(type, amount) {

    switch (type) {
        case 1:
            if (amount > 0) {
                for (let i = 0; i < amount && larvaPile.length > 0; i++)
                    alienBag.push(larvaPile.pop())
            }
            if (InfestDialogOpen === true) {
                document.getElementById("eventModalOkButton").disabled = false;
                InfestDialogOpen = false;
            }
            break;
        case 2:
            if (amount > 0) {
                for (let i = 0; i < amount && creeperPile.length > 0; i++)
                    alienBag.push(creeperPile.pop())
            }
            break;
        case 3:
            if (amount > 0) {
                for (let i = 0; i < amount && adultPile.length > 0; i++)
                    alienBag.push(adultPile.pop())
            }
            break;
        case 4:
            if (amount > 0) {
                for (let i = 0; i < amount && breederPile.length > 0; i++)
                    alienBag.push(breederPile.pop())
            }
            break;
        case 5:
            if (amount > 0) {
                alienBag.push(QueenToken)
            }
            if (QueenDialogOpen === true) {
                document.getElementById("devButton").disabled = false;
                QueenDialogOpen = false;
            }
            break;
    }

    document.getElementById("addTokensDialog1").style.display = 'none';
    // document.getElementById("addTokensDialog2").style.display = 'none';
    document.getElementById("queenAttackDialog").style.display = 'none';


    shuffleBag();


}
function addTokensToVoidSeederBag(type, amount) {
    if (type === 8) {
        for(let i = 0; i < amount && voidSeederTokenPile.length > 0; i++) {
            alienBag.push(voidSeederTokenPile.pop())
        }

    } else {
        switch(type) {
            case 1:
                alienBag.push(blueInsanityToken)
                break;
            case 2:
                alienBag.push(redInsanityToken)
                break;
            case 3:
                alienBag.push(yellowInsanityToken)
                break;
            case 4:
                alienBag.push(greenInsanityToken)
                break;
            case 5:
                alienBag.push(purpleInsanityToken)
                break;
            case 6:
                alienBag.push(greyInsanityToken)
                break;
            case 7:
                alienBag.push(pinkInsanityToken)
                break;
        }
    }
    console.log(alienBag)
}
function removeTokensFromVoidSeekerBag(type, amount) {

    var removeIndex = alienBag.map(function(item) {return item.AlienId; }).indexOf(type);
    console.log(removeIndex);
    var spliced = alienBag.splice(removeIndex, 1);
    console.log(spliced)
}
function spawnAlien() {

    let token;

    if (enemyType === BaseIntruders) {
        token = drawFromBag();

        if (token.AlienId !== 0) {
            document.getElementById("tokenName").innerText = token.AlienName;
            document.getElementById("dangerTitle").innerText = "Danger Level:"
            document.getElementById("dangerLevel").innerText = token.DangerLevel;
        } else {
            document.getElementById("dangerTitle").innerText = ""
            document.getElementById("dangerLevel").innerText = "";
            document.getElementById("tokenName").innerText = "Nothing appears";
        }


    } else if (enemyType === VoidSeeders) {

        token = drawFromVoidSeederBag();

        if (token.AlienId === 0) {
            document.getElementById("tokenName").innerText = "Nothing Appears";
            document.getElementById("dangerTitle").innerText = "";
            document.getElementById("dangerLevel").innerText = "";
            document.getElementById("tokenDescription").innerText = token.SummoningText;
        } else if (token.AlienId === 8) {
            document.getElementById("dangerTitle").innerText = "Danger Level:";
            document.getElementById("dangerLevel").innerText = token.DangerLevel;
            document.getElementById("tokenName").innerText = "Void Seeder";
            document.getElementById("tokenDescription").innerText = token.SummoningText;
        } else {
            document.getElementById("tokenName").innerText = "Insanity";
            document.getElementById("dangerTitle").innerText = ""
            document.getElementById("dangerLevel").innerText = "";
            document.getElementById("tokenDescription").innerText = token.SummoningText;;
        }

    } else {
        document.getElementById("tokenName").innerText = "Error";
    }


    //document.getElementById("tokenDescription").innerText = token.SummoningText;
    //mySound.play();


}

function initiateBagDevelopment() {

    if (enemyType === 1) {

        let bagToken = alienBag.pop()
        console.log("Drew token from bag:")
        console.log(bagToken)
        document.getElementById("bagDevMessage").innerText = bagToken.BagDevelopmentEffectTextApp;
        switch (bagToken.AlienId) {
            case 1:
                if (adultPile.length > 0) {
                    alienBag.push(adultPile.pop())
                }
                larvaPile.push(bagToken);
                break;

            case 2:
                if (breederPile.length > 0) {
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
            case 0:
                if (adultPile.length > 0) {
                    alienBag.push(adultPile.pop())
                }
                alienBag.push(bagToken)
                break;
        }

        shuffleBag();

    } else if (enemyType === 2) {
        initiateVoidSeederBagDevelopment();
    }

}
function initiateVoidSeederBagDevelopment() {

    let bagToken = alienBag.pop()
    console.log("Drew token from bag:")
    console.log(bagToken)
    let message

    if (bagToken.AlienId === 0) {

        console.log("Blank token drawn, returning it to bag")
        if (voidSeederTokenPile.length !== 0) {
            alienBag.push(voidSeederTokenPile.pop())
            console.log("Void seeker token pile was not empty, added one void seeder token to the bag")
        }
        message = bagToken.BagDevelopmentEffectTextApp;

        alienBag.push(bagToken)
        shuffle(alienBag)

    } else if (bagToken.AlienId === 8) {
        console.log("Void seeder Token pulled, returning it to bag")
        alienBag.push(bagToken);
        message = bagToken.BagDevelopmentEffectTextApp;

    } else {
        console.log("Player insanity token was drawn, color: " + playerColors[bagToken.AlienId])
        alienBag.push(bagToken);
        message = playerColors[bagToken.AlienId] + " " + bagToken.BagDevelopmentEffectTextApp;
    }

    document.getElementById("bagDevMessage").innerText = message;
    shuffleBag();

}

// Attack Cards
function resolveAnAttack(type) {
    console.log("Resolving an attack")
    let attackCard = drawAttackCard()
    if (attackCard.AttackingTypes.includes(type)) {
        document.getElementById("attackName").style.color = "red";
        document.getElementById("attackName").innerText = attackCard.AttackName;
        if (attackCard.SpecialRule === 0) {
            document.getElementById("attackDesc").innerText = attackCard.AttackDescriptionApp;
        } else {
            let token = drawFromBag()
            if (token.AlienId === 0) {
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
function drawAttackCard() {
    if (attackDrawPile.length === 0) {
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

// Health Check
function resolveHealthCheck(type) {

    let health = 0;

    if (type === 1) {
        let card = drawAttackCard()
        console.log("attack card:")
        console.log(card)
        if (card.AlienHealth !== 0) {
            document.getElementById("healthInfo").innerText = "";
            document.getElementById("healthInfo2").innerText = "";
            document.getElementById("healthAmount").innerText = card.AlienHealth
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText = "";
            document.getElementById("healthInfo").innerText = "Intruder flees!"
            document.getElementById("healthInfo2").innerText = "direction: " + eCard.Direction
        }

    } else {


        let card1 = drawAttackCard();
        let card2 = drawAttackCard();
        console.log("attack cards:")
        console.log(card1)
        console.log(card2)
        if (card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {
            let health = card1.AlienHealth + card2.AlienHealth
            document.getElementById("healthInfo").innerText = "";
            document.getElementById("healthInfo2").innerText = "";
            document.getElementById("healthAmount").innerText = health
        } else {
            let eCard = drawEventCardForRetreat()
            document.getElementById("healthAmount").innerText = "";
            document.getElementById("healthInfo").innerText = "Intruder flees!"
            document.getElementById("healthInfo2").innerText = "direction: " + eCard.Direction
        }
    }

}
function voidSeederHealthCheck(type) {
    let card1;
    let card2;
    let health;
    let healthInfo1 = "";
    let healthInfo2 = "";
    switch (type) {
        case 2:
            card1 = drawAttackCard();
            card2 = drawAttackCard();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if (card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if (card1.AlienHealth <= card2.AlienHealth) {
                    health = card1.AlienHealth;
                } else {
                    health = card2.AlienHealth;
                }


            } else {
                let eCard = drawEventCardForRetreat()
                health = "";
                healthInfo1 = "Lurker flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }

            break;

        case 3:
            card1 = drawAttackCard()
            console.log("attack card:")
            console.log(card1)
            if (card1.AlienHealth !== 0) {
                health = card1.AlienHealth
            } else {
                let eCard = drawEventCardForRetreat()
                health = "";
                healthInfo1 = "Whisperer flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }
            break;

        case 4:

            card1 = drawAttackCard();
            card2 = drawAttackCard();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if (card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if (card1.AlienHealth >= card2.AlienHealth) {
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
            break;

        case 5:
            card1 = drawAttackCard()
            console.log("attack card:")
            console.log(card1)
            if (card1.AlienHealth !== 0) {
                healthInfo1 = "The Despoiler is not affected.";
                healthInfo2 = "";
                health = "";

            } else {
                let eCard = drawEventCardForRetreat()
                health = "";
                healthInfo1 = "Despoiler flees!"
                healthInfo2 = "direction: " + eCard.Direction
            }
            break;

        case 6:

            card1 = drawAttackCard();
            card2 = drawAttackCard();
            console.log("attack cards:")
            console.log(card1)
            console.log(card2)
            if (card1.AlienHealth !== 0 && card2.AlienHealth !== 0) {

                if (card1.AlienHealth >= card2.AlienHealth) {
                    health = card1.AlienHealth;
                } else {
                    health = card2.AlienHealth;
                }

            } else {

                health = "";
                healthInfo1 = "The lair resists."
            }

            break;

    }


    document.getElementById("healthInfo").innerText = healthInfo1;
    document.getElementById("healthInfo2").innerText = healthInfo2;
    document.getElementById("healthAmount").innerText = health;


}

//Event Cards
function drawEventCard() {


    if (eventDrawPile.length === 0) {
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
    let groups = "";
    for (let group of eventCard.Movers) {
        console.log(group)
        groups += alienDict[group] + " ";
    }

    document.getElementById("movers").innerText = groups;
    document.getElementById("direction").innerText = "Move to: " + eventCard.Direction;
    document.getElementById("eventName").innerText = eventCard.CardName;

    if (eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID === 3) {
        let direction = drawEventCardForRetreat();
        document.getElementById("eventDesc").innerText = "Place a noise marker in in each Corridor numbered " + direction.Direction + ". If a Corridor already contains a Noise marker, resolve and Encounter instead.";
    } else {
        document.getElementById("eventDesc").innerText = eventCard.AppCardText;
    }

    if (eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID === 1) {
        document.getElementById("addTokensDialog1").style.display = '';
        document.getElementById("eventModalOkButton").disabled = true;
        InfestDialogOpen = true;

    }




    /*else if(eventCard.AlienBagSpecialCase && eventCard.SpecialCaseID == 2){
        document.getElementById("addTokensDialog2").style.display = '';
    }*/
};
function drawEventCardForRetreat() {
    if (eventDrawPile.length === 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }
    let eventCard = eventDrawPile.pop()
    eventDiscardPile.push(eventCard)
    return eventCard;
}
function randomDirection() {
    let direction = drawEventCardForRetreat();
    document.getElementById("randomDirection").innerText = direction.Direction;

}
function peekEventCard() {
    document.getElementById("peekDialog").style.display = '';
    if (eventDrawPile.length === 0) {
        eventDrawPile.push(...eventDiscardPile);
        eventDiscardPile = [];
        shuffleEventDeck()
    }
    console.log(eventDrawPile)
    let topEventCard = eventDrawPile[eventDrawPile.length - 1];
    let alienGroups = " ";
    for (let group of topEventCard.Movers) {
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

// Panic Cards
function resolvePanicCard() {

    if (panicDrawPile.length === 0) {
        panicDrawPile.push(...panicDiscardPile)
        panicDiscardPile = []
        shufflePanicDeck()
    }
    let drawnCard = panicDrawPile.pop()
    console.log(drawnCard);

    console.log("discarding card")
    panicDiscardPile.push(drawnCard);

    document.getElementById("panicName").innerText = drawnCard.PanicName;
    document.getElementById("panicLevelTitle").innerText = "Insanity Level: "
    document.getElementById("panicLevel").innerText = drawnCard.InsanityLevel + "+"

    if(drawnCard.SpecialRuleId === 1) {
        let randomCorridor = drawEventCardForRetreat()
        document.getElementById("panicDesc").innerText = drawnCard.AppText + " " + randomCorridor.Direction;
    } else {
        document.getElementById("panicDesc").innerText = drawnCard.AppText;
    }

}


// Misc functions
function setPlayerState(color) {

    let playerElement = "player-" + color
    if(players[color].active === false) {
        players[color].active = true;

        if(enemyType === VoidSeeders) {
        addTokensToVoidSeederBag(color, 1)
        }

        document.getElementById(playerElement).innerText = playerColors[color] + ": Active";
        } else {
        players[color].active = false;

        if(enemyType === VoidSeeders) {
        removeTokensFromVoidSeekerBag(color, 1)
        }

        document.getElementById(playerElement).innerText = playerColors[color] + ": Inactive";
        }

    shuffleBag();

}
function rollForNoise() {
    shuffle(noiseDie)
    let dieResult = noiseDie[0];

    if(dieResult === 5) {
        document.getElementById("corridorNumber").style.display = 'none';
        document.getElementById("noiseMessage").style.display = '';
        document.getElementById("noiseMessage").innerText = "DANGER"
        document.getElementById("noiseMessage").style.color = 'darkred'
    } else if(dieResult === 6 ) {
        document.getElementById("corridorNumber").style.display = 'none';
        document.getElementById("noiseMessage").style.display = '';
        document.getElementById("noiseMessage").innerText = "BLANK"
        document.getElementById("noiseMessage").style.color = 'black'
    } else {
        document.getElementById("noiseMessage").style.display = 'none';
        document.getElementById("corridorNumber").style.display = '';
        document.getElementById("corridorNumber").innerText = dieResult.toString();

    }



}

function setEnemy(enemyId) {
    enemyType = enemyId;
}



function fullScreen() {

    var b = document.documentElement;

    if (fullscreen === false) {
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
function shuffle(array) {
    console.log("S H U F F L E")
    let i, j = 0, temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
};
