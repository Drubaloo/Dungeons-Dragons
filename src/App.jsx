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

}


function App() {

  return (
    <>
     <CharacterSheet character={jim}/>
    </>
  )
}

export default App
