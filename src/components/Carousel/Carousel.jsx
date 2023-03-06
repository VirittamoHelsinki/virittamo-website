import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import { slides } from "./Content";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  const renderActiveItem = () => {
    const activeItem = slides[activeIndex];
    const ActiveItem = activeItem.component;

    useEffect(() => {
      const videoEl = document.querySelector(".carousel__item--video");
      if (videoEl) {
        videoEl.addEventListener("play", () => {
          setIsHovering(true);
          setIsPlaying(true); // set isPlaying to true when video starts playing
        });
        videoEl.addEventListener("pause", () => {
          setIsHovering(false);
          setIsPlaying(false); // set isPlaying to false when video is paused
        });
        return () => {
          videoEl.removeEventListener("play", () => setIsHovering(true));
          videoEl.removeEventListener("pause", () => setIsHovering(false));
        };
      }
    }, [activeIndex]);

    return <ActiveItem key={activeIndex} {...activeItem} />;
  };

  const INTERVAL_DURATION = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isPlaying) {
        handleNextClick();
      }
    }, INTERVAL_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isHovering, isPlaying]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section
      className="carousel__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="arrow-button">
        <BsArrowLeftCircle
          className="arrow-button--icon"
          onClick={handlePrevClick}
        />
      </button>
      {renderActiveItem()}
      <button className="arrow-button">
        <BsArrowRightCircle
          className="arrow-button--icon"
          onClick={handleNextClick}
        />
      </button>
    </section>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType.isRequired,
      title: PropTypes.string,
      text: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
      bg_image: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};
