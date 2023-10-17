export default function Inspiration({props}){
    return (
        <div>
            <h3>Inspiration</h3>
            <p>{props ? `Yes 🔴` : `No ⭕`}</p>
        </div>
    )
}