import { fi } from "./langLocal/fi.js";
import { en } from "./langLocal/en.js";

// import Loading from "./components/Loading";
import { LanguageContext } from "./langLocal/context/langContext";

// import React
import Router from "./components/Router";
import { useState, useEffect } from "react";

const App = () => {
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
    <main className="app__wrapper">
      <LanguageContext.Provider value={{ lang, setLocale, fi }}>
        <Router />
      </LanguageContext.Provider>
    </main>
  );
};

export default App;
