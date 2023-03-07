/* eslint-disable react/prop-types */

// import context
import { useContext } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import icons from react-icons
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

// import virittämö helsinki logo
import StadinAOLogo from "./assets/stadinAO-logo.png";

// import background
import { Background } from "../../pages/Home/Background/Background";

export const Footer = ({ children }) => {
  const { lang } = useContext(LanguageContext);

  const { footer } = lang;

  // scroll to top of page on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="footer__wrapper">
      <Background />
      {children}
      <div className="footer__container">
        <img src={StadinAOLogo} alt="Virittämö Helsinki" />
        {/* nav links */}
        <nav className="footer__nav">
          <ul className="footer__nav--list">
            <li className="footer__nav--list-item">
              <a href="/">{footer.home_page}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/projects">{footer.projects}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/experiences">{footer.experiences}</a>
            </li>
            <li className="footer__nav--list-item">
              <a href="/contact">{footer.contact}</a>
            </li>
          </ul>
        </nav>
        {/* virittämö social icons */}
        <section className="footer__socials">
          <a
            href="https://www.facebook.com/virittamohelsinki/"
            alt="Virittämö Facebook Link"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/virittamohelsinki/"
            alt="Virittämö Linkedin Link"
            rel="noreferrer"
            target="_blank"
          >
            <BsLinkedin className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/virittamohelsinki/"
            alt="Virittämö Instagram Link"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram className="social-icon" />
          </a>
          <button
            onClick={() => {
              scrollToTop();
            }}
          >
            {footer.back_to_top} &#8593;
          </button>
        </section>
      </div>
    </main>
  );
};
