import Image from "next/image";
import { Suspense } from "react";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";

const formatText = (text: string | null) => {
  if (!text) return null;
  return text.replace(/\n/g, "<br>");
};

export default function AboutPage() {
  const { locale } = useLang();
  const { data: aboutData, isLoading: isAboutLoading } =
    api.about.getPage.useQuery({ lang: locale });
  const { data: wwaData, isLoading: isWwaLoading } =
    api.about.getWwa.useQuery({ lang: locale });
  if (isAboutLoading || isWwaLoading || !wwaData || !aboutData) {
    return <div className="bg-white min-h-screen"></div>;
  }

  const formattedWwaDescription = formatText(wwaData.data.attributes.wwa.description);

  const {
    address,
    campus,
  } = translations[locale];

  return (
    <main className="flex min-h-screen flex-col px-0 md:px-[120px] 2xl:px-[245px]">
      <Suspense fallback={`loading...`}>
        <div className="flex flex-col gap-6 2xl:gap-10 mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <h1 className="text-[32px] md:text-[52px] 2xl:text-[64px] pt-[40px] 2xl:pt-[0] font-bold leading-tight 2xl:leading-[8rem] tracking-tight">
            {aboutData.data.attributes.title}
          </h1>
          <p className="text-[16px] md:text-[20px]">
            {aboutData.data.attributes.description}
          </p>
        </div>
        <figure className="max-h-4xl mt-[24px] 2xl:mt-[100px]">
          <Image
            className="h-[230px] md:h-[352px] md:rounded-xl object-cover"
            src={aboutData.data.attributes.img.data.attributes.url}
            alt="Picture of the author"
            width={2000}
            height={2000}
          />
        </figure>
        <hr className="my-10 2xl:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className=" mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
          <h2 className="pb-[2.5rem] text-[24px] md:text-[38px] 2xl:text-[48px] font-medium">
            {wwaData.data.attributes.wwa.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <figure className="w-full md:w-1/2">
            <Image
              src={wwaData.data.attributes.wwa.img.data.attributes.url}
              alt="why we are known"
              className="h-[230px] md:h-[300px] 2xl:h-[400px] w-full object-cover md:rounded-xl"
              width={1000}
              height={1000}
            />
          </figure>
          <p className="mx-[20px] mt-[24px] md:mt-[0px] md:ml-[40px] 2xl:mr-[0px] text-[16px] md:text-[20px] md:w-1/2"
            dangerouslySetInnerHTML={{ __html: formattedWwaDescription ?? '' }}
          />
        </div>
        <div className="">
          <div id="values" className="pt-[40px] md:pt-[100px]">
            <h2 className="pb-[24px] md:pb-[40px] text-[24px] md:text-[38px] 2xl:text-[48px] font-medium  mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
              {aboutData.data.attributes.heading1}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-6 2xl:gap-10  mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
              {aboutData.data.attributes.values.map((value, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <Image
                    src={value.valueImg.data.attributes.url}
                    alt=""
                    className="h-[60px] md:h-[80px] 2xl:h-[100px] w-[60px] md:w-[80px] 2xl:w-[100px] rounded-xl object-cover"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-[18px] md:text-[30px] font-medium pt-[0.5rem] md:pt-[10px]">
                    {value.title}
                  </h3>
                  <p className="text-[14px] md:text-[20px] pt-[0.5rem] md:pt-[10px]">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-10 2xl:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] my-[100px] border-4 rounded-full" />
          <div id="contact" className="">
            <h2 className="pb-[1.875rem] text-[24px] md:text-[38px] 2xl:text-[48px] font-medium mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
              {aboutData.data.attributes.heading2}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-[3.125rem] mx-[20px] md:mx-[0px] 2xl:mx-[0px]">
              {aboutData.data.attributes.contacts.map((contact, index) => (
                <li key={index} className="flex flex-col 2xl:flex-row items-start gap-4 lg:gap-[1.875rem]">
                  <Image
                    src={contact.img.data.attributes.url}
                    alt=""
                    className="h-[70px] md:h-[125px] 2xl:h-[150px] w-[70px] md:w-[125px] 2xl:w-[150px] rounded-xl object-cover"
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[18px] md:text-[30px]">
                      {contact.name}
                    </h3>
                    <p className="text-[14px] md:text-[25px] flex" 
                    style={{ overflowWrap: 'anywhere' }}
                    >{contact.title}</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[14px] md:text-[25px] flex"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {contact.email}
                    </a>
                    <a href={`tel:${contact.phone}`} 
                    className="text-[14px] md:text-[25px] flex"
                    style={{ overflowWrap: 'anywhere' }}>
                      {contact.phone}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="map" className="flex flex-col pt-[40px] md:pt-[100px] md:pb-[100px]">
            <div className="flex flex-col 2xl:gap-6 md:flex-row md:gap-10">
              <div className="flex flex-col h-[230px] md:w-[638px] md:h-[385px] 2xl:w-[995px] 2xl:h-[483px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.415977479487!2d25.07534967768671!3d60.22349387505956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692097d49be7743%3A0x44d7181298503381!2sMyllypurontie%201%2C%2000920%20Helsinki!5e0!3m2!1sfi!2sfi!4v1702891756176!5m2!1sfi!2sfi"
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col pt-6 md:pt-0 md:pl-[4.25rem] ml-[20px] mr-[20px] 2xl:ml-[0px] 2xl:mr-[0px]">
                <p className="pb-[12px] 2xl:pb-[2.5rem] text-[24px] md:text-[30px] 2xl:text-[40px]">
                  {address}
                </p>
                <p className="text-[16px] md:text-[25px]">{campus}</p>
                <p className="text-[16px] md:text-[25px]">Myllypurontie 1, 00920 Helsinki</p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}