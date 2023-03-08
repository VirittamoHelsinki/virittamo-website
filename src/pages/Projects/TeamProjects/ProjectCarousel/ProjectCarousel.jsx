import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { LoadingSlides } from "../../../Home/Carousel/SubComponents/LoadingSlides";

export const ProjectCarousel = ({ slides }) => {
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
    const activeItems = [
      slides[activeIndex],
      slides[activeIndex + 1],
      slides[activeIndex + 2],
    ].filter(Boolean); // filter out undefined values

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
    <div className="projectPage__teams--carousel">
      <button
        className="arrow-button"
        onClick={handlePrevClick}
        disabled={activeIndex === 0}
      >
        <BsArrowLeftCircle className="arrow-button--icon" />
      </button>
      {slides ? renderActiveItems() : <LoadingSlides />}
      <button
        className="arrow-button"
        onClick={handleNextClick}
        disabled={activeIndex >= slides.length - 3}
      >
        <BsArrowRightCircle className="arrow-button--icon" />
      </button>
    </div>
  );
};

ProjectCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType.isRequired,
      src: PropTypes.string,
      alt: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};
