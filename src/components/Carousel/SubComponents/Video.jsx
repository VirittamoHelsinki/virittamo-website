import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Video = ({ src, alt, onPlayStatusChange }) => {
  const handlePlay = () => {
    onPlayStatusChange(true);
  };

  const handlePause = () => {
    onPlayStatusChange(false);
  };

  return (
    <motion.video
      className="carousel__item--video"
      src={src}
      alt={alt}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    />
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onPlayStatusChange: PropTypes.func,
};

export default Video;
