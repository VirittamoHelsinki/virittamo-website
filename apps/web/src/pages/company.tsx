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
    return;
  }

  const formattedDescription = formatText(companyData.data.attributes.description);

  return (
    <main className="flex min-h-screen flex-col px-0 sm:px-10 md:mx-[150px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-6 sm:gap-10 ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          <h1 className="text-[2rem] mt-[40px] sm:mt-[0px] sm:text-[4rem] font-bold leading-tight sm:leading-[8rem] tracking-tight">
            {companyData.data.attributes.title}
          </h1>
          <p className="text-lg sm:text-[1.25rem]"
            dangerouslySetInnerHTML={{ __html: formattedDescription ?? '' }} />
        </div>
        <figure className="max-h-4xl mt-[24px]">
          <Image
            className="h-[200px] sm:h-[400px] object-cover"
            src={companyData.data.attributes.img.data.attributes.url}
            alt="Picture of the author"
            width={2000}
            height={2000}
          />
        </figure>
        <hr className="my-10 sm:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />

        <h2 className="text-2xl sm:text-[3rem] font-medium pb-[1.375rem] sm:mb-[40px] ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          {companyData.data.attributes.projectHeading}
        </h2>

        <ul className="flex flex-col sm:flex-row gap-[30px] sm:gap-[62px] ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          {fprojectData.data.map((project, index) => (
            <li key={index} className="w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-[10px]">
              <Link href={`/blog/${project.attributes.slug}`} passHref>
                {project.attributes.media.data.attributes.mime.startsWith("image") ? (
                  <Image
                    className="h-[218px] sm:h-[400px] w-full rounded-xl object-cover"
                    src={project.attributes.media.data.attributes.url}
                    alt={project.attributes.title}
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <video
                    src={project.attributes.media.data.attributes.url}
                    className="h-[218px] sm:h-[400px] w-full rounded-xl object-cover"
                    width={2000}
                    height={2000}
                    controls
                  />
                )}
              </Link>
              <span className="text-xl sm:mt-[20px] sm:text-[2.5rem]">
                {project.attributes.title}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-lg sm:text-[2rem] mt-[24px] sm:mt-[40px] sm:mb-[100px]  ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            {companyData.data.attributes.projectLinkName}
            <span className="ml-[10px]"><ArrowRight className="w-[14px] h-[14px] sm:w-[24px] sm:w-[24px]" /></span>
          </span>
        </Link>

        <hr className="w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />

        <div className="flex flex-col gap-6 sm:gap-10 sm:pt-[100px] ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          <h2 className="text-2xl sm:text-[3rem] font-medium">
            {services}
          </h2>
          <Accordion type="single" collapsible className="-mx-[0px]">
            {companyData.data.attributes.servicesList.map((services, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E2E8F0] pt-[0px] pb-[0px] sm:pb-[16px] sm:pt-[16px]"
              >
                <AccordionTrigger className="text-[20px] sm:text-[2.5rem] font-medium flex items-center">
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {services.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
                  <ul className="list-disc pl-5 text-[1rem] sm:text-[1.25rem]">
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