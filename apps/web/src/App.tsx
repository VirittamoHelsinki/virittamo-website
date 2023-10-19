import { useState, useEffect, useMemo } from "react";
import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
    ScrollRestoration,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { fi } from "./languages/fi";
import { en } from "./languages/en";
import { LanguageContext } from "./utils/langContext.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "projects",
                children: [
                    {
                        index: true,
                        async lazy() {
                            const { ProjectsPage } = await import("./pages/project");
                            return { Component: ProjectsPage };
                        },
                    },
                    {
                        path: ":team",
                        children: [
                            {
                                path: ":id",
                                async lazy() {
                                    const { ProjectDetails } = await import(
                                        "./pages/project/ProjectDetails.tsx"
                                    );
                                    return { Component: ProjectDetails };
                                },
                            },
                        ],
                    },
                ],
            },
            {
                path: "stories",
                async lazy() {
                    const { StoriesPage } = await import("./pages/story");
                    return { Component: StoriesPage };
                },
            },
            {
                path: "news",
                children: [
                    {
                        index: true,
                        async lazy() {
                            const { NewsPage } = await import("./pages/news");
                            return { Component: NewsPage };
                        },
                    },
                    {
                        path: ":id",
                        async lazy() {
                            const { Post } = await import(
                                "./pages/news/Post.tsx"
                            );
                            return { Component: Post };
                        },
                    },
                ],
            },
            {
                path: "contact",
                async lazy() {
                    const { ContactPage } = await import("./pages/contact");
                    return { Component: ContactPage };
                },
            },
            {
                path: "*",
                element: <NoMatch />,
            },
        ],
    },
]);

function NoMatch() {
    return (
        <main className="p-[2rem_10%]">
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </main>
    );
}

const queryClient = new QueryClient();

function Layout() {
    const navigation = useNavigation();
    const [locale, setLocale] = useState(() => {
        // Get locale from local storage only once during initial render
        return localStorage.getItem("virittamo-lang") || "fi";
    });
    const [lang, setLang] = useState(fi);

    useEffect(() => {
        // Sync locale with local storage
        localStorage.setItem("virittamo-lang", locale);
        // Only update lang when locale changes
        setLang(locale === "fi" ? fi : en);
    }, [locale]);

    const langContext = useMemo(
        () => ({ lang, setLocale, fi }),
        [lang, setLocale, fi],
    );

    return (
        <QueryClientProvider client={queryClient}>
            <LanguageContext.Provider value={langContext}>
                <Header />
                <ScrollRestoration />
                {navigation.state !== "idle" && <p>Navigation in progress...</p>}
                <Outlet />
                <Footer />
            </LanguageContext.Provider>
        </QueryClientProvider>
    );
}

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>loading...</p>} />;
}
