// import context
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// import loading page to be used when page is loading
import Loading from "../Loading/Loading";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { Stories_Item } from "./Stories_Item";

const Stories = () => {
  const { lang } = useContext(LanguageContext);

  const { title, text, stories } = lang.stories_page;

  const renderSlides = () => {
    if (!stories) {
      return null;
    }

    return stories.map((item, index) => (
      <Stories_Item
        key={index}
        alt={item.alt}
        img_src={item.img_src}
        full_name={item.full_name}
        story_text={item.story_text}
      />
    ));
  };

  return (
    <Suspense fallback={<Loading />}>
      <main className="storiesPage__wrapper">
        <Header />
        <div className="storiesPage__introduction">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div id="pink-bar"></div>
        <ul className="storiesPage__list">{renderSlides()}</ul>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Stories;
