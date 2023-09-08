import { fi } from "./langLocal/fi.js";
import { en } from "./langLocal/en.js";

// import Loading from "./components/Loading";
import { LanguageContext } from "./langLocal/context/langContext";

// import React
import Router from "./components/Router";
import { useState, useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const queryClient = new QueryClient();

export default function App() {
  const [locale, setLocale] = useState("fi");
  const [lang, setLang] = useState(fi);

  useEffect(() => {
    const storedLocale = localStorage.getItem("virittamo-lang");

    storedLocale && setLocale(storedLocale);
  }, []);

  useEffect(() => {
    locale && locale === "fi" ? setLang(fi) : setLang(en);
  }, [locale]);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ lang, setLocale, fi }}>
        <Header />
        <Router />
        <Footer />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}
