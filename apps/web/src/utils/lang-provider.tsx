import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "fi" | "en" | "sv";

const LangContext = createContext<{
  locale: Lang;
  setLocale?: (value: Lang) => void;
}>({ locale: "fi", setLocale: undefined });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Lang>("fi");

  useEffect(() => {
    const storedLocale = localStorage.getItem("virittamo-lang") as Lang;

    storedLocale && setLocale(storedLocale);
  }, []);

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
