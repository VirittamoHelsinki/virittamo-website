// Import libraries
import { useContext, useEffect, useRef, Suspense } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

// Import assets
import HeaderImg from "./assets/main-header-img.webp";
import ForEmployeeImg from "./assets/why-section-employee.webp";
import ForCompanyImg from "./assets/why-section-company.webp";
import MediaImg from "./assets/teams-section-media.webp";
import IctImg from "./assets/teams-section-ict.webp";
import SoftaImg from "./assets/teams-section-softa.webp";

// Import components
import { Header } from "../../components/Header/Header";
import { Carousel } from "./Carousel/Carousel";
import { Why } from "./Why";
import { Teams } from "./Teams";
import { Apply } from "./Apply";
import { Partners } from "../../components/Partners/Partners";
import { Contacts } from "../../components/Footer/Contacts";
import { Footer } from "../../components/Footer/Footer";

import { ScrollToTop } from "../../components/ScrollToTop";

// Import slide data
import { slides } from "./Carousel/Content";
import { PinkBar } from "../../components/PinkBar";

// Define HomePage component
const HomePage = () => {
  // Get the "contact" parameter from the URL
  const { contact } = useParams();

  // Get the current language from the LanguageContext
  const { lang } = useContext(LanguageContext);

  // Create a reference to the scroll element
  const scrollRef = useRef(null);

  // On page load, scroll to the Contact section if the "contact" parameter is present in the URL
  useEffect(() => {
    if (contact === ":contact" && scrollRef.current) {
      // Use setTimeout to ensure the scroll happens after the page has rendered
      setTimeout(() => {
        // Check if the browser supports scrollIntoView with options
        if (typeof scrollRef.current.scrollIntoView === 'function') {
          // If supported, use smooth scroll
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback for browsers that do not support scrollIntoView with options
          const scrollY = scrollRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: scrollY, behavior: 'smooth' });
        }
      }, 0);
    }
  }, [contact]);

  // Destructure the language data for the home page
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
      <ScrollToTop />
      <main className="homePage__wrapper">
        <Header />
        <div className="homePage__img--container">
          <img src={HeaderImg} alt="Home page main image" />
        </div>
        <section className="homePage__introduction">
          <h1>{title}</h1>
          <p>{text}</p>
          <PinkBar />
        </section>
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

// Export the HomePage component as the default export of this module
export default HomePage;
