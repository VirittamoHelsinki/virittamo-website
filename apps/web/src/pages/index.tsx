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
import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import { TeamsCard } from "~/@/components/ui/teams-card";
import { Wave } from "~/@/components/icons";



function Hero() {
  const { locale } = useLang();

  const { data: heroData, isLoading: isHeroLoading } = api.home.getHero.useQuery({ lang: locale });
  if (isHeroLoading || !heroData) return null;

  return (
    <div className="flex mt-[40px] flex-col gap-6 md:gap-10">
      <h1 className="text-[32px] px-[20px] md:px-[0px] 2xl:px-[0px] font-bold leading-tight tracking-tight md:text-[52px] 2xl:text-[64px]"
      style={{ overflowWrap: 'anywhere' }}>
        {heroData.data.attributes.hero.title}
      </h1>
      <div className="flex flex-col gap-6 md:flex-row 2xl:flex-row md:gap-10 2xl:gap-10">
        <figure className="w-full md:flex-1 2xl:flex-1">
          <Image
            src={heroData.data.attributes.hero.img.data.attributes.url}
            alt="virittamo desc"
            width={1000}
            height={388}
            className="h-[216px] w-full md:rounded-xl 2xl:rounded-xl object-cover md:h-[314px] 2xl:h-[400px]"
          />
        </figure>
        <div className="flex flex-1 flex-col gap-6 md:gap-10 2xl:gap-10">
          <p className="text-[16px] pl-[20px] pr-[20px] md:pl-[0px] 2xl:pl-[0px] md:pr-[0px] 2xl:pr-[0px] md:text-[20px] 2xl:text-[20px]">
            {heroData.data.attributes.hero.description}
          </p>
          <div className="pl-[20px] pr-[20px] md:pl-[0px] 2xl:pl-[0px] md:pr-[0px] 2xl:pr-[0px] flex flex-row flex-wrap gap-[30px] md:gap-5 2xl:gap-5 items-center">
            {heroData.data.attributes.hero.proofing.map((proof, index) => (
              <p key={index} className="flex flex-col text-base md:text-[20px] 2xl:text-[20px]">
                {proof.name}
                <span className="text-[16px] md:text-[30px] 2xl:text-[30px] mt-[4px] md:mt-2 2xl:mt-[8px]">{proof.action}</span>
              </p>
            ))}
            <Link
              href="/about#contact"
              className="rounded-[6px] h-[37px] md:h-auto 2xl:h-auto bg-[#F5A4C8] px-6 py-3 text-[14px] font-bold text-black md:px-8 2xl:px-8 md:py-4 2xl:py-4 md:text-[20px] 2xl:text-[20px] flex items-center justify-center"
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
    <div className="flex flex-col gap-5 pt-[40px] md:pt-[100px] 2xl:pt-[100px]">
      <h2 className="text-2xl mx-[20px] md:mx-[0px] 2xl:mx-[0px] mb-[24px] md:mb-[40px] 2xl:mb-[40px] font-medium md:text-[38px] 2xl:text-[3rem]">
        {partnerData.data.attributes.partners.title}
      </h2>
      <div className="overflow-x-auto mx-[20px] md:mx-[0px] 2xl:mx-[0px] pb-[16px]">
        <ul className="flex items-center gap-x-10 gap-y-6 md:gap-x-16 md:justify-between 2xl:justify-between">
          {partnerData.data.attributes.partners.partners.map((partner, index) => (
            <li key={index} className="flex-shrink-0 max-w-xs">
              <Image
                src={partner.img.data.attributes.url}
                alt={`${partner.id}`}
                className="h-12 w-auto md:h-20 2xl:h-20"
                height={200}
                width={180}
              />
            </li>
          ))}
        </ul>
      </div>
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
  const videos = featureData.data.filter((slide) =>
    slide.attributes.media.data.attributes.mime.startsWith("video")
  );
  const otherContent = featureData.data.filter(
    (slide) => !slide.attributes.media.data.attributes.mime.startsWith("video")
  );
  const orderedData = videos.concat(otherContent);

  return (
    <div className="">
      <h2 className="text-2xl mx-[20px] md:mx-[0px] 2xl:mx-[0px] mb-[24px] md:mb-[40px] 2xl:mb-[40px] font-medium md:text-[38px] 2xl:text-[3rem]">
        {carouselText.data.attributes.carouselText}
      </h2>
      <Carousel
        className="flex w-full items-center justify-center"
        setApi={setApiCarousel}
        plugins={[]}
      >
        <CarouselContent>
          {orderedData.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="border-none p-0">
                <CardContent className="relative flex p-0">
                  <figure className="aspect-video max-h-[300px] w-full md:max-h-[500px] 2xl:max-h-[600px]">
                    <Link href={`/blog/${slide.attributes.slug}`} passHref>
                      {slide.attributes.media.data.attributes.mime.startsWith(
                        "image"
                      ) ? (
                        <Image
                          src={slide.attributes.media.data.attributes.url}
                          alt={slide.attributes.title}
                          className="h-full w-full object-cover brightness-75 filter md:rounded-xl 2xl:rounded-xl"
                          width={2000}
                          height={600}
                        />
                      ) : (
                        <video
                          src={slide.attributes.media.data.attributes.url}
                          className="h-full w-full object-cover brightness-75 filter md:rounded-xl 2xl:rounded-xl"
                          width={2000}
                          height={600}
                          autoPlay
                          loop
                          playsInline
                          webkit-playsinline
                        />
                      )}
                    </Link>
                  </figure>
                  <Wave className="wave-carousel fill-[#F5A4C8]" />
                  <div className="color-layer md:rounded-e-xl 2xl:rounded-e-xl"></div>
                  <div className="text-box">
                    <div className="absolute bottom-0 left-0 max-w-4xl text-white">
                      <h2 className="text-[20px] font-medium lg:text-[30px] text-shadow 2xl:text-[3rem]">
                        {slide.attributes.title}
                      </h2>
                      <p className="items-center text-[12px] pb-[7px] md:pb-8 2xl:pb-10 pr-10  lg:text-[20px]  text-shadow 2xl:text-xl">
                        {slide.attributes.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute left-0 z-10 text-gray-600 text-xl 2xl:text-2xl md:text-3xl"
        />
        <CarouselNext
          className="absolute right-0 z-10 text-gray-600 text-xl 2xl:text-2xl md:text-3xl"
        />
      </Carousel>
    </div>
  );
}

function OurTeams() {
  const { locale } = useLang();
  const { data: teamsData, isLoading: isTeamsLoading } =
    api.home.getTeams.useQuery({ lang: locale });
  if (isTeamsLoading || !teamsData) return;
  return (
    <div
      id="teams"
      className="flex flex-col gap-6 pt-[40px] 2xl:pt-[100px] md:pt-[100px] md:gap-10"
    >
      <h2 className="text-2xl mx-[20px] md:mx-[0px] 2xl:mx-[0px] font-medium md:text-[38px] 2xl:text-[3rem]">
        {teamsData.data.attributes.teamHeading}
      </h2>
      <ul className="flex flex-col mx-[20px] md:mx-[0px] 2xl:mx-[0px] flex-column gap-[24px] md:flex-row md:justify-center md:gap-[40px] 2xl:flex-row 2xl:justify-center 2xl:gap-[92.5px]">
        {teamsData.data.attributes.teamAccordion.map((team, index) => (
          <li key={index} className="flex flex-col 2xl:py-[1.875rem] items-center md:items-start">
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
  const { data: previousData, isLoading: isPreviousLoading } = api.home.getEmployed.useQuery({ lang: locale });

  if (isPreviousLoading || !previousData) return;

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <h2 className="text-[24px] mx-[20px] md:mx-[0px] 2xl:mx-[0px] 2xl:mb-[40px] md:text-[38px] font-medium 2xl:text-[3rem]">
        {previousData.data.attributes.employed.title}
      </h2>
      <div className="flex mx-[20px] md:mx-[0px] 2xl:mx-[0px] flex-wrap gap-4 2xl:-mx-[0px] 2xl:flex-nowrap 2xl:overflow-x-hidden">
        <div className="overflow-x-auto 2xl:overflow-x-hidden pb-[16px]">
          <ul className="flex 2xl:hidden items-center gap-y-6 md:gap-x-16 2xl:justify-between">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <li key={index} className="flex-shrink-0 max-w-xs">
                <Image
                  key={index}
                  src={logo.img.data.attributes.url}
                  alt=""
                  className="h-8 w-40 2xl:h-16 2xl:w-60"
                  width={logo.img.data.attributes.width}
                  height={logo.img.data.attributes.height}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden 2xl:flex 2xl:relative 2xl:flex-nowrap 2xl:gap-4 2xl:whitespace-nowrap 2xl:py-0">
          <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-0">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.img.data.attributes.url}
                alt=""
                className="mx-4 h-8 w-40 2xl:h-16 2xl:w-60"
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
                className="mx-4 h-8 w-40 2xl:h-16 2xl:w-60"
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
  const { locale } = useLang();


  const { isLoading: isHeroLoading } = api.home.getHero.useQuery({ lang: locale });
  const { isLoading: isPartnersLoading } = api.home.getPartners.useQuery({ lang: locale });
  const { isLoading: isCarouselLoading } = api.home.getSlides.useQuery({ lang: locale });
  const { isLoading: isTeamsLoading } = api.home.getTeams.useQuery({ lang: locale });
  const { isLoading: isPreviousLoading } = api.home.getEmployed.useQuery({ lang: locale });


  if (
    isHeroLoading ||
    isPartnersLoading ||
    isCarouselLoading ||
    isTeamsLoading ||
    isPreviousLoading
  ) {
    return <div className="bg-white min-h-screen"></div>;
  }
  return (
    <main className="flex min-h-screen flex-col mx-[0] 2xl:mx-[245px] md:mx-[120px]">
      <Hero />
      <Partners />
      <hr className="my-10 mx-auto w-1/3 border-t-4 w border-solid border-[#F5A4C8] rounded-full md:my-[100px] 2xl:my-20" />
      <CarouselDemo />
      <OurTeams />
      <hr className="my-10 mx-auto w-1/3 border-t-4 border-solid border-[#F5A4C8] rounded-full md:my-[100px] 2xl:my-20" />
      <PreviousEmployees />
    </main>
  );
}