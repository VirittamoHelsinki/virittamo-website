import { useCallback, useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "../Carousel-home/SubComponents/LoadingSlides";
import { FaCircle, FaRegCircle } from "react-icons/fa";

function SlideIndicator({
  numSlides,
  activeIndex,
}: {
  numSlides: number;
  activeIndex: number;
}) {
  const indicators = Array.from({ length: numSlides }).map((_, i) =>
    i === activeIndex ? (
      <FaCircle key={i} className="carousel-indicator active" />
    ) : (
      <FaRegCircle key={i} className="carousel-indicator" />
    ),
  );

  return <div className="carousel-indicators">{indicators}</div>;
}

// Function that returns an array of active slide components
function RenderActiveItems({
  slides,
  activeIndex,
  setActiveIndex,
  numVisibleSlides,
}) {
  let activeItems = slides
    .slice(activeIndex, activeIndex + numVisibleSlides)
    .filter(Boolean);

  // If the last slide is active, set the active index to the previous slide
  if (activeIndex === slides.length) {
    setActiveIndex(activeIndex - 1);
    activeItems = slides
      .slice(activeIndex - 1, activeIndex - 1 + numVisibleSlides)
      .filter(Boolean);
  }

  // Render the active slides
  return activeItems.map((activeItem, index) => {
    return <Slide key={index} {...activeItem} />;
  });
}

// Returns the number of visible slides based on the width of the viewport
const getNumVisibleSlides = (slides: string[], width: number) => {
  switch (true) {
    case width <= 720:
      return 1;
    case width <= 1280:
      return 2;
    case width <= 1600:
      return 3;
    case width <= 1920:
      return 4;
    default:
      return Math.min(slides.length, 5);
  }
};

// A helper component that renders the active slides
function Slide({ component: Component, ...props }) {
  return <Component {...props} />;
}

// The main component that renders the project carousel
export function StoriesCarousel({ slides = [] }) {
  // State variables to keep track of the active slide index and the number of visible slides
  const [activeIndex, setActiveIndex] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(
    getNumVisibleSlides(slides, window.innerWidth),
  );

  // Handler function for the previous arrow button
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  // Handler function for the next arrow button
  const handleNextClick = useCallback(() => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, slides.length]);

  // Ensure that the active index and the number of visible slides are within valid ranges
  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    } else if (activeIndex + numVisibleSlides > slides.length) {
      setActiveIndex(slides.length - numVisibleSlides);
    }
  }, [activeIndex, numVisibleSlides, slides]);

  // Update the number of visible slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setNumVisibleSlides(getNumVisibleSlides(slides, window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [slides]);

  return (
    <>
      <SlideIndicator numSlides={slides.length} activeIndex={activeIndex} />
      <div className="relative flex justify-center items-center gap-3">
        <button
          className={activeIndex === 0 ? "hidden" : "absolute -left-10 p-3"}
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
        >
          <SlArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-10">
          {slides.length > 0 ? (
            <RenderActiveItems
              slides={slides}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              numVisibleSlides={numVisibleSlides}
            />
          ) : (
            <LoadingSlides />
          )}
        </div>
        <button
          className={
            activeIndex >= slides.length - numVisibleSlides
              ? "hidden"
              : "absolute -right-10 p-3"
          }
          onClick={handleNextClick}
          disabled={activeIndex >= slides.length - numVisibleSlides}
        >
          <SlArrowRight className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
