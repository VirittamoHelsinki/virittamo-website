import Link from "next/link";
import { Wave } from "~/@/components/icons";
import { Phone, Mail } from "lucide-react";
import { useLang } from "~/utils/lang-provider";
import { translations } from "~/utils/translations";
import { Instagram, Facebook, Linkedin } from 'lucide-react';

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
    <footer className="relative flex w-full grow flex-col pt-[9.375rem]">
      <Wave className="absolute left-0 top-[8.375rem]  fill-[#222222]" />
      <div className="relative flex h-full w-full flex-col gap-[14rem] bg-[#222222] px-[6.25rem] py-[5.625rem]">
        <div className="flex justify-between gap-10 text-white">
          <div className="flex justify-between gap-[5.625rem]">
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-2xl">
                {home}
              </Link>
              <Link href="/#teams" className="text-2xl">
                {teams}
              </Link>
              <Link href="/jobseekers" className="text-2xl">
                {jobseekers}
              </Link>
              <Link href="/company" className="text-2xl">
                {companies}
              </Link>
              <Link href="/blog" className="text-2xl">
                {news}
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link href="/company#services" className="text-2xl">
                {services}
              </Link>
              <Link href="/" className="text-2xl">
                {uraohjaus}
              </Link>
              <Link href="/" className="text-2xl">
                Opinto-ohjaus
              </Link>
              <Link href="/" className="text-2xl">
                S2 Opetus
              </Link>
              <Link href="/" className="text-2xl">
                Hymykylä
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link href="/about" className="text-2xl">
                {about}
              </Link>
              <Link href="/about#values" className="text-2xl">
                {values}
              </Link>
              <Link href="/about#contact" className="text-2xl">
                {contact}
              </Link>
              <Link href="/about#map" className="text-2xl">
                {location}
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link
                href="https://www.instagram.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem' }}><Instagram /></span>
                  Instagram
                </span>
              </Link>
              <Link
                href="https://www.facebook.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem' }}><Facebook /></span>
                  Facebook
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{ marginRight: '1rem' }}><Linkedin /></span>
                  LinkedIn
                </span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <h3 className="text-[2.5rem]">Tarja Kurvinen</h3>
              <p className="text-[1.875rem]">{coordinator}</p>
              <p className="flex items-center gap-3">
                <Mail />
                <a
                  href="mailto:tarja.kurvinen@hel.fi"
                  className="text-[1.875rem]"
                >
                  tarja.kurvinen@hel.fi
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone />
                <a href="tel:09 310 27553" className="text-[1.875rem]">
                  09 310 27553
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[1.5625rem]">Metropolian kampus</p>
              <p className="text-[1.5625rem]">
                Myllypurontie 1, 00920 Helsinki
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
