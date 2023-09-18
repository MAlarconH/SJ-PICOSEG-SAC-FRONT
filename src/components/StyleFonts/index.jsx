import localFont from "@next/font/local";

const bebasNeue = localFont({
  src: [
    {
      path: "../../../public/fonts/BebasNeue-Regular.ttf",
      weight: "400",
    },
  ],
});

export default function StyleFonts() {
  return (
    <style jsx global>{`
      :root {
        --bebasNeue-font: ${bebasNeue.style.fontFamily};
      }
    `}</style>
  );
}
