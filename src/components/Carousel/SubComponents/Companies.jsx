// import context
import { LanguageContext } from "../../../langLocal/context/langContext";
import { useContext } from "react";

const Companies = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang;

  return (
    <div className="carousel__item--companies">
      <h3>{home_page.employed_to_text}</h3>
      <ul className="carousel__item--companies-list">
        {home_page.companies_list.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Companies;
