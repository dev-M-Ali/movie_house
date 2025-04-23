import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import styles from './DirectorDetails.module.css';

export default function Director() {
    const router = useRouter()

    const fetcher = url => {
        return fetch(url).then(res => res.json())
    }

    const { data, error } = useSWR(router.isReady ? '/api/director/' + router.query.id : null, fetcher)

    if (!data)
        return <p>Loading</p>

    let directorInfo = data.directorInfo

    return <div className={styles.container}>
        <h2 className={styles.name}>{directorInfo.name}</h2>
        <p className={styles.biography}>{directorInfo.biography}</p>
        <br />
        <div>
            <h3 className={styles.moviesHeading}>Movies directed:</h3>
            <ul className={styles.moviesList}>
                {directorInfo.moviesDirected.map(movie => {
                    return (
                        <li className={styles.movieItem}>
                            <span className={styles.movieTitle}>{movie.title}</span>
                            <span className={styles.movieYear}>{movie.releaseYear}</span>
                            <span className={styles.movieRating}>{movie.rating}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
}

