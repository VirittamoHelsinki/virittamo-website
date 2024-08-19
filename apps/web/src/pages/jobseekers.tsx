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
    <main className="flex min-h-screen flex-col px-0 md:px-[120px] 2xl:px-[245px]">
      <div id="work" className="flex flex-col gap-[24px] md:gap-6 2xl:gap-10 md:mx-[0px] 2xl:mx-[0px]">
        <h1 className="text-[32px] md:text-[52px] 2xl:text-[64px] pt-[20px] md:pt-[30px] 2xl:pt-[0] font-bold mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          {jobseekerData.data.attributes.applyHeading}
        </h1>
        <p className="text-[16px] md:text-[20px] pt-[0px] md:pt-[20px] mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          {jobseekerData.data.attributes.applyDescription}
        </p>
        <figure className="relative w-full mt-[16px] md:mt-[20px] 2xl:mt-[0px] md:h-[320px] 2xl:h-[352px] h-[216px]">
          <img
            src={jobseekerData.data.attributes.image.data.attributes.url}
            alt="Bold typography"
            className="w-screen h-full object-cover md:rounded-lg 2xl:rounded-xl"
            style={{ backgroundColor: 'var(--gray-5)' }}
          />
        </figure>
        <h2 className="text-[24px] md:text-[38px] 2xl:text-[48px] pt-4 md:pt-6 2xl:pt-[2.375rem] font-medium mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          {jobseekerData.data.attributes.criterionHeading}
        </h2>
        <div className="flex flex-col gap-2 mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <ul className="list-inside list-disc pl-5 text-[16px] md:text-[20px] 2xl:text-[1.25rem]">
            {jobseekerData.data.attributes.criterionList.map((criterion, index) => (
              <li key={index}>{criterion.name}</li>
            ))}
          </ul>
          <p className="text-[16px] md:text-[20px] pt-4 md:pt-6 2xl:pt-10">
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
          <p className="text-[16px] md:text-[20px] pt-4 md:pt-6 2xl:pt-[4.375rem]">
            {jobseekerData.data.attributes.criterionDescription}
          </p>
        </div>
        <hr className="my-8 md:my-12 2xl:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <h2 className="text-[24px] md:text-[38px] 2xl:text-[48px] font-medium ">
            {jobseekerData.data.attributes.offerHeading}
          </h2>
          <p
            className="text-[16px] md:text-[20px]"
            dangerouslySetInnerHTML={{ __html: formattedOfferDescription ?? '' }}
          />
        </div>
      </div>
      <ul id="services" className="ml-[10px] 2xl:ml-[0px] mr-[10px] 2xl:mr-[0px]">
        {jobseekerData.data.attributes.services.map((service, index) => (
          <li id={`v${index + 1}`} key={index} className="pt-6 md:pt-8 2xl:pt-[3rem]">
            <h3 className="text-[18px] md:text-[20px] 2xl:text-[2.5rem] pt-4 md:pt-6 2xl:pt-[3rem] font-medium">{service.title}</h3>
            <p className="text-[16px] md:text-[20px] pt-2 md:pt-4 2xl:pt-[2rem]">{service.description}</p>
          </li>
        ))}
      </ul>
    </main>  
  );
}