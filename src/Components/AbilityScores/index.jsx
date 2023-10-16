import AbilityPartial from "./abilityPartial"

export default function AbilityScores({props}){
    
    return (
        <div>
            <h3>Ability Scores</h3>
            {props.map((ability, i) => {
                return <AbilityPartial props={ability} key={i}/>
            })}
        </div>
    )
}