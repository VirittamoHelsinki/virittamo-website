// Import necessary libraries and components
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "./SubComponents/LoadingSlides";

// Create a carousel component
export const Carousel = ({ slides }) => {
  // Set initial states for activeIndex, isHovering, and isPlaying
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle clicking on the previous button
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  // Function to handle clicking on the next button
  const handleNextClick = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  // Function to render the active item in the carousel
  const renderActiveItem = () => {
    const activeItem = slides[activeIndex];
    const ActiveItem = activeItem.component;

    // Set up an effect to add event listeners to the video element
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

  // Set the interval duration for autoplay
  const INTERVAL_DURATION = 70500;

  // Set up an effect to autoplay the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isPlaying) {
        handleNextClick();
      }
    }, INTERVAL_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isHovering, isPlaying]);

  // Function to handle mouse entering the carousel
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Function to handle mouse leaving the carousel
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Return the carousel component
  return (
    <section
      className="carousel__container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="arrow-button">
        <SlArrowLeft className="arrow-button--icon" onClick={handlePrevClick} />
      </button>
      {slides ? renderActiveItem() : <LoadingSlides />}
      <button className="arrow-button">
        <SlArrowRight
          className="arrow-button--icon"
          onClick={handleNextClick}
        />
      </button>
    </section>
  );
};

// Define prop types for the carousel component
Carousel.propTypes = {
  slides: PropTypes.arrayOf(
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
