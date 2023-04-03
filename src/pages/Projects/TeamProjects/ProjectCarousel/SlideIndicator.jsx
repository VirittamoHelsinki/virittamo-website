import PropTypes from "prop-types";

import { FaCircle, FaRegCircle } from "react-icons/fa";

export const SlideIndicator = ({ numSlides, activeIndex }) => {
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
