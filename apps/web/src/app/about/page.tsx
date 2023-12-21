import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col px-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
          What Viritamo or sth
        </h1>
        <p className="text-[1.875rem]">
          Virittämö on Helsingin kaupungin työllistämispalvelu, joka yhdistää
          tuoretta työkokemusta tarvitsevat tekijät ja käytännön ICT-,
          ohjelmistokehitys- ja mediaosaajia etsivät yritykset. Virittämö on
          Helsingin kaupungin työllistämispalvelu, joka yhdistää tuoretta
          työkokemusta tarvitsevat tekijät ja käytännön ICT-, ohjelmistokehitys-
          ja mediaosaajia etsivät yritykset.
        </p>
        <Image
          className="rounded-xl"
          src="/companies.png"
          alt="Picture of the author"
          width={2000}
          height={2000}
        />
      </div>
      <div className="">
        <div id="values" className="pt-[9.375rem]">
          <h2 className="pb-[3.75rem] text-[6.25rem] font-bold">Our Values</h2>
          <ul className="grid grid-cols-3 gap-32">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex flex-col items-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-[150px] w-[150px]"
                >
                  <path
                    fill="#222222"
                    fillRule="evenodd"
                    d="M12 2c-1.105 0-2 .895-2 2v2.5H8.5c-1.105 0-2 .895-2 2v1c0 1.105.895 2 2 2h1.5V14c0 1.105.895 2 2 2h1c1.105 0 2-.895 2-2v-1.5H14c-1.105 0-2-.895-2-2v-1c0-1.105.895-2 2-2h1.5V4c0-1.105-.895-2-2-2h-1zm-2 2h4v2h-4V4zm-2 6h8v1h-8v-1zm-1 2h10v1H7v-1zm-1 2h12v1H6v-1zm-1 2h14v1H5v-1zm-1 2h16v1H4v-1zm-1 2h18v1H3v-1zm-1 2h20v1H2v-1zm1 2h18v1H3v-1z"
                  ></path>
                </svg>

                <h3 className="text-3xl font-medium">Tyohynvointi</h3>
                <p className="text-xl opacity-75">
                  Työhyvinvointi synnyttää menestystä ja tee kauppassa on
                  tuotteitta
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div id="contact" className="pt-[9.375rem]">
          <h2 className="pb-[1.875rem] text-[6.25rem] font-bold">
            Contact Info
          </h2>
          <ul className="grid grid-cols-3 gap-[3.125rem]">
            {Array.from({ length: 7 }).map((_, index) => (
              <li className="flex gap-[3.75rem]" key={index}>
                <div className="h-[150px] w-[150px] rounded-xl bg-yellow-100" />
                <div className="flex flex-col text-[1.5625rem]">
                  <h3 className="text-3xl font-medium">Arto Aitta</h3>
                  <p>Softa Team Lead</p>
                  <a href="mailto:arto.aitta@hel.fi">arto.aitta@hel.fi</a>
                  <a href="tel:0123456789">012 345 6789</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-[9.375rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.415977479487!2d25.07534967768671!3d60.22349387505956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692097d49be7743%3A0x44d7181298503381!2sMyllypurontie%201%2C%2000920%20Helsinki!5e0!3m2!1sfi!2sfi!4v1702891756176!5m2!1sfi!2sfi"
            width="900"
            height="450"
            style={{ border: 0 }}
            className="grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
