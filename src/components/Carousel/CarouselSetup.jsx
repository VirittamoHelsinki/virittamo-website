import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const CarouselSetup = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const renderActiveItem = () => {
    const ActiveItem = items[activeIndex].component;
    return <ActiveItem {...items[activeIndex]} />;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        handleNextClick();
      }
    }, 7500);
    return () => clearInterval(interval);
  }, [activeIndex, isHovering]);

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

CarouselSetup.propTypes = {
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

export default CarouselSetup;
