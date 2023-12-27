import { Suspense } from "react";
import { CarouselDemo } from "./_components/postCarousel";
import { Hero } from "./_components/hero";
import { Partners } from "./_components/partner";
import { OurTeams } from "./_components/team";
import { ApplyToWork } from "./_components/apply";
import { TODO } from "./_components/wwa";
import { OurProject } from "./_components/project";
import { PreviousEmployees } from "./_components/employed";

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col px-[100px]">
            <Suspense fallback={<div>Arto is thinking...</div>}>
                <Hero />
                <Partners />
                <CarouselDemo />
                <TODO />
                <OurTeams />
                <OurProject />
                <ApplyToWork />
                <PreviousEmployees />
            </Suspense>
        </main>
    );
}
