export default function SavingThrows({ abilities, charClass, profBonus }) {
    return (
        <div>
            <h3>Saving Throws</h3>
            {abilities.map(ability => {

                return charClass.modifiers.includes(ability.ability) ? <p>{ability.modifier + profBonus > 0 ? `+ ${ability.modifier + profBonus} ` : ability.modifier + profBonus} {ability.ability} 🔴</p> : <p>{ability.modifier > 0 ? `+ ${ability.modifier}` : ability.modifier} {ability.ability}⭕</p>

            })}
        </div>
    )
}