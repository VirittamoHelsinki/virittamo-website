// import context
import { useContext, useState } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import icons from assets
import Facebook_icon from "../assets/facebook-icon.svg?react";
import Linkedin_icon from "../assets/linkedin-icon.svg?react";
import Instagram_icon from "../assets/instagram-icon.svg?react";

// import virittämö helsinki logo
import VirittamoLogo from "./assets/virittamo-helsinki.webp";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MobileNav() {
  const { lang, setLocale, fi } = useContext(LanguageContext);
  const { home_page, projects, stories, contact } = lang.header;

  return (
    <motion.div
      className="header__hamburgerMenu"
      initial={{ opacity: 0, ease: "easeInOut" }}
      animate={{ opacity: 1, ease: "easeInOut" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
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
            <Link to="/:contact">{contact}</Link>
          </li>
        </ul>
      </nav>
      <section className="header__socials">
        <a
          href="https://www.facebook.com/virittamohelsinki/"
          rel="noreferrer"
          target="_blank"
        >
          <Facebook_icon className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/virittamohelsinki/"
          rel="noreferrer"
          target="_blank"
        >
          <Linkedin_icon className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/virittamohelsinki/"
          rel="noreferrer"
          target="_blank"
        >
          <Instagram_icon className="social-icon" />
        </a>
        <div className="header__language">
          <button
            onClick={() => {
              setLocale(lang === fi ? "en" : "fi");
              localStorage.setItem("virittamo-lang", lang === fi ? "en" : "fi");
            }}
          >
            {lang === fi ? "EN" : "FI"}
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export function Header() {
  const { lang, setLocale, fi } = useContext(LanguageContext);
  const { home_page, projects, stories, contact } = lang.header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header__wrapper">
      <div className="header__container">
        <Link to="/">
          <img src={VirittamoLogo} alt="Virittämö Helsinki" />
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
              <Link to="/:contact">{contact}</Link>
            </li>
          </ul>
        </nav>
        <section className="header__socials">
          <a
            href="https://www.facebook.com/virittamohelsinki/"
            rel="noreferrer"
            target="_blank"
          >
            <Facebook_icon className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/virittamohelsinki/"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin_icon className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/virittamohelsinki/"
            rel="noreferrer"
            target="_blank"
          >
            <Instagram_icon className="social-icon" />
          </a>
          <div className="header__language">
            <button
              onClick={() => {
                setLocale(lang === fi ? "en" : "fi");
                localStorage.setItem(
                  "virittamo-lang",
                  lang === fi ? "en" : "fi"
                );
              }}
            >
              {lang === fi ? "EN" : "FI"}
            </button>
          </div>
        </section>
        {isMenuOpen ? (
          <motion.svg
            viewBox="0 0 100 100"
            width="30"
            height="30"
            fill="#050505"
            onClick={handleClick}
            id="header__hamburger"
            initial={{ opacity: 0, ease: "easeInOut" }}
            animate={{ opacity: 1, ease: "easeInOut" }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <rect
              x="0"
              y="42"
              width="100"
              height="16"
              transform="rotate(45 50 50)"
            ></rect>
            <rect
              x="0"
              y="42"
              width="100"
              height="16"
              transform="rotate(-45 50 50)"
            ></rect>
          </motion.svg>
        ) : (
          <motion.svg
            viewBox="0 0 100 80"
            width="30"
            height="30"
            fill="#050505"
            onClick={handleClick}
            id="header__hamburger"
            initial={{ opacity: 0, ease: "easeInOut" }}
            animate={{ opacity: 1, ease: "easeInOut" }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <rect width="100" height="16"></rect>
            <rect y="30" width="100" height="16"></rect>
            <rect y="60" width="100" height="16"></rect>
          </motion.svg>
        )}
      </div>
      {isMenuOpen && <MobileNav />}
    </header>
  );
}
