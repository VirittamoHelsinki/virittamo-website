import { useContext } from "react";
import { motion } from "framer-motion";
import bg_image from "../../../assets/carousel/carousel-feedback-bg.webp";
import { LanguageContext } from "../../../utils/langContext";

export function Feedback({
  number,
  scale_fi,
  scale_en,
  question_fi,
  question_en,
}: {
  number: number;
  scale_fi: string;
  scale_en: string;
  question_fi: string;
  question_en: string;
}) {
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
}
