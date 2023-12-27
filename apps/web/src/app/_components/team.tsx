"use client";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/@/components/ui/accordion";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/@/components/ui/popover";
import { Button } from "~/@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Icons } from "~/@/components/icons";
import { useSuspenseQuery } from "@tanstack/react-query";

function ContactInfo({
    name,
    title,
    email,
    phone,
}: {
    name: string;
    title: string;
    email: string;
    phone: string;
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className="group flex flex-col p-0 text-[2.5rem] hover:bg-transparent"
                >
                    Lets Talk
                    <div className="w-16 self-start border-b-2 border-black transition-all duration-300 group-hover:w-full" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-2 w-min" align="start">
                <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">{name}</h4>
                        <span className="text-sm opacity-75">{title}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link className="flex gap-1" href="mailto:arto.aitta@hel.fi">
                            <Mail />
                            {email}
                        </Link>
                        <Link className="flex gap-1" href="tel:012 345 6789">
                            <Phone />
                            {phone}
                        </Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

function Marquee({
    marquee,
    children,
}: {
    marquee: { id: number, name: string };
    children?: React.ReactNode;
}) {
    return (
        <div className="relative flex overflow-x-hidden bg-black text-white">
            <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-[1.5625rem]">
                {marquee.map((job) => (
                    <div key={job.id} className="flex flex-nowrap gap-5">
                        <span className="text-4xl">{job.name}</span>
                        {children}
                    </div>
                ))}
            </div>

            <div className="absolute top-0 flex animate-marquee2 flex-nowrap gap-4 whitespace-nowrap py-[1.5625rem]">
                {marquee.map((job) => (
                    <div key={job.id} className=" flex flex-nowrap gap-5">
                        <span className="text-4xl">{job.name}</span>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
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
function useTeamQuery() {
    const query = useSuspenseQuery({
        queryKey: ["team", 1000],
        queryFn: async () => {
            const path = `/api/strapi/team`;
            const url = baseUrl + path;

            const res = await fetch(url, {
                cache: "no-store",
            });

            return (await res.json()) as string;
        },
    });

    return [query.data, query] as const;
}

export function OurTeams() {
    const teamData = useTeamQuery()

    const teams = teamData[0].data.attributes
    return (
        <div id="teams" className="flex flex-col gap-10 pt-[9.375rem]">
            <h2 className="text-[6.25rem] font-bold">{teams.teamHeading}</h2>
            <Accordion type="single" collapsible className="-mx-[100px]">
                {teams.teamAccordion.map((team, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-t px-[100px]">
                        <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
                            {team.name}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
                            <Marquee
                                marquee={team.marquee}
                            >
                                <Icons.MsPaint />
                            </Marquee>
                            <p className="text-[2.5rem]">{team.description}</p>
                            <ContactInfo
                                name={team.button.name}
                                title={team.button.title}
                                email={team.button.email}
                                phone={team.button.phone}
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
