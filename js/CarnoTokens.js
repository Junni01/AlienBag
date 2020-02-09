const carnoAlienDict = {
    0: "Blank",
    1: "Metagorger",
    2: "Metagorger",
    3: "Shambler",
    4: "Fleshbeast",
    5: "Butcher"
};


const carnoBlankToken =  {
        "ID": 1,
        "AlienName": "Blank",
        "AlienId": 0,
        "DangerLevel": 0,
        "BagDevelopmentEffectTextCard": "Remove from the Board all Shamblers which are not in a Room with any Character. Add their tokens to the bag. Add 1 Metagorger to thew Intruder bag. The all players performs a noise roll in order, except if their Character is already in Combat with an Intruder. Return the Blank token to the bag.",
        "BagDevelopmentEffectTextApp": "Remove from the Board all Shamblers which are not in a Room with any Character. Add their tokens to the bag.  The all players performs a noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Place a Noise marker in each Corridor connected to the Room where the Encounter took place. ",
        "Image Path": "~/img"
    }

const blueMetagorgerTokens = [
    {
        "ID": 2,
        "AlienName": "Metagorger",
        "AlienId": 1,
        "DangerLevel": 1,
        "BagDevelopmentEffectTextCard": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder. Remove this token from the Intruder bag and add 1 Metagorger token to the Intruder bag.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Blue Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 3,
        "AlienName": "Metagorger",
        "AlienId": 1,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder. Remove this token from the Intruder bag and add 1 Metagorger token to the Intruder bag.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Blue Metagorger",
        "Image Path": "~/img"
    }
    ];
const redMetagorgerTokens = [
    {
        "ID": 4,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 5,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 6,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 7,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 8,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 9,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 10,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    },
    {
        "ID": 11,
        "AlienName": "Metagorger",
        "AlienId": 2,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. Return the Metagorger token to the bag.",
        "BagDevelopmentEffectTextApp": "Place a Metagorger miniature in each Room already containing a Metagorger (even in Combat) and/or a Heavy Object (even if that Object is in a Character's Hands!). If the Nest is explored and not destroyed, also place one Metagorger there. The metagorgers do not perform surpise attacks.",
        "SummoningText": "Red Metagorger",
        "Image Path": "~/img"
    }]
const shamblerTokens = [
    {
        "ID": 12,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 13,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 14,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 15,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 2,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 16,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 17,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 18,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 19,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 20,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 21,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 22,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    },
    {
        "ID": 23,
        "AlienName": "Shambler",
        "AlienId": 3,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Return the Shambler token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Shambler",
        "Image Path": "~/img"
    } ]
const fleshBeastTokens = [
    {
        "ID": 24,
        "AlienName": "Fleshbeast",
        "AlienId": 4,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Return the Fleshbeast token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Fleshbeast",
        "Image Path": "~/img"
    },
    {
        "ID": 25,
        "AlienName": "Fleshbeast",
        "AlienId": 4,
        "DangerLevel": 3,
        "BagDevelopmentEffectTextCard": "Return the Fleshbeast token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Fleshbeast",
        "Image Path": "~/img"
    },
    {
        "ID": 26,
        "AlienName": "Fleshbeast",
        "AlienId": 4,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Return the Fleshbeast token to the bag. All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "BagDevelopmentEffectTextApp": "All players perform a Noise roll in order, except if their Character is already in Combat with an Intruder.",
        "SummoningText": "Fleshbeast",
        "Image Path": "~/img"
    } ];

const butcherToken = {
        "ID": 27,
        "AlienName": "Butcher",
        "AlienId": 5,
        "DangerLevel": 4,
        "BagDevelopmentEffectTextCard": "Place the Butcher miniature in a Room containing a Character with a Slime marker and resolve an Encounter. If there are more than one Character with a Slime marker, the one with the fewest cards in hand is affected. In case of tie, use the Character order. If there is no Character with a Slime marker, the Butcher appears in the Room containing the first player. Remove the Butcher token from the bag.",
        "BagDevelopmentEffectTextApp": "Place the Butcher miniature in a Room containing a Character with a Slime marker and resolve an Encounter. If there are more than one Character with a Slime marker, the one with the fewest cards in hand is affected. In case of tie, use the Character order. If there is no Character with a Slime marker, the Butcher appears in the Room containing the first player.",
        "SummoningText": "Butcher",
        "Image Path": ""
    };