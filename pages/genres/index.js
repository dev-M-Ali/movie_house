import { getGenres } from "@/data/data-utility";
import Link from "next/link";
import { Typography, List, Space } from 'antd';

export default function Genres(props) {

    const { Title, Text } = Typography;

    return (
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <Title level={2} style={{ marginBottom: '24px' }}>
                Movie Genres
            </Title>

            <List
                dataSource={props.genres}
                renderItem={(genre) => (
                    <List.Item>
                        <Link href={`/genres/${genre.id}`}>
                            <Text style={{ fontSize: '16px' }}>{genre.name}</Text>
                        </Link>
                    </List.Item>
                )}
                style={{ marginBottom: '24px' }}
            />

            <Text type="secondary">
                Click a genre to filter movies by genre!
            </Text>
        </div>
    );
}

export async function getServerSideProps(context) {
    const genres = await getGenres()
    return {
        props: {
            genres
        }
    }
}