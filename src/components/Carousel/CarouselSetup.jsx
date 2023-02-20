import { useState } from "react";
import PropTypes from "prop-types";

// import icons from react-icons
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const CarouselSetup = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };

  const renderActiveItem = () => {
    const ActiveItem = items[activeIndex].component;
    return <ActiveItem />;
  };

  return (
    <section className="homePage__carousel">
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
    })
  ).isRequired,
};

export default CarouselSetup;
