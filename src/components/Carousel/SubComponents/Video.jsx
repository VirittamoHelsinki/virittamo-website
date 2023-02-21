import PropTypes from "prop-types";

const Video = ({ src, alt, onPlayStatusChange }) => {
  const handlePlay = () => {
    onPlayStatusChange(true);
  };

  const handlePause = () => {
    onPlayStatusChange(false);
  };

  return (
    <video
      className="carousel__item--video"
      src={src}
      alt={alt}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onPlayStatusChange: PropTypes.func.isRequired,
};

export default Video;
