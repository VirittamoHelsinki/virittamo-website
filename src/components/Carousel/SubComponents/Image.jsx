import PropTypes from "prop-types";

const Image = ({ src, alt }) => {
  return <img className="carousel__item--image" src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
