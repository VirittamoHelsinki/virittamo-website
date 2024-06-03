import Image from "next/image";
import { Suspense } from "react";
import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";

export default function AboutPage() {
  const { locale } = useLang();
  const { data: aboutData, isLoading: isAboutLoading } =
    api.about.getPage.useQuery({ lang: locale });
  const { data: wwaData, isLoading: isWwaLoading } =
    api.about.getWwa.useQuery({ lang: locale });
  if (isAboutLoading || isWwaLoading || !wwaData || !aboutData) {
    return;
  }
  return (
    <main className="flex min-h-screen flex-col px-[100px] mx-[150px]">
      <Suspense fallback={`loading...`}>
        <div className="flex flex-col gap-10">
          <h1 className="text-[3.25rem] font-bold leading-[8rem] tracking-tight sm:text-[3.25rem]">
            {aboutData.data.attributes.title}
          </h1>
          <p className="text-[1.5rem]">
            {aboutData.data.attributes.description}
          </p>
          <figure className="max-h-4xl">
            <Image
              className="h-[400px] rounded-xl object-cover"
              src={aboutData.data.attributes.img.data.attributes.url}
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
          </figure>
        </div>
        <div className="pt-[4.375rem]">
          <h2 className="pb-[2.5rem] text-[2.25rem] font-bold">
            {wwaData.data.attributes.wwa.title}
          </h2>
          <div className="flex flex-col gap-48 md:flex-row">
            <figure className="w-full max-w-[715px]">
              <Image
                src={wwaData.data.attributes.wwa.img.data.attributes.url}
                alt="why we are known"
                className="h-[470px] w-full rounded-xl object-cover"
                width={1000}
                height={1000}
              />
            </figure>
            <p className="w-full max-w-[819px] text-[1.5rem] leading-[3.125rem]">
              {wwaData.data.attributes.wwa.description}
            </p>
          </div>
        </div>
        <div className="">
          <div id="values" className="pt-[9.375rem]">
            <h2 className="pb-[3.75rem] text-[2.25rem] font-bold">
              {aboutData.data.attributes.heading1}
            </h2>
            <ul className="grid grid-cols-5 gap-10">
              {aboutData.data.attributes.values.map((value, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <Image
                    src={value.valueImg.data.attributes.url}
                    alt=""
                    className="h-[100px] w-[100px] rounded-xl object-cover"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-3xl font-medium pt-[1.25rem]">{value.title}</h3>
                  <p className="text-xl opacity-75 pt-[0.75rem]">{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div id="contact" className="pt-[9.375rem]">
            <h2 className="pb-[1.875rem] text-[2.25rem] font-bold">
              {aboutData.data.attributes.heading2}
            </h2>
            <ul className="grid grid-cols-3 gap-[3.125rem]">
              {aboutData.data.attributes.contacts.map((contact, index) => (
                <li className="flex gap-[3.75rem]" key={index}>
                  <Image
                    src={contact.img.data.attributes.url}
                    alt=""
                    className="h-[150px] w-[150px] rounded-xl object-cover"
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col text-[1.5625rem]">
                    <h3 className="text-3xl font-medium">{contact.name}</h3>
                    <p>{contact.title}</p>
                    <a href="mailto:arto.aitta@hel.fi">{contact.email}</a>
                    <a href="tel:0123456789">{contact.phone}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="map" className="flex flex-col pt-[9.375rem]">
            <div className="flex flex-row gap-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.415977479487!2d25.07534967768671!3d60.22349387505956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692097d49be7743%3A0x44d7181298503381!2sMyllypurontie%201%2C%2000920%20Helsinki!5e0!3m2!1sfi!2sfi!4v1702891756176!5m2!1sfi!2sfi"
                width="900"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="flex flex-col pl-[4.25rem]">
                <p className="pb-[2.5rem] text-[2.25rem]">Osoite</p>
                <p className="text-[1.25rem]">Metropolian kampus</p>
                <p className="text-[1.25rem]">Myllypurontie 1, 00920 Helsinki</p>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
