import React, { createContext, useContext, useEffect, useState } from "react";
import { ui } from "./content";

const LangContext = createContext({ lang: "es", t: ui.es, toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("lang") || "es";
    } catch (e) {
      return "es";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LangContext.Provider value={{ lang, t: ui[lang], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
