import { Suspense } from "react";
import Image from "next/image";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import Link from "next/link";
import { translations } from "~/utils/translations";
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/@/components/ui/accordion";

const formatText = (text: string | null) => {
  if (!text) return null;
  return text.replace(/\n/g, "<br>");
};

export default function CompaniesPage() {
  const { locale } = useLang();
  const { services } = translations[locale];
  const { data: companyData, isLoading: isCompanyLoading } =
    api.company.getPage.useQuery({ lang: locale });
  const { data: fprojectData, isLoading: isFprojectLoading } =
    api.post.getAllProjects.useQuery({ lang: locale });

  if (isCompanyLoading || isFprojectLoading || !companyData || !fprojectData) {
    return <div className="bg-white min-h-screen"></div>;
  }

  const formattedDescription = formatText(companyData.data.attributes.description);

  return (
    <main className="flex min-h-screen flex-col px-0 md:px-[120px] 2xl:px-[245px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-6 2xl:gap-10 2xl:mx-[0px] md:mx-[0px]">
          <h1 className="text-[32px] md:text-[52px] 2xl:text-[64px] pt-[20px] md:pt-[30px] 2xl:pt-[0] font-bold mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
            {companyData.data.attributes.title}
          </h1>
          <p className="text-[16px] md:text-[20px] pt-[0px] md:pt-[20px] mx-[20px] md:mx-[0px] 2xl:mx-[0px]"
            dangerouslySetInnerHTML={{ __html: formattedDescription ?? '' }} />
        </div>
        <hr className="my-10 2xl:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] md:my-[100px] border-4 rounded-full" />

        <h2 className="text-[24px] md:text-[38px] 2xl:text-[48px] pb-[24px] md:mb-[40px] font-medium mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          {companyData.data.attributes.projectHeading}
        </h2>

        <ul className="flex flex-col 2xl:flex-row md:flex-row gap-[30px] md:gap-[auto] 2xl:gap-[79px] mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          {fprojectData.data.map((project, index) => (
            <li key={index} className="w-full 2xl:w-1/2 xl:w-1/3 flex flex-col md:gap-[auto] gap-[10px]">
              <Link href={`/blog/${project.attributes.slug}`} passHref>
                {project.attributes.media.data.attributes.mime.startsWith("image") ? (
                  <Image
                    className="h-[218px] md:h-[320px] 2xl:h-[420px] w-full rounded-xl object-cover"
                    src={project.attributes.media.data.attributes.url}
                    alt={project.attributes.title}
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <video
                    src={project.attributes.media.data.attributes.url}
                    className="h-[218px] md:h-[320px] 2xl:h-[420px] w-full rounded-xl object-cover"
                    width={2000}
                    height={2000}
                    controls
                    autoPlay
                    loop
                    playsInline
                    webkit-playsinline
                  />
                )}
              </Link>
              <span className="text-[20px] md:text-[30px] 2xl:text-[40px]">
                {project.attributes.title}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-[20px] md:text-[30px] 2xl:text-[2rem] mt-[24px] 2xl:mt-[40px] mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {companyData.data.attributes.projectLinkName}
            <span className="ml-[10px]"><ArrowRight className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]" /></span>
          </span>
        </Link>

        <hr className="w-1/3 mx-auto border-t border-solid border-[#F5A4C8] my-[40px] md:my-[100px] border-4 rounded-full" />

        <div className="flex flex-col gap-6 2xl:gap-10 mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <h2 className="text-2xl md:text-[38px] 2xl:text-[48px] md:mb-[40px] 2xl:mb-[60px] font-medium">
            {services}
          </h2>
          <Accordion type="single" collapsible className="-mx-[0px]">
            {companyData.data.attributes.servicesList.map((services, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E2E8F0] pt-[0px] pb-[0px] 2xl:pb-[16px]"
              >
                <AccordionTrigger className="text-[20px] md:text-[30px] 2xl:text-[40px] font-medium flex items-center">
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {services.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
                  <ul className="list-disc pl-5 text-[1rem] md:text-[20px]">
                    {services.item.map((desc, descIndex) => (
                      <li key={descIndex}>{desc.name}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Suspense>
    </main>
  );
}