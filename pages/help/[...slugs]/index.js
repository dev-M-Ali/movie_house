import styles from './help.module.css';

export default function Help() {
    return (
        <div className={styles.helpContainer}>
            <section className={styles.section}>
                <h2>FAQs</h2>
                <ul className={styles.faqList}>
                    <li>
                        <span className={styles.question}>Q: How do I reset my password?</span>
                        <span className={styles.answer}>A: Go to settings and click "Reset Password".</span>
                    </li>
                    <li>
                        <span className={styles.question}>Q: Where can I view my order history?</span>
                        <span className={styles.answer}>A: Navigate to your profile and select "Order History".</span>
                    </li>
                </ul>
            </section>
            <section className={styles.section}>
                <h2>Contact Us</h2>
                <div className={styles.contactInfo}>
                    <p>Email: support@example.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Hours: Mon–Fri, 9am–5pm (EST)</p>
                </div>
            </section>
            <section className={styles.section}>
                <h2>Privacy Policy</h2>
                <div className={styles.privacyText}>
                    <p>We value your privacy. Your personal data is stored securely and never shared without consent.</p>
                    <p>See our full policy for details on data handling and your rights.</p>
                </div>
            </section>
        </div>
    );
}