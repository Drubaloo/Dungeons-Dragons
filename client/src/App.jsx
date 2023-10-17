import './App.css'
import CharacterSheet from './Components/CharacterSheet'

const jim = {
name: "Jim Fisher",
level: 2,
background: "Fisher",
race: "human",
alignment: "Chaotic Neutral",
xp: 47,
class: {
  name: "Bard",
  modifiers: ["Dexterity", "Charisma"]
},
abilities: [
  {
    ability: "Strength",
    score: 20,
    modifier: 5
  },
  {
    ability: "Dexterity",
    score: 14,
    modifier: 2
  },
  {
    ability: "Constution",
    score: 15,
    modifier: 2
  },
  {
    ability: "Intelligence",
    score: 13,
    modifier: 1
  },
  {
    ability: "Wisdom",
    score: 12,
    modifier: 1
  },
  {
    ability: "Charisma",
    score: 18,
    modifier: 4
  },  
],
inspiration: true,
profBonus: 2,
skills: [
  {
    skill: "Acrobatics",
    abilityMod: "Dexterity"
  },
  {
    skill: "Animal Handling",
    abilityMod: "Wisdom"
  },
  {
    skill: "Arcana",
    abilityMod: "Intelligence"
  },
  {
    skill: "Athletics",
    abilityMod: "Strength"
  },
  {
    skill: "Deception",
    abilityMod: "Charisma"
  },
  {
    skill: "History",
    abilityMod: "Intelligence"
  },
  {
    skill: "Insight",
    abilityMod: "Wisdom"
  },
  {
    skill: "Intimidation",
    abilityMod: "Charisma"
  },
  {
    skill: "Investigation",
    abilityMod: "Intelligence"
  },
  {
    skill: "Medicine",
    abilityMod: "Wisdom"
  },
  {
    skill: "Nature",
    abilityMod: "Intelligence"
  },
  {
    skill: "Perception",
    abilityMod: "Wisdom"
  },
  {
    skill: "Performance",
    abilityMod: "Charisma"
  },
  {
    skill: "Persuasion",
    abilityMod: "Charisma"
  },
  {
    skill: "Religion",
    abilityMod: "Intelligence"
  },
  {
    skill: "Sleight of Hand",
    abilityMod: "Dexterity"
  },
  {
    skill: "Stealth",
    abilityMod: "Dexterity"
  },
  {
    skill: "Survival",
    abilityMod: "Wisdom"
  },
]

}

function App() {

  return (
    <>
     <CharacterSheet character={jim}/>
    </>
  )
}

export default App
