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
    <main className="flex min-h-screen flex-col px-0 md:px-[50px] lg:px-[100px] md:mx-[75px] lg:mx-[150px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-6 lg:gap-10 ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
          <h1 className="text-[2rem] mt-[40px] lg:mt-[0px] lg:text-[4rem] font-bold leading-tight lg:leading-[8rem] tracking-tight">
            {companyData.data.attributes.title}
          </h1>
          <p className="text-lg lg:text-[1.25rem]"
            dangerouslySetInnerHTML={{ __html: formattedDescription ?? '' }} />
        </div>
        <figure className="max-h-4xl mt-[24px]">
          <Image
            className="h-[200px] lg:h-[400px] lg:rounded-xl object-cover"
            src={companyData.data.attributes.img.data.attributes.url}
            alt="Picture of the author"
            width={2000}
            height={2000}
          />
        </figure>
        <hr className="my-10 lg:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />

        <h2 className="text-2xl lg:text-[3rem] font-medium pb-[1.375rem] lg:mb-[40px] ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
          {companyData.data.attributes.projectHeading}
        </h2>

        <ul className="flex flex-col lg:flex-row gap-[30px] lg:gap-[62px] ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
          {fprojectData.data.map((project, index) => (
            <li key={index} className="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-[10px]">
              <Link href={`/blog/${project.attributes.slug}`} passHref>
                {project.attributes.media.data.attributes.mime.startsWith("image") ? (
                  <Image
                    className="h-[218px] lg:h-[400px] w-full rounded-xl object-cover"
                    src={project.attributes.media.data.attributes.url}
                    alt={project.attributes.title}
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <video
                    src={project.attributes.media.data.attributes.url}
                    className="h-[218px] lg:h-[400px] w-full rounded-xl object-cover"
                    width={2000}
                    height={2000}
                    controls
                  />
                )}
              </Link>
              <span className="text-xl lg:mt-[20px] lg:text-[2.5rem]">
                {project.attributes.title}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-lg lg:text-[2rem] mt-[24px] lg:mt-[40px] lg:mb-[100px]  ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {companyData.data.attributes.projectLinkName}
            <span className="ml-[10px]"><ArrowRight className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]" /></span>
          </span>
        </Link>

        <hr className="w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />

        <div className="flex flex-col gap-6 lg:gap-10 lg:pt-[100px] ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
          <h2 className="text-2xl lg:text-[3rem] font-medium">
            {services}
          </h2>
          <Accordion type="single" collapsible className="-mx-[0px]">
            {companyData.data.attributes.servicesList.map((services, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E2E8F0] pt-[0px] pb-[0px] lg:pb-[16px] lg:pt-[16px]"
              >
                <AccordionTrigger className="text-[20px] lg:text-[2.5rem] font-medium flex items-center">
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {services.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
                  <ul className="list-disc pl-5 text-[1rem] lg:text-[1.25rem]">
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