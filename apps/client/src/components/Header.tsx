import { useContext, useState } from "react";
import { LanguageContext, type Lang } from "../utils/langContext.tsx";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons.tsx";
import headerLogo from "../assets/virittamo-helsinki.webp";

import { motion } from "framer-motion";

import { Hamburger, Hamburger_X } from "./mobileMenu-icons.tsx";
import { Image } from "./Image.tsx";
import { Link } from "react-router-dom";

function MobileNav() {
  const { lang, setLocale, fi } = useContext(LanguageContext) as Lang;
  const ds = useContext(LanguageContext);
  const { home_page, projects, stories, contact } = lang.header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("data struct", ds);

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
              <li className="header__nav--list-item">
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
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
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
  const { lang, setLocale, fi } = useContext(LanguageContext);
  const ds = useContext(LanguageContext);
  const { home_page, projects, stories, contact } = lang.header;

  console.log("data", ds);

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
        <Link to="/">
          <Image src={headerLogo} alt="Virittämö Helsinki" />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list-item">
              <Link to="/">{home_page}</Link>
            </li>
            <li className="header__nav--list-item">
              <Link to="/projects">{projects}</Link>
            </li>
            <li className="header__nav--list-item">
              <Link to="/stories">{stories}</Link>
            </li>
            <li className="header__nav--list-item">
              <Link to="/#contacts">{contact}</Link>
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
        <MobileNav />
      </div>
    </header>
  );
}
