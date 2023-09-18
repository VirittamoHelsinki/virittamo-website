import { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../../utils/langContext";

function getTextLimit(text: string, length: number) {
  return text.length > length ? `${text.substring(0, length)}..` : text;
};

export function Uraohjain_2({
  src,
  alt,
  logo,
  title_fi,
  subtitle_fi,
  text_fi,
  title_en,
  subtitle_en,
  text_en,
}) {
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
        <img
          src={logo}
          alt="uraohjain logo"
          className="carousel__item--uraohjain_2-logo"
        />
        <h2 className="carousel__item--uraohjain_2-title">
          {lang === fi ? titleLimit_fi : titleLimit_en}
        </h2>
      </section>
      <section className="carousel__item--uraohjain_2-content">
        <div className="carousel__item--uraohjain_2-text">
          <h3>{lang === fi ? subtitleLimit_fi : subtitleLimit_en}</h3>
          <p>{lang === fi ? textLimit_fi : textLimit_en}</p>
        </div>
        <img src={src} alt={alt} className="carousel__item--uraohjain_2-img" />
      </section>
      <div className="carousel__item--uraohjain_2-bar"></div>
    </motion.div>
  );
};
