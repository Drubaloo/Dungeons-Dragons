export default function ProficiencyBonus({ props }) {
    return (
        <div>
            <h4>Proficiency Bonus</h4>
            <p>{props > 0 ? `+ ${props}` : `${props}`}</p>
        </div>
    )
}