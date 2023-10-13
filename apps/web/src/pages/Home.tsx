import { useState, useContext } from "react";
import { Lang, LanguageContext } from "../utils/langContext";
import { Carousel } from "../components/Carousel-home/Carousel";
import { slides } from "../components/Carousel-home/Content";
import { PinkBar } from "../components/PinkBar";
import { Background } from "../components/Background";
import { Image } from "../components/Image";
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
        <li className="homePage__teams--containers-item ">
            <Image src={img} alt={alt} />
            <h3>{title}</h3>
            <p>
                {textPreview}
                {showMore ? textAll : ".."}
            </p>
            <button onClick={toggleShowMore}>{showMore ? less : more}</button>
        </li>
    );
}

export default function HomePage() {
    // Get the current language from the LanguageContext
    const { lang, fi } = useContext(LanguageContext) as Lang;

    const { isLoading: isHomeFiLoading, data: homeFiData } = useQuery({
        queryKey: ["homeFiData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=fi&populate=*"),
    });

    const { isLoading: isHomeEnLoading, data: homeEnData } = useQuery({
        queryKey: ["homeEnData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=en&populate=*"),
    });

    const { isLoading: isHomeTeamFiLoading, data: homeTeamFiData } = useQuery({
        queryKey: ["homeTeamFiData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=fi&populate[team_content][populate]=*"),
    });

    const { isLoading: isHomeTeamEnLoading, data: homeTeamEnData } = useQuery({
        queryKey: ["homeTeamEnData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=en&populate[team_content][populate]=*"),
    });


    const { isLoading: isHomeWhyFiLoading, data: homeWhyFiData } = useQuery({
        queryKey: ["homeWhyFiData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=fi&populate[why_content][populate]=*"),
    });

    const { isLoading: isHomeWhyEnLoading, data: homeWhyEnData } = useQuery({
        queryKey: ["homeWhyEnData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?locale=en&populate[why_content][populate]=*"),
    });

    const { isLoading: isHomeImgLoading, data: homeImgData } = useQuery({
        queryKey: ["homeImgData"],
        queryFn: () => getMe("http://localhost:1337/api/homepages?populate[image_content][populate]=*"),
    });

    const homeData = lang === fi ? homeFiData : homeEnData;
    const isHomeLoading = lang === fi ? isHomeFiLoading : isHomeEnLoading;

    const homeTeamData = lang === fi ? homeTeamFiData : homeTeamEnData;
    const isHomeTeamLoading = lang === fi ? isHomeTeamFiLoading : isHomeTeamEnLoading;

    const homeWhyData = lang === fi ? homeWhyFiData : homeWhyEnData;
    const isHomeWhyLoading = lang === fi ? isHomeWhyFiLoading : isHomeWhyEnLoading;

    if (isHomeLoading || !homeData) {
        return "loading...";
    }

    return (
        <main className="homePage__wrapper">
            {/*beta test */}
            <div className="homePage__img--container">
                <Image src={homeData.data[0].attributes.head_image.data.attributes.url} alt="Home page main image" width={1920} height={488} />
            </div>
            <section className="homePage__introduction">
                <h1 className="text-red-300">{homeData?.data[0].attributes.heading}</h1>
                <p>{homeData?.data[0].attributes.description}</p>
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
                            alt={`Virittämö's ${content.title} Team`}
                            more={lang === fi ? "Lue lisää" : "Read more"}
                            less={lang === fi ? "Lue vähemmän" : "Read less"}
                        />
                    ))}
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
                                <ul>
                                    <li style={{ listStyle: "disclosure-closed" }}>{content.text_decription}</li>
                                </ul>
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
