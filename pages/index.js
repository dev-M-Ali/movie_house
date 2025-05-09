import Head from "next/head";
import Image from "next/image";
import { Butcherman, Geist, Geist_Mono } from "next/font/google";
import { getTrendingMovies } from "@/data/data-utility";
import { useRouter } from "next/router";
import MovieCard from "@/components/movieCard";
import { Layout, Typography, List, Button } from 'antd';


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

  const { Header, Content } = Layout;
  const { Title, Paragraph } = Typography;

  return (
    <Layout style={{ minHeight: '100vh', padding: '24px' }}>
      <Header style={{ background: 'transparent', padding: 0 }}>
        <Title level={1}>Trending Movies</Title>
        <Paragraph>Check out what's popular right now</Paragraph>
      </Header>

      <Content style={{ marginTop: '24px' }}>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={props.trendingMovies}
          renderItem={movie => (
            <List.Item>
              <MovieCard
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
                rating={movie.rating}
              />
            </List.Item>
          )}
        />

        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <Button type="primary" onClick={goToGenresPage}>
            Browse Genres
          </Button>
          <Button onClick={goToAllMoviesPage}>
            Browse All Movies
          </Button>
        </div>
      </Content>
    </Layout>
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