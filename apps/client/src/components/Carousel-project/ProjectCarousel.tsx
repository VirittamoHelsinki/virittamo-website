import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LoadingSlides } from "../Carousel-home/SubComponents/LoadingSlides";
import { SlideIndicator } from "../SlideIndicator";

// Function that returns an array of active slide components
function RenderActiveItems({
  slides,
  activeIndex,
  setActiveIndex,
  numVisibleSlides,
}: {
  slides: string[];
  activeIndex: number;
  setActiveIndex: (value: number) => void;
  numVisibleSlides: number;
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
function getNumVisibleSlides(slides: string[], width: number) {
  switch (true) {
    case width <= 1080:
      return 1;
    case width <= 1440:
      return 2;
    default:
      return Math.min(slides.length, 3);
  }
}

// A helper component that renders the active slides
function Slide({ component: Component, ...props }) {
  return <Component {...props} />;
}

// The main component that renders the project carousel
export function ProjectCarousel({
  text = {},
  slides = [],
}: {
  text: { title?: string; description?: string };
  slides: string[];
}) {
  // State variables to keep track of the active slide index and the number of visible slides
  const [activeIndex, setActiveIndex] = useState(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState(
    getNumVisibleSlides(slides, window.innerWidth),
  );

  // Handler function for the previous arrow button
  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Handler function for the next arrow button
  const handleNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

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

  // Extract text data from the props
  const { title = "", description = "" } = text;

  return (
    <div className="projectPage__teams--container-item relative px-[10%]">
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      <SlideIndicator numSlides={slides.length} activeIndex={activeIndex} />
      <div className="projectPage__teams--carousel">
        <button
          className={
            activeIndex === 0 ? "hidden" : "absolute -left-10 md:left-0 p-2"
          }
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
        >
          <SlArrowLeft className="arrow-button--icon h-5 w-5" />
        </button>
        <div className="projectPage__teams--carousel-list">
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
              : "absolute -right-10 lg:right-0 p-2"
          }
          onClick={handleNextClick}
          disabled={activeIndex >= slides.length - numVisibleSlides}
        >
          <SlArrowRight className="arrow-button--icon h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
