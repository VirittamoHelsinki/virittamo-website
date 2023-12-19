import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col px-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-[8.125rem] font-bold sm:text-[8.125rem]">
          Employees Benefits
        </h1>
        <p className="text-[1.875rem]">
          we offer our employees services that that will help them to improve
          their possibilities to be hire by employers, and have learn how to
          play the game{" "}
        </p>
        <Image
          className="rounded-xl"
          src="/services.png"
          alt="Picture of the author"
          width={2000}
          height={2000}
        />
      </div>
      <div className="">
        <div id="uraohjaus" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Uraohjaus</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="opinto-ohjaus" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Opinto-ohjaus</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="s2-opetus" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">S2 Opetus</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="hymykyla" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Hymykylä</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
      </div>
    </main>
  );
}
