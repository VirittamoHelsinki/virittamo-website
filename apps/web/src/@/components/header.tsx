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

function LanguageSelect() {
  const { locale, setLocale } = useLang();
  if (!setLocale) throw new Error("setLocale is undefined");

  return (
    <div className="flex items-center space-x-2">
      <Globe />
      <button
        onClick={() => setLocale("fi")}
        className={`text-2xl hover-pink ${locale === "fi" ? "font-bold" : ""}`}
      >
        FI
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("en")}
        className={`text-2xl hover-pink ${locale === "en" ? "font-bold" : ""}`}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => setLocale("sv")}
        className={`text-2xl hover-pink ${locale === "sv" ? "font-bold" : ""}`}
      >
        SV
      </button>
    </div>
  );
}


export function Header() {
  const pathname = usePathname();
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
          className={cn("text-2xl", pathname === "/", "hover-pink")}
        >
          Home
        </Link>
        <Link href="/#teams" className="text-2xl hover-pink">
          Teams
        </Link>
        <Link href="/jobseekers" className="text-2xl hover-pink">
          For Jobseekers
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/company"
                  className={cn(
                    "text-2xl",
                    pathname === "/company", "hover-pink"
                  )}
                >
                  For Companies
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
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/about"
                  className={cn(
                    "text-2xl",
                    pathname === "/about" , "hover-pink"
                  )}
                >
                  About
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/about#values" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Our Values
                  </NavigationMenuLink>
                </Link>
                <Link href="/about#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover-pink")}>
                    Contact Info
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/blog"
          className={cn("text-2xl", pathname === "/blog" , "hover-pink")}
        >
          News
        </Link>
        <LanguageSelect />
      </nav>
    </header>
  );
}
