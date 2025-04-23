import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";

export default function Director() {
    const router = useRouter()

    const fetcher = url => {
        return fetch(url).then(res => res.json())
    }

    const { data, error } = useSWR(router.isReady ? '/api/director/' + router.query.id : null, fetcher)

    if (!data)
        return <p>Loading</p>

    let directorInfo = data.directorInfo

    return <div>
        <h2>{directorInfo.name}</h2>
        <p>{directorInfo.biography}</p>
        <br />
        <ul>Movies directed:
            {directorInfo.moviesDirected.map(movie => {
                return <p>{movie.title} : {movie.releaseYear} : {movie.rating}</p>
            })}
        </ul>
    </div>
}

