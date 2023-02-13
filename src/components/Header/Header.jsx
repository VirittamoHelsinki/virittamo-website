import { useContext } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";
import { BsFacebook } from "react-icons/bs";

const Header = () => {
  const { lang, setLocale, fi } = useContext(LanguageContext);

  const { header } = lang;

  return (
    <main className="header__wrapper">
      <section className="header__container">
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list-item">{header.homepage}</li>
            <li className="header__nav--list-item">{header.projects}</li>
            <li className="header__nav--list-item">{header.experiences}</li>
            <li className="header__nav--list-item">{header.contact}</li>
          </ul>
        </nav>
        <div className="header__socials">
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsFacebook />
          </a>
          <a href="/">
            <BsFacebook />
          </a>
        </div>
        <div className="header__language">
          {lang === fi ? (
            <a
              href="/"
              onClick={() => {
                setLocale("en");
                localStorage.setItem("virittamo-lang", "en");
              }}
            >
              EN
            </a>
          ) : (
            <a
              href="/"
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
    </main>
  );
};

export default Header;
