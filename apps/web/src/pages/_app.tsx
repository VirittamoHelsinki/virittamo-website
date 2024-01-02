import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Header } from "~/@/components/header";
import { Footer } from "~/@/components/footer";
import { LangProvider } from "~/utils/lang-provider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <LangProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LangProvider>
  );
};

export default api.withTRPC(MyApp);
