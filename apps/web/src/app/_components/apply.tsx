"use client";
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/@/components/ui/accordion";

export function ApplyToWork() {
    return (
        <div id="work" className="flex flex-col gap-10 pt-[9.375rem]">
            <h2 className="text-[6.25rem] font-bold">Apply to Us</h2>
            <p className="text-[2.1875rem]">
                Next time we take new applicants is in January 2024
            </p>
            <Accordion type="single" collapsible className="-mx-[100px]">
                <AccordionItem value="item-1" className="border-t px-[100px]">
                    <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
                        Criterion
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-[1.875rem] leading-tight">
                        <h3 className="text-[2.5rem] font-medium">
                            An unemployed jobseeker in Helsinki who is eligible for wage
                            subsidy and who has been:
                        </h3>
                        <ul className="flex flex-wrap gap-10">
                            <li>
                                <p className="text-[1.875rem] font-medium">
                                    Unemployed for at least 24 - 28 months
                                </p>
                                <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
                                    <li>
                                        who has been unemployed for at least 300 days with labor
                                        market support
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="text-[1.875rem] font-medium">
                                    Unemployed for at least 6 months
                                </p>
                                <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
                                    <li>
                                        graduated in a profession or completed a degree under the
                                        age of 25
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="text-[1.875rem] font-medium">
                                    Unemployed for at least 12 - 14 months
                                </p>
                                <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
                                    <li>
                                        graduated from a profession or completed a degree 25 - 29-
                                        years old
                                    </li>
                                    <li>
                                        partially capable of work based on a health condition of a
                                        diagnosis that affects the job
                                    </li>
                                    <li>
                                        an immigrant with a residence permit or residence permit
                                        registered
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className="text-[1.875rem] font-medium">
                                    Entitled to compulsory work
                                </p>
                                <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
                                    <li>
                                        57 years of age or older, and whose maximum days of
                                        earnings-related
                                    </li>
                                    <li>money have started since he turned 57</li>
                                </ul>
                            </li>
                        </ul>
                        <p className="max-w-[1010px] pt-10 text-[1.875rem] font-medium">
                            3 years must have passed since the end of the previous wage
                            subsidy period for the city to be able to re-employment with wage
                            subsidy for the city.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="px-[100px]">
                    <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
                        Benefits
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-[1.875rem] leading-tight">
                        <ul className="flex flex-wrap gap-10">
                            <li>
                                <h3 className="text-[1.875rem] font-medium">Uraohjaous</h3>
                                <p className="max-w-[678px] text-[1.875rem]">
                                    who has been unemployed for at least 300 days with labor
                                    market support
                                </p>
                                <Link href="/blog" className="text-sm">
                                    learn more &gt;
                                </Link>
                            </li>
                            <li>
                                <h3 className="text-[1.875rem] font-medium">Opinto-ohjaus</h3>
                                <p className="max-w-[678px] text-[1.875rem]">
                                    graduated in a profession or completed a degree under the age
                                    of 25
                                </p>
                            </li>
                            <li>
                                <h3 className="text-[1.875rem] font-medium">S2 Opetus</h3>
                                <p className="max-w-[678px] text-[1.875rem]">
                                    graduated from a profession or completed a degree 25 - 29-
                                    years old
                                </p>
                            </li>
                            <li>
                                <h3 className="text-[1.875rem] font-medium">Hymykylä</h3>
                                <p className="max-w-[678px] text-[1.875rem]">
                                    57 years of age or older, and whose maximum days of
                                    earnings-related
                                </p>
                                <Link href="/blog" className="text-sm">
                                    learn more &gt;
                                </Link>
                            </li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
