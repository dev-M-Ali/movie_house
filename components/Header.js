import { useContext } from "react"
import ThemeContext from "@/store/theme-context"
import styles from "./Header.module.css"
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"

export default function Header() {
    const themeCtx = useContext(ThemeContext)
    //console.log(themeCtx)
    console.log("LightModeState's value is currently: ", themeCtx.lightModeState)

    function modifyTheme(toggled) {
        console.log("Checkbox value:", toggled)

        if (toggled)
        {
            themeCtx.enableDarkMode()
        }
        else
        {
            themeCtx.enableLightMode()
        }

    }

    return (
        <header className={styles.header}>
            <h2 className={styles.title}>🎬 MovieHouse</h2>
            <div className={styles.toggleWrapper}>
                <Around
                    duration={750}
                    toggled={!themeCtx.lightModeState}
                    onToggle={modifyTheme}
                />
            </div>
        </header>
    )
}