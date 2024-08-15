import Link from "next/link";
import { Logo } from "~/@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/@/components/ui/navigation-menu";
import { cn } from "~/@/lib/utils";
import { usePathname } from "next/navigation";
import { useLang } from "~/utils/lang-provider";
import { Globe } from "lucide-react";
import { translations } from "~/utils/translations";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function LanguageSelect() {
  const { locale, setLocale } = useLang();
  if (!setLocale) throw new Error("setLocale is undefined");

  return (
    <div className="flex items-center space-x-2 mt-[20px] md:mt-[0px]">
      <Globe />
      <button
        onClick={() => setLocale("fi")}
        className={`text-[16px] md:text-[18px] lg:text-[20px] hover-pink ${locale === "fi" ? "font-bold" : ""}`}
      >
        FI
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("en")}
        className={`text-[16px] md:text-[18px] lg:text-[20px] hover-pink ${locale === "en" ? "font-bold" : ""}`}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("sv")}
        className={`text-[16px] md:text-[18px] lg:text-[20px] hover-pink ${locale === "sv" ? "font-bold" : ""}`}
      >
        SV
      </button>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { locale } = useLang();
  const {
    home,
    teams,
    jobseekers,
    companies,
    about,
    newsheader,
    values,
    contact,
  } = translations[locale];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex items-center justify-between bg-white px-[20px] md:px-[60px] 2xl:px-[100px] py-4 md:py-5 lg:py-[30px] shadow-md md:shadow-none"
    >
      <Link href="/" className="w-[80px] h-[33.75px] md:w-[100px] md:h-[40px] 2xl:w-[144px] 2xl:h-[60px]">
        <figure className="w-[80px] h-[33.75px] md:w-[100px] md:h-[40px] 2xl:w-[144px] 2xl:h-[60px]">
          <Logo />
        </figure>
      </Link>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="">
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40"
          style={{ top: headerRef.current?.clientHeight ?? 0 }}
        >
          <div ref={menuRef} className="flex flex-col items-start gap-4 p-4 md:p-6 lg:p-8">
            <Link
              href="/"
              className={cn("text-[16px] md:text-[18px] lg:text-[20px] block", pathname === "/" ? "underline-pink" : "hover-pink")}
              onClick={handleLinkClick}
            >
              {home}
            </Link>
            <Link
              href="/#teams"
              className={cn("text-[16px] md:text-[18px] lg:text-[20px] block", pathname === "/#teams" ? "underline-pink" : "hover-pink")}
              onClick={handleLinkClick}
            >
              {teams}
            </Link>
            <Link
              href="/jobseekers"
              className={cn("text-[16px] md:text-[18px] lg:text-[20px] block", pathname === "/jobseekers" ? "underline-pink" : "hover-pink")}
              onClick={handleLinkClick}
            >
              {jobseekers}
            </Link>
            <Link
              href="/company"
              className={cn("text-[16px] md:text-[18px] lg:text-[20px] block", pathname === "/company" ? "underline-pink" : "hover-pink")}
              onClick={handleLinkClick}
            >
              {companies}
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link
                      href="/about"
                      className={cn(
                        "text-[16px] md:text-[18px] lg:text-[20px] block",
                        pathname === "/about" ? "underline-pink" : "hover-pink"
                      )}
                      onClick={handleLinkClick}
                    >
                      {about}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href="/about#values" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")} onClick={handleLinkClick}>
                        {values}
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about#contact" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")} onClick={handleLinkClick}>
                        {contact}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/blog"
              className={cn("text-[16px] md:text-[18px] lg:text-[20px] block", pathname === "/blog" ? "underline-pink" : "hover-pink")}
              onClick={handleLinkClick}
            >
              {newsheader}
            </Link>
            <LanguageSelect />
          </div>
        </div>
      )}
      <nav className="hidden lg:flex flex-row items-center gap-4 md:gap-6 lg:gap-10">
        <Link
          href="/"
          className={cn("text-[16px] md:text-[18px] lg:text-[20px] block lg:inline", pathname === "/" ? "underline-pink" : "hover-pink")}
        >
          {home}
        </Link>
        <Link
          href="/#teams"
          className={cn("text-[16px] md:text-[18px] lg:text-[20px] block lg:inline", pathname === "/#teams" ? "underline-pink" : "hover-pink")}
        >
          {teams}
        </Link>
        <Link
          href="/jobseekers"
          className={cn("text-[16px] md:text-[18px] lg:text-[20px] block lg:inline", pathname === "/jobseekers" ? "underline-pink" : "hover-pink")}
        >
          {jobseekers}
        </Link>
        <Link
          href="/company"
          className={cn("text-[16px] md:text-[18px] lg:text-[20px] block lg:inline", pathname === "/company" ? "underline-pink" : "hover-pink")}
        >
          {companies}
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/about"
                  className={cn(
                    "text-[16px] md:text-[18px] lg:text-[20px] block lg:inline",
                    pathname === "/about" ? "underline-pink" : "hover-pink"
                  )}
                >
                  {about}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/about#values" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    {values}
                  </NavigationMenuLink>
                </Link>
                <Link href="/about#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    {contact}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/blog"
          className={cn("text-[16px] md:text-[18px] lg:text-[20px] block lg:inline", pathname === "/blog" ? "underline-pink" : "hover-pink")}
        >
          {newsheader}
        </Link>
        <LanguageSelect />
      </nav>
    </header>
  );
}