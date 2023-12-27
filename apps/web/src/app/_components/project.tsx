"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const projects = [
{
imageUrl:
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png",
        name: "Generative Art",
},
{
imageUrl:
    "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg",
    name: "Generative Art",
},
{
imageUrl:
    "https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg",
    name: "Generative Art",
},
];

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
function useProjectQuery() {
    const query = useSuspenseQuery({
        queryKey: ["project-data", 1000],
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

export function OurProject() {
    const ourData = useProjectQuery()
    return (
        <div className="flex flex-col gap-10 pt-[9.375rem]">
            <h2 className="text-[6.25rem] font-bold">{ourData[0].data.attributes.projectHeading}</h2>
            <ul className="flex gap-[62px]">
                {projects.map((project, index) => (
                    <li key={index} className="flex flex-col py-[1.875rem]">
                        <Link href={`/blog/${index + 1}`} passHref>
                            <Image
                                className="h-[661px] w-full rounded-xl object-cover"
                                src={project.imageUrl}
                                alt={project.name}
                                width={553}
                                height={661}
                            />
                            <span className="hidden text-6xl font-bold">{project.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/blog" className="text-[2.5rem]">
               {ourData[0].data.attributes.projectLinkName} &gt;
            </Link>
        </div>
    );
}
