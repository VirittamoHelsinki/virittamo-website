import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/@/components/ui/accordion";
import { Carousel } from "~/@/components/carousel";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
        Creating Career Opportunities to First-Time Jobholders Every Year
      </h1>
      <div className="grid grid-cols-5 gap-10">
        <Image
          src="/hero-img.png"
          alt="virittamo desc"
          width={1000}
          height={1000}
          className="col-span-3"
        />
        <div className="col-span-2 flex flex-col gap-10">
          <p className="text-3xl leading-[50px] opacity-75">
            Virittämö on Helsingin kaupungin työllistämispalvelu, joka yhdistää
            tuoretta työkokemusta tarvitsevat tekijät ja käytännön ICT-,
            ohjelmistokehitys- ja mediaosaajia etsivät yritykset.
          </p>
          <div className="flex justify-between gap-5">
            <p className="flex flex-col">
              Employes
              <span>100+ / yr</span>
            </p>
            <p className="flex flex-col">
              Careers started
              <span>200+</span>
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
    <div className="flex items-center justify-between bg-white pt-[9.375rem]">
      {partners.map((partner, index) => (
        <Image
          key={index}
          src={partner.imageUrl}
          alt={partner.alt}
          className="h-12"
          height={100}
          width={100}
        />
      ))}
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

function OurTeams() {
  return (
    <div id="teams" className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">Our Teams</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            Media
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>
            <Link className="group text-[2.5rem]" href="mailto:email@email.com">
              Lets talk
              <div className="w-16 self-start border-b-2 border-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            ICT
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>
            <Link className="group text-[2.5rem]" href="mailto:email@email.com">
              Lets talk
              <div className="w-16 self-start border-b-2 border-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
            Softa
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
            <p className="text-[2.5rem]">
              An innovative software developers. We implement both Web apps and
              mobile apps with modern development tools and technologies for our
              partners. We have implemented for our customers e.g., reservation
              systems, websites and form system.
            </p>
            <Link className="group text-[2.5rem]" href="mailto:email@email.com">
              Lets talk
              <div className="w-16 self-start border-b-2 border-black transition-all duration-300 group-hover:w-full" />
            </Link>
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

function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap py-12">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="mx-4 text-4xl">
            Arto Aitta Ltd {index + 1}
          </span>
        ))}
      </div>

      <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="mx-4 text-4xl">
            Arto Aitta Ltd {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkBanner() {
  return (
    <div className="flex flex-col pt-[9.375rem]">
      <Marquee />
      <Marquee />
    </div>
  );
}

function ApplyToWork() {
  return (
    <div id="work" className="flex flex-col pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">Apply to Us</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
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
      </Accordion>
      <p className="text-[2.1875rem]">
        Next time we take new applicants is in January 2024
      </p>
    </div>
  );
}
function PreviousEmployees() {
  return (
    <div className="flex flex-col pt-[9.375rem]">
      <h2 className="text-[2.5rem] font-bold">
        Who has employed are previous employeess
      </h2>
      <Marquee />
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
      <HeroSection />
      <Partners />
      <Carousel slides={slides} />
      <TODO />
      <OurTeams />
      <OurProject />
      <WorkBanner />
      <ApplyToWork />
      <PreviousEmployees />
    </main>
  );
}
