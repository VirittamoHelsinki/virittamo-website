// Import LanguageContext and useContext hook from react
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// Import Loading component to be used while the page is loading
import Loading from "../Loading/Loading";

import { Header } from "../../components/Header/Header";
import { PinkBar } from "../../components/PinkBar";
import { Footer } from "../../components/Footer/Footer";

import { StoriesCarousel } from "./Carousel/StoriesCarousel";
import { Stories_Item } from "./Stories_Item";

const Stories = () => {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { title, text, stories } = lang.stories_page;

  // Function to render stories as slides
  const renderFeaturedStory = () => {
    if (!stories || stories.length === 0) {
      // Check if stories array is empty
      // If there are no stories, return null
      return null;
    }

    const featuredStoryIndex = Math.floor(Math.random() * stories.length);
    const featuredStory = stories[featuredStoryIndex];

    return (
      // Render a single Stories_Item component for the randomly selected featured story
      <Stories_Item
        key={featuredStoryIndex}
        alt={featuredStory.alt}
        img_src={featuredStory.img_src}
        full_name={featuredStory.full_name}
        job_title={featuredStory.job_title}
        story_text={featuredStory.story_text}
      />
    );
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
        <section className="storiesPage__featuredStory">
          {renderFeaturedStory()}
        </section>
        <PinkBar />
        <StoriesCarousel slides={stories} />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Stories;
