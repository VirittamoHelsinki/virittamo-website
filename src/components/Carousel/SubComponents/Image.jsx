import PropTypes from "prop-types";

const Image = ({ src, alt }) => {
  return (
    <div className="carousel__item--image">
      <img src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
