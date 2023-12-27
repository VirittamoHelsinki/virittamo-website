"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";


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
function usePartnerQuery() {
    const query = useSuspenseQuery({
        queryKey: ["partner", 1000],
        queryFn: async () => {
            const path = `/api/strapi/partners`;
            const url = baseUrl + path;

            const res = await fetch(url, {
                cache: "no-store",
            });

            return (await res.json()) as string;
        },
    });

    return [query.data, query] as const;
}

const partners = [
    {
        imageUrl: "/img/eu-logo.jpg",
        alt: "European Union",
    },
    {
        imageUrl: "/img/helsinki-logo.png",
        alt: "Helsinki",
    },
    {
        imageUrl: "/img/laurea-logo.png",
        alt: "Laurea",
    },
    {
        imageUrl: "/img/metropolia-logo.png",
        alt: "Metropolia University of Applied Sciences",
    },
    {
        imageUrl: "/img/ohjaamo-logo.png",
        alt: "ohjaamo",
    },
    {
        imageUrl: "/img/tyollisyyspal-logo-temp.webp",
        alt: "Helsinki Työllisyyspalvelut",
    },
];

export function Partners() {
    const partnerData = usePartnerQuery()
    return (
        <div className="flex flex-col gap-5 pt-[9.375rem]">
            <h2 className="text-[2.5rem] font-bold">{partnerData[0].data.attributes.partners.title}</h2>
            <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6  md:gap-x-16">
                {partners.map((partner, index) => (
                    <li key={index} className="max-w-xs">
                        <Image
                            src={partner.imageUrl}
                            alt={partner.alt}
                            className="h-20 w-full"
                            height={1000}
                            width={1000}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
