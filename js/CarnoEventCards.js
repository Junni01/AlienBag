const carnoEventCards = [
    {
        "ID": 1,
        "Movers": [1,3],
        "Direction": 1,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": true,
        "BreederMove": false,
        "Queenmove": false,
        "CardName": "Rampart Mutation",
        "RealCardText": "All Characters draw 4 cards from their Action deck and Scan each Contamination card drawn. If there it at least 1 INFECTED result, the Character gets a Mutation marker. Discard all drawn cards.",
        "AppCardText": "All Characters draw 4 cards from their Action deck and Scan each Contamination card drawn. If there it at least 1 INFECTED result, the Character gets a Mutation marker. Discard all drawn cards.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 2,
        "Movers": [3,4],
        "Direction": 2,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Rampart Mutation",
        "RealCardText": "All Characters draw 4 cards from their Action deck and Scan each Contamination card drawn. If there it at least 1 INFECTED result, the Character gets a Mutation marker. Discard all drawn cards.",
        "AppCardText": "All Characters draw 4 cards from their Action deck and Scan each Contamination card drawn. If there it at least 1 INFECTED result, the Character gets a Mutation marker. Discard all drawn cards.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 3,
        "Movers": [3,5],
        "Direction": 3,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": false,
        "Queenmove": true,
        "CardName": "Reawakening",
        "RealCardText": "In each Room with a Carcass token (not in a Character's Hands), replace 1 Carcass token with 1 Shambler. If there is a Character in any of these Rooms, perform 1 Intruder Attack for each Shambler placed that way.",
        "AppCardText": "In each Room with a Carcass token (not in a Character's Hands), replace 1 Carcass token with 1 Shambler. If there is a Character in any of these Rooms, perform 1 Intruder Attack for each Shambler placed that way.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 4,
        "Movers": [1,5],
        "Direction": 1,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": false,
        "BreederMove": false,
        "Queenmove": true,
        "CardName": "Reawakening",
        "RealCardText": "In each Room with a Carcass token (not in a Character's Hands), replace 1 Carcass token with 1 Shambler. If there is a Character in any of these Rooms, perform 1 Intruder Attack for each Shambler placed that way.",
        "AppCardText": "In each Room with a Carcass token (not in a Character's Hands), replace 1 Carcass token with 1 Shambler. If there is a Character in any of these Rooms, perform 1 Intruder Attack for each Shambler placed that way.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 5,
        "Movers": [1,3,5],
        "Direction": 3,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": true,
        "BreederMove": false,
        "Queenmove": true,
        "CardName": "Lurking",
        "RealCardText": "Remove from the board all Carnomorphs which are not in a Room with any Character except Metagorgers. Put their respective tokens into the Intruder bag.",
        "AppCardText": "Remove from the board all Carnomorphs which are not in a Room with any Character except Metagorgers. Add their respective tokens into the Intruder bag.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 6,
        "Movers": [3,4,5],
        "Direction": 4,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Lurking",
        "RealCardText": "Remove from the board all Carnomorphs which are not in a Room with any Character except Metagorgers. Put their respective tokens into the Intruder bag.",
        "AppCardText": "Remove from the board all Carnomorphs which are not in a Room with any Character except Metagorgers. Add their respective tokens into the Intruder bag.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 7,
        "Movers": [1,4],
        "Direction": 3,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": false,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Stalking",
        "RealCardText": "Move all Shamblers, Fleshbeasts and the Butcher to any neighboring Room with a Character, if any. If there are several Rooms possible, move the Carnomorph to the Room with the lowest Number.",
        "AppCardText": "Move all Shamblers, Fleshbeasts and the Butcher to any neighboring Room with a Character, if any. If there are several Rooms possible, move the Carnomorph to the Room with the lowest Number.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 8,
        "Movers": [1,5],
        "Direction": 4,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": false,
        "BreederMove": false,
        "Queenmove": true,
        "CardName": "Stalking",
        "RealCardText": "Move all Shamblers, Fleshbeasts and the Butcher to any neighboring Room with a Character, if any. If there are several Rooms possible, move the Carnomorph to the Room with the lowest Number.",
        "AppCardText": "Move all Shamblers, Fleshbeasts and the Butcher to any neighboring Room with a Character, if any. If there are several Rooms possible, move the Carnomorph to the Room with the lowest Number.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 9,
        "Movers": [1,3,4,5],
        "Direction": 2,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Airlock Procedure Glitch",
        "RealCardText": "Start the Emergency Airlock Procedure in the Yellow Room with the highest Number.",
        "AppCardText": "Start the Emergency Airlock Procedure in the Yellow Room with the highest Number.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 10,
        "Movers": [3,4],
        "Direction": 2,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Generator Overload",
        "RealCardText": "If there are at least 3 Malfunction markers on the board, start the Self-Destruct Sequence. Remove this card from the game and reshuffle the event deck.",
        "AppCardText": "If there are at least 3 Malfunction markers on the board, start the Self-Destruct Sequence. ",
        "RemoveAndReshuffleDeck": true,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 11,
        "Movers": [3,4,5],
        "Direction": 1,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Marked Prey",
        "RealCardText": "All Characters in a Room with a Heavy Object (Intruder Egg, Intruder Carcass or Character Corpse) or carrying such an Object get a Slime marker.",
        "AppCardText": "All Characters in a Room with a Heavy Object (Intruder Egg, Intruder Carcass or Character Corpse) or carrying such an Object get a Slime marker.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 12,
        "Movers": [1,3,4,5],
        "Direction": 4,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Evacuation Hatches Jam",
        "RealCardText": "Place a Malfunction marker in Evacuation Sections A and B",
        "AppCardText": "Place a Malfunction marker in Evacuation Sections A and B.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 13,
        "Movers": [1,3,4],
        "Direction": 1,
        "LarvaMove": true,
        "CreeperMove": true,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Quarantine Procedure",
        "RealCardText": "Close all Doors in Corridors connected to Rooms containing each Character with a Slime marker.",
        "AppCardText": "Close all Doors in Corridors connected to Rooms containing each Character with a Slime marker.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 14,
        "Movers": [3,4,5],
        "Direction": 3,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Growl",
        "RealCardText": "Place a Noise marker in each Corridor connected to every Room with a Carnomorph.",
        "AppCardText": "Place a Noise marker in each Corridor connected to every Room with a Carnomorph.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 15,
        "Movers": [5],
        "Direction": 2,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": false,
        "BreederMove": false,
        "Queenmove": true,
        "CardName": "Scavenging Biomatter",
        "RealCardText": "Move any Carnomorphs (except the Butcher) to any neighboring Rooms with a Heavy Object (Intruder Egg, Intruder Carcass or Character Corpse). Objects in Characters' Hands count. If there are several Rooms possible, move the Carnomorphs to the Room with the lowest Number. ",
        "AppCardText": "Move any Carnomorphs (except the Butcher) to any neighboring Rooms with a Heavy Object (Intruder Egg, Intruder Carcass or Character Corpse). Objects in Characters' Hands count. If there are several Rooms possible, move the Carnomorphs to the Room with the lowest Number. ",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 16,
        "Movers": [3,4],
        "Direction": 4,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Structural Weakness",
        "RealCardText": "Put a Malfunction marker on each discovered White Room. Remove this card from the game and reshuffle the Event deck.",
        "AppCardText": "Put a Malfunction marker on each discovered White Room.",
        "RemoveAndReshuffleDeck": true,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 17,
        "Movers": [3,4],
        "Direction": 3,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Emergency Protocol Failure",
        "RealCardText": "Remove the Escape Pod with the highest number from Evacuation Section B, Remove this card from the game and reshuffle the Event deck.",
        "AppCardText": "Remove the Escape Pod with the highest number from Evacuation Section B.",
        "RemoveAndReshuffleDeck": true,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 18,
        "Movers": [3,4,5],
        "Direction": 2,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": true,
        "CardName": "Chemical Fire",
        "RealCardText": "Place a Malfunction marker in the Room with the highest Number containing a Fire marker. Remove that fire marker. Place a Fire marker in all neighboring Rooms. Fire doesn't spread through Technical Corridors or Closed Doors. Reshuffle this card into Event Deck.",
        "AppCardText": "Place a Malfunction marker in the Room with the highest Number containing a Fire marker. Remove that fire marker. Place a Fire marker in all neighboring Rooms. Fire doesn't spread through Technical Corridors or Closed Doors.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": true,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 19,
        "Movers": [3,4],
        "Direction": 1,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": true,
        "Queenmove": false,
        "CardName": "Ammunition Meltdown",
        "RealCardText": "Set the item counter to 0 in the Red Room with the lowest Number. Place a Fire marker in this and all neighboring Rooms. Fire doesn't spread through Technical Corridors or Closed Doors. Remove this card from the game and reshuffle the Event deck.",
        "AppCardText": "Set the item counter to 0 in the Red Room with the lowest Number. Place a Fire marker in this and all neighboring Rooms. Fire doesn't spread through Technical Corridors or Closed Doors.",
        "RemoveAndReshuffleDeck": true,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    },
    {
        "ID": 20,
        "Movers": [3],
        "Direction": 4,
        "LarvaMove": false,
        "CreeperMove": false,
        "AdultMove": true,
        "BreederMove": false,
        "Queenmove": false,
        "CardName": "Beast on the Prowl",
        "RealCardText": "If the Butcher is on the board and isn't in a Room with any Character, place it in a room containing a Character with a Slime marker. If several Characters have a Slime marker, choose the first Character in turn order. If the Butcher is not on the board, all Characters with a Slime marker roll for Noise.",
        "AppCardText": "If the Butcher is on the board and isn't in a Room with any Character, place it in a room containing a Character with a Slime marker. If several Characters have a Slime marker, choose the first Character in turn order. If the Butcher is not on the board, all Characters with a Slime marker roll for Noise.",
        "RemoveAndReshuffleDeck": false,
        "ReshuffleBack": false,
        "AlienBagSpecialCase": false,
        "SpecialCaseID": 0
    }
]