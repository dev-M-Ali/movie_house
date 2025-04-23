import Link from "next/link"
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
    //I hope this is user-friendly enough
    return <div className={styles.container}>
        <h1 className={styles.title}>We could not find what you are looking for.</h1>
        <h1 className={styles.emoji}>＞﹏＜</h1>
        <Link href="/"><button className={styles.button}>Let's go home!</button></Link>
        <h1 className={styles.message}>Still here? We understand, everyone likes our company!</h1>
        <h1 className={styles.happyEmoji}>＼(((￣(￣(￣▽￣)￣)￣)))／</h1>
    </div>
}