import Header from "@/components/Header";
import { ThemeProvider } from "@/store/theme-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider>

      <Header />

      <Component {...pageProps} />;

    </ThemeProvider>
  )
}
