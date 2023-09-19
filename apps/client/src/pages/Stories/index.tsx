// Import LanguageContext and useContext hook from react
import { LanguageContext } from "../../utils/langContext";
import { FeaturedStoryContext } from "../../utils/featuredStoryContext";
import { useContext, useState } from "react";

// Import Loading component to be used while the page is loading
import { PinkBar } from "../../components/PinkBar";

import { StoriesCarousel } from "../../components/Carousel-stories/StoriesCarousel";
import { Image } from "../../components/Image";

function Stories_Item({
  alt,
  img_src,
  full_name,
  story_text,
  job_title,
}: {
  alt: string;
  img_src: string;
  full_name: string;
  story_text: string[];
  job_title: string;
}) {
  return (
    <div className="storiesPage__featuredStory--item">
      <Image src={img_src} alt={alt} />
      <div className="storiesPage__featuredStory--item-title">
        <h3>{full_name}</h3>
        <h4>{job_title}</h4>
      </div>
      <div className="storiesPage__featuredStory--item-text">
        {story_text.map((text_part, index) => (
          <p key={index}>{text_part}</p>
        ))}
      </div>
    </div>
  );
}

// Function to render stories as slides
function RenderFeaturedStory({ stories, featStory }) {
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
}

export function StoriesPage() {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { title, text, stories } = lang.stories_page;

  const [featStory, setFeatStory] = useState(
    Math.floor(Math.random() * stories.length),
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
        <StoriesCarousel slides={stories} />
      </main>
    </FeaturedStoryContext.Provider>
  );
}
