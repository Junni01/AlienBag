const carnoAttackCards = [
    {
        "ID": 1,
        "AttackName": "Devour",
        "AttackDescriptionApp": "If the Character has at least 1 Serious Wound, they die. If not, the Character suffers 1 Serious Wound. The Butcher removes all its Injury Markers.",
        "AttackDescriptionCard": "If the Character has at least 1 Serious Wound, they die. If not, the Character suffers 1 Serious Wound. The Butcher removes all its Injury Markers.",
        "AlienHealth": 3,
        "AlienHealthMetagorger": 0,
        "AttackingTypes": [5],
        "SpecialRule": 0
    },
    {
        "ID": 2,
        "AttackName": "Devour",
        "AttackDescriptionApp": "If the Character has at least 1 Serious Wound, they die. If not, the Character suffers 1 Serious Wound. The Butcher removes all its Injury Markers.",
        "AttackDescriptionCard": "If the Character has at least 1 Serious Wound, they die. If not, the Character suffers 1 Serious Wound. The Butcher removes all its Injury Markers.",
        "AlienHealth": 5,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [5],
        "SpecialRule": 0
    },
    {
        "ID": 3,
        "AttackName": "Spawn",
        "AttackDescriptionApp": "Place a Metagorger miniature in the Room. The Character gets a Slime marker.",
        "AttackDescriptionCard": "Place a Metagorger miniature in the Room. The Character gets a Slime marker.",
        "AlienHealth": 4,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4],
        "SpecialRule": 0
    },
    {
        "ID": 4,
        "AttackName": "Spawn",
        "AttackDescriptionApp": "Place a Metagorger miniature in the Room. The Character gets a Slime marker.",
        "AttackDescriptionCard": "Place a Metagorger miniature in the Room. The Character gets a Slime marker.",
        "AlienHealth": 7,
        "AlienHealthMetagorger": 0,
        "AttackingTypes": [3,4],
        "SpecialRule": 0
    },
    {
        "ID": 5,
        "AttackName": "Bash",
        "AttackDescriptionApp": "The Caracter suffers 1 Serious Wound and get 1 Contamination Card.",
        "AttackDescriptionCard": "The Caracter suffers 1 Serious Wound and get 1 Contamination Card.",
        "AlienHealth": 5,
        "AlienHealthMetagorger": 0,
        "AttackingTypes": [4,5],
        "SpecialRule": 0
    },
    {
        "ID": 6,
        "AttackName": "Bash",
        "AttackDescriptionApp": "The Caracter suffers 1 Serious Wound and get 1 Contamination Card.",
        "AttackDescriptionCard": "The Caracter suffers 1 Serious Wound and get 1 Contamination Card.",
        "AlienHealth": 0,
        "AlienHealthMetagorger": 2,
        "AttackingTypes": [4,5],
        "SpecialRule": 0
    },
    {
        "ID": 7,
        "AttackName": "Regurgiate",
        "AttackDescriptionApp": "The Character gets a Slime marker and 1 Contamination Card. Place an Intruder Carcass token in the Room.",
        "AttackDescriptionCard": "The Character gets a Slime marker and 1 Contamination Card. Place an Intruder Carcass token in the Room.",
        "AlienHealth": 5,
        "AlienHealthMetagorger": 2,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 8,
        "AttackName": "Regurgiate",
        "AttackDescriptionApp": "The Character gets a Slime marker and 1 Contamination Card. Place an Intruder Carcass token in the Room.",
        "AttackDescriptionCard": "The Character gets a Slime marker and 1 Contamination Card. Place an Intruder Carcass token in the Room.",
        "AlienHealth": 4,
        "AlienHealthMetagorger": 3,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 9,
        "AttackName": "Slash",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AlienHealth": 0,
        "AlienHealthMetagorger": 2,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 10,
        "AttackName": "Slash",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AlienHealth": 6,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 11,
        "AttackName": "Slash",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets 1 Contamination Card.",
        "AlienHealth": 3,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 12,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AlienHealth": 4,
        "AlienHealthMetagorger": 2,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 13,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AlienHealth": 5,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 14,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AlienHealth": 8,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 15,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has 2 Serious Wounds, they die. If not, they suffer 1 Serious Wound.",
        "AlienHealth": 6,
        "AlienHealthMetagorger": 3,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 16,
        "AttackName": "Whiplash",
        "AttackDescriptionApp": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AlienHealth": 7,
        "AlienHealthMetagorger": 3,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 17,
        "AttackName": "Whiplash",
        "AttackDescriptionApp": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AlienHealth": 0,
        "AlienHealthMetagorger": 0,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 18,
        "AttackName": "Whiplash",
        "AttackDescriptionApp": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AlienHealth": 0,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 19,
        "AttackName": "Whiplash",
        "AttackDescriptionApp": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AlienHealth": 8,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 20,
        "AttackName": "Whiplash",
        "AttackDescriptionApp": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AttackDescriptionCard": "The Character suffers 2 Light Wounds and 1 Contamination Card.",
        "AlienHealth": 4,
        "AlienHealthMetagorger": 1,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    }
]