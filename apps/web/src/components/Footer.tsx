import { useContext } from "react";
import { type Lang, LanguageContext } from "../utils/langContext.tsx";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons.tsx";
import footerLogo from "../assets/stadinAO-logo.webp?format=avif";
import { Background } from "./Background.tsx";
import { Image } from "./Image.tsx";
import { Link } from "react-router-dom";

export function Footer({ children }: { children?: React.ReactNode }) {
  const { lang } = useContext(LanguageContext) as Lang;
  const { home_page, projects, stories, contact } = lang.footer;

  // // scroll to top of page on button click
  // const scrollToTop = () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //     });
  // };

  return (
    <footer className="footer__wrapper">
      <Background />
      {children}
      <div className="footer__container">
        <Image src={footerLogo} alt="Virittämö Helsinki" />
        {/* nav links */}
        <nav className="footer__nav">
          <ul className="footer__nav--list">
            <li className="footer__nav--list-item">
              <Link to="/">{home_page}</Link>
            </li>
            <li className="footer__nav--list-item">
              <Link to="/projects">{projects}</Link>
            </li>
            <li className="footer__nav--list-item">
              <Link to="/stories">{stories}</Link>
            </li>
            <li className="footer__nav--list-item">
              <Link to="/#contacts">{contact}</Link>
            </li>
          </ul>
        </nav>
        {/* virittämö social icons */}
        <section className="footer__socials">
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
          {/*            <button
                                onClick={() => scrollToTop()}
                    >
                        {back_to_top} &#8593;
                    </button> */}
        </section>
      </div>
    </footer>
  );
}
