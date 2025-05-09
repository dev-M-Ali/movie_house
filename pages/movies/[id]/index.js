import { getMovieWithDirector } from "@/data/data-utility"
import Link from "next/link"
import { Descriptions, Button, Typography } from 'antd';

export default function MovieDetails(props) {
    const movie = props.movie

    const { Text, Title } = Typography;

    return (
        <div style={{ padding: '24px' }}>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="Title">
                    <Title level={4} style={{ margin: 0 }}>{movie.title}</Title>
                </Descriptions.Item>

                <Descriptions.Item label="Description">
                    <Text>{movie.description}</Text>
                </Descriptions.Item>

                <Descriptions.Item label="Director">
                    <Link href={`/movies/${movie.id}/director`}>
                        <Button type="link" style={{ padding: 0 }}>
                            {movie.director} (Click for details)
                        </Button>
                    </Link>
                </Descriptions.Item>

                <Descriptions.Item label="Release Year">
                    <Text>{movie.releaseYear}</Text>
                </Descriptions.Item>

                <Descriptions.Item label="Rating">
                    <Text strong>{movie.rating}</Text>
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
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