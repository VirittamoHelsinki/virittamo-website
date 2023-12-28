"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export const runtime = 'edge' // 'nodejs' (default) | 'edge'

function getBaseURL() {
    if (typeof window !== "undefined") {
        return "";
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return "http://localhost:3000";
}
const baseUrl = getBaseURL();
function useArticleQuery( slug: string ) {
    const query = useSuspenseQuery({
        queryKey: ["artilce", 1000],
        queryFn: async () => {
            const path = `/api/strapi/article?slug=${slug}`;
            const url = baseUrl + path;

            const res = await fetch(url, {
                cache: "no-store",
            });

            return (await res.json()) as string;
        },
    });

    return [query.data, query] as const;
}

export function STH({slug}: {slug: string}) {
 const test = useArticleQuery(slug)

    return `ls ${test}`
}
