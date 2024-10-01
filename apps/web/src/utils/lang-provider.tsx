import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the supported languages
export type Lang = "fi" | "en" | "sv";

// Create a context with both locale and setLocale, but don't initialize setLocale here
const LangContext = createContext<{
  locale: Lang;
  setLocale: (value: Lang) => void; // non-optional, but don't assign a function here
} | undefined>(undefined); // Can be undefined if not wrapped in LangProvider

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Lang>("fi");

  // Fetch stored locale from localStorage when the component mounts
  useEffect(() => {
    const storedLocale = localStorage.getItem("virittamo-lang") as Lang;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  // Update both state and localStorage when the locale changes
  const handleSetLocale = (value: Lang) => {
    setLocale(value);
    localStorage.setItem("virittamo-lang", value); // Save language to localStorage
  };

  return (
    <LangContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LangContext.Provider>
  );
}

// Custom hook to use the language context
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};