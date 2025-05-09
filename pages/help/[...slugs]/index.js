import { Typography, List, Divider } from 'antd';

export default function Help() {

    const { Title, Text, Paragraph } = Typography;

    return (
        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
            <section style={{ marginBottom: '32px' }}>
                <Title level={2}>FAQs</Title>
                <List
                    dataSource={[
                        {
                            question: 'Q: How do I reset my password?',
                            answer: 'A: Go to settings and click "Reset Password".'
                        },
                        {
                            question: 'Q: Where can I view my order history?',
                            answer: 'A: Navigate to your profile and select "Order History".'
                        }
                    ]}
                    renderItem={(item) => (
                        <List.Item>
                            <div>
                                <Text strong>{item.question}</Text>
                                <Paragraph style={{ marginTop: '4px', marginBottom: 0 }}>
                                    {item.answer}
                                </Paragraph>
                            </div>
                        </List.Item>
                    )}
                />
            </section>

            <Divider />

            <section style={{ marginBottom: '32px' }}>
                <Title level={2}>Contact Us</Title>
                <div>
                    <Paragraph>Email: support@example.com</Paragraph>
                    <Paragraph>Phone: +1 (555) 123-4567</Paragraph>
                    <Paragraph>Hours: Mon–Fri, 9am–5pm (EST)</Paragraph>
                </div>
            </section>

            <Divider />

            <section>
                <Title level={2}>Privacy Policy</Title>
                <div>
                    <Paragraph>
                        We value your privacy. Your personal data is stored securely and never shared without consent.
                    </Paragraph>
                    <Paragraph>
                        See our full policy for details on data handling and your rights.
                    </Paragraph>
                </div>
            </section>
        </div>
    );
}