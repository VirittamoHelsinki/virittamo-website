/* eslint-disable react/prop-types */
// import context
import { useContext, useState } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import assets
import HeaderImg from "./assets/main-header-img.webp";
import ForEmployeeImg from "./assets/why-section-employee.webp";
import ForCompanyImg from "./assets/why-section-company.webp";

import MediaImg from "./assets/teams-section-media.webp";
import IctImg from "./assets/teams-section-ict.webp";
import SoftaImg from "./assets/teams-section-softa.webp";

import Helsinki from "./assets/partners/helsinki-logo.webp";
import Metropolia from "./assets/partners/metropolia-logo.webp";
import Ohjaamo from "./assets/partners/ohjaamo-logo.webp";
import Laurea from "./assets/partners/laurea-logo.webp";
import TyöPalv from "./assets/partners/työpalv-logo.webp";
import Europe from "./assets/partners/eu-logo.webp";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// import components
import { Header } from "../../components/Header/Header";
import { Background } from "../../components/Background/Background";
import { Footer } from "../../components/Footer/Footer";

const TeamsItem = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Check if props and props.text are defined before trying to slice
  const textPreview = props.text
    ? props.text.slice(0, props.text.indexOf(".") + 1)
    : "";

  const textRest = props.text
    ? props.text.slice(props.text.indexOf(".") + 1)
    : "";

  return (
    <div className="homePage__teams--containers-item ">
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>
        {textPreview}
        {showMore ? textRest : "..."}
      </p>
      <button onClick={toggleShowMore}>
        {showMore ? props.less : props.more}
      </button>
    </div>
  );
};

const HomePage = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang;

  const partner_images = [
    Helsinki,
    Metropolia,
    Ohjaamo,
    Laurea,
    TyöPalv,
    Europe,
  ];

  return (
    <main className="homePage__wrapper">
      <Header />
      <div className="homePage__img--container">
        <img src={HeaderImg} alt="Home page main image" />
      </div>
      <section className="homePage__introduction">
        <h1>{home_page.home_title}</h1>
        <p>{home_page.home_text}</p>
        <div id="pink-bar"></div>
      </section>
      <section className="homePage__carousel">
        <button className="arrow-button">
          <BsArrowLeftCircle className="arrow-button--icon" />
        </button>
        <div className="homePage__violetBox">
          <h3>{home_page.employed_to_text}</h3>
          <ul className="homePage__violetBox--list">
            {home_page.companies_list.map((company, index) => (
              <li key={index}>{company}</li>
            ))}
          </ul>
        </div>
        <button className="arrow-button">
          <BsArrowRightCircle className="arrow-button--icon" />
        </button>
      </section>
      <section className="homePage__why">
        <Background />
        <h2>{home_page.why_virittamo}</h2>
        <div className="homePage__why--containers">
          <div className="homePage__why--containers-item">
            <img
              id="employee-img"
              src={ForEmployeeImg}
              alt="Why choose Virittämö employee picture"
            />
            <h3>{home_page.for_an_employee.title}</h3>
            <ul className="homePage__why--containers-list">
              {home_page.for_an_employee.description.map((item, index) => (
                <li key={index}>&#9656; {item}</li>
              ))}
            </ul>
          </div>
          <div className="homePage__why--containers-item">
            <img
              id="company-img"
              src={ForCompanyImg}
              alt="Why choose Virittämö company picture"
            />
            <h3>{home_page.for_a_company.title}</h3>
            <ul className="homePage__why--containers-list">
              {home_page.for_a_company.description.map((item, index) => (
                <li key={index}>&#9656; {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="homePage__teams">
        <Background />
        <h2>{home_page.teams.title}</h2>
        <div className="homePage__teams--containers">
          <TeamsItem
            img={MediaImg}
            title="Media"
            text={home_page.teams.media_desc}
            alt="Virittämö's Media Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
          <TeamsItem
            img={IctImg}
            title="ICT"
            text={home_page.teams.ict_desc}
            alt="Virittämö's ICT Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
          <TeamsItem
            id
            img={SoftaImg}
            title="Softa"
            text={home_page.teams.software_desc}
            alt="Virittämö's Software Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
        </div>
      </section>
      <section className="homePage__apply">
        <h2>{home_page.apply.title}</h2>
        <p>{home_page.apply.description}</p>
        <div className="homePage__apply--container">
          <ul className="homePage__apply--container-list">
            {home_page.apply.qualifications.map((item, index) => (
              <div key={index} className="homePage__apply--container-list-item">
                <h3>{item.title}</h3>
                <li>&#9656; {item.desc}</li>
              </div>
            ))}
          </ul>
        </div>
        <div id="pink-bar"></div>
      </section>
      <section className="homePage__partners">
        <h2>{home_page.partners}</h2>
        <div className="homePage__partners--container">
          <div className="homePage__partners--container-images">
            {partner_images.map((item, index) => (
              <img
                src={item}
                key={index}
                className="partner-image"
                alt="partner image"
              ></img>
            ))}
          </div>
        </div>
      </section>
      <Footer>
        <h2>{home_page.contact_details.title}</h2>
        <div className="footer__contacts">
          <ul className="footer__contacts--list">
            {home_page.contact_details.team.map((item, index) => (
              <li key={index} className="footer__contacts--list-item">
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.phone}</p>
                <p>{item.email}</p>
              </li>
            ))}
          </ul>
          <div id="black-bar"></div>
          <ul className="footer__locations--list">
            {home_page.locations.map((item, index) => (
              <li key={index} className="footer__locations--list-item">
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.address}</p>
                <p>{item.postalCode}</p>
              </li>
            ))}
          </ul>
        </div>
      </Footer>
    </main>
  );
};

export default HomePage;
