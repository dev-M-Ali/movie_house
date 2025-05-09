import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { Typography, List, Divider } from 'antd';

export default function Director() {
    const router = useRouter()

    const fetcher = url => {
        return fetch(url).then(res => res.json())
    }

    const { data, error } = useSWR(router.isReady ? '/api/director/' + router.query.id : null, fetcher)

    if (!data)
        return <p>Loading</p>

    let directorInfo = data.directorInfo

    const { Title, Text, Paragraph } = Typography;

    return (
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <Title level={2}>{directorInfo.name}</Title>
            <Paragraph>{directorInfo.biography}</Paragraph>

            <Divider />

            <Title level={4}>Movies Directed</Title>
            <List
                dataSource={directorInfo.moviesDirected}
                renderItem={movie => (
                    <List.Item>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <Text strong style={{ flex: 2 }}>{movie.title}</Text>
                            <Text style={{ flex: 1 }}>{movie.releaseYear}</Text>
                            <Text type="secondary" style={{ flex: 1 }}>
                                Rating: {movie.rating}
                            </Text>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}

