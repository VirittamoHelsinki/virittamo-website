import Image from "next/image";

export default function CompaniesPage() {
  return (
    <main className="flex min-h-screen flex-col px-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
          We Offer Companies sth
        </h1>
        <p className="text-[1.875rem]">
          tahan tulee yleinen kuvaus jossa on paljon jota on tehty nii ja näin
          jotta saadaan kaupaa on tarvaratalo mikä tekee. teveesta tututu
          kauppakassi on yleine tarina virittamolla joka saadaan myös
          taustakuvana talvivaatteita jota pysty myyymään tavaratalo seka
          kasvihuoneilmiö
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
        <div id="v1" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Heading 1</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="v2" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Heading 2</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="v3" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Heading 3</h2>
          <p className="text-[1.875rem]">
            sth very important about uraohjaus that has to been know be deez but
            know how nutz it will be after 3 year model number of 35 year old ai
            personal rainer but yeah yeah
          </p>
        </div>
        <div id="v4" className="pt-[9.375rem]">
          <h2 className="text-[6.25rem] font-bold">Heading 4</h2>
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
