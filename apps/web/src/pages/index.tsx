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
    <div className="flex mt-[40px] flex-col gap-6 px-0 lg:px-10 xl:px-10 md:gap-10">
      <h1 className="text-[32px] pl-[20px] lg:pl-[0px] xl:pl-[0px] font-bold leading-tight tracking-tight lg:text-[4rem] xl:text-[4rem]  xl:leading-[8rem]  xl:tracking-tight">
        {heroData.data.attributes.hero.title}
      </h1>
      <div className="flex flex-col gap-6 lg:flex-row xl:flex-row lg:gap-10 xl:gap-10">
        <figure className="w-full lg:flex-1 xl:flex-1">
          <Image
            src={heroData.data.attributes.hero.img.data.attributes.url}
            alt="virittamo desc"
            width={1000}
            height={388}
            className="h-[216px] w-full lg:rounded-xl xl:rounded-xl object-cover lg:h-[392px] xl:h-[500px] md:h-[392px]"
          />
        </figure>
        <div className="flex flex-1 flex-col gap-6 lg:gap-10 xl:gap-10">
          <p className="text-[16px] pl-[20px] pr-[20px] lg:pl-[0px] xl:pl-[0px] lg:pr-[0px] xl:pr-[0px] opacity-75 lg:text-[20px] xl:text-3xl">
            {heroData.data.attributes.hero.description}
          </p>
          <div className="pl-[20px] pr-[20px] lg:pl-[0px] xl:pl-[0px] lg:pr-[0px] xl:pr-[0px] flex flex-row flex-wrap gap-[30px] lg:gap-5 xl:gap-5 items-center">
            {heroData.data.attributes.hero.proofing.map((proof, index) => (
              <p key={index} className="flex flex-col text-base lg:text-[20px] xl:text-[20px]">
                {proof.name}
                <span className="text-[16px] lg:text-[30px] xl:text-[30px] mt-[4px] lg:mt-2 xl:mt-2">{proof.action}</span>
              </p>
            ))}
            <Link
              href="/about#contact"
              className="rounded-[6px] h-[37px] lg:h-auto xl:h-auto bg-[#F5A4C8] px-6 py-3 text-[14px] font-bold text-black lg:px-8 xl:px-8 lg:py-4 xl:py-4 lg:text-[20px] xl:text-[20px] flex items-center justify-center"
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
    <div className="flex flex-col gap-5 px-4 pt-[40px] lg:px-10 xl:px-10 lg:pt-[9.375rem] xl:pt-[9.375rem]">
      <h2 className="text-2xl mb-[24px] lg:mb-[40px] xl:mb-[40px] font-medium lg:text-[3rem] xl:text-[3rem]">
        {partnerData.data.attributes.partners.title}
      </h2>
      <div className="overflow-x-auto pb-[16px]">
        <ul className="flex items-center gap-x-10 gap-y-6 md:gap-x-16 lg:justify-between xl:justify-between">
          {partnerData.data.attributes.partners.partners.map((partner, index) => (
            <li key={index} className="flex-shrink-0 max-w-xs">
              <Image
                src={partner.img.data.attributes.url}
                alt={`${partner.id}`}
                className="h-12 w-auto lg:h-20 xl:h-20"
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
    <div className="px-0 xl:px-10">
      <h2 className="pb-6 pl-[20px] xl:pl-[0px] text-2xl font-medium xl:mb-[40px] xl:text-[3rem]">
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
                  <figure className="aspect-video max-h-[300px] w-full xl:max-h-[600px] xl:w-[2000px]">
                    <Link href={`/blog/${slide.attributes.slug}`} passHref>
                      {slide.attributes.media.data.attributes.mime.startsWith(
                        "image"
                      ) ? (
                        <Image
                          src={slide.attributes.media.data.attributes.url}
                          alt={slide.attributes.title}
                          className="h-full w-full object-cover brightness-75 filter xl:rounded-xl"
                          width={2000}
                          height={600}
                        />
                      ) : (
                        <video
                          src={slide.attributes.media.data.attributes.url}
                          className="h-full w-full object-cover brightness-75 filter xl:rounded-xl"
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
                  <div className="color-layer"></div>
                  <div className="text-box">
                    <div className="absolute bottom-0 left-0 max-w-4xl text-white">
                      <h2 className="text-[20px] font-medium text-shadow xl:text-[3rem]">
                        {slide.attributes.title}
                      </h2>
                      <p className="items-center text-[12px] pb-[7px] xl:pb-10 pr-10 text-sm text-shadow xl:text-xl">
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
          className="absolute left-0 z-10 text-gray-600 text-xl xl:text-2xl md:text-3xl"
        />
        <CarouselNext
          className="absolute right-0 z-10 text-gray-600 text-xl xl:text-2xl md:text-3xl"
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
      className="flex flex-col gap-6 px-4 pt-[5rem] xl:px-10 xl:pt-[7.375rem] md:gap-10"
    >
      <h2 className="text-2xl font-medium xl:text-[3rem]">
        {teamsData.data.attributes.teamHeading}
      </h2>
      <ul className="flex flex-col gap-10 xl:flex-row xl:justify-center xl:gap-[130px]">
        {teamsData.data.attributes.teamAccordion.map((team, index) => (
          <li key={index} className="flex flex-col xl:py-[1.875rem]">
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
    <div className="flex flex-col gap-6 px-4 xl:px-10 md:gap-10">
      <h2 className="text-2xl xl:mb-[40px] font-medium xl:text-[3rem]">
        {previousData.data.attributes.employed.title}
      </h2>
      <div className="flex flex-wrap gap-4 xl:-mx-[0px] xl:flex-nowrap xl:overflow-x-hidden">
        <div className="overflow-x-auto xl:overflow-x-hidden pb-[16px]">
          <ul className="flex xl:hidden items-center gap-y-6 md:gap-x-16 xl:justify-between">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <li key={index} className="flex-shrink-0 max-w-xs">
                <Image
                  key={index}
                  src={logo.img.data.attributes.url}
                  alt=""
                  className="h-8 w-40 xl:h-16 xl:w-60"
                  width={logo.img.data.attributes.width}
                  height={logo.img.data.attributes.height}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:flex xl:relative xl:flex-nowrap xl:gap-4 xl:whitespace-nowrap xl:py-0">
          <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-0">
            {previousData.data.attributes.employed.logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.img.data.attributes.url}
                alt=""
                className="mx-4 h-8 w-40 xl:h-16 xl:w-60"
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
                className="mx-4 h-8 w-40 xl:h-16 xl:w-60"
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
    <main className="flex min-h-screen flex-col mx-[0] xl:mx-[245px] lg:mx-[120px]">
      <Hero />
      <Partners />
      <hr className="my-10 mx-auto w-1/3 border-t-4 w border-solid border-[#F5A4C8] rounded-full xl:my-20" />
      <CarouselDemo />
      <OurTeams />
      <hr className="my-10 mx-auto w-1/3 border-t-4 border-solid border-[#F5A4C8] rounded-full xl:my-20" />
      <PreviousEmployees />
    </main>
  );
}