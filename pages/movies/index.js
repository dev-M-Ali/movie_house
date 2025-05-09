import MovieCard from "@/components/movieCard"
import { readDataFromFile } from "@/data/data-utility"
import { notFound } from "next/navigation"
import { useRef, useState } from "react"
import { Row, Col, Select, Button, Typography, Space } from 'antd';


//Since we also have to add filtering by genre, it can be done by simply redirecting to genres/[id].
//But since the question does not mention routing to that page, we assume it is 
export default function AllMovies(props) {
    const allMovies = props.movies
    const genres = props.genres
    const genreIdFilter = useRef()
    const [moviesToRenderState, setMoviesState] = useState(allMovies)
    const filterMovies = () => {
        //"null" because the attributes passed to HTML tags become strings
        if (genreIdFilter.current.value !== "null")
        {
            //Using 'allMovies', since it contains ALL the movies received by the component
            const filtered = allMovies.filter(movie => {
                return movie.genreId === genreIdFilter.current.value
            })
            setMoviesState(filtered)
        }
        else
            setMoviesState([...allMovies])
    }

    const { Option } = Select;
    const { Title } = Typography;

    return (
        <div style={{ padding: '24px' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <Row gutter={16} align="middle">
                    <Col flex="none">
                        <Title level={5} style={{ margin: 0 }}>Filter by genre:</Title>
                    </Col>
                    <Col flex="auto">
                        <select id='genreFilter' ref={genreIdFilter}>
                            <option value="null">No Filter</option>
                            {
                                //Using {null} in the above tag makes things complicated. Since tag attributes require strings, {null} is converted to an empty string "" (note that its not "null"), resulting in confusion.
                                genres.map(genre => {
                                    return <option value={genre.id}>{genre.name}</option>
                                })
                            }
                        </select>
                    </Col>
                    <Col flex="none">
                        <Button type="primary" onClick={filterMovies}>
                            Filter
                        </Button>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    {moviesToRenderState.map(movie => (
                        <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                genre={movie.genre}
                                rating={movie.rating}
                            />
                        </Col>
                    ))}
                </Row>
            </Space>
        </div>
    );
}

export async function getStaticProps() {
    const data = await readDataFromFile()

    if (data)
    {
        //Making a new array where each movie object includes the name of its genre, not just its ID
        const movies = data.movies
        const genres = data.genres

        for (const movie of movies)
            movie.genre = genres.find(genre => {
                return genre.id === movie.genreId
            }).name

        return {
            props: {
                movies,
                genres
            },
            revalidate: 1200,
            notFound: !Boolean(movies)
        }
    }
    else
    {
        return {
            notFound: true
        }
    }
}