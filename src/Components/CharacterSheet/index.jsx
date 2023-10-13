export default function CharacterSheet({character}){

return (
    <div> 
        <h1>Character Sheet</h1>
        <h2>{character.name}</h2>
        <h3>Level: {character.level}</h3>
        <h3>Background: {character.background}</h3>
        <h3>Race: {character.race}</h3>
        <h3>Alignment: {character.alignment}</h3>
        <h3>{character.xp} xp</h3>
    </div>
)
}