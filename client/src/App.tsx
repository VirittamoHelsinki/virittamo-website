import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { fi } from "./langLocal/fi.js";
import { en } from "./langLocal/en.js";
import { LanguageContext } from "./utils/langContext.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { HomePage } from "./pages/Home";

// lazy load rest off the page
import { ProjectsPage } from "./pages/Projects";
import { ProjectDetails } from "./pages/Projects/ProjectDetails/ProjectDetails";
import { StoriesPage } from "./pages/Stories"
import { Blog}  from "./pages/Blog/index.jsx";
import { Post } from "./pages/Blog/Post.jsx";

const queryClient = new QueryClient();

export default function App() {
    const [locale, setLocale] = useState("fi");
    const [lang, setLang] = useState(fi);

    useEffect(() => {
        const storedLocale = localStorage.getItem("virittamo-lang");

        storedLocale && setLocale(storedLocale);
    }, []);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    useEffect(() => {
        locale && locale === "fi" ? setLang(fi) : setLang(en);
    }, [locale]);

    return (
        <QueryClientProvider client={queryClient}>
            <LanguageContext.Provider value={{ lang, setLocale, fi }}>
            <Header />
                <Routes key={pathname} location={useLocation()}>
                    <Route path="/" element={
                        <Suspense fallback={'loading..'}>
                            <HomePage />
                        </Suspense>
                    }
                    />
                    <Route path="/:contact" element={
                        <Suspense fallback={'loading..'}>
                            <HomePage />
                        </Suspense>
                    } />
                    <Route path="/projects" element={
                        <Suspense fallback={'loading..'}>
                            <ProjectsPage />
                        </Suspense>
                    } />
                    <Route path="/projects/:team/:id" element={
                        <Suspense fallback={'loading..'}>
                            <ProjectDetails />
                        </Suspense>
                    } />
                    <Route path="/stories" element={
                        <Suspense fallback={'loading..'}>
                            <StoriesPage />
                        </Suspense>
                    } />
                    <Route path="/blog" element={
                        <Suspense fallback={'loading..'}>
                            <Blog />
                        </Suspense>
                    } />
                    <Route path="/blog/:id" element={
                        <Suspense fallback={'loading..'}>
                            <Post />
                        </Suspense>
                    } />
                </Routes>
                <Footer />
            </LanguageContext.Provider>
        </QueryClientProvider>
    );
}
