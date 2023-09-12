// Import libraries
import { useContext } from "react";
import { LanguageContext } from "../../utils/langContext";

// Import assets
import HeaderImg from "../../assets/main-header-img.webp";
import ForEmployeeImg from "../../assets/why-section-employee.webp";
import ForCompanyImg from "../../assets/why-section-company.webp";
import MediaImg from "../../assets/teams-section-media.webp";
import IctImg from "../../assets/teams-section-ict.webp";
import SoftaImg from "../../assets/teams-section-softa.webp";

// Import components
import { Carousels } from '../../components/Carousel'
import { Teams } from "./Teams";
import { Partners } from "../../components/Partners/Partners";

// Import slide data
import { slides } from "./Carousel/Content";
import { PinkBar } from "../../components/PinkBar";
import { Background } from "../../components/Background/Background";
import { Image } from "../../components/Image";

export function HomePage() {
    // Get the current language from the LanguageContext
    const { lang } = useContext(LanguageContext);


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
            {/*{slides && <Carousel slides={slides} />} */}
          <div className="example-container">
            <Carousels />
        </div>
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
