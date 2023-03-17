// import context
import { LanguageContext } from "../../../../langLocal/context/langContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const Companies = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang[2];

  return (
    <motion.div
      className="carousel__item--companies"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <h3>{home_page.employed_to_text}</h3>
      <ul className="carousel__item--companies-list">
        {home_page.companies_list.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Companies;
