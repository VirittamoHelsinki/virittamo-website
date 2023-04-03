import { LanguageContext } from "../../../../langLocal/context/langContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const Companies = () => {
  const { lang } = useContext(LanguageContext);

  const { companies_list, employed_to_text } = lang.home_page;

  const companiesByLetter = companies_list.reduce((result, company) => {
    const firstLetter = company.charAt(0).toUpperCase();
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(company);
    return result;
  }, {});

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
      <h3>{employed_to_text}</h3>
      <ul className="carousel__item--companies-list">
        {Object.entries(companiesByLetter).map(([letter, companies]) => (
          <li key={letter}>
            <h4>{letter}</h4>
            <ul>
              {companies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Companies;
