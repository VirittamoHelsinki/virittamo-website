import { useContext } from "react";
import { LanguageContext } from "../utils/langContext";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons.tsx";
import footerLogo from "../assets/stadinAO-logo.webp"
import { Background } from "./Background/Background";
import { Image } from './Image'


type FooterLang = {
    home_page: string
    projects: string
    stories: string
    contact: string
}

export function Footer({ children }: { children?: React.ReactNode }) {
    const { lang } = useContext(LanguageContext)
    const { home_page, projects, stories, contact } = lang.footer as FooterLang;

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
                {/* virittämö social icons */}
                <section className="footer__socials">
                    <a
                        href="https://www.facebook.com/virittamohelsinki/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FacebookIcon/>
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
                        <InstagramIcon/>
                    </a>
                    {/*            <button
                                onClick={() => scrollToTop()}
                    >
                        {back_to_top} &#8593;
                    </button> */}
                </section>
            </div>
        </footer>
    )
}
