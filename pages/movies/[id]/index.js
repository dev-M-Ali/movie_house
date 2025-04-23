import { getMovieWithDirector } from "@/data/data-utility"
import Link from "next/link"

export default function movie(props) {

    const movie = props.movie

    return <div>
        <ul>
            <li>Title: {movie.title}</li>
            <li>Description: {movie.description}</li>
            <Link href={"/movies/" + movie.id + "/director"} >
                Director: {movie.director}. <button>Click here to see the director's details.</button>
            </Link>
            <li>Release Year: {movie.releaseYear}</li>
            <li>Rating: {movie.rating}</li>
        </ul>
    </div >

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