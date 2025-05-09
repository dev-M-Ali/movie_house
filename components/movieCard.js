import Link from "next/link"
import { Card, Typography, Button } from 'antd';

export default function MovieCard(props) {

    const { Title, Text } = Typography;

    return (
        <Card
            style={{
                width: '100%',
                borderRadius: '8px',
                marginBottom: '16px',
            }}
            bodyStyle={{ padding: '16px' }}
        >
            <Title level={4} style={{ marginBottom: '8px' }}>
                {props.title}
            </Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
                {props.genre}
            </Text>
            <Text strong style={{ display: 'block', marginBottom: '12px' }}>
                {props.rating}
            </Text>
            <Link href={"/movies/" + props.id}>
                <Button type="primary">
                    Click here for details!
                </Button>
            </Link>
        </Card>
    );
}