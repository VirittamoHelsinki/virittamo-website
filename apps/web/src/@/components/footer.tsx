import Link from "next/link";
import { LogoWhite, Wave } from "~/@/components/icons";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative flex w-full grow flex-col pt-[9.375rem]">
      {/* <img
        src="/wave.svg"
        alt="wave"
        className="absolute left-0 top-[8.375rem]"
      /> */}
      <Wave className="absolute left-0 top-[8.375rem]  fill-[#222222]" />
      <div className="relative flex h-full w-full flex-col gap-[14rem] bg-[#222222] px-[6.25rem] py-[5.625rem]">
        <div className="flex justify-between gap-10 text-white">
          <div className="flex justify-between gap-[5.625rem]">
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-2xl">
                Home
              </Link>
              <Link href="#teams" className="text-2xl">
                Our Teams
              </Link>
              <Link href="#work" className="text-2xl">
                Apply to Us
              </Link>
              <Link href="/blog" className="text-2xl">
                Blog
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-2xl">
                For Companies
              </Link>
              <Link href="/" className="text-2xl">
                Heading 1
              </Link>
              <Link href="/" className="text-2xl">
                Heading 2
              </Link>
              <Link href="/" className="text-2xl">
                Heading 3
              </Link>
              <Link href="/" className="text-2xl">
                Heading 4
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link href="/" className="text-2xl">
                About
              </Link>
              <Link href="/" className="text-2xl">
                Our Values
              </Link>
              <Link href="/" className="text-2xl">
                Contact Info
              </Link>
            </nav>
            <nav className="flex flex-col items-start gap-5">
              <Link
                href="https://www.instagram.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                Instagram
              </Link>
              <Link
                href="https://www.facebook.com/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/company/virittamohelsinki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                Linkedin
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <h3 className="text-[2.5rem]">Tarja Kurvinen</h3>
              <p className="text-[1.875rem]">Tiimikoordinaatori</p>
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
                Myllypurontie 1, 00920 Helsinkid
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
