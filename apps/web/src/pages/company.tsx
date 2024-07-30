import { Suspense } from "react";
import Image from "next/image";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import Link from "next/link";
import { translations } from "~/utils/translations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/@/components/ui/accordion";

export default function CompaniesPage() {
  const { locale } = useLang();
  const {
    services
  } = translations[locale];
  const { data: companyData, isLoading: isCompanyLoading } =
    api.company.getPage.useQuery({ lang: locale });
  const { data: fprojectData, isLoading: isFprojectLoading } =
    api.post.getAllProjects.useQuery({ lang: locale });
  if (isCompanyLoading || isFprojectLoading || !companyData || !fprojectData) {
    return;
  }
  return (
    <main className="flex min-h-screen flex-col px-[100px] mx-[150px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-10">
          <h1 className="text-[4rem] font-bold leading-[8rem] tracking-tight sm:text-[5rem]]">
            {companyData.data.attributes.title}
          </h1>
          <p className="text-[1.25rem]">
            {companyData.data.attributes.description}
          </p>
          <figure className="max-h-4xl">
            <Image
              className="h-[400px] rounded-xl object-cover"
              src={companyData.data.attributes.img.data.attributes.url}
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
          </figure>
        </div>
        <hr className="my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <h2 className="sm:text-[3rem] font-medium pb-[1.375rem]">
          {companyData.data.attributes.projectHeading}
        </h2>
        <ul className="flex gap-[62px]">
          {fprojectData.data.map((project, index) => (
            <li key={index} className="flex max-w-[550px] flex-col gap-[10px]">
              <Link href={`/blog/${project.attributes.slug}`} passHref>
                {project.attributes.media.data.attributes.mime.startsWith(
                  "image",
                ) ? (
                  <Image
                    className="h-[400px] w-[535px] rounded-xl object-cover"
                    src={project.attributes.media.data.attributes.url}
                    alt={project.attributes.title}
                    width={553}
                    height={661}
                  />
                ) : (
                  <video
                    src={project.attributes.media.data.attributes.url}
                    className="h-[400px] w-[535px] rounded-xl object-cover"
                    width={533}
                    height={661}
                  />
                )}
                <span className="text-[2.5rem] font-medium">
                  {project.attributes.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-[2rem] pt-[2rem]">
          {companyData.data.attributes.projectLinkName} &gt;
        </Link>
        <hr className="my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className="flex flex-col gap-10 pt-[7.375rem]">
          <h2 className="text-[3rem] font-medium">
            {services}
          </h2>
          <Accordion type="single" collapsible className="-mx-[0px]">
            {companyData.data.attributes.servicesList.map((services, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t"
              >
                <AccordionTrigger className="text-[2.5rem] font-medium flex items-center">
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                    {services.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start gap-5 leading-tight">
                  <ul className="list-disc pl-5 text-[1.25rem]">
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
