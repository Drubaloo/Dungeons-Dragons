import AbilityPartial from "./abilityPartial"

export default function AbilityScores({props}){
    
    return (
        <div>
            {props.map((ability, i) => {
                return <AbilityPartial props={ability} key={i}/>
            })}
        </div>
    )
}