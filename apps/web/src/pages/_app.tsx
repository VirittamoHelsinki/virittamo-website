import { type AppType } from "next/app";
import localFont from "next/font/local";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Header } from "~/@/components/header";
import { Footer } from "~/@/components/footer";
import { LangProvider } from "~/utils/lang-provider";

const helsinkiGrotesk = localFont({
  src: [
    {
      path: "../font/HelsinkiGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/HelsinkiGrotesk-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../font/HelsinkiGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/HelsinkiGrotesk-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../font/HelsinkiGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/HelsinkiGrotesk-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../font/HelsinkiGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/HelsinkiGrotesk-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${helsinkiGrotesk.style.fontFamily};
        }
      `}</style>
      <LangProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LangProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
