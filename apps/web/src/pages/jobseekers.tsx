import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";

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
    return;

  const formattedOfferDescription = formatText(jobseekerData.data.attributes.offerDescription);

  return (
    <main className="flex min-h-screen flex-col px-0 sm:px-[100px] md:mx-[150px]">
      <div id="work" className="flex flex-col gap-[24px] sm:gap-10 ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
        <h1 className="text-[2rem] pt-[40px] sm:pt-[0] sm:text-[4rem] font-bold">
          {jobseekerData.data.attributes.applyHeading}
        </h1>
        <p className="text-[1rem] sm:text-[1.25rem] pt-[0px] sm:pt-[2.375rem]">
          {jobseekerData.data.attributes.applyDescription}
        </p>
        <h2 className="text-[24px] sm:text-[3rem] pt-4 sm:pt-[2.375rem] font-medium">
          {jobseekerData.data.attributes.criterionHeading}
        </h2>
        <div className="flex flex-col gap-2">
          <ul className="list-inside list-disc pl-5 text-[1rem] sm:text-[1.25rem]">
            {jobseekerData.data.attributes.criterionList.map((criterion, index) => (
              <li key={index}>{criterion.name}</li>
            ))}
          </ul>
          <p className="text-[1rem] sm:text-[1.25rem] pt-6 sm:pt-10">
            Palkkatukioikeudesta voit saada lisää tietoa{" "}
            <a
              href="https://tyollisyyspalvelut.hel.fi/tyonhaku/tuetut-tyopaikat/palkkatuki"
              className="text-black underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              työllisyyspalveluiden nettisivuilta{" "}
            </a>
            tai kysymällä TE-toimiston asiantuntijaltasi.
          </p>
          <p className="text-[1rem] sm:text-[1.25rem] pt-6 sm:pt-[4.375rem]">
            {jobseekerData.data.attributes.criterionDescription}
          </p>
        </div>
        <hr className="my-12 sm:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className="flex flex-col gap-6 sm:gap-10">
          <h2 className="text-[24px] sm:text-[3rem] font-medium">
            {jobseekerData.data.attributes.offerHeading}
          </h2>
          <p
            className="text-[1rem] sm:text-[1.25rem]"
            dangerouslySetInnerHTML={{ __html: formattedOfferDescription ?? '' }}
          />
        </div>
      </div>
      <figure className="w-full mt-[24px] sm:mt-[0px]">
        <img
          src={jobseekerData.data.attributes.image.data.attributes.url}
          alt="Bold typography"
          style={{
            display: 'block',
            objectFit: 'cover',
            width: '100%',
            height: 175,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </figure>
      <ul id="services" className="ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
        {jobseekerData.data.attributes.services.map((service, index) => (
          <li id={`v${index + 1}`} key={index} className="pt-8 sm:pt-[3rem]">
            <h3 className="text-[20px] sm:text-[2.5rem] pt-6 sm:pt-[3rem] font-medium">{service.title}</h3>
            <p className="text-[1rem] sm:text-[1.25rem] pt-4 sm:pt-[2rem]">{service.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}