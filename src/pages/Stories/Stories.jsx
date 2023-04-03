// Import LanguageContext and useContext hook from react
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// Import Loading component to be used while the page is loading
import Loading from "../Loading/Loading";

import { Header } from "../../components/Header/Header";
import { PinkBar } from "../../components/PinkBar";
import { Footer } from "../../components/Footer/Footer";

import { Stories_Item } from "./Stories_Item";

const Stories = () => {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { title, text, stories } = lang.stories_page;

  // Function to render stories as slides
  const renderSlides = () => {
    if (!stories) {
      // If there are no stories, return null
      return null;
    }

    return stories.map((item, index) => (
      // Render Stories_Item component for each story item
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
    // Use Suspense to show a loading component while the page is being loaded
    <Suspense fallback={<Loading />}>
      <main className="storiesPage__wrapper">
        <Header />
        <div className="storiesPage__introduction">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <PinkBar />
        <ul className="storiesPage__list">{renderSlides()}</ul>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Stories;
