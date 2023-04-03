// import context
import { useContext, useEffect, useRef, Suspense } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

// import assets
import HeaderImg from "./assets/main-header-img.webp";
import ForEmployeeImg from "./assets/why-section-employee.webp";
import ForCompanyImg from "./assets/why-section-company.webp";

import MediaImg from "./assets/teams-section-media.webp";
import IctImg from "./assets/teams-section-ict.webp";
import SoftaImg from "./assets/teams-section-softa.webp";

// import components
import { Header } from "../../components/Header/Header";
import { Introduction } from "./Introduction";
import { Carousel } from "./Carousel/Carousel";
import { Why } from "./Why";
import { Teams } from "./Teams";
import { Apply } from "./Apply";
import { Partners } from "../../components/Partners/Partners";
import { Contacts } from "./Contacts";
import { Footer } from "../../components/Footer/Footer";

import { slides } from "./Carousel/Content";

const HomePage = () => {
  const { contact } = useParams();
  const { lang } = useContext(LanguageContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.onload = () => {
      if (contact == ":contact") {
        scrollRef.current.scrollIntoView();
      }
    };
  }, []);

  const {
    title,
    text,
    why_virittamo,
    for_an_employee,
    for_a_company,
    teams,
    apply,
    contact_details,
    locations,
  } = lang.home_page;

  return (
    <Suspense fallback={<Loading />}>
      <main className="homePage__wrapper">
        <Header />
        <div className="homePage__img--container">
          <img src={HeaderImg} alt="Home page main image" />
        </div>
        <Introduction title={title} text={text} />
        {slides && <Carousel slides={slides} />}
        <Why
          title={why_virittamo}
          employee={for_an_employee}
          employeeImg={ForEmployeeImg}
          company={for_a_company}
          companyImg={ForCompanyImg}
        />
        <Teams
          teams={teams}
          mediaImg={MediaImg}
          ictImg={IctImg}
          softaImg={SoftaImg}
        />
        <Apply apply={apply} />
        <Partners />
        <Footer>
          <Contacts
            scrollRef={scrollRef}
            contact_details={contact_details}
            locations={locations}
          />
        </Footer>
      </main>
    </Suspense>
  );
};

export default HomePage;
