import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for the languages you support
export type Lang = "fi" | "en" | "sv";

// Create a context with both locale and setLocale
const LangContext = createContext<{
  locale: Lang;
  setLocale: (value: Lang) => void;
}>({
  locale: "fi",
  setLocale: () => {}, // Initialize with a no-op function, will be replaced in the provider
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Lang>("fi");

  // Fetch stored locale from localStorage on mount
  useEffect(() => {
    const storedLocale = localStorage.getItem("virittamo-lang") as Lang;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  // Function to update both state and localStorage
  const handleSetLocale = (value: Lang) => {
    setLocale(value);
    localStorage.setItem("virittamo-lang", value); // Save selected language to localStorage
  };

  return (
    <LangContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LangContext.Provider>
  );
}

// Custom hook to use the language context
export const useLang = () => useContext(LangContext);
