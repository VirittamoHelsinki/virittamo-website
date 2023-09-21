import { useState, useContext } from "react";
import { Lang, LanguageContext, type Teams } from "../utils/langContext";
import { Carousel } from "../components/Carousel-home/Carousel";
import { slides } from "../components/Carousel-home/Content";
import { PinkBar } from "../components/PinkBar";
import { Background } from "../components/Background";
import { Image } from "../components/Image";

import HeaderImg from "../assets/main-header-img.webp";
import ForEmployeeImg from "../assets/why-section-employee.webp";
import ForCompanyImg from "../assets/why-section-company.webp";
import MediaImg from "../assets/teams-section-media.webp";
import IctImg from "../assets/teams-section-ict.webp";
import SoftaImg from "../assets/teams-section-softa.webp";
import Helsinki from "../assets/helsinki-logo.webp";
import Metropolia from "../assets/metropolia-logo.webp";
import Ohjaamo from "../assets/ohjaamo-logo.webp";
import Laurea from "../assets/laurea-logo.webp";
import TyöPalv from "../assets/työpalv-logo.webp";
import Europe from "../assets/eu-logo.webp";

// A functional component for the individual team item
function TeamsItem({
  title,
  text,
  img,
  alt,
  less,
  more,
}: {
  title: string;
  text: string;
  img: string;
  alt: string;
  less: string;
  more: string;
}) {
  // Defining the showMore state and its setState function using useState hook
  const [showMore, setShowMore] = useState(false);

  // Toggling the showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Slicing the text into a preview and the rest
  const textPreview = text ? text.slice(0, text.length / 5) : "";
  const textAll = text ? text.slice(text.indexOf(".") + 1) : "";

  // Rendering the individual team item with the relevant props and state
  return (
    <div className="homePage__teams--containers-item ">
      <Image src={img} alt={alt} />
      <h3>{title}</h3>
      <p>
        {textPreview}
        {showMore ? textAll : ".."}
      </p>
      <button onClick={toggleShowMore}>{showMore ? less : more}</button>
    </div>
  );
}

// The Teams component that renders all the teams on the home page
export function Teams({
  teams,
  mediaImg,
  ictImg,
  softaImg,
}: {
  teams: Teams;
  mediaImg: string;
  ictImg: string;
  softaImg: string;
}) {
  // Defining the teams data that will be passed to the TeamsItem components
  const teamsData = [
    {
      id: "media",
      img: mediaImg,
      title: "Media",
      text: teams.media_desc,
      alt: "Virittämö's Media Team",
    },
    {
      id: "ict",
      img: ictImg,
      title: "ICT",
      text: teams.ict_desc,
      alt: "Virittämö's ICT Team",
    },
    {
      id: "softa",
      img: softaImg,
      title: "Softa",
      text: teams.software_desc,
      alt: "Virittämö's Software Team",
    },
  ];

  // Rendering the Teams component with the relevant props and state
  return (
    <section className="homePage__teams">
      <Background />
      <h2>{teams.title}</h2>
      <div className="homePage__teams--containers">
        {teamsData.map((team) => (
          <TeamsItem
            key={team.id}
            img={team.img}
            title={team.title}
            text={team.text}
            alt={team.alt}
            more={teams.read_more_btn}
            less={teams.read_less_btn}
          />
        ))}
      </div>
    </section>
  );
}

function Partners() {
  const { lang } = useContext(LanguageContext) as Lang;

  const { partners } = lang.home_page;

  const partner_images = [
    Helsinki,
    Metropolia,
    Ohjaamo,
    Laurea,
    TyöPalv,
    Europe,
  ];

  return (
    <section className="homePage__partners">
      <h2>{partners}</h2>
      <div className="homePage__partners--container">
        <figure className="homePage__partners--container-images">
          {partner_images.map((item, index) => (
            <img
              src={item}
              key={index}
              className="partner-image"
              alt="partner image"
            />
          ))}
        </figure>
      </div>
    </section>
  );
}

export default function HomePage() {
  // Get the current language from the LanguageContext
  const { lang } = useContext(LanguageContext) as Lang;

  // Destructure the language data for the home page
  const {
    title,
    text,
    why_virittamo,
    for_an_employee,
    for_a_company,
    teams,
    apply,
  } = lang.home_page;

  return (
    <main className="homePage__wrapper">
      <div className="homePage__img--container">
        <Image src={HeaderImg} alt="Home page main image" />
      </div>
      <section className="homePage__introduction">
        <h1>{title}</h1>
        <p>{text}</p>
        <PinkBar />
      </section>
      {slides && <Carousel slides={slides} />}
      <section className="homePage__why">
        <Background />
        <h2>{why_virittamo}</h2>
        <div className="homePage__why--containers">
          <div className="homePage__why--containers-item">
            <Image
              id="employee-img"
              src={ForEmployeeImg}
              alt="Why choose Virittämö employee picture"
            />
            <h3>{for_an_employee.title}</h3>
            <ul className="homePage__why--containers-list">
              {for_an_employee.description.map((item, index) => (
                <li key={index}>&#9656; {item}</li>
              ))}
            </ul>
          </div>
          <div className="homePage__why--containers-item">
            <Image
              id="company-img"
              src={ForCompanyImg}
              alt="Why choose Virittämö company picture"
            />
            <h3>{for_a_company.title}</h3>
            <ul className="homePage__why--containers-list">
              {for_a_company.description.map((item, index) => (
                <li key={index}>&#9656; {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Teams
        teams={teams}
        mediaImg={MediaImg}
        ictImg={IctImg}
        softaImg={SoftaImg}
      />
      <section className="homePage__apply">
        <h2>{apply.title}</h2>
        <p>{apply.description}</p>
        <div className="homePage__apply--container">
          <ul className="homePage__apply--container-list">
            {apply.qualifications.map((item, index) => (
              <li key={index} className="homePage__apply--container-list-item">
                <h3>{item.title}</h3>
                <p>&#9656; {item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <PinkBar />
      </section>
      <Partners />
    </main>
  );
}
