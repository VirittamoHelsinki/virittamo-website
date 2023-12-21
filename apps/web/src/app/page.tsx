import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/@/components/ui/accordion";
import { Carousel } from "~/@/components/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/@/components/ui/popover";
import { Button } from "~/@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Icons } from "~/@/components/icons";
import { Test } from "~/@/components/test";
import { Suspense } from "react";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
        Creating Career Opportunities to First-Time Jobholders Every Year
      </h1>
      <div className="flex gap-10">
        <Image
          src="/hero-img.png"
          alt="virittamo desc"
          width={1000}
          height={1000}
          className="w-[979px] flex-1"
        />
        <div className="flex flex-1 flex-col gap-10">
          <p className="text-3xl leading-[50px] opacity-75">
            Virittämö on Helsingin kaupungin työllistämispalvelu, joka yhdistää
            tuoretta työkokemusta tarvitsevat tekijät ja käytännön ICT-,
            ohjelmistokehitys- ja mediaosaajia etsivät yritykset.
          </p>
          <div className="flex justify-between gap-5">
            <p className="flex flex-col text-xl">
              Employes
              <span className="text-3xl">100+ / yr</span>
            </p>
            <p className="flex flex-col text-xl">
              Careers started
              <span className="text-3xl">200+</span>
            </p>
            <Link
              href="mailto:email@email.com"
              className="rounded-[10px] bg-black px-8 py-4 text-2xl font-bold text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Partners() {
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
  return (
    <div className="flex flex-col gap-5 pt-[9.375rem]">
      <h2 className="text-[2.5rem] font-bold">Our Partners</h2>
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

function TODO() {
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

function OurTeams() {
  return (
    <div id="teams" className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">Our Teams</h2>
      <Accordion type="single" collapsible className="-mx-[100px]">
        <AccordionItem value="item-1" className="border-t px-[100px]">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            Media
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <JobMarquee
              company={[
                "Graphic Design",
                "Social Media Marketing",
                "Content Writer",
                "Audio Production",
                "Video Production",
              ]}
            >
              <Icons.MsPaint />
            </JobMarquee>
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>

            <ContactInfo
              name="John Strandberg"
              title="Media Team Lead"
              email="john.strandberg@hel.fi"
              phone="012 345 6789"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-[100px]">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            ICT
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <JobMarquee
              company={[
                "Cybersecurity",
                "Network Administration",
                "System Integration",
                "IT Support",
                "Virtualization",
              ]}
            >
              <Icons.MsPaint />
            </JobMarquee>
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>

            <ContactInfo
              name="Ari Tuomi"
              title="ICT Team Lead"
              email="ari.tuomi@hel.fi"
              phone="012 345 6789"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="px-[100px]">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            Softa
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <JobMarquee
              company={[
                "Software Development",
                "SEO",
                "Web App",
                "Fullstack Development",
                "UI/UX Design",
              ]}
            >
              <Icons.MsPaint />
            </JobMarquee>
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>
            <ContactInfo
              name="Arto Aitta"
              title="Softa Team Lead"
              email="arto.aitta@hel.fi"
              phone="012 345 6789"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function OurProject() {
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
  return (
    <div className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">Our Projects</h2>
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
        All Projects &gt;
      </Link>
    </div>
  );
}

function JobMarquee({
  company,
  children,
}: {
  company: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex overflow-x-hidden bg-black text-white">
      <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-[1.5625rem]">
        {company.map((job, index) => (
          <div key={index} className="flex flex-nowrap gap-5">
            <span className="text-4xl">{job}</span>
            {children}
          </div>
        ))}
      </div>

      <div className="absolute top-0 flex animate-marquee2 flex-nowrap gap-4 whitespace-nowrap py-[1.5625rem]">
        {company.map((job, index) => (
          <div key={index} className=" flex flex-nowrap gap-5">
            <span className="text-4xl">{job}</span>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

type Logos = {
  Valve: ({ className }: { className: string }) => React.JSX.Element;
};

function LogoMarquee({ logos }: { logos: Logos[] }) {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="flex animate-marquee flex-nowrap gap-4 whitespace-nowrap py-0">
        {logos.map((Logo, index) => (
          <Logo.Valve key={index} className="mx-4 h-16 w-60" />
        ))}
      </div>

      <div className="absolute top-0 flex animate-marquee2 flex-nowrap gap-4 whitespace-nowrap py-0">
        {logos.map((Logo, index) => (
          <Logo.Valve key={index} className="mx-4 h-16 w-60" />
        ))}
      </div>
    </div>
  );
}

function ApplyToWork() {
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

const logos = [
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 436 121.06"
        className={className}
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              className="cls-1"
              x="1"
              y="-1"
              width="436"
              height="124.06"
            ></rect>
          </clipPath>
        </defs>
        <polygon
          className="cls-2"
          points="142.57 36.95 134.84 67.88 151.01 67.88 142.57 36.95"
        ></polygon>
        <g className="cls-3">
          <path
            className="cls-2"
            d="M47.1,24.6l14.1,55.3L75,24.6h15.2L67.9,97.8H54.5L32.7,24.6H47.1z M132.4,24.6h19.7l20.8,73.3h-14.8 l-4.9-18.3h-21.9c0,0-3.8,14.7-4.6,18c-4.4,0.3-15.1,0-15.1,0L132.4,24.6z M208.4,24.6h14.4v60.9h30.7v12.3h-45.1L208.4,24.6z M285.9,24.6L300,79.2l13.7-54.6h14.8l-22.2,73.3h-13l-22.2-73.3L285.9,24.6z M389.5,24.6v9.5h-19.7v10.6h18v9.5h-18v10.9h19.7 v9.5h-30.7v-50H389.5z M0,123.2h436V-1.1H0"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        width="101"
        height="28"
        viewBox="0 0 101 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clip-path="url(#clip0)">
          <path
            d="M91.8964 5.86963C91.8923 5.86963 91.8876 5.86963 91.8828 5.86963C87.2971 5.86963 83.5801 9.45538 83.5801 13.8792C83.5801 17.0515 85.4916 19.7926 88.2644 21.09C89.3535 21.6413 90.5862 21.9523 91.8944 21.9523C91.8951 21.9523 91.8957 21.9523 91.8964 21.9523H100.163V13.845C100.149 9.44553 96.4563 5.88275 91.8971 5.87029L91.8964 5.86963ZM96.81 18.6731H91.942C91.9175 18.6744 91.8882 18.675 91.859 18.675C91.7093 18.675 91.5631 18.658 91.4236 18.6265C91.2733 18.5805 91.0848 18.5484 90.8896 18.5398C88.6209 18.0529 86.9508 16.1386 86.9352 13.8457C86.9352 11.2135 89.1454 9.08132 91.8726 9.08132C94.5998 9.08132 96.81 11.2135 96.81 13.8444V18.6737V18.6731Z"
            fill="black"
          ></path>
          <path
            d="M25.649 5.86963C25.6456 5.86963 25.6408 5.86963 25.6367 5.86963C21.051 5.86963 17.334 9.45538 17.334 13.8792C17.334 17.0515 19.2455 19.7926 22.0183 21.09C23.1075 21.6413 24.3401 21.9523 25.6483 21.9523C25.6489 21.9523 25.6496 21.9523 25.6503 21.9523H33.917V13.845C33.9034 9.44553 30.2095 5.8821 25.6496 5.87029L25.649 5.86963ZM30.5626 18.6731H25.6945C25.67 18.6744 25.6408 18.675 25.6115 18.675C25.4619 18.675 25.3156 18.658 25.1762 18.6265C25.0258 18.5805 24.8374 18.5484 24.6421 18.5398C22.3734 18.0529 20.7034 16.1386 20.6877 13.8457C20.6877 11.2135 22.8979 9.08132 25.6251 9.08132C28.3524 9.08132 30.5626 11.2135 30.5626 13.8444V18.6737V18.6731Z"
            fill="black"
          ></path>
          <path
            d="M12.8133 7.28771V7.24309C12.5487 7.06918 12.2453 6.90643 11.927 6.76993C11.8895 6.7555 11.8895 6.75484 11.8895 6.75418C11.8895 6.73056 11.8691 6.71087 11.8446 6.71087C11.844 6.71087 11.844 6.71087 11.8433 6.71087C11.7508 6.66625 11.614 6.62162 11.5215 6.58356C10.6174 6.19243 9.56233 5.96406 8.45144 5.96209H3.39838V0.997559H0.000421662V13.9815C-0.0458368 18.3232 3.72015 21.9562 8.26709 21.9562C12.8378 21.949 16.5406 18.3724 16.5406 13.9618C16.5406 11.1845 15.0718 8.73737 12.8433 7.30478L12.8133 7.28771ZM8.26573 18.7176C5.55688 18.7176 3.35144 16.5474 3.35144 13.9329V9.19215H8.40382C8.71607 9.19806 9.01675 9.23021 9.30858 9.28665C11.5419 9.76834 13.2127 11.6852 13.2256 13.9808C13.2133 16.5999 11.0113 18.7176 8.29566 18.7176C8.28477 18.7176 8.27457 18.7176 8.26369 18.7176H8.26573Z"
            fill="black"
          ></path>
          <path
            d="M47.2104 10.9209C46.3084 9.83482 44.9329 9.1451 43.3914 9.1451C43.3777 9.1451 43.3648 9.1451 43.3512 9.1451C40.6893 9.1451 38.4852 11.272 38.4852 13.8859V22.0023H35.041L35.0873 13.8898C35.0873 9.50341 38.8533 5.91504 43.3546 5.91504C43.3614 5.91504 43.3689 5.91504 43.3764 5.91504C45.5363 5.91504 47.5002 6.7242 48.9601 8.04588C48.1743 8.79532 47.5778 9.81382 47.2097 10.9216L47.2104 10.9209Z"
            fill="black"
          ></path>
          <path
            d="M81.2861 9.32631C82.2045 10.5876 82.7548 12.1541 82.7562 13.8452V21.9532H79.4045V13.8905C79.4045 13.8846 79.4045 13.8774 79.4045 13.8708C79.4045 12.8162 79.0589 11.8397 78.4705 11.0404C78.4813 11.0109 78.4351 11.0109 78.3888 10.9663C78.3358 10.8718 78.2575 10.7957 78.1623 10.7464C78.1133 10.7005 78.1133 10.6559 78.0671 10.6178C77.9705 10.5023 77.865 10.4006 77.7494 10.31C77.08 9.73121 76.2569 9.31253 75.3466 9.11696C75.1113 9.10187 74.9222 9.06971 74.7432 9.01721C74.5759 9.02115 74.4378 8.97653 74.2541 8.97653H69.397V20.1846C69.4895 22.4441 65.999 22.6659 65.999 20.14V5.64868H74.2664C75.5732 5.64934 76.8038 5.9604 77.8847 6.50968C79.2623 7.12984 80.4283 8.09781 81.2677 9.29612L81.2861 9.32631Z"
            fill="black"
          ></path>
          <path
            d="M61.3556 5.73779H56.4876C55.1774 5.74304 53.9434 6.05345 52.857 6.59945C50.0801 7.89817 48.1699 10.6387 48.1699 13.8097C48.1699 18.221 51.8672 21.7995 56.4352 21.8192C60.938 21.8192 64.7039 18.2308 64.7039 13.8445H64.7502V5.73845H61.355L61.3556 5.73779ZM61.3094 13.8451C61.2897 16.4603 59.0869 18.5734 56.3733 18.5734C53.6468 18.5734 51.4366 16.4412 51.4366 13.811C51.4366 11.5187 53.1155 9.60442 55.3522 9.15095C55.5842 9.13651 55.7726 9.10501 55.9522 9.05251C56.0631 9.02692 56.2087 9.01051 56.3584 9.01051C56.3876 9.01051 56.4162 9.01117 56.4454 9.01248H61.3094V13.8418V13.8451Z"
            fill="black"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        aria-title="Gofore"
        width="107"
        height="18"
        viewBox="0 0 107 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M64.574 0c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 14.4a5.401 5.401 0 01-5.4-5.4c0-2.981 2.419-5.4 5.4-5.4 2.981 0 5.4 2.419 5.4 5.4 0 2.981-2.419 5.4-5.4 5.4zM28.125 0c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 14.4a5.401 5.401 0 01-5.4-5.4c0-2.981 2.419-5.4 5.4-5.4 2.981 0 5.4 2.419 5.4 5.4 0 2.981-2.419 5.4-5.4 5.4zm12.6 3.06h3.6V10.8h7.897V7.2h-7.897V4.14h8.1V.54h-11.7v16.92zm65.699-13.32V.54h-11.7v16.92h11.7v-3.6h-8.1V10.8h7.74V7.2h-7.74V4.14h8.1zm-15.75 2.655C90.65 3.353 87.794.54 84.318.54h-7.144v16.92h3.6v-4.32h2.992l2.61 4.32h4.208l-3.105-5.141a6.1 6.1 0 001.361-1.046 6.24 6.24 0 001.834-4.478zm-4.388 1.946a2.662 2.662 0 01-1.912.799h-3.6v-5.4h3.544c1.507 0 2.745 1.204 2.756 2.678 0 .73-.27 1.406-.788 1.923zm-73.079 2.824h-.54v1.395A5.338 5.338 0 019 14.4a5.334 5.334 0 01-3.814-1.586A5.334 5.334 0 013.6 9c0-1.44.562-2.801 1.586-3.814A5.334 5.334 0 019 3.6c1.44 0 2.801.562 3.814 1.586l2.542-2.542A8.862 8.862 0 009 0a8.943 8.943 0 00-6.367 2.632A8.943 8.943 0 000 9c0 2.408.934 4.669 2.632 6.367A8.942 8.942 0 009 18a8.942 8.942 0 006.367-2.633c.214-.213.417-.45.608-.686-.091-1.102-.551-3.116-2.768-3.116zm-.484-4.522H8.39v3.577h4.827c1.36 0 2.418.607 3.06 1.688V11.07c0-1.159-.293-2.104-.878-2.813-.651-.787-1.607-1.214-2.677-1.214z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="52.35"
        viewBox="0 0 70 52.35"
        className={className}
      >
        <defs></defs>
        <g id="Layer_2">
          <g id="Layer_1-2">
            <path
              className="stroke-none"
              d="m70,24.55c-.01-1.57-.64-3.16-1.34-4.35,0,0-9.89-16.99-9.97-17.13v-.02h-.01c-1.12-1.79-3.03-2.92-5.14-3.04H16.47c-2.11.12-4.02,1.26-5.14,3.04h0v.02c-.1.14-9.99,17.13-9.99,17.13C.64,21.39.01,22.98,0,24.55c-.02,2.17.99,4.23,2.73,5.54h0l25.85,19.71c2.03,1.48,4.01,2.56,6.42,2.56s4.38-1.08,6.42-2.56l25.85-19.71h0c1.74-1.31,2.75-3.36,2.73-5.54Z"
            />
            <path
              className="fill-white stroke-none"
              d="m12.49,27.35c1.01,0,2.02-.1,3.01-.29l.16.88s-1.19.37-3.1.37c-2.8,0-4.21-.51-4.21-4.38,0-1.15.16-2.24.44-2.88.49-1.15,1.6-1.5,3.56-1.5,1.52,0,2.62.17,3.19.86.46.59.64,1.39.64,2.82,0,.33-.02.64-.04.99-.31.02-1.46.15-2.84.15s-2.53-.07-2.53-.07l-.57-.39c-.09-.08-.21-.12-.33-.13-.35,0-.31.33-.31.57,0,.77.02,1.74.55,2.33.44.5,1.25.68,2.38.68Zm-.04-6.89c-2.69,0-2.77.48-2.88,2.84,1.26.2,2.75.16,2.75.16,0,0,1.52.04,2.62-.07,0-2.66-.51-2.93-2.49-2.93h0Z"
            />
            <path
              className="fill-white stroke-none"
              d="m22.8,16.75c-.38-.05-.77-.07-1.15-.07-.57,0-1.14.04-1.39.31-.27.31-.31.9-.31,1.52v1.14h2.69v.9h-2.7v6.47c0,.24.04.29.26.33l.48.09v.73h-2.62v-.71l.48-.09c.22-.06.26-.11.26-.33v-6.49h-1.61v-.9h1.61v-1.15c0-.91.05-1.8.82-2.33.46-.33,1.19-.39,1.87-.39.47.01.93.05,1.39.13l-.07.84Z"
            />
            <path
              className="fill-white stroke-none"
              d="m23.67,28.17v-.71l.48-.09c.22-.06.26-.11.26-.33v-6.23c0-.24-.04-.29-.26-.33l-.48-.09v-.73h1.89v7.37c0,.24.04.29.26.33l.48.09v.73h-2.62Zm.39-10.81v-1.39h1.45v1.39h-1.45Z"
            />
            <path
              className="fill-white stroke-none"
              d="m34.26,19.91l-.15.86c-.88-.18-1.78-.28-2.68-.29-2.33,0-2.84.51-2.84,3.45s.51,3.45,2.84,3.45c.9-.01,1.79-.11,2.68-.29l.15.86c-.99.23-1.99.36-3.01.37-2.86,0-3.87-.77-3.87-4.38s1.01-4.38,3.87-4.38c1.01,0,2.02.13,3.01.37Z"
            />
            <path
              className="fill-white stroke-none"
              d="m39.29,28.3c-3.28,0-3.87-.77-3.87-4.38s.59-4.38,3.87-4.38,3.87.77,3.87,4.38-.59,4.38-3.87,4.38Zm0-7.84c-2.42,0-2.66.37-2.66,3.46s.24,3.46,2.66,3.46,2.66-.37,2.66-3.46-.24-3.46-2.66-3.46Z"
            />
            <path
              className="fill-white stroke-none"
              d="m51.07,28.17l-.07-.46c-.02-.11-.05-.29-.31-.29-.13,0-.26.09-.37.16l-.88.59c-.51.09-1.03.13-1.55.13-2.79,0-3.24-1.8-3.24-4.38s.44-4.38,3.39-4.38c.98,0,1.97.1,2.93.29v-2.71c0-.24-.04-.29-.26-.33l-.48-.09v-.73h1.89v11.05c0,.24.04.29.26.33l.48.09v.73h-1.78Zm-.11-7.48c-.84-.13-1.69-.21-2.55-.22-2.13,0-2.56.72-2.56,3.45s.44,3.43,2.56,3.43c.86-.02,1.72-.14,2.55-.37v-6.29Z"
            />
            <path
              className="fill-white stroke-none"
              d="m57.97,27.35c1.01,0,2.02-.1,3.01-.29l.17.88s-1.19.37-3.1.37c-2.8,0-4.22-.51-4.22-4.38,0-1.15.16-2.24.44-2.88.49-1.15,1.59-1.5,3.56-1.5,1.52,0,2.62.17,3.19.86.46.59.64,1.39.64,2.82,0,.33-.02.64-.04.99-.31.02-1.46.15-2.84.15s-2.53-.07-2.53-.07l-.57-.39c-.09-.08-.21-.12-.33-.13-.35,0-.31.33-.31.57,0,.77.02,1.74.55,2.33.44.5,1.25.68,2.39.68Zm-.04-6.89c-2.69,0-2.77.48-2.88,2.84,1.26.2,2.74.16,2.74.16,0,0,1.52.04,2.62-.07,0-2.66-.51-2.93-2.49-2.93h0Z"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        id="Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1152.79 328.79"
        className={className}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="338.6"
            y1="110.64"
            x2="408.67"
            y2="229.34"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fa344c" />
            <stop offset="1" stop-color="#011278" />
          </linearGradient>
          <clipPath id="clippath">
            <path
              className="cls-1 fill-none"
              d="m131.79,68C60.54,68,2.79,125.75,2.79,197s57.75,129,129,129,129-57.75,129-129-57.75-129-129-129Zm0,208.54c-43.93,0-79.54-35.61-79.54-79.54s35.61-79.54,79.54-79.54,79.54,35.61,79.54,79.54-35.61,79.54-79.54,79.54Z"
            />
          </clipPath>
        </defs>
        <path
          className="cls-4 fill-[#011278]"
          d="m773.75,118.3h-58.55c-.09,1.21-.21,2.21-.21,3.21.01,26.69-.27,53.4.21,80.1.19,10.73,1.11,21.62,3.29,32.1,4.17,20.04,15.77,30.47,35.71,33.6,6.39,1.01,12.88,1.37,19.59,2.07v49.63c-5.32-.28-10.63-.41-15.92-.85-14.76-1.23-29.07-4.35-42.47-11.05-21.34-10.69-34.38-28.38-41.51-51.04-5.05-16.05-7.13-32.61-7.45-49.36-.48-24.6-.55-49.22-.6-73.83-.09-40.52-.01-81.03-.01-121.55v-4.31h49.03v66.48h58.91v44.8h-.01Z"
        />
        <path className="cls-4 fill-[#011278]" d="m572.79,74h49v245h-49V74Z" />
        <path
          className="cls-4 fill-[#011278]"
          d="m1023.79,68c-71.25,0-129,57.75-129,129s57.75,129,129,129,129-57.75,129-129-57.75-129-129-129Zm0,208.54c-43.93,0-79.54-35.61-79.54-79.54s35.61-79.54,79.54-79.54,79.54,35.61,79.54,79.54-35.61,79.54-79.54,79.54Z"
        />
        <path
          className="cls-4 fill-[#011278]"
          d="m597.29,59c16.29,0,29.5-13.21,29.5-29.5s-13.21-29.5-29.5-29.5-29.5,13.21-29.5,29.5,13.21,29.5,29.5,29.5Z"
        />
        <path className="cls-4 fill-[#011278]" d="m810.79,74h49v245h-49V74Z" />
        <path
          className="cls-4 fill-[#011278]"
          d="m835.29,59c16.29,0,29.5-13.21,29.5-29.5s-13.21-29.5-29.5-29.5-29.5,13.21-29.5,29.5,13.21,29.5,29.5,29.5Z"
        />
        <path
          className="cls-3"
          style={{ fill: "url(#linear-gradient)" }}
          d="m531.9,319h-49v-132.17c0-38.53-31.35-69.88-69.88-69.88s-69.88,31.35-69.88,69.88v132.17h-49v-132.17c0-65.55,53.33-118.88,118.88-118.88s118.88,53.33,118.88,118.88v132.17Z"
        />
        <g className="cls-2" style={{ clipPath: "url(#clippath)" }}>
          <image
            width="265"
            height="265"
            transform="translate(-.92 64.59)"
            xlinkHref="data:image/png;base64,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"
          />
        </g>
        <path
          className="cls-4 fill-[#011278]"
          d="m209.24,178.89l44.67-23.59c-2.22-6.51-4.96-12.79-8.14-18.78l-43.63,23.33c3.14,5.94,5.55,12.33,7.11,19.04Z"
        />
      </svg>
    ),
  },
  {
    Valve: ({ className }: { className: string }) => (
      <svg
        version="1.1"
        id="Calque_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300.9 140"
        xmlSpace="preserve"
        className={className}
        role="img"
        aria-label="CGI official logo"
        height="46px"
      >
        <g id="Layer_1">
          <g>
            <path
              className="st0 fill-[#11937]"
              d="M74.8,27c-27.4,0-44.2,21.4-44.2,43c0,26,21.2,43,44.4,43c15.4,0,30-6.8,42.4-17.8v32.2
c-13,7.8-30.8,12.6-44.6,12.6C33.2,140,0,107.8,0,70C0,30,33.4,0,73,0c15.2,0,33,4.6,44.6,10.4V42C103,32.4,88.2,27,74.8,27z"
            ></path>
            <path
              className="st0 fill-[#11937]"
              d="M201.6,140c-39.8,0-73.4-31-73.4-70c0-39.4,33.4-70,75.2-70c15.2,0,34,4,45.6,9.4v31.4
C235.8,33.2,218.8,27,204,27c-27.4,0-45.2,21.4-45.2,43c0,25.4,21,43.8,45.6,43.8c5.2,0,10.2-0.4,16.6-2.8V85.8h-22.4V59.2h51.2
V130C235.2,136.6,218.8,140,201.6,140z"
            ></path>
            <path
              className="st0 fill-[#11937]"
              d="M272.1,137.2V2.8h28.8v134.4L272.1,137.2L272.1,137.2z"
            ></path>
          </g>
        </g>
        <g id="Protection"></g>
        <g id="Guides"></g>
      </svg>
    ),
  },
];

function PreviousEmployees() {
  return (
    <div className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[2.5rem] font-bold">
        Who has employed are previous employeess
      </h2>
      <div className="-mx-[100px]">
        <LogoMarquee logos={logos} />
      </div>
    </div>
  );
}

const slides = [
  {
    imageUrl:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png",
    title: "Generative Art",
    description:
      "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
  },
  {
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg",
    title: "Generative Art",
    description:
      "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg",
    title: "Generative Art",
    description:
      "Generative art is art created with the use of an autonomous system. An autonomous system in this context is generally one that is non-human and can independently determine features of an artwork that would otherwise require decisions made directly by the artist.",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col px-[100px]">
      <Suspense fallback={"Arto is thinking for 100..."}>
        <Test />
      </Suspense>
      <HeroSection />
      <Partners />
      <Carousel slides={slides} />
      <TODO />
      <OurTeams />
      <OurProject />
      <ApplyToWork />
      <PreviousEmployees />
    </main>
  );
}
