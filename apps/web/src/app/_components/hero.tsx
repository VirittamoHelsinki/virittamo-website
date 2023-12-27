"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const runtime = "edge"; // 'nodejs' (default) | 'edge'

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
export function useWaitQuery() {
    const query = useSuspenseQuery({
        queryKey: ["wait", 1000],
        queryFn: async () => {
            const path = `/api/strapi`;
            const url = baseUrl + path;

            const res = await fetch(url, {
                cache: "no-store",
            });

            return (await res.json()) as string;
        },
    });

    return [query.data, query] as const;
}


export function Hero() {
    const [data] = useWaitQuery();
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
                {data.data.attributes.hero.title}
            </h1>
            <div className="flex gap-10">
                <figure className="flex-1">
                    <Image
                        src={data.data.attributes.hero.img.data.attributes.url}
                        alt="virittamo desc"
                        width={1000}
                        height={1000}
                        className="w-[979px] h-auto rounded-xl"
                    />
                </figure>
                <div className="flex flex-1 flex-col gap-10">
                    <p className="text-3xl leading-[50px] opacity-75">
                        {data.data.attributes.hero.description}
                    </p>
                    <div className="flex justify-between gap-5">
                        {data.data.attributes.hero.proofing.map((proof, index) => (
                            <p key={index} className="flex flex-col text-xl">
                                {proof.name}
                                <span className="text-3xl">{proof.action}</span>
                            </p>
                        ))}
                        <Link
                            href={`mailto:${data.data.attributes.hero.ctaButton.action}`}
                            className="rounded-[10px] bg-black px-8 py-4 text-2xl font-bold text-white"
                        >
                            {data.data.attributes.hero.ctaButton.name}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
