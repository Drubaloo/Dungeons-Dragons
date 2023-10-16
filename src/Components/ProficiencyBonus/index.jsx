export default function ProficiencyBonus({props}){
    return (
        <p>{props > 0 ? `+ ${props}` : `${props}`} Proficiency Bonus</p>
    )
}