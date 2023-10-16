export default function Inspiration({props}){
    return (
        <div>
            <h4>Inspiration</h4>
            <p>{props ? `Yes 🔴` : `No ⭕`}</p>
        </div>
    )
}