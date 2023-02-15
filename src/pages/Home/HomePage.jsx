/* eslint-disable react/prop-types */
// import context
import { useContext, useState } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import assets
import HeaderImg from "./assets/main-header-img.jpeg";
import ForEmployeeImg from "./assets/why-section-employee.jpeg";
import ForCompanyImg from "./assets/why-section-company.jpeg";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

// import components
import { Header } from "../../components/Header/Header";

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
        <h2>{home_page.teams.title}</h2>
        <div className="homePage__teams--containers">
          <TeamsItem
            img=""
            title="Media"
            text={home_page.teams.media_desc}
            alt="Virittämö's Media Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
          <TeamsItem
            img=""
            title="ICT"
            text={home_page.teams.ict_desc}
            alt="Virittämö's ICT Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
          <TeamsItem
            img=""
            title="Softa"
            text={home_page.teams.software_desc}
            alt="Virittämö's Software Team"
            more={home_page.teams.read_more_btn}
            less={home_page.teams.read_less_btn}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
