import { getGenres } from "@/data/data-utility";
import Link from "next/link";
import styles from './Genres.module.css';

export default function Genres(props) {
    return <div className={styles.container}>
        <h1 className={styles.title}>Movie Genres</h1>
        <ul className={styles.genreList}>
            {props.genres.map(genre => {
                return <li className={styles.genreItem}>
                    <Link href={"/genres/" + genre.id} className={styles.genreLink}>{genre.name}</Link>
                </li>
            })}
        </ul>
        <p className={styles.helpText}>Click a genre to filter movies by genre!</p>
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