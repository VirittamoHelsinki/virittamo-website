import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";

const formatText = (text: string | null) => {
  if (!text) return null;
  return text.replace(/\n/g, "<br>");
};

export default function ApplyToWork() {
  const { locale } = useLang();
  const { data: jobseekerData, isLoading: isJobseekerLoading } =
    api.jobseeker.getPage.useQuery({ lang: locale });
  if (
    isJobseekerLoading ||
    !jobseekerData
  )
  return <div className="bg-white min-h-screen"></div>;

  const formattedOfferDescription = formatText(jobseekerData.data.attributes.offerDescription);

  const {
    subsidy1,
    subsidy2,
    subsidy3,
  } = translations[locale];

  return (
    <main className="flex min-h-screen flex-col px-0 md:px-[50px] lg:px-[100px] md:mx-[75px] lg:mx-[150px]">
      <div id="work" className="flex flex-col gap-[24px] md:gap-6 lg:gap-10 md:ml-[10px] lg:ml-[0px] md:mr-[10px] lg:mr-[0px]">
        <h1 className="text-[1.5rem] md:text-[1.75rem] lg:text-[4rem] pt-[20px] md:pt-[30px] lg:pt-[0] font-bold ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
          {jobseekerData.data.attributes.applyHeading}
        </h1>
        <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] pt-[0px] md:pt-[1.5rem] lg:pt-[2.375rem] ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
          {jobseekerData.data.attributes.applyDescription}
        </p>
        <figure className="relative w-full mt-[16px] md:mt-[20px] lg:mt-[0px] md:h-[180px] lg:h-[352px] h-[216px]">
          <img
            src={jobseekerData.data.attributes.image.data.attributes.url}
            alt="Bold typography"
            className="w-screen h-full object-cover md:rounded-lg lg:rounded-xl"
            style={{ backgroundColor: 'var(--gray-5)' }}
          />
        </figure>
        <h2 className="text-[20px] md:text-[24px] lg:text-[3rem] pt-4 md:pt-6 lg:pt-[2.375rem] font-medium ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
          {jobseekerData.data.attributes.criterionHeading}
        </h2>
        <div className="flex flex-col gap-2 ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
          <ul className="list-inside list-disc pl-5 text-[0.875rem] md:text-[1rem] lg:text-[1.25rem]">
            {jobseekerData.data.attributes.criterionList.map((criterion, index) => (
              <li key={index}>{criterion.name}</li>
            ))}
          </ul>
          <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] pt-4 md:pt-6 lg:pt-10">
            {subsidy1}
            <a
              href="https://tyollisyyspalvelut.hel.fi/tyonhaku/tuetut-tyopaikat/palkkatuki"
              className="text-black underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {subsidy2}
            </a>
            {subsidy3}
          </p>
          <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] pt-4 md:pt-6 lg:pt-[4.375rem]">
            {jobseekerData.data.attributes.criterionDescription}
          </p>
        </div>
        <hr className="my-8 md:my-12 lg:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
          <h2 className="text-[20px] md:text-[24px] lg:text-[3rem] font-medium">
            {jobseekerData.data.attributes.offerHeading}
          </h2>
          <p
            className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem]"
            dangerouslySetInnerHTML={{ __html: formattedOfferDescription ?? '' }}
          />
        </div>
      </div>
      <ul id="services" className="ml-[10px] lg:ml-[0px] mr-[10px] lg:mr-[0px]">
        {jobseekerData.data.attributes.services.map((service, index) => (
          <li id={`v${index + 1}`} key={index} className="pt-6 md:pt-8 lg:pt-[3rem]">
            <h3 className="text-[18px] md:text-[20px] lg:text-[2.5rem] pt-4 md:pt-6 lg:pt-[3rem] font-medium">{service.title}</h3>
            <p className="text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] pt-2 md:pt-4 lg:pt-[2rem]">{service.description}</p>
          </li>
        ))}
      </ul>
    </main>  
  );
}