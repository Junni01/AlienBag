const voidSeederAttackCards = [
    {
        "ID": 1,
        "AttackName": "Frenzy",
        "AttackDescriptionApp": "Any Character in the Room who has suffered at least 1 Serious Wound dies. All other Characters in this Room suffer 1 Serious Wound and increase their insanity level.",
        "AttackDescriptionCard": "Any Character in the Room who has suffered at least 1 Serious Wound dies. All other Characters in this Room suffer 1 Serious Wound and increase their insanity level.",
        "AlienHealth": 2,
        "AttackingTypes": [2,3],
        "SpecialRule": 0
    },
    {
        "ID": 2,
        "AttackName": "Frenzy",
        "AttackDescriptionApp": "Any Character in the Room who has suffered at least 1 Serious Wound dies. All other Characters in this Room suffer 1 Serious Wound and increase their insanity level.",
        "AttackDescriptionCard": "Any Character in the Room who has suffered at least 1 Serious Wound dies. All other Characters in this Room suffer 1 Serious Wound and increase their insanity level.",
        "AlienHealth": 6,
        "AttackingTypes": [2,3],
        "SpecialRule": 0
    },
    {
        "ID": 3,
        "AttackName": "Scratch",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AlienHealth": 5,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 4,
        "AttackName": "Scratch",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AlienHealth": 6,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 5,
        "AttackName": "Scratch",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AlienHealth": 4,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 6,
        "AttackName": "Scratch",
        "AttackDescriptionApp": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AttackDescriptionCard": "The Character suffers 1 Light Wound and gets a Contamination card.",
        "AlienHealth": 0,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 7,
        "AttackName": "Duplicate",
        "AttackDescriptionApp": "Take the Void Seeder miniature corresponding to the symbol of the Character's Insanity level on the Insanity track and place it in the Room. This Void Seeder doesn't perform a Surprise Attack nor attacks during the current Attack step.",
        "AttackDescriptionCard": "Take the Void Seeder miniature corresponding to the symbol of the Character's Insanity level on the Insanity track and place it in the Room. This Void Seeder doesn't perform a Surprise Attack nor attacks during the current Attack step.",
        "AlienHealth": 3,
        "AttackingTypes": [2,3],
        "SpecialRule": 0
    },
    {
        "ID": 8,
        "AttackName": "Duplicate",
        "AttackDescriptionApp": "Take the Void Seeder miniature corresponding to the symbol of the Character's Insanity level on the Insanity track and place it in the Room. This Void Seeder doesn't perform a Surprise Attack nor attacks during the current Attack step.",
        "AttackDescriptionCard": "Take the Void Seeder miniature corresponding to the symbol of the Character's Insanity level on the Insanity track and place it in the Room. This Void Seeder doesn't perform a Surprise Attack nor attacks during the current Attack step.",
        "AlienHealth": 3,
        "AttackingTypes": [2,3],
        "SpecialRule": 0
    },
    {
        "ID": 9,
        "AttackName": "Terror",
        "AttackDescriptionApp": "The Character suffers 1 Serious Wound. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character suffers 1 Serious Wound. Draw and resolve a Panic card.",
        "AlienHealth": 4,
        "AttackingTypes": [4,5],
        "SpecialRule": 0
    },
    {
        "ID": 10,
        "AttackName": "Terror",
        "AttackDescriptionApp": "The Character suffers 1 Serious Wound. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character suffers 1 Serious Wound. Draw and resolve a Panic card.",
        "AlienHealth": 0,
        "AttackingTypes": [4,5],
        "SpecialRule": 0
    },
    {
        "ID": 11,
        "AttackName": "Braineating",
        "AttackDescriptionApp": "If player has at least 1 Serious Wound, they die. Otherwise, they suffer 2 Serious Wounds.",
        "AttackDescriptionCard": "If player has at least 1 Serious Wound, they die. Otherwise, they suffer 2 Serious Wounds.",
        "AlienHealth": 4,
        "AttackingTypes": [5],
        "SpecialRule": 0
    },
    {
        "ID": 12,
        "AttackName": "Braineating",
        "AttackDescriptionApp": "If player has at least 1 Serious Wound, they die. Otherwise, they suffer 2 Serious Wounds.",
        "AttackDescriptionCard": "If player has at least 1 Serious Wound, they die. Otherwise, they suffer 2 Serious Wounds.",
        "AlienHealth": 5,
        "AttackingTypes": [5],
        "SpecialRule": 0
    },
    {
        "ID": 13,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AlienHealth": 4,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 14,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AlienHealth": 3,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 15,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AlienHealth": 2,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 16,
        "AttackName": "Bite",
        "AttackDescriptionApp": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AttackDescriptionCard": "If the Character has at leat 2 Serious Wounds, they die. Otherwise, they suffer 1 Serious Wound.",
        "AlienHealth": 0,
        "AttackingTypes": [3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 17,
        "AttackName": "Fear",
        "AttackDescriptionApp": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AlienHealth": 5,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 18,
        "AttackName": "Fear",
        "AttackDescriptionApp": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AlienHealth": 4,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 19,
        "AttackName": "Fear",
        "AttackDescriptionApp": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AlienHealth": 2,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    },
    {
        "ID": 20,
        "AttackName": "Fear",
        "AttackDescriptionApp": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AttackDescriptionCard": "The Character gets a Contamination card. Draw and resolve a Panic card.",
        "AlienHealth": 2,
        "AttackingTypes": [2,3,4,5],
        "SpecialRule": 0
    }
]