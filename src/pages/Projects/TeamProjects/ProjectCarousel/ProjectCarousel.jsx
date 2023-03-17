/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { LoadingSlides } from "../../../Home/Carousel/SubComponents/LoadingSlides";

export const ProjectCarousel = ({ text, slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < slides.length - 3) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const renderActiveItems = () => {
    let activeItems = [
      slides[activeIndex],
      slides[activeIndex + 1],
      slides[activeIndex + 2],
    ].filter(Boolean);

    return activeItems.map((activeItem, index) => {
      const ActiveItem = activeItem.component;
      return <ActiveItem key={index} {...activeItem} />;
    });
  };

  useEffect(() => {
    if (activeIndex === -1 || activeIndex + 2 >= slides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides]);

  return (
    <div className="projectPage__teams--container-item">
      <h2>{text.title}</h2>
      <p>{text.description}</p>
      <p>{text.contact}</p>
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
          disabled={activeIndex >= slides.length - 3}
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
