export default function Skills({ skills, abilities, profBonus }) {
    console.log(abilities)
    return (
        <div>
            <h3>Skills</h3>
            {skills.map((skill, i) => {
                return <p key={i}>{abilities.find(ability => {
                    return ability.ability === skill.abilityMod
                }).modifier} {skill.skill}</p>
            })}
        </div>
    )
}