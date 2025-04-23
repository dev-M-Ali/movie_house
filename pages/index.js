import Head from "next/head";
import Image from "next/image";
import { Butcherman, Geist, Geist_Mono } from "next/font/google";
import { getTrendingMovies } from "@/data/data-utility";
import { useRouter } from "next/router";
import MovieCard from "@/components/movieCard";
import styles from './Home.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//We will use SSG for the home page
export default function Home(props) {

  //console.log(props.trendingMovies)
  const router = useRouter()

  const goToGenresPage = () => {
    router.push("/genres")
  }

  const goToAllMoviesPage = () => {
    router.push("/movies")
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Trending Movies</h1>
        <h2 className={styles.subtitle}>Check out what's popular right now</h2>
      </header>
      <ul className={styles.movieList}>
        {props.trendingMovies.map(movie => {
          return <li className={styles.movieItem}>
            <MovieCard id={movie.id} title={movie.title} genre={movie.genre} rating={movie.rating} />
          </li>
        })}
      </ul>
      <button onClick={goToGenresPage} className={styles.button}>Browse Genres</button>
      <button onClick={goToAllMoviesPage} className={styles.button}>Browse All Movies</button>
    </div>
  )
}

export async function getStaticProps() {
  const trendingMovies = await getTrendingMovies();

  //console.log("In / -> trendingMovies contains ")
  //console.log(trendingMovies)

  return {
    props: {
      trendingMovies: trendingMovies
    },
    revalidate: 1200,
    notFound: !Boolean(trendingMovies)
  }
}