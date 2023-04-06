import PropTypes from "prop-types";
import { motion } from "framer-motion";
import bg_image from "../../assets/carousel/carousel-feedback-bg.webp";

const Feedback = ({ number, scale, question }) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="carousel__item--feedback"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <div className="carousel__item--feedback-text">
        <h1>{number}</h1>
        <p>{scale}</p>
      </div>
      <h2>{question}</h2>
    </motion.div>
  );
};

Feedback.propTypes = {
  number: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default Feedback;
