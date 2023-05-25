import { useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../../langLocal/context/langContext";

// import helper function
import { getTextLimit } from "./functions/textLimiter";

const Article = ({ title_fi, title_en, text_fi, text_en, bg_image, link }) => {
  const { lang, fi } = useContext(LanguageContext);

  const titleLimit_fi = getTextLimit(title_fi, 150);
  const textLimit_fi = getTextLimit(text_fi, 225);

  const titleLimit_en = getTextLimit(title_en, 150);
  const textLimit_en = getTextLimit(text_en, 225);

  return (
    <motion.a
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="carousel__item--article"
      rel="noreferrer"
      target="_blank"
      href={link}
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <div className="carousel__item--article-text">
        <h3>{lang === fi ? titleLimit_fi : titleLimit_en}</h3>
        <p>{lang === fi ? textLimit_fi : textLimit_en}</p>
      </div>
    </motion.a>
  );
};

Article.propTypes = {
  title_fi: PropTypes.string.isRequired,
  title_en: PropTypes.string.isRequired,
  subtitle_fi: PropTypes.string.isRequired,
  subtitle_en: PropTypes.string.isRequired,
  text_fi: PropTypes.string.isRequired,
  text_en: PropTypes.string.isRequired,
  bg_image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Article;
