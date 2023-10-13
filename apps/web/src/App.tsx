import { useState, useEffect } from "react";
import {
    Outlet,
    Link,
    createBrowserRouter,
    RouterProvider,
    useNavigation,
    ScrollRestoration,
    useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { fi } from "./languages/fi";
import { en } from "./languages/en";
import { LanguageContext } from "./utils/langContext.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import HomePage from "./pages/Home";
import { Contacts } from "./components/Contacts.tsx";
import Blog from "./pages/Blog/index.tsx";
import Post from "./pages/Blog/Post.tsx";

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
                path: "blog",
                children: [
                    {
                        index: true,
                        element: <Blog />
                    },
                    {
                        path: ":id",
                        element: <Post />
                    }
                ],
            },
            {
                path: "projects",
                children: [
                    {
                        index: true,
                        async lazy() {
                            const { ProjectsPage } = await import("./pages/Projects");
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
                                        "./pages/Projects/ProjectDetails/ProjectDetails"
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
                    const { StoriesPage } = await import("./pages/Stories");
                    return { Component: StoriesPage };
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

function Layout() {
    const { pathname } = useLocation();
    const navigation = useNavigation();
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
                <ScrollRestoration />
                {navigation.state !== "idle" && <p>Navigation in progress...</p>}
                <Outlet />
                <Footer>{pathname === "/" && <Contacts />}</Footer>
            </LanguageContext.Provider>
        </QueryClientProvider>
    );
}

const queryClient = new QueryClient();

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>loading...</p>} />;
}
