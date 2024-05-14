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

function LanguageSelect() {
  const { locale, setLocale } = useLang();
  if (!setLocale) throw new Error("setLocale is undefined");

  return (
    <div className="flex items-center space-x-2">
      <Globe />
      <button
        onClick={() => setLocale("fi")}
        className={`sm:text-[1.25rem] hover-pink ${locale === "fi" ? "font-bold" : ""}`}
      >
        FI
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("en")}
        className={`sm:text-[1.25rem] hover-pink ${locale === "en" ? "font-bold" : ""}`}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("sv")}
        className={`sm:text-[1.25rem] hover-pink ${locale === "sv" ? "font-bold" : ""}`}
      >
        SV
      </button>
    </div>
  );
}



export function Header() {
  const pathname = usePathname();
  const {locale} = useLang();
  const { 
    home, 
    teams, 
    jobseekers, 
    companies, 
    about, 
    news,
    values,
    contact,
  } = translations[locale];
  
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-[100px] py-[30px]">
      <Link href="/" className="w-full max-w-[150px]">
        <figure>
          <Logo />
        </figure>
      </Link>
      <nav className="flex items-end gap-10">
        <Link
          href="/"
          className={cn("sm:text-[1.25rem]", pathname === "/", "hover-pink")}
        >
          {home}
        </Link>
        <Link href="/#teams" className="hover-pink sm:text-[1.25rem]">
        {teams}
        </Link>
        <Link href="/jobseekers" className="sm:text-[1.25rem] hover-pink">
        {jobseekers}
        </Link>
        <Link href="/company" className="sm:text-[1.25rem] hover-pink">
        {companies}
        </Link>
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/company"
                  className={cn(
                    "sm:text-[1.25rem]",
                    pathname === "/company", "hover-pink"
                  )}
                >
                  {companies}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/companies#v1" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Heading 1
                  </NavigationMenuLink>
                </Link>
                <Link href="/companies#v2" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Heading 2
                  </NavigationMenuLink>
                </Link>
                <Link href="/about#v3" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Heading 3
                  </NavigationMenuLink>
                </Link>
                <Link href="/companies#v4" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Heading 4
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/about"
                  className={cn(
                    "sm:text-[1.25rem]",
                    pathname === "/about" , "hover-pink"
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
          className={cn("sm:text-[1.25rem]", pathname === "/blog" , "hover-pink")}
        >
          {news}
        </Link>
        <LanguageSelect />
      </nav>
    </header>
  );
}
