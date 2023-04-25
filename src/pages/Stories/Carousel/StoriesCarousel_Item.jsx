// Import LanguageContext and useContext hook from react
import { LanguageContext } from "../../../langLocal/context/langContext";
import { useContext } from "react";

import { FeaturedStoryContext } from "../context/featuredStoryContext";

import PropTypes from "prop-types";

export const StoriesCarousel_Item = ({
  index,
  alt,
  img_src,
  full_name,
  job_title,
}) => {
  // Get the current language from LanguageContext
  const { lang } = useContext(LanguageContext);

  // Extract the title, text, and stories from lang.stories_page
  const { view_story_btn } = lang.stories_page;

  const { setFeatStory } = useContext(FeaturedStoryContext);

  return (
    <div className="storiesPage__carousel--container-item">
      <div className="storiesPage__carousel--container-img">
        <img src={img_src} alt={alt} />
      </div>
      <div className="storiesPage__carousel--container-title">
        <h3>{full_name}</h3>
        <p>{job_title}</p>
      </div>
      <button onClick={() => setFeatStory(index)}>{view_story_btn}</button>
    </div>
  );
};

StoriesCarousel_Item.propTypes = {
  index: PropTypes.number.isRequired,
  alt: PropTypes.string,
  img_src: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  job_title: PropTypes.string.isRequired,
};
