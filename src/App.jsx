import './App.css'
import CharacterSheet from './Components/CharacterSheet'

const jim = {
name: "Jim Fisher",
level: 2,
background: "Fisher",
race: "human",
alignment: "Chaotic Neutral",
xp: 47
}


function App() {

  return (
    <>
     <CharacterSheet character={jim}/>
    </>
  )
}

export default App
