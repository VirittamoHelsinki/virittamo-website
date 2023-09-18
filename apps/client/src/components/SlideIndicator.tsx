import { FaCircle, FaRegCircle } from "react-icons/fa";

export const SlideIndicator = ({ numSlides, activeIndex }:{numSlides: number; activeIndex: number}) => {
  const indicators = Array.from({ length: numSlides }).map((_, i) =>
    i === activeIndex ? (
      <FaCircle key={i} className="carousel-indicator active" />
    ) : (
      <FaRegCircle key={i} className="carousel-indicator" />
    )
  );

  return <div className="carousel-indicators">{indicators}</div>;
}
