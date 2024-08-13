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
    return;
  }

  const formattedWwaDescription = formatText(wwaData.data.attributes.wwa.description);

  const {
    address,
    campus,
  } = translations[locale];

  return (
    <main className="flex min-h-screen flex-col px-0 sm:px-10 md:px-[100px] lg:mx-[150px]">
      <Suspense fallback={`loading...`}>
        <div className="flex flex-col gap-6 sm:gap-10 ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          <h1 className="text-[32px] sm:text-[4rem] pt-[40px] sm:pt-[0] font-bold leading-tight sm:leading-[8rem] tracking-tight">
            {aboutData.data.attributes.title}
          </h1>
          <p className="text-[16px] sm:text-[1.25rem]">
            {aboutData.data.attributes.description}
          </p>
        </div>
        <figure className="max-h-4xl mt-[24px] sm:mt-[100px]">
          <Image
            className="h-[230px] sm:h-[352px] object-cover"
            src={aboutData.data.attributes.img.data.attributes.url}
            alt="Picture of the author"
            width={2000}
            height={2000}
          />
        </figure>
        <hr className="my-10 sm:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
        <div className="ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
          <h2 className="pb-[2.5rem] text-[24px] sm:text-[3rem] font-medium">
            {wwaData.data.attributes.wwa.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <figure className="w-full sm:w-1/2">
            <Image
              src={wwaData.data.attributes.wwa.img.data.attributes.url}
              alt="why we are known"
              className="h-[230px] sm:h-[400px] w-full object-cover sm:rounded-xl"
              width={1000}
              height={1000}
            />
          </figure>
          <p className="ml-[20px] mr-[20px] mt-[24px] sm:mt-[0px] sm:ml-[40px] sm:mr-[0px] text-[16px] sm:text-[1.25rem] sm:w-1/2"
            dangerouslySetInnerHTML={{ __html: formattedWwaDescription ?? '' }}
          />
        </div>
        <div className="">
          <div id="values" className="pt-[40px] sm:pt-[9.375rem]">
            <h2 className="pb-[24px] sm:pb-[3.75rem] text-[24px] sm:text-[3rem] font-medium ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
              {aboutData.data.attributes.heading1}
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
              {aboutData.data.attributes.values.map((value, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <Image
                    src={value.valueImg.data.attributes.url}
                    alt=""
                    className="h-[75px] sm:h-[100px] w-[75px] sm:w-[100px] rounded-xl object-cover"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-[18px] sm:text-3xl font-medium pt-[0.5rem] sm:pt-[1.25rem]">
                    {value.title}
                  </h3>
                  <p className="text-[14px] sm:text-xl opacity-75 pt-[0.5rem] sm:pt-[0.75rem]">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-10 sm:my-20 w-1/3 mx-auto border-t border-solid border-[#F5A4C8] border-4 rounded-full" />
          <div id="contact" className="">
            <h2 className="pb-[1.875rem] text-[24px] sm:text-[3rem] font-medium ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
              {aboutData.data.attributes.heading2}
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[3.125rem] ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
              {aboutData.data.attributes.contacts.map((contact, index) => (
                <li key={index} className="flex flex-col items-start gap-4 sm:gap-[1.875rem]">
                  <Image
                    src={contact.img.data.attributes.url}
                    alt=""
                    className="h-[70px] sm:h-[150px] w-[70px] sm:w-[150px] rounded-xl object-cover"
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col text-lg sm:text-[1.5625rem]">
                    <h3 className="text-[18px] sm:text-[30px]">
                      {contact.name}
                    </h3>
                    <p className="text-[14px] sm:text-[25px]">{contact.title}</p>
                    <a href={`mailto:${contact.email}`} className="block text-[14px] sm:text-[25px]">{contact.email}</a>
                    <a href={`tel:${contact.phone}`} className="block text-[14px] sm:text-[25px]">{contact.phone}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="map" className="flex flex-col pt-[40px] sm:pt-[9.375rem]">
            <div className="flex flex-col sm:gap-6 md:flex-row md:gap-10">
              <div className="flex flex-col h-[230px] sm:w-[995px] sm:h-[483px]">
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
              <div className="flex flex-col pt-6 md:pt-0 md:pl-[4.25rem] ml-[20px] mr-[20px] sm:ml-[0px] sm:mr-[0px]">
                <p className="pb-[12px] sm:pb-[2.5rem] text-[24px] sm:text-[2.25rem]">
                  {address}
                </p>
                <p className="text-[16px] sm:text-[1.25rem]">{campus}</p>
                <p className="text-[16px] sm:text-[1.25rem]">Myllypurontie 1, 00920 Helsinki</p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}