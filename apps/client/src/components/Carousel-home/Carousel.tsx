import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "./SubComponents/LoadingSlides";
import { SlideIndicator } from "../SlideIndicator";

 // Function to render the active item in the carousel
  const RenderActiveItem = ({slides, activeIndex, setIsHovering, setIsPlaying}) => {
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
    }, []);

    return <ActiveItem key={activeIndex} {...activeItem} />;
  };

// Create a carousel component
export function Carousel({ slides }) {
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

  // Set the interval duration for autoplay
  const INTERVAL_DURATION = 7500;

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
    <section className="carousel__wrapper">
      <div
        className="carousel__container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={handlePrevClick}
          className="z-20 p-2 bg-black/10 hover:bg-black/50 md:bg-transparent md:hover:bg-transparent"
        >
          <SlArrowLeft className="arrow-button--icon w-6 h-6 text-white md:text-black" />
        </button>
        {slides ? <RenderActiveItem
            slides={slides}
            activeIndex={activeIndex}
            setIsPlaying={setIsPlaying}
            setIsHovering={setIsHovering}
            /> : <LoadingSlides />}
        <button
          onClick={handleNextClick}
          className="p-2 bg-black/10 hover:bg-black/50 md:bg-transparent md:hover:bg-transparent"
        >
          <SlArrowRight className="arrow-button--icon w-6 h-6 text-white md:text-black" />
        </button>
      </div>
    </section>
  );
}
