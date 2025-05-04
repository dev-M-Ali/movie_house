import Link from "next/link"
import style1 from './404.module.css'
import style2 from './404_Dark.module.css'
import { useContext } from "react"
import ThemeContext from "@/store/theme-context"

export default function NotFoundPage() {

    const themeCtx = useContext(ThemeContext)
    let styles = null
    if (themeCtx.lightModeState)
    {
        styles = style1
    }
    else
    {
        styles = style2
    }

    //I hope this is user-friendly enough
    return <div className={styles.container}>
        <h1 className={styles.title}>We could not find what you are looking for.</h1>
        <h1 className={styles.emoji}>＞﹏＜</h1>

        <Link href="/"><button className={styles.button}>Let's go home!</button></Link>

        <h1 className={styles.message}>Still here? We understand, everyone likes our company!</h1>
        <h1 className={styles.happyEmoji}>＼(((￣(￣(￣▽￣)￣)￣)))／</h1>
    </div>

}