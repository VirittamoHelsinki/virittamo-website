/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { LoadingSlides } from "../../../Home/Carousel/SubComponents/LoadingSlides";

const getNumVisibleSlides = (slides) => {
  const width = window.innerWidth;
  if (width <= 1080) {
    return 1;
  } else if (width <= 1440) {
    return 2;
  } else {
    return Math.min(slides.length, 3);
  }
};

export const ProjectCarousel = ({ text, slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numVisibleSlides = getNumVisibleSlides(slides);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

  const renderActiveItems = () => {
    let activeItems = slides
      .slice(activeIndex, activeIndex + numVisibleSlides)
      .filter(Boolean);

    return activeItems.map((activeItem, index) => {
      const ActiveItem = activeItem.component;
      return <ActiveItem key={index} {...activeItem} />;
    });
  };

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    } else if (activeIndex + numVisibleSlides > slides.length) {
      setActiveIndex(slides.length - numVisibleSlides);
    }
  }, [activeIndex, slides]);

  const { title, description, contact } = text;

  return (
    <div className="projectPage__teams--container-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{contact}</p>
      <div className="projectPage__teams--carousel">
        <button
          className="arrow-button"
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
        >
          <BsArrowLeftCircle className="arrow-button--icon" />
        </button>
        <div className="projectPage__teams--carousel-list">
          {slides ? renderActiveItems() : <LoadingSlides />}
        </div>
        <button
          className="arrow-button"
          onClick={handleNextClick}
          disabled={activeIndex >= slides.length - numVisibleSlides}
        >
          <BsArrowRightCircle className="arrow-button--icon" />
        </button>
      </div>
    </div>
  );
};

/*
ProjectCarousel.propTypes = {
  text: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      contact: PropTypes.string,
    })
  ).isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType.isRequired,
      img_src: PropTypes.string.isRequired,
      client_name: PropTypes.string.isRequired,
      project_title: PropTypes.string.isRequired,
      completion_year: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
*/
