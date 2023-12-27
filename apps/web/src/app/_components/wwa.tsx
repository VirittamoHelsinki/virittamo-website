"use client";
import Image from "next/image";

export function TODO() {
    return (
        <div className="pt-[9.375rem]">
            <h2 className="text-[6.25rem] font-bold">Why We Are Known</h2>
            <div className="flex flex-col gap-10 md:flex-row">
                <Image
                    src="/hero-img.png"
                    alt="why we are known"
                    width={1000}
                    height={1000}
                />
                <p className="text-[2.5rem]">
                    Virittämö on Helsingin kaupungin työllistämispalvelu, joka yhdistää
                    tuoretta työkokemusta tarvitsevat tekijät ja käytännön ICT-,
                    ohjelmistokehitys- ja mediaosaajia etsivät yritykset.
                </p>
            </div>
        </div>
    );
}
