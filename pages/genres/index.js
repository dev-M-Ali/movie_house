import { getGenres } from "@/data/data-utility";
import Link from "next/link";

export default function Genres(props) {
    return <div>
        <ul>
            {props.genres.map(genre => {
                return <li><Link href={"/genres/" + genre.id}>{genre.name}</Link></li>
            })}
        </ul>

        <p>Click a genre to filter movies by genre!</p>
    </div>
}

export async function getServerSideProps(context) {
    const genres = await getGenres()

    return {
        props: {
            genres
        }
    }
}