import { useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import bg_image from "../../../assets/carousel/carousel-feedback-bg.webp";
import { LanguageContext } from "../../../../../langLocal/context/langContext";

const Feedback = ({ number, scale_fi, scale_en, question_fi, question_en }) => {
  const { lang, fi } = useContext(LanguageContext);

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
        <p>{lang === fi ? scale_fi : scale_en}</p>
      </div>
      <h2>{lang === fi ? question_fi : question_en}</h2>
    </motion.div>
  );
};

Feedback.propTypes = {
  number: PropTypes.number.isRequired,
  scale_fi: PropTypes.string.isRequired,
  scale_en: PropTypes.string.isRequired,
  question_fi: PropTypes.string.isRequired,
  question_en: PropTypes.string.isRequired,
};

export default Feedback;
