const { createContext, useState } = require("react");

const ThemeContext = createContext({
    lightModeState: true,
    enableLightMode: function () { },
    enableDarkMode: function () { }
})

export function ThemeProvider(props) {
    const [lightModeState, setLightMode] = useState(true)

    function enableLightMode() {
        setLightMode(true)
    }

    function enableDarkMode() {
        setLightMode(false)
    }

    const ctx = {
        lightModeState,
        enableLightMode,
        enableDarkMode
    }

    return (
        <ThemeContext.Provider value={ctx}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;