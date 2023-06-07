// import context
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

import axios from "axios";

// import icons from assets
import { ReactComponent as Facebook_icon } from "../assets/facebook-icon.svg";
import { ReactComponent as Linkedin_icon } from "../assets/linkedin-icon.svg";
import { ReactComponent as Instagram_icon } from "../assets/instagram-icon.svg";

import { motion } from "framer-motion";

import { Hamburger } from "./Hamburger";
import { Hamburger_X } from "./Hamburger";

export const Header = () => {
  const { lang, setLocale, fi } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [headerLogo, setHeaderLogo] = useState(null);
  const [textLanguage, setTextLanguage] = useState(null);

  const token = import.meta.env.VITE_STRAPI_API_TOKEN;
  const url = "http://localhost:1337";

  // fetching data from Strapi
  const pullData = async () => {
    try {
      const response = await axios.get(`${url}/api/headers?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setApiResponse(response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  // trigger the pullData function only once when the component mounts
  useEffect(() => {
    pullData();
  }, []);

  // update header logo and text based on API response and language context
  useEffect(() => {
    if (apiResponse && apiResponse.data.length > 0) {
      // virittamö logo url
      const headerLogoUrl =
        url +
        apiResponse.data[0]?.attributes?.headerlogo?.data?.attributes?.formats
          ?.thumbnail?.url;
      setHeaderLogo(headerLogoUrl);

      // finnish language
      const headerNavLinksFI = apiResponse.data[0]?.attributes;
      // english language
      const headerNavLinksEN =
        apiResponse.data[0]?.attributes?.localizations.data[0]?.attributes;

      // check languagecontext and change text language accordingly.
      if (lang === fi) {
        setTextLanguage(headerNavLinksFI);
      } else {
        setTextLanguage(headerNavLinksEN);
      }
    }
  }, [lang, apiResponse]);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      {textLanguage && (
        <ul className="header__nav--list">
          <li className="header__nav--list-item">
            <a href="/">{textLanguage.headerNavLink1}</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/projects">{textLanguage.headerNavLink2}</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/stories">{textLanguage.headerNavLink3}</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/:contact">{textLanguage.headerNavLink4}</a>
          </li>
        </ul>
      )}
    </>
  );

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

  const socialIcons = (
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
  );

  return (
    <main className="header__wrapper">
      <div className="header__container">
        <a href="/">
          <img src={headerLogo} alt="Virittämö Helsinki" />
        </a>
        <nav className="header__nav">{navLinks}</nav>
        {socialIcons}
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
          <nav className="header__nav">{navLinks}</nav>
          {socialIcons}
        </motion.div>
      )}
    </main>
  );
};
