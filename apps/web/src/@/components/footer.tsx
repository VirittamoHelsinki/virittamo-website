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
    <footer className="relative flex w-full flex-col pt-[40px] md:pt-[60px] lg:pt-[100px]">
      <Wave className="absolute left-0 top-[2.3rem] md:top-[3rem] lg:top-[4rem] fill-[#222222]" />
      <div className="relative flex h-full w-full flex-col gap-[5rem] md:gap-[8rem] lg:gap-[14rem] bg-[#222222] px-4 md:px-[30px] lg:px-[6.25rem] py-10 md:py-[3rem] lg:py-[5.625rem]">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 text-white">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 md:gap-8 lg:gap-[5.625rem]">
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {home}
              </Link>
              <Link href="/#teams" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {teams}
              </Link>
              <Link href="/jobseekers" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {jobseekers}
              </Link>
              <Link href="/company" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {companies}
              </Link>
              <Link href="/about" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {about}
              </Link>
              <Link href="/blog" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {news}
              </Link>
            </nav>
            <nav className="hidden lg:flex flex-col items-start gap-5">
              <Link href="/about#values" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {values}
              </Link>
              <Link href="/about#contact" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {contact}
              </Link>
              <Link href="/about#map" className="text-[18px] md:text-[20px] lg:text-[24px] hover-pink">
                {location}
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link
                href="https://www.instagram.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] md:text-[20px] lg:text-[24px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}><Instagram /></span>
                  Instagram
                </span>
              </Link>
              <Link
                href="https://www.facebook.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] md:text-[20px] lg:text-[24px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}><Facebook /></span>
                  Facebook
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] md:text-[20px] lg:text-[24px]"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}><Linkedin /></span>
                  LinkedIn
                </span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
              <h3 className="text-[20px] md:text-[24px] lg:text-[32px]">Tarja Kurvinen</h3>
              <p className="text-[16px] md:text-[18px] lg:text-[24px]">{coordinator}</p>
              <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                <p className="flex items-center gap-3 text-[16px] md:text-[18px] lg:text-[24px]">
                  <Mail />
                  <a href="mailto:tarja.kurvinen@hel.fi" className="text-[16px] md:text-[18px] lg:text-[24px]">
                    tarja.kurvinen@hel.fi
                  </a>
                </p>
                <p className="flex items-center gap-3 text-[16px] md:text-[18px] lg:text-[24px]">
                  <Phone />
                  <a href="tel:09 310 27553" className="text-[16px] md:text-[18px] lg:text-[24px]">
                    09 310 27553
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-[16px] md:text-[18px] lg:text-[24px]">{campus}</p>
              <p className="text-[16px] md:text-[18px] lg:text-[24px]">
                Myllypurontie 1, 00920 Helsinki
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}