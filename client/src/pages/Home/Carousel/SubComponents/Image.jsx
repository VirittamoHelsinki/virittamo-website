import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Image = ({ src, alt }) => {
  return (
    <motion.img
      className="carousel__item--image"
      src={src}
      alt={alt}
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
