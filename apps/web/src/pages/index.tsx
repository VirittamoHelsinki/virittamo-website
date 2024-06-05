import React, { Suspense } from "react";
import Image from "next/image";
import { Card, CardContent } from "~/@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "~/@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "~/@/components/ui/button";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import { TeamsCard } from "~/@/components/ui/teams-card";
import { Wave } from "~/@/components/icons";

function Hero() {
  const { locale } = useLang();

  const { data: heroData, isLoading: isHeroLoading } =
    api.home.getHero.useQuery({ lang: locale });
  if (isHeroLoading || !heroData) return;

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[4rem] font-bold leading-[8rem] tracking-tight sm:text-[5rem]">
        {heroData.data.attributes.hero.title}
      </h1>
      <div className="flex gap-10">
        <figure className="max-h-96 w-full flex-1">
          <Image
            src={heroData.data.attributes.hero.img.data.attributes.url}
            alt="virittamo desc"
            width={1000}
            height={388}
            className="h-[388px] w-[979px] rounded-xl object-cover"
          />
        </figure>
        <div className="flex flex-1 flex-col gap-10">
          <p className="text-3xl opacity-75">
            {heroData.data.attributes.hero.description}
          </p>
          <div className="flex justify-between gap-5">
            {heroData.data.attributes.hero.proofing.map((proof, index) => (
              <p key={index} className="flex flex-col text-xl">
                {proof.name}
                <span className="text-3xl">{proof.action}</span>
              </p>
            ))}
            <Link
              href="/about#contact"
              className="rounded-[10px] hover-cta bg-[#F5A4C8] px-8 py-4 text-2xl font-bold text-black"
            >
              {heroData.data.attributes.hero.ctaButton.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
function Partners() {
  const { locale } = useLang();
  const { data: partnerData, isLoading: isPartnerLoading } =
    api.home.getPartners.useQuery({ lang: locale });

  if (isPartnerLoading || !partnerData) return;
  return (
    <div className="flex flex-col gap-5 pt-[9.375rem]">
      <h2 className="text-[3rem] font-medium">
        {partnerData.data.attributes.partners.title}
      </h2>
      <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6  md:gap-x-16">
        {partnerData.data.attributes.partners.partners.map((partner, index) => (
          <li key={index} className="max-w-xs">
            <Image
              src={partner.img.data.attributes.url}
              alt={`${partner.id}`}
              className="h-20 w-auto"
              height={200}
              width={180}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function CarouselDemo() {
  const { locale } = useLang();
  const { data: featureData, isLoading: isFeatureLoading } =
    api.home.getSlides.useQuery({ lang: locale });
    const { data: carouselText, isLoading: isCarouselTextLoading } =
     api.home.getPage.useQuery({ lang: locale });
  const [apiCarousel, setApiCarousel] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!apiCarousel) {
      return;
    }

    setCount(apiCarousel.scrollSnapList().length);
    setCurrent(apiCarousel.selectedScrollSnap() + 1);

    apiCarousel.on("select", () => {
      setCurrent(apiCarousel.selectedScrollSnap() + 1);
    });
  }, [apiCarousel]);

  if (isFeatureLoading || !featureData || isCarouselTextLoading || !carouselText) return;

  //order the data so that the videos are displayed first
  const videos = featureData.data.filter(slide => slide.attributes.media.data.attributes.mime.startsWith("video"));
  const otherContent = featureData.data.filter(slide => !slide.attributes.media.data.attributes.mime.startsWith("video"));
  const orderedData = videos.concat(otherContent);

  return (
    <div className="">
       <h2 className="text-[3rem] font-medium pb-[2.675rem]">
      {carouselText.data.attributes.carouselText}
      </h2>
      <Carousel
        className="flex w-full items-center justify-center"
        setApi={setApiCarousel}
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
      >
        <CarouselContent>
          {orderedData.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-none p-0">
                <CardContent className="relative flex p-0">
                  <figure className="aspect-video max-h-[600px] w-[2000px]">
                    <Link href={`/blog/${slide.attributes.slug}`} passHref>
                      {slide.attributes.media.data.attributes.mime.startsWith("image") ? (
                        <Image
                          src={slide.attributes.media.data.attributes.url}
                          alt={slide.attributes.title}
                          className="h-[800px] w-full object-cover brightness-75 filter"
                          width={2000}
                          height={600}
                        />
                      ) : (
                        <video
                          src={slide.attributes.media.data.attributes.url}
                          className="h-[800px] w-full object-cover brightness-75 filter"
                          width={2000}
                          height={600}
                          autoPlay
                          loop
                        />
                      )
                      }
                    </Link>
                  </figure>
                  <Wave className="wave-carousel fill-[#F5A4C8]"/>
                  <div className="color-layer"></div>
                  <div className="text-box">
                  <div className="absolute bottom-0 left-0 max-w-4xl text-white">
                    <h2 className="text-[3rem] font-medium text-shadow">
                      {slide.attributes.title}
                    </h2>
                    <p className="text-xl items-center pb-10 pr-10 text-shadow">{slide.attributes.description}</p>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10" />
        <CarouselNext className="absoluteright-0 z-10" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 p-5">
          <div>
            {Array.from(Array(count).keys()).map((i) => (
              <Button
                key={i}
                className={`mx-1 h-1.5 flex-grow rounded-full p-1 px-5  ${i === current - 1
                  ? "bg-white hover:bg-white"
                  : "bg-neutral-600/75"
                  }`}
                onClick={() => apiCarousel?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div> */}
    </div>
  );
}

function OurTeams() {
  const { locale } = useLang();
  const { data: teamsData, isLoading: isTeamsLoading } =
    api.home.getTeams.useQuery({ lang: locale });
  if (isTeamsLoading || !teamsData) return;
  return (
    <div id="teams" className="flex flex-col gap-10 pt-[7.375rem]">
      <h2 className="text-[3rem] font-medium">
        {teamsData.data.attributes.teamHeading}
      </h2>
      <ul className="flex gap-[130px] justify-center">
        {teamsData.data.attributes.teamAccordion.map((team, index) => (
          <li key={index} className="flex flex-col py-[1.875rem]">
            <TeamsCard
              teamImg={team.teamPhoto}
              teamName={team.name}
              description={team.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PreviousEmployees() {
  const { locale } = useLang();
  const { data: previousData, isLoading: isPreviousLoading } =
    api.home.getEmployed.useQuery({ lang: locale });
  if (isPreviousLoading || !previousData) return;
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-[3rem] font-medium">
        {previousData.data.attributes.employed.title}
      </h2>
      <div className="-mx-[0px]">
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-0">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.img.data.attributes.url}
                alt=""
                className="mx-4 h-16 w-60"
                width={logo.img.data.attributes.width}
                height={logo.img.data.attributes.height}
              />
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 flex-nowrap gap-4 whitespace-nowrap py-0">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.img.data.attributes.url}
                alt=""
                className="mx-4 h-16 w-60"
                width={logo.img.data.attributes.width}
                height={logo.img.data.attributes.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col px-[100px] mx-[150px]">
      <Suspense fallback={<div></div>}>
        <Hero />
        <Partners />
        <hr className="my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <CarouselDemo />
        <OurTeams />
        <hr className="my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <PreviousEmployees />
      </Suspense>
    </main>
  );
}
