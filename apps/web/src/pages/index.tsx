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
import { Mail, Phone, Camera, Server, Code } from "lucide-react";
import { Icons } from "~/@/components/icons";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";

function Hero() {
  const { locale } = useLang();

  const { data: heroData, isLoading: isHeroLoading } =
    api.home.getHero.useQuery({ lang: locale });
  if (isHeroLoading || !heroData) return;

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[6.125rem] font-bold leading-[8rem] tracking-tight sm:text-[6.125rem]">
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
          <p className="text-3xl leading-[50px] opacity-75">
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
              href={`mailto:${heroData.data.attributes.hero.ctaButton.action}`}
              className="rounded-[10px] bg-[#F5A4C8] px-8 py-4 text-2xl font-bold text-black"
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
      <h2 className="text-[2.5rem] font-bold">
        {partnerData.data.attributes.partners.title}
      </h2>
      <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6  md:gap-x-16">
        {partnerData.data.attributes.partners.partners.map((partner, index) => (
          <li key={index} className="max-w-xs">
            <Image
              src={partner.img.data.attributes.url}
              alt={`${partner.id}`}
              className="h-20 w-full"
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
  const [apiCarousel, setApiCarousel] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  console.log(featureData)

  useEffect(() => {
    if (!apiCarousel) {
      return;
    }

    setCount(apiCarousel.scrollSnapList().length);
    setCurrent(apiCarousel.selectedScrollSnap() + 1);

    apiCarousel.on("select", () => {
      console.log("current");
      setCurrent(apiCarousel.selectedScrollSnap() + 1);
    });
  }, [apiCarousel]);

  if (isFeatureLoading || !featureData) return;

  //order the data so that the videos are displayed first
  const videos = featureData.data.filter(slide => slide.attributes.media.data.attributes.mime.startsWith("video"));
  const otherContent = featureData.data.filter(slide => !slide.attributes.media.data.attributes.mime.startsWith("video"));
  const orderedData = videos.concat(otherContent);

  return (
    <div className="pt-[9.375rem]">
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
              <Card className="rounded-xl border-none p-0">
                <CardContent className="relative flex p-0">
                  <figure className="aspect-video max-h-[800px] w-full">
                    {slide.attributes.media.data.attributes.mime.startsWith("image") ? (
                      <Image
                        src={slide.attributes.media.data.attributes.url}
                        alt={slide.attributes.title}
                        className="h-[800px] w-full rounded-xl object-cover brightness-75 filter"
                        width={2000}
                        height={800}
                      />
                    ) : (
                      <video
                        src={slide.attributes.media.data.attributes.url}
                        className="h-[800px] w-full rounded-xl object-cover brightness-75 filter"
                        width={2000}
                        height={800}
                        autoPlay
                        loop
                      />
                    )
                    }
                  </figure>
                  <div className="absolute bottom-0 left-0 max-w-4xl pb-10 pl-20 text-white">
                    <h2 className="text-[6.25rem] font-bold">
                      {slide.attributes.title}
                    </h2>
                    <p className="text-xl">{slide.attributes.description}</p>
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
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}

// function Wwa() {
//   const { locale } = useLang();
//   const { data: wwaData, isLoading: isWwaLoading } = api.home.getWwa.useQuery({
//     lang: locale,
//   });
//   if (isWwaLoading || !wwaData) return;
//   return (
//     <div className="pt-[9.375rem]">
//       <h2 className="pb-[2.5rem] text-[6.25rem] font-bold">
//         {wwaData.data.attributes.wwa.title}
//       </h2>
//       <div className="flex flex-col gap-48 md:flex-row">
//         <figure className="w-full max-w-[715px]">
//           <Image
//             src={wwaData.data.attributes.wwa.img.data.attributes.url}
//             alt="why we are known"
//             className="h-[470px] w-full rounded-xl object-cover"
//             width={1000}
//             height={1000}
//           />
//         </figure>
//         <p className="w-full max-w-[819px] text-[2.5rem] leading-[3.125rem]">
//           {wwaData.data.attributes.wwa.description}
//         </p>
//       </div>
//     </div>
//   );
// }

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
  marquee: { id: number; name: string }[];
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

const getIconForTeam = (teamName: string) => {
  switch (teamName.toLowerCase()) {
    case 'media':
      return <Camera className="w-12 h-12 ml-1" />;
    case 'ict':
      return <Server className="w-11 h-11 ml-1" />;
    case 'softa':
      return <Code className="w-12 h-12 ml-1" />;
    default:
      return null;
  }
};

function OurTeams() {
  const { locale } = useLang();
  const { data: teamsData, isLoading: isTeamsLoading } =
    api.home.getTeams.useQuery({ lang: locale });
  if (isTeamsLoading || !teamsData) return;
  return (
    <div id="teams" className="flex flex-col gap-10 pt-[7.375rem]">
      <h2 className="text-[4.25rem] font-bold">
        {teamsData.data.attributes.teamHeading}
      </h2>
      <Accordion type="single" collapsible className="-mx-[100px]">
        {teamsData.data.attributes.teamAccordion.map((team, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-t px-[100px]"
          >
            <AccordionTrigger className="text-[2.75rem] font-bold uppercase flex items-center">
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                {team.name}
                <span style={{ marginLeft: '1rem' }}>{getIconForTeam(team.name)}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
              <p className="text-[2.5rem]">{team.description}</p>
              <ContactInfo
                name={team.button.name}
                title={team.button.title}
                email={team.button.email}
                phone={team.button.phone}
              />
              <Marquee marquee={team.marquee}>
                <Icons.MsPaint />
              </Marquee>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function OurProject() {
  const { locale } = useLang();
  const { data: ourData, isLoading: isOurLoading } = api.home.getPage.useQuery({
    lang: locale,
  });
  const { data: fprojectData, isLoading: isFprojectLoading } =
    api.post.getAllProjects.useQuery({ lang: locale });
  if (isOurLoading || isFprojectLoading || !ourData || !fprojectData)
    return;

  console.log("current language is ", locale);
  return (
    <div className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">
        {ourData.data.attributes.projectHeading}
      </h2>
      <ul className="flex gap-[62px]">
        {fprojectData.data.map((project, index) => (
          <li key={index} className="flex flex-col py-[1.875rem]">
            <Link href={`/blog/${project.attributes.slug}`} passHref>
              {project.attributes.media.data.attributes.mime.startsWith(
                "image",
              ) ? (
                <Image
                  className="h-[661px] w-full rounded-xl object-cover"
                  src={project.attributes.media.data.attributes.url}
                  alt={project.attributes.title}
                  width={553}
                  height={661}
                />
              ) : (
                <video
                  src={project.attributes.media.data.attributes.url}
                  className="h-[661px] w-full rounded-xl object-cover"
                  width={533}
                  height={661}
                />
              )}
              <span className="hidden text-6xl font-bold">
                {project.attributes.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/blog" className="text-[2.5rem]">
        {ourData.data.attributes.projectLinkName} &gt;
      </Link>
    </div>
  );
}

// function ApplyToWork() {
//   const { locale } = useLang();
//   const { data: applyData, isLoading: isApplyLoading } =
//     api.home.getPage.useQuery({ lang: locale });
//   const { data: criterionData, isLoading: isCriterionLoading } =
//     api.home.getCriterion.useQuery({ lang: locale });
//   const { data: benefitData, isLoading: isBenefitLoading } =
//     api.home.getBenefit.useQuery({ lang: locale });
//   if (
//     isApplyLoading ||
//     isCriterionLoading ||
//     isBenefitLoading ||
//     !applyData ||
//     !criterionData ||
//     !benefitData
//   )
//     return;
//   return (
//     <div id="work" className="flex flex-col gap-10 pt-[9.375rem]">
//       <h2 className="text-[6.25rem] font-bold">
//         {applyData.data.attributes.applyHeading}
//       </h2>
//       <p className="text-[2.1875rem]">
//         {applyData.data.attributes.applyDescription}
//       </p>
//       <Accordion type="single" collapsible className="-mx-[100px]">
//         <AccordionItem value="item-1" className="border-t px-[100px]">
//           <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
//             {criterionData.data.attributes.criterion.name}
//           </AccordionTrigger>
//           <AccordionContent className="flex flex-col gap-[1.875rem] leading-tight">
//             <h3 className="text-[2.5rem] font-medium">
//               {criterionData.data.attributes.criterion.heading}
//             </h3>
//             <ul className="grid grid-cols-2 gap-10">
//               {criterionData.data.attributes.criterion.criterionList.map(
//                 (criterion, index) => (
//                   <li key={index}>
//                     <p className="text-[1.875rem] font-medium">
//                       {criterion.name}
//                     </p>
//                     <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
//                       {criterion.item.map((crit, index) => (
//                         <li key={index}>{crit.name}</li>
//                       ))}
//                     </ul>
//                   </li>
//                 ),
//               )}
//             </ul>
//             <p className="max-w-[1010px] pt-10 text-[1.875rem] font-medium">
//               {criterionData.data.attributes.criterion.note}
//             </p>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2" className="px-[100px]">
//           <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
//             {benefitData.data.attributes.benefit.name}
//           </AccordionTrigger>
//           <AccordionContent className="flex flex-col gap-[1.875rem] leading-tight">
//             <ul className="flex flex-wrap gap-10">
//               {benefitData.data.attributes.benefit.benefits.map(
//                 (benefit, index) => (
//                   <li key={index}>
//                     <h3 className="text-[1.875rem] font-medium">
//                       {benefit.name}
//                     </h3>
//                     <p className="max-w-[678px] text-[1.875rem]">
//                       {benefit.description}
//                     </p>
//                     {benefit.link ? (
//                       <Link href={benefit.link} className="text-sm">
//                         {benefit.linkName} &gt;
//                       </Link>
//                     ) : null}
//                   </li>
//                 ),
//               )}
//             </ul>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

function PreviousEmployees() {
  const { locale } = useLang();
  const { data: previousData, isLoading: isPreviousLoading } =
    api.home.getEmployed.useQuery({ lang: locale });
  if (isPreviousLoading || !previousData) return;
  return (
    <div className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[2.5rem] font-bold">
        {previousData.data.attributes.employed.title}
      </h2>
      <div className="-mx-[100px]">
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
    <main className="flex min-h-screen flex-col px-[100px]">
      <Suspense fallback={<div>Thinking...</div>}>
        <Hero />
        <Partners />
        <hr className="my-40 w-1/4 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <CarouselDemo />
        <OurTeams />
        <OurProject />
        <hr className="my-40 w-1/4 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <PreviousEmployees />
      </Suspense>
    </main>
  );
}
