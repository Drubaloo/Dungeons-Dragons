export default function AbilityPartial({props}){
    console.log(props)
return (
    <div>
        <h4>{props.ability}</h4>
        <p>Score: {props.score}</p>
        <p>Modifier: {props.modifier > 0 ? `+ ${props.modifier}` : props.modifier}</p>
    </div>
)
}