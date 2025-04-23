import Head from "next/head";
import Image from "next/image";
import { Butcherman, Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getTrendingMovies } from "@/data/data-utility";
import { useRouter } from "next/router";
import Link from "next/link";

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

  return (
    <div>
      <ul>
        {props.trendingMovies.map(val => {
          return <li>
            <h4>{val.title}</h4>
            <h4>{val.rating}</h4>
            <Link href={"/movies/" + val.id}>
              <button>Click here for details!</button>
            </Link>
          </li>
        })}

      </ul>

      <button onClick={goToGenresPage}>Browse Genres</button>
    </div>
  );
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