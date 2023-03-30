import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaCircle, FaRegCircle } from "react-icons/fa";

import { LoadingSlides } from "../../../Home/Carousel/SubComponents/LoadingSlides";

const SlideIndicator = ({ numSlides, activeIndex }) => {
  const indicators = Array.from({ length: numSlides }).map((_, i) =>
    i === activeIndex ? (
      <FaCircle
        key={i}
        className="projectPage__teams--carousel-indicator active"
      />
    ) : (
      <FaRegCircle key={i} className="projectPage__teams--carousel-indicator" />
    )
  );

  return (
    <div className="projectPage__teams--carousel-indicators">{indicators}</div>
  );
};

SlideIndicator.propTypes = {
  numSlides: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export const getNumVisibleSlides = (slides, width) => {
  switch (true) {
    case width <= 1080:
      return 1;
    case width <= 1440:
      return 2;
    default:
      return Math.min(slides.length, 3);
  }
};

const Slide = ({ component: Component, ...props }) => {
  return <Component {...props} />;
};

Slide.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export const ProjectCarousel = ({ text = {}, slides = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(
    getNumVisibleSlides(slides, window.innerWidth)
  );

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

  const renderActiveItems = () => {
    let activeItems = slides
      .slice(activeIndex, activeIndex + numVisibleSlides)
      .filter(Boolean);

    if (activeIndex === slides.length) {
      setActiveIndex(activeIndex - 1);
      activeItems = slides
        .slice(activeIndex - 1, activeIndex - 1 + numVisibleSlides)
        .filter(Boolean);
    }

    return activeItems.map((activeItem, index) => {
      return <Slide key={index} {...activeItem} />;
    });
  };

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    } else if (activeIndex + numVisibleSlides > slides.length) {
      setActiveIndex(slides.length - numVisibleSlides);
    }
  }, [activeIndex, numVisibleSlides, slides]);

  useEffect(() => {
    const handleResize = () => {
      setNumVisibleSlides(getNumVisibleSlides(slides, window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [slides]);

  const { title = "", description = "", contact = "" } = text;

  return (
    <div className="projectPage__teams--container-item">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {contact && <p>{contact}</p>}
      <SlideIndicator numSlides={slides.length} activeIndex={activeIndex} />
      <div className="projectPage__teams--carousel">
        <button
          className="arrow-button"
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
        >
          <BsArrowLeftCircle className="arrow-button--icon" />
        </button>
        <div className="projectPage__teams--carousel-list">
          {slides.length > 0 ? renderActiveItems() : <LoadingSlides />}
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

ProjectCarousel.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    contact: PropTypes.string,
  }),
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
