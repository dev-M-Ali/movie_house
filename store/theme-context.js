const { createContext, useState } = require("react");
import { ConfigProvider, theme } from 'antd';

const ThemeContext = createContext({
    lightModeState: true,
    enableLightMode: function () { },
    enableDarkMode: function () { }
})

export function ThemeProvider(props) {
    const [lightModeState, setLightMode] = useState(true)

    function enableLightMode() {
        document.body.style.background = 'white';
        setLightMode(true)
        //console.log("Switching to light mode")
    }

    function enableDarkMode() {
        document.body.style.background = 'black';
        setLightMode(false)
        //console.log("Switching to dark mode")
    }

    const ctx = {
        lightModeState,
        enableLightMode,
        enableDarkMode
    }

    //console.log("LightModeState's value is currently: ", lightModeState)
    return (
        <ConfigProvider theme={{ algorithm: lightModeState ? theme.defaultAlgorithm : theme.darkAlgorithm }}>
            <ThemeContext.Provider value={ctx}>
                {props.children}
            </ThemeContext.Provider>
        </ConfigProvider>
    )
}

export default ThemeContext;