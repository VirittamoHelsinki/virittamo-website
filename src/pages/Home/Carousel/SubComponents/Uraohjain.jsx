import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Uraohjain = ({ bg_image, alt, logo }) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      alt={alt}
      className="carousel__item--uraohjain"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <img
        src={logo}
        alt="uraohjain logo"
        className="carousel__item--uraohjain-logo"
      />
    </motion.div>
  );
};

Uraohjain.propTypes = {
  logo: PropTypes.string.isRequired,
  bg_image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Uraohjain;
