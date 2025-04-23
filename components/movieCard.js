import Link from "next/link"
import styles from './MovieCard.module.css'

export default function MovieCard(props) {
    return <div className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
        <h3 className={styles.genre}>{props.genre}</h3>
        <h3 className={styles.rating}>{props.rating}</h3>
        <Link href={"/movies/" + props.id}>
            <button className={styles.button}>Click here for details!</button>
        </Link>
    </div>
}