import { useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../../../langLocal/context/langContext";

// import helper function
import { getTextLimit } from "../__functions__/textLimiter";

const Uraohjain_2 = ({
  src,
  alt,
  logo,
  title_fi,
  subtitle_fi,
  text_fi,
  title_en,
  subtitle_en,
  text_en,
}) => {
  const { lang, fi } = useContext(LanguageContext);

  const titleLimit_fi = getTextLimit(title_fi, 150);
  const subtitleLimit_fi = getTextLimit(subtitle_fi, 150);
  const textLimit_fi = getTextLimit(text_fi, 650);

  const titleLimit_en = getTextLimit(title_en, 150);
  const subtitleLimit_en = getTextLimit(subtitle_en, 150);
  const textLimit_en = getTextLimit(text_en, 650);

  return (
    <motion.div
      className="carousel__item--uraohjain_2"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <section className="carousel__item--uraohjain_2-header">
        <figure className="carousel__item--uraohjain_2-figure">
          <img
            src={logo}
            alt="uraohjain logo"
            className="carousel__item--uraohjain_2-logo"
          />
        </figure>
        <h2 className="carousel__item--uraohjain_2-title">
          {lang === fi ? titleLimit_fi : titleLimit_en}
        </h2>
      </section>
      <section className="carousel__item--uraohjain_2-content">
        <div className="carousel__item--uraohjain_2-text">
          <h3>{lang === fi ? subtitleLimit_fi : subtitleLimit_en}</h3>
          <p>{lang === fi ? textLimit_fi : textLimit_en}</p>
        </div>
        <figure className="carousel__item--uraohjain_2-figure">
          <img src={src} alt={alt} className="carousel__item--uraohjain_2-img" />
        </figure>
      </section>
      <div className="carousel__item--uraohjain_2-bar"></div>
    </motion.div>
  );
};

Uraohjain_2.propTypes = {
  title_fi: PropTypes.string.isRequired,
  subtitle_fi: PropTypes.string.isRequired,
  text_fi: PropTypes.string.isRequired,
  title_en: PropTypes.string.isRequired,
  subtitle_en: PropTypes.string.isRequired,
  text_en: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Uraohjain_2;
