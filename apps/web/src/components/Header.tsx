import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext, type Lang } from "../utils/langContext.tsx";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons.tsx";
import headerLogo from "../assets/virittamo-helsinki.webp?format=avif";

import { Hamburger, Hamburger_X } from "./mobileMenu-icons.tsx";
import { Image } from "./Image.tsx";

function MobileNav() {
    const { lang, setLocale, fi } = useContext(LanguageContext) as Lang;
    const { home_page, projects, stories, contact } = lang.header;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => setIsMenuOpen(!isMenuOpen);

    const languageButton = (
        <button
            onClick={() => {
                setLocale(lang === fi ? "en" : "fi");
                localStorage.setItem("virittamo-lang", lang === fi ? "en" : "fi");
            }}
        >
            {lang === fi ? "EN" : "FI"}
        </button>
    );

    return (
        <>
            <button onClick={handleClick} className="lg:hidden">
                {isMenuOpen ? <Hamburger_X /> : <Hamburger />}
            </button>

            {isMenuOpen && (
                <motion.div
                    className="header__hamburgerMenu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                    <nav className="header__nav">
                        <ul className="header__nav--list">
                            <li className={`header__nav--list-item`}>
                                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                    {home_page}
                                </Link>
                            </li>
                            <li className="header__nav--list-item">
                                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                                    {projects}
                                </Link>
                            </li>
                            <li className="header__nav--list-item">
                                <Link to="/stories" onClick={() => setIsMenuOpen(false)}>
                                    {stories}
                                </Link>
                            </li>
                            <li className="header__nav--list-item">
                                <Link to="/#contacts" onClick={() => setIsMenuOpen(false)}>
                                    {contact}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <section className="header__socials">
                        <a
                            href="https://www.facebook.com/virittamohelsinki/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/virittamohelsinki/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <LinkedinIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/virittamohelsinki/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </a>
                        <div className="header__language">{languageButton}</div>
                    </section>
                </motion.div>
            )}
        </>
    );
}

export function Header() {
    const { lang, setLocale, fi } = useContext(LanguageContext) as Lang;
    const { home_page, projects, stories, contact } = lang.header;
    const { pathname } = useLocation();

    const languageButton = (
        <button
            onClick={() => {
                setLocale(lang === fi ? "en" : "fi");
                localStorage.setItem("virittamo-lang", lang === fi ? "en" : "fi");
            }}
        >
            {lang === fi ? "EN" : "FI"}
        </button>
    );

    console.log(pathname)

    return (
        <header className="flex relative py-8 px-36 justify-between items-end w-full">
                <Link to="/">
                    <Image src={headerLogo} alt="Virittämö Helsinki" className="max-h-16" />
                </Link>
                <nav className="flex">
                    <ul className="flex gap-10">
                        <li className={pathname === '/' ? 'font-bold hover:text-[#f4a3c5] underline' : 'hover:text-[#f4a3c5]'}>
                            <Link to="/">{home_page}</Link>
                        </li>
                        <li className={pathname === '/projects' ? 'font-bold hover:text-[#f4a3c5] underline' : 'hover:text-[#f4a3c5]'}>
                            <Link to="/projects">{projects}</Link>
                        </li>
                        <li className={pathname === '/stories' ? 'font-bold hover:text-[#f4a3c5] underline' : 'hover:text-[#f4a3c5]'}>
                            <Link to="/stories">{stories}</Link>
                        </li>
                        <li className={pathname === '/news' ? 'font-bold hover:text-[#f4a3c5] underline' : 'hover:text-[#f4a3c5]'}>
                            <Link to="/news">{lang === fi ? 'Uutiset' : 'News'}</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                    <Link to="/contact" className="py-3 px-5 font-bold rounded bg-[#f4a3c5] hover:bg-[#f4a3c5]/80">{contact}</Link>
                    <div className="header__language">{languageButton}</div>
                </div>
                <MobileNav />
        </header>
    );
}
