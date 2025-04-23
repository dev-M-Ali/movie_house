import Link from "next/link"

export default function MovieCard(props) {
    return <div>
        <h2>{props.title}</h2>
        <h3>{props.genre}</h3>
        <h3>{props.rating}</h3>
        <Link href={"/movies/" + props.id}>
            <button>Click here for details!</button>
        </Link>
    </div>
}