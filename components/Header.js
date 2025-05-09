import { useContext } from "react"
import ThemeContext from "@/store/theme-context"
import "@theme-toggles/react/css/Around.css"
import { Around } from "@theme-toggles/react"
import { Layout, Typography, Space } from 'antd';


export default function Header() {
    const themeCtx = useContext(ThemeContext)
    //console.log(themeCtx)

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

    console.log("LightModeState's value is currently: ", themeCtx.lightModeState)

    const { Header } = Layout;
    const { Title } = Typography;

    return (
        <Header style={{ background: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
            <Title level={2} style={{ margin: 0 }}>🎬 MovieHouse</Title>
            <Space>
                <div style={{ transform: 'scale(2)', transformOrigin: 'center' }}>
                    <Around
                        duration={750}
                        toggled={!themeCtx.lightModeState}
                        style={{ color: (themeCtx.lightModeState ? "#000000" : "#FFFFFF") }}
                        onToggle={modifyTheme}
                    />
                </div>
            </Space>
        </Header>
    );

}