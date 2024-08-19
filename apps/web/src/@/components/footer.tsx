import Link from "next/link";
import { Wave } from "~/@/components/icons";
import { Phone, Mail } from "lucide-react";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  const { locale } = useLang();
  const {
    home,
    teams,
    jobseekers,
    companies,
    about,
    news,
    values,
    contact,
    location,
    coordinator,
    campus,
  } = translations[locale];

  return (
    <footer className="relative flex w-full flex-col pt-[40px] md:pt-[60px] 2xl:pt-[100px]">
      <Wave className="absolute left-0 top-[2.3rem] md:top-[3rem] 2xl:top-[4rem] fill-[#222222]" />
      <div className="relative flex h-full w-full flex-col gap-[5rem] md:gap-[8rem] 2xl:gap-[14rem] bg-[#222222] px-4 md:px-[60px] 2xl:px-[100px] py-10 md:py-[3rem] 2xl:py-[5.625rem]">
        <div className="flex flex-col md:flex-row 2xl:flex-row justify-between gap-10 text-white">
          <div className="flex flex-col md:flex-row 2xl:flex-row justify-between gap-10 md:gap-[auto] 2xl:gap-[100px]">
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-[16px] md:text-[20px] hover-pink">
                {home}
              </Link>
              <Link href="/#teams" className="text-[16px] md:text-[20px] hover-pink">
                {teams}
              </Link>
              <Link href="/jobseekers" className="text-[16px] md:text-[20px] hover-pink">
                {jobseekers}
              </Link>
              <Link href="/company" className="text-[16px] md:text-[20px] hover-pink">
                {companies}
              </Link>
              <Link href="/about" className="text-[16px] md:text-[20px] hover-pink">
                {about}
              </Link>
              <Link href="/blog" className="text-[16px] md:text-[20px] hover-pink">
                {news}
              </Link>
            </nav>
            <nav className="hidden md:flex 2xl:flex flex-col items-start gap-5">
              <Link href="/about#values" className="text-[16px] md:text-[20px] hover-pink">
                {values}
              </Link>
              <Link href="/about#contact" className="text-[16px] md:text-[20px] hover-pink">
                {contact}
              </Link>
              <Link href="/about#map" className="text-[16px] md:text-[20px] hover-pink">
                {location}
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link
                href="https://www.instagram.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] md:text-[20px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="mr-[4px] md:mr-[8px]"><Instagram className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" /></span>
                  Instagram
                </span>
              </Link>
              <Link
                href="https://www.facebook.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] md:text-[20px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="mr-[4px] md:mr-[8px]"><Facebook className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" /></span>
                  Facebook
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] md:text-[20px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span className="mr-[4px] md:mr-[8px]"><Linkedin className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" /></span>
                  LinkedIn
                </span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 md:gap-3 2xl:gap-4">
              <h3 className="text-[20px] md:text-[32px]">Tarja Kurvinen</h3>
              <p className="text-[18px] md:text-[24px]">{coordinator}</p>
              <div className="flex flex-col gap-1 md:gap-2 2xl:gap-3">
                <p className="flex items-center gap-3 text-[16px] md:text-[20px]">
                  <Mail />
                  <a href="mailto:tarja.kurvinen@hel.fi" className="text-[16px] md:text-[20px]">
                    tarja.kurvinen@hel.fi
                  </a>
                </p>
                <p className="flex items-center gap-3 text-[16px] md:text-[20px]">
                  <Phone />
                  <a href="tel:09 310 27553" className="text-[16px] md:text-[20px]">
                    09 310 27553
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 2xl:gap-3">
              <p className="text-[16px] md:text-[20px]">{campus}</p>
              <p className="text-[16px] md:text-[20px]">
                Myllypurontie 1, 00920 Helsinki
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}