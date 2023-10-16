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
    abilityMod: "Dexterity",
    modifier: 5,
  },
  {
    skill: "Animal Handling",
    abilityMod: "Wisdom",
    modifier: 3,
  },
  {
    skill: "Arcana",
    abilityMod: "Intelligence",
    modifier: 2,
  },
  {
    skill: "Athletics",
    abilityMod: "Strength",
    modifier: 4,
  },
  {
    skill: "Deception",
    abilityMod: "Charisma",
    modifier: 1,
  },
  {
    skill: "History",
    abilityMod: "Intelligence",
    modifier: 2,
  },
  {
    skill: "Insight",
    abilityMod: "Wisdom",
    modifier: 3,
  },
  {
    skill: "Intimidation",
    abilityMod: "Charisma",
    modifier: 1,
  },
  {
    skill: "Investigation",
    abilityMod: "Intelligence",
    modifier: 2,
  },
  {
    skill: "Medicine",
    abilityMod: "Wisdom",
    modifier: 3,
  },
  {
    skill: "Nature",
    abilityMod: "Intelligence",
    modifier: 2,
  },
  {
    skill: "Perception",
    abilityMod: "Wisdom",
    modifier: 3,
  },
  {
    skill: "Performance",
    abilityMod: "Charisma",
    modifier: 1,
  },
  {
    skill: "Persuasion",
    abilityMod: "Charisma",
    modifier: 1,
  },
  {
    skill: "Religion",
    abilityMod: "Intelligence",
    modifier: 2,
  },
  {
    skill: "Sleight of Hand",
    abilityMod: "Dexterity",
    modifier: 5,
  },
  {
    skill: "Stealth",
    abilityMod: "Dexterity",
    modifier: 5,
  },
  {
    skill: "Survival",
    abilityMod: "Wisdom",
    modifier: 3,
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
