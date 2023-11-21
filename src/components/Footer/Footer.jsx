/* eslint-disable react/prop-types */

// import context
import { useContext } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import icons from assets
import Facebook_icon from "../assets/facebook-icon.svg?react";
import Linkedin_icon from "../assets/linkedin-icon.svg?react";
import Instagram_icon from "../assets/instagram-icon.svg?react";

// import virittämö helsinki logo
import StadinAOLogo from "./assets/stadinAO-logo.webp";

// import background
import { Background } from "../Background/Background";

export function Footer({ children }) {
  const { lang } = useContext(LanguageContext);
  const { home_page, projects, stories, contact, back_to_top } = lang.footer;

  // scroll to top of page on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer__wrapper">
      <Background />
      {children}
      <div className="footer__container">
        <img src={StadinAOLogo} alt="Virittämö Helsinki" />
        {/* nav links */}
        <nav className="footer__nav">
          <ul className="footer__nav--list">
            <li className="footer__nav--list-item">
              <a href="/">{home_page}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/projects">{projects}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/stories">{stories}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/:contact">{contact}</a>
            </li>
          </ul>
        </nav>
        <section className="footer__socials">
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
          <button
            onClick={() => {
              scrollToTop();
            }}
          >
            {back_to_top} &#8593;
          </button>
        </section>
      </div>
    </footer>
  );
}
