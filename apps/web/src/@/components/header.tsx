"use client";

import Link from "next/link";
import { Logo } from "~/@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/@/components/ui/dropdown-menu";
import { Button } from "~/@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/@/components/ui/navigation-menu";
import { useState } from "react";
import { cn } from "~/@/lib/utils";
import { usePathname } from "next/navigation";

function LanguageSelect() {
  const [lang, setLang] = useState("fi");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <span
            className={cn(
              "text-2xl transition-all",
              lang === "fi"
                ? "rotate-0 scale-100"
                : "absolute -rotate-90 scale-0",
            )}
          >
            FI
          </span>

          <span
            className={cn(
              "text-2xl transition-all",
              lang === "en"
                ? "rotate-0 scale-100"
                : "absolute rotate-90 scale-0",
            )}
          >
            EN
          </span>

          <span className="sr-only">Toggle </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("fi")}>FI</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("en")}>EN</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("se")}>SE</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-[100px] py-[50px]">
      <figure className="w-full max-w-[150px]">
        <Logo />
      </figure>
      <nav className="flex items-end gap-10">
        <Link
          href="/"
          className={cn("text-2xl", pathname === "/" && "underline")}
        >
          Home
        </Link>
        <Link href="/#teams" className="text-2xl">
          Our Teams
        </Link>
        <Link href="/#work" className="text-2xl">
          Apply to Us
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  href="/companies"
                  className={cn(
                    "text-2xl",
                    pathname === "/companies" && "underline",
                  )}
                >
                  For Companies
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/companies#v1" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Heading 1
                  </NavigationMenuLink>
                </Link>
                <Link href="/companies#v2" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Heading 2
                  </NavigationMenuLink>
                </Link>
                <Link href="/about#v3" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Heading 3
                  </NavigationMenuLink>
                </Link>
                <Link href="/companies#v4" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
                  href="/services"
                  className={cn(
                    "text-2xl",
                    pathname === "/services" && "underline",
                  )}
                >
                  Services
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/services#uraohjaus" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Uraohjaus
                  </NavigationMenuLink>
                </Link>
                <Link href="/services#opinto-ohjaus" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Opinto-ohjaus
                  </NavigationMenuLink>
                </Link>
                <Link href="/services#s2-opetus" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    S2 Opetus
                  </NavigationMenuLink>
                </Link>
                <Link href="/services#hymykyla" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hymykylä
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
                    pathname === "/about" && "underline",
                  )}
                >
                  About
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link href="/about#values" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Values
                  </NavigationMenuLink>
                </Link>
                <Link href="/about#contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact Info
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link
          href="/blog"
          className={cn("text-2xl", pathname === "/blog" && "underline")}
        >
          Blog
        </Link>
        <LanguageSelect />
      </nav>
    </header>
  );
}
