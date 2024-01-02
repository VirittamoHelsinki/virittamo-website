import { Suspense } from "react";
import Image from "next/image";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";

export default function CompaniesPage() {
  const { locale } = useLang();
  const { data: companyData, isLoading: isCompanyLoading } =
    api.company.getPage.useQuery({ lang: locale });

  if (isCompanyLoading || !companyData) {
    return <div>loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col px-[100px]">
      <Suspense fallback={"loading..."}>
        <div className="flex flex-col gap-10">
          <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
            {companyData.data.attributes.title}
          </h1>
          <p className="text-[1.875rem]">
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
        <ul className="">
          {companyData.data.attributes.services.map((service, index) => (
            <li id={`v${index + 1}`} key={index} className="pt-[9.375rem]">
              <h2 className="text-[6.25rem] font-bold">{service.title}</h2>
              <p className="text-[1.875rem]">{service.description}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    </main>
  );
}
