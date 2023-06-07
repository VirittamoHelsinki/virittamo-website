/* eslint-disable react/prop-types */

// import context
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

import axios from "axios";

// import icons from assets
import { ReactComponent as Facebook_icon } from "../assets/facebook-icon.svg";
import { ReactComponent as Linkedin_icon } from "../assets/linkedin-icon.svg";
import { ReactComponent as Instagram_icon } from "../assets/instagram-icon.svg";

// import background
import { Background } from "../Background/Background";

export const Footer = ({ children }) => {
  const { lang, fi } = useContext(LanguageContext);
  const [apiResponse, setApiResponse] = useState(null);
  const [footerLogo, setFooterLogo] = useState(null);
  const [textLanguage, setTextLanguage] = useState(null);

  const token = import.meta.env.VITE_STRAPI_API_TOKEN;
  const url = "http://localhost:1337";

  // fetching data from Strapi
  const pullData = async () => {
    try {
      const response = await axios.get(`${url}/api/footers?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      setApiResponse(response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  // trigger the pullData function only once when the component mounts
  useEffect(() => {
    pullData();
  }, []);

  // update footer logo and text based on API response and language context
  useEffect(() => {
    if (apiResponse && apiResponse.data.length > 0) {
      // virittamö logo url
      const footerLogoUrl =
        url +
        apiResponse.data[0]?.attributes?.footerlogo?.data?.attributes?.formats
          ?.thumbnail?.url;
      console.log("Footer logo URL:", footerLogoUrl);
      setFooterLogo(footerLogoUrl);

      // finnish language
      const footerNavLinksFI = apiResponse.data[0]?.attributes;
      // english language
      const footerNavLinksEN =
        apiResponse.data[0]?.attributes?.localizations.data[0]?.attributes;

      // check languagecontext and change text language accordingly.
      if (lang === fi) {
        setTextLanguage(footerNavLinksFI);
      } else {
        setTextLanguage(footerNavLinksEN);
      }
    }
  }, [lang, apiResponse]);

  const navLinks = (
    <>
      {textLanguage && (
        <ul className="footer__nav--list">
          <li className="footer__nav--list-item">
            <a href="/">{textLanguage.footerNavLink1}</a>
          </li>
          <li className="footer__nav--list-item">
            <a href="/projects">{textLanguage.footerNavLink2}</a>
          </li>
          <li className="footer__nav--list-item">
            <a href="/stories">{textLanguage.footerNavLink3}</a>
          </li>
          <li className="footer__nav--list-item">
            <a href="/:contact">{textLanguage.footerNavLink4}</a>
          </li>
        </ul>
      )}
    </>
  );

  const socialIcons = (
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
        {lang === fi ? "Sivun alkuun" : "Back to top"} &#8593;
      </button>
    </section>
  );

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
        <img src={footerLogo} alt="Virittämö Helsinki" />
        {/* nav links */}
        <nav className="footer__nav">{navLinks}</nav>
        {/* virittämö social icons */}
        {socialIcons}
      </div>
    </main>
  );
};
