import Link from "next/link";
import Image from "next/image";
import { Toggle } from "~/@/components/ui/toggle";

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col gap-10 px-[100px]">
      <div className="flex flex-col gap-10">
        <h1 className="text-[8.125rem] font-bold leading-[8rem] tracking-tight sm:text-[8.125rem]">
          What Is Happ... sth
        </h1>
        <p className="text-[1.875rem]">
          Virittämö on Helsingin kaupungin työllistämispalvelu, joka yhdistää
          tuoretta työkokemusta tarvitsevat tekijät ja käytännön ICT-,
          ohjelmistokehitys- ja mediaosaajia etsivät yritykset.
        </p>
      </div>

      <div className="flex gap-5">
        <Toggle
          variant="outline"
          className="rounded-full border-black text-[1.5625rem]"
        >
          News
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-full border-black  text-[1.5625rem]"
        >
          Projects
        </Toggle>
        <Toggle
          variant="outline"
          className="rounded-full border-black  text-[1.5625rem]"
        >
          Stories
        </Toggle>
      </div>

      <ul className="grid grid-cols-3 gap-[62px]">
        <li className="flex max-w-[508px] flex-col gap-[10px]">
          <Link href="/blog/1" passHref>
            <Image
              className="h-[500px] w-[535px] rounded-xl object-cover"
              src="/ict.webp"
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
            <h3 className="text-[2.5rem] font-bold">Moi Panda</h3>
            <p className="text-[1.5625rem]">
              Created mobile shopping app UI for Moi Panda
            </p>
          </Link>
        </li>
        <li className="flex max-w-[508px] flex-col gap-[10px]">
          <Link href="/blog/2" passHref>
            <Image
              className="h-[500px] w-[535px] rounded-xl object-cover"
              src="/ict.webp"
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
            <h3 className="text-[2.5rem] font-bold">Moi Panda</h3>
            <p className="text-[1.5625rem]">
              Created mobile shopping app UI for Moi Panda
            </p>
          </Link>
        </li>
        <li className="flex max-w-[508px] flex-col gap-[10px]">
          <Link href="/blog/3" passHref>
            <Image
              className="h-[500px] w-[535px] rounded-xl object-cover"
              src="/ict.webp"
              alt="Picture of the author"
              width={2000}
              height={2000}
            />
            <h3 className="text-[2.5rem] font-bold">Moi Panda</h3>
            <p className="text-[1.5625rem]">
              Created mobile shopping app UI for Moi Panda
            </p>
          </Link>
        </li>
      </ul>
    </main>
  );
}
