// import context
import { useContext, useState } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

import { ReactComponent as Facebook_icon } from "../../assets/facebook-icon.svg";
import { ReactComponent as Linkedin_icon } from "../../assets/linkedin-icon.svg";
import { ReactComponent as Instagram_icon } from "../../assets/instagram-icon.svg";
import headerLogo from "../../assets/virittamo-helsinki.webp"

import { motion } from "framer-motion";

import { Hamburger, Hamburger_X } from "./Hamburger";
import { Image } from "../Image";

export function Header() {
    const { lang, setLocale, fi } = useContext(LanguageContext);
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
        <header className="header__wrapper">
            <div className="header__container">
                <a href="/">
                    <Image src={headerLogo} alt="Virittämö Helsinki" />
                </a>
                <nav className="header__nav">
                    <ul className="header__nav--list">
                        <li className="header__nav--list-item">
                            <a href="/">{home_page}</a>
                        </li>
                        <li className="header__nav--list-item">
                            <a href="/projects">{projects}</a>
                        </li>
                        <li className="header__nav--list-item">
                            <a href="/stories">{stories}</a>
                        </li>
                        <li className="header__nav--list-item">
                            <a href="/:contact">{contact}</a>
                        </li>
                    </ul>
                </nav>
                <section className="header__socials">
                    <a
                        href="https://www.facebook.com/virittamohelsinki/"
                        alt="Virittämö Facebook Link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Facebook_icon className="social-icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/virittamohelsinki/"
                        alt="Virittämö Linkedin Link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Linkedin_icon className="social-icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/virittamohelsinki/"
                        alt="Virittämö Instagram Link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <Instagram_icon className="social-icon" />
                    </a>
                    <div className="header__language">{languageButton}</div>
                </section>
                {isMenuOpen ? (
                    <Hamburger_X onClick={handleClick} />
                ) : (
                    <Hamburger onClick={handleClick} />
                )}
            </div>
            {isMenuOpen && (
                <motion.div
                    className="header__hamburgerMenu"
                    initial={{ opacity: 0, ease: "easeInOut" }}
                    animate={{ opacity: 1, ease: "easeInOut" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                    <nav className="header__nav">
                        <ul className="header__nav--list">
                            <li className="header__nav--list-item">
                                <a href="/">{home_page}</a>
                            </li>
                            <li className="header__nav--list-item">
                                <a href="/projects">{projects}</a>
                            </li>
                            <li className="header__nav--list-item">
                                <a href="/stories">{stories}</a>
                            </li>
                            <li className="header__nav--list-item">
                                <a href="/:contact">{contact}</a>
                            </li>
                        </ul>
                    </nav>
                    <section className="header__socials">
                        <a
                            href="https://www.facebook.com/virittamohelsinki/"
                            alt="Virittämö Facebook Link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Facebook_icon className="social-icon" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/virittamohelsinki/"
                            alt="Virittämö Linkedin Link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Linkedin_icon className="social-icon" />
                        </a>
                        <a
                            href="https://www.instagram.com/virittamohelsinki/"
                            alt="Virittämö Instagram Link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Instagram_icon className="social-icon" />
                        </a>
                        <div className="header__language">{languageButton}</div>
                    </section>
                </motion.div>
            )}
        </header>
    )
}
