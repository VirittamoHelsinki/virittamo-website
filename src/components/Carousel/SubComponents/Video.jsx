import PropTypes from "prop-types";

const Video = ({ src, alt }) => {
  return (
    <video className="carousel__item--video" src={src} alt={alt} controls />
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Video;
