import { useState, useContext } from "react";
import { Lang, LanguageContext, type Teams } from "../utils/langContext";
import { Carousel } from "../components/Carousel-home/Carousel";
import { slides } from "../components/Carousel-home/Content";
import { PinkBar } from "../components/PinkBar";
import { Background } from "../components/Background";
import { Image } from "../components/Image";

import HeaderImg from "../assets/main-header-img.webp?format=avif";
import ForEmployeeImg from "../assets/why-section-employee.webp?format=avif";
import ForCompanyImg from "../assets/why-section-company.webp?format=avif";
import MediaImg from "../assets/teams-section-media.webp?format=avif";
import IctImg from "../assets/teams-section-ict.webp?format=avif";
import SoftaImg from "../assets/teams-section-softa.webp?format=avif";
import Helsinki from "../assets/helsinki-logo.webp?format=avif";
import Metropolia from "../assets/metropolia-logo.webp?format=avif";
import Ohjaamo from "../assets/ohjaamo-logo.webp?format=avif";
import Laurea from "../assets/laurea-logo.webp?format=avif";
import TyoPalv from "../assets/tyopalv-logo.webp?format=avif";
import Europe from "../assets/eu-logo.webp?format=avif";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../utils/getStrapiData";

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
function Teams({
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
            {/*<Background up={false} />*/}
        </section>
    );
}

export default function HomePage() {
    // Get the current language from the LanguageContext
    const { lang } = useContext(LanguageContext) as Lang;

    const { isLoading: isHomeLoading, data: homeData } = useQuery({
        queryKey: ["homeData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?populate=*"),
    });

    const { isLoading: isHomeTeamLoading, data: homeTeamData } = useQuery({
        queryKey: ["homeTeamData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?populate[team_content][populate]=*"),
    });

    const { isLoading: isHomeWhyLoading, data: homeWhyData } = useQuery({
        queryKey: ["homeWhyData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?populate[why_content][populate]=*"),
    });


    const { isLoading: isHomeImgLoading, data: homeImgData } = useQuery({
        queryKey: ["homeImgData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?populate[image_content][populate]=*"),
    });

    if (isHomeLoading || !homeData) {
        return "loading...";
    }
    console.log("data", homeData);

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
            {/*beta test */}
            <div className="homePage__img--container">
                <Image src={homeData.data[0].attributes.head_image.data.attributes.url} alt="Home page main image" width={1920} height={488} />
            </div>
            <section className="homePage__introduction">
                <h1 className="text-red-300">{homeData?.data[0].attributes.heading}</h1>
                <p>{homeData.data[0].attributes.description}</p>
                <PinkBar />
            </section>
            {slides && <Carousel slides={slides} />}
            {/*why virittamo */}
            <section className="homePage__why">
                <Background />
                <h2>{homeData.data[0].attributes.why_title}</h2>
                <div className="homePage__why--containers">
                    {isHomeWhyLoading || !homeWhyData ? 'loading...' : homeWhyData.data[0].attributes.why_content.map((content, index) => (

                        <div key={index} className="homePage__why--containers-item">
                            <Image
                                src={content.img.data.attributes.url}
                                alt="Why choose Virittämö employee picture"
                            />
                            <h3>{content.title}</h3>
                            <ul className="homePage__why--containers-list">
                                {content.why_list.map((item, index) => (
                                    <li key={index}>{item.list_item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                {/*<Background up={false} />*/}
            </section>
            {/*teams */}
            <section className="homePage__teams">
                <Background />
                <h2>{homeData.data[0].attributes.team_title}</h2>
                <ul className="homePage__teams--containers">
                    {isHomeTeamLoading || !homeTeamData ? 'loading...' : homeTeamData.data[0].attributes.team_content.map((content, index) => (
                        <TeamsItem
                            key={index}
                            title={content.title}
                            text={content.why_list[0].list_item}
                            img={content.img.data.attributes.url}
                            alt="Virittämö's Media Team"
                            more="Lue lisää"
                            less="Lue vähemmän"
                        />
                    ))}
                    {/* <li key={index} className="homePage__teams--containers-item ">
                         <Image src={content.img.data.attributes.url} alt="Home page main image" />
                         <h3>{content.title}</h3>
                         <p>{content.why_list[0].list_item}</p>
                         </li>*/}
                </ul>
            </section>
            {/*apply */}
            <section className="homePage__apply">
                <h2>{homeData.data[0].attributes.apply_title}</h2>
                <p>{homeData.data[0].attributes.apply_description}</p>
                <div className="homePage__apply--container">
                    <ul className="homePage__apply--container-list">
                        {homeData.data[0].attributes.apply_content.map((content, index) => (
                            <li key={index} className="homePage__apply--container-list-item">
                                <h3>{content.text_title}</h3>
                                <li style={{ listStyle: "disclosure-closed" }}>{content.text_decription}</li>
                            </li>
                        ))}
                    </ul>
                </div>
                <PinkBar />
            </section>

            {/*partners */}
            <section className="homePage__partners">
                <h2>{homeData.data[0].attributes.partner_title}</h2>
                <div className="homePage__partners--container">
                    <figure className="homePage__partners--container-images">
                        {isHomeImgLoading || !homeImgData ? 'loading...' : homeImgData.data[0].attributes.image_content.map((item, index) => (
                            <img
                                key={item.id}
                                src={item.image_list_item.data.attributes.url}
                                className="partner-image"
                                alt="partner image"
                            />
                        ))}
                    </figure>
                </div>
            </section>
        </main>
    );
}
