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
    services,
    uraohjaus,
    values,
    contact,
    location,
    coordinator,
  } = translations[locale];

  return (
    <footer className="relative flex w-full flex-col pt-[40px] sm:pt-[100px]">
      <Wave className="absolute left-0 top-[2.3rem] sm:pt-[4rem] fill-[#222222]" />
      <div className="relative flex h-full w-full flex-col gap-[5rem] lg:gap-[14rem] bg-[#222222] px-4 py-10 sm:px-6 lg:px-[6.25rem] lg:py-[5.625rem]">
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[5.625rem]">
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-xl sm:text-2xl hover-pink">
                {home}
              </Link>
              <Link href="/#teams" className="text-xl sm:text-2xl hover-pink">
                {teams}
              </Link>
              <Link href="/jobseekers" className="text-xl sm:text-2xl hover-pink">
                {jobseekers}
              </Link>
              <Link href="/company" className="text-xl sm:text-2xl hover-pink">
                {companies}
              </Link>
              <Link href="/about" className="text-xl sm:text-2xl hover-pink">
                {about}
              </Link>
              <Link href="/blog" className="text-xl sm:text-2xl hover-pink">
                {news}
              </Link>
            </nav>
            <nav className="hidden lg:flex flex-col items-start gap-5">
              <Link href="/about#values" className="text-xl sm:text-2xl hover-pink">
                {values}
              </Link>
              <Link href="/about#contact" className="text-xl sm:text-2xl hover-pink">
                {contact}
              </Link>
              <Link href="/about#map" className="text-xl sm:text-2xl hover-pink">
                {location}
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link
                href="https://www.instagram.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl"
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
                className="text-xl sm:text-2xl"
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
                className="text-xl sm:text-2xl"
              >
                <span className="hover-pink" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}><Linkedin /></span>
                  LinkedIn
                </span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 sm:gap-4">
              <h3 className="text-2xl sm:text-[2.5rem]">Tarja Kurvinen</h3>
              <p className="text-xl sm:text-[1.875rem]">{coordinator}</p>
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="flex items-center gap-3">
                  <Mail />
                  <a href="mailto:tarja.kurvinen@hel.fi" className="text-xl sm:text-[1.875rem]">
                    tarja.kurvinen@hel.fi
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone />
                  <a href="tel:09 310 27553" className="text-xl sm:text-[1.875rem]">
                    09 310 27553
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg sm:text-[1.5625rem]">Metropolian kampus</p>
              <p className="text-lg sm:text-[1.5625rem]">
                Myllypurontie 1, 00920 Helsinki
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}