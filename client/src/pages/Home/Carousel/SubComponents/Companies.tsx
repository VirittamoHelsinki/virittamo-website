// Importing required modules
import { LanguageContext } from "../../../../utils/langContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const Companies = () => {
  // Accessing language context using 'useContext' hook
  const { lang } = useContext(LanguageContext);

  // Extracting required properties from language context
  const { companies_list, employed_to_text } = lang.home_page;

  // Grouping companies by first letter using 'reduce' function
  const companiesByLetter = companies_list.reduce((result, company) => {
    const firstLetter = company.charAt(0).toUpperCase();
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(company);
    return result;
  }, {});

  // Returning a motion component that renders the list of companies
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
        {/* Iterating over grouped companies and rendering them */}
        {Object.entries(companiesByLetter).map(([letter, companies]) => (
          <li key={letter} className="carousel__item--companies-list-item">
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
