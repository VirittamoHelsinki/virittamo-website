/* eslint-disable react/prop-types */

// import context
import { useContext } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import icons from assets
import { ReactComponent as Facebook_icon } from "../assets/facebook-icon.svg";
import { ReactComponent as Linkedin_icon } from "../assets/linkedin-icon.svg";
import { ReactComponent as Instagram_icon } from "../assets/instagram-icon.svg";

// import virittämö helsinki logo
import VirittamoLogo from "./assets/virittamo-helsinki.png";

export const Header = () => {
  const { lang, setLocale, fi } = useContext(LanguageContext);

  const { header } = lang;

  return (
    <main className="header__wrapper">
      <div className="header__container">
        <img src={VirittamoLogo} alt="Virittämö Helsinki" />
        {/* nav links */}
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list-item">
              <a href="/">{header.home_page}</a>
            </li>
            <li className="header__nav--list-item">
              <a href="/projects">{header.projects}</a>
            </li>
            <li className="header__nav--list-item">
              <a href="/experiences">{header.experiences}</a>
            </li>
            <li className="header__nav--list-item">
              <a href="/contact">{header.contact}</a>
            </li>
          </ul>
        </nav>
        {/* virittämö social icons */}
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
          {/* fi/en language switch button */}
          <div className="header__language">
            {lang === fi ? (
              <a
                href="#"
                onClick={() => {
                  setLocale("en");
                  localStorage.setItem("virittamo-lang", "en");
                }}
              >
                EN
              </a>
            ) : (
              <a
                href="#"
                onClick={() => {
                  setLocale("fi");
                  localStorage.setItem("virittamo-lang", "fi");
                }}
              >
                FI
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
