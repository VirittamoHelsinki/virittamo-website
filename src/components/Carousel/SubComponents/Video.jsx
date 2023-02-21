import PropTypes from "prop-types";

const Video = ({ src, alt }) => {
  return (
    <div className="carousel__item--video">
      <video src={src} alt={alt} controls />
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Video;
