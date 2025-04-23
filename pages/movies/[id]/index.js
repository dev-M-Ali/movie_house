import { getMovieWithDirector } from "@/data/data-utility"
import Link from "next/link"
import styles from './MovieDetails.module.css';

export default function MovieDetails(props) {
    const movie = props.movie
    return <div className={styles.container}>
        <ul className={styles.detailsList}>
            <li className={styles.detailItem}>
                <span className={styles.label}>Title:</span>
                <span className={`${styles.value} ${styles.title}`}>{movie.title}</span>
            </li>
            <li className={styles.detailItem}>
                <span className={styles.label}>Description:</span>
                <span className={`${styles.value} ${styles.description}`}>{movie.description}</span>
            </li>
            <Link href={"/movies/" + movie.id + "/director"} className={styles.directorLink}>
                <span className={styles.directorName}>Director: {movie.director}.</span>
                <button className={styles.directorButton}>Click here to see the director's details.</button>
            </Link>
            <li className={styles.detailItem}>
                <span className={styles.label}>Release Year:</span>
                <span className={styles.value}>{movie.releaseYear}</span>
            </li>
            <li className={styles.detailItem}>
                <span className={styles.label}>Rating:</span>
                <span className={`${styles.value} ${styles.rating}`}>{movie.rating}</span>
            </li>
        </ul>
    </div>
}


export async function getStaticProps(context) {
    console.log("In movies/" + context.params.id + " -> Inside getStaticProps(...) ")

    const movie = await getMovieWithDirector(context.params.id)

    return {
        props: {
            movie
        },
        revalidate: 10
    }
}

//The first 4 movies shall be generated using SSG
export async function getStaticPaths() {
    const paths = [
        { params: { 'id': '1' } },
        { params: { 'id': '2' } },
        { params: { 'id': '3' } },
        { params: { 'id': '4' } }
    ]

    return { paths, fallback: 'blocking' }
}