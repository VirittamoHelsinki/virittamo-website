// Import LanguageContext and useContext hook from react
import { LanguageContext } from "../../utils/langContext";
import { FeaturedStoryContext } from "../../utils/featuredStoryContext";
import { useContext, useState, useEffect, useRef } from "react";

// Import Loading component to be used while the page is loading
import { PinkBar } from "../../components/PinkBar";

import { StoriesCarousel } from "../../components/Carousel-stories/StoriesCarousel";
import { CarouselConcept } from "../../components/Carousel-concept";
import { Stories_Item } from "./Stories_Item";

  // Function to render stories as slides
  const RenderFeaturedStory = ({stories, featStory}) => {
    if (!stories || stories.length === 0) {
      // Check if stories array is empty
      // If there are no stories, return null
      return null;
    }

    const featuredStory = stories[featStory];

    return (
      // Render a single Stories_Item component for the randomly selected featured story
      <Stories_Item
        key={featuredStory}
        alt={featuredStory.alt}
        img_src={featuredStory.img_src}
        full_name={featuredStory.full_name}
        job_title={featuredStory.job_title}
        story_text={featuredStory.story_text}
      />
    );
  };

export function StoriesPage() {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { title, text, stories } = lang.stories_page;

  const [featStory, setFeatStory] = useState(
    Math.floor(Math.random() * stories.length)
  );



  return (
    // Use Suspense to show a loading component while the page is being loaded
    <FeaturedStoryContext.Provider value={{ featStory, setFeatStory }}>
      <main className="storiesPage__wrapper">
        <div className="storiesPage__introduction">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <PinkBar />
        <section className="storiesPage__featuredStory">
          <RenderFeaturedStory stories={stories} featStory={featStory} />
        </section>
        <PinkBar />
        <CarouselConcept slides={stories}  />
      </main>
    </FeaturedStoryContext.Provider>
  );
}
