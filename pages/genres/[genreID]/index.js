import { getMoviesByGenre } from "@/data/data-utility"
import MovieCard from "@/components/movieCard"

export default function MoviesByGenre(props) {
    return (<div>
        <ul>
            {props.movies.map(movie => {
                return <li><MovieCard id={movie.id} title={movie.title} genre={movie.genre} rating={movie.rating} /></li>
            })}
        </ul>
    </div>)
}

export async function getServerSideProps(context) {
    const genreID = context.params.genreID

    const movies = await getMoviesByGenre(genreID)

    return {
        props: {
            movies
        }
    }
}