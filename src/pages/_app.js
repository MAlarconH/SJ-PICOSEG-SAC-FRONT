import "@/styles/global.css";
import StyleFonts from "@/components/StyleFonts";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyleFonts />
      <Component {...pageProps} />
    </>
  );
}
