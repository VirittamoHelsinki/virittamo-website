import PropTypes from "prop-types";
import { Background } from "./Background/Background";

export const Why = ({ title, employee, employeeImg, company, companyImg }) => {
  return (
    <section className="homePage__why">
      <Background />
      <h2>{title}</h2>
      <div className="homePage__why--containers">
        <div className="homePage__why--containers-item">
          <img
            id="employee-img"
            src={employeeImg}
            alt="Why choose Virittämö employee picture"
          />
          <h3>{employee.title}</h3>
          <ul className="homePage__why--containers-list">
            {employee.description.map((item, index) => (
              <li key={index}>&#9656; {item}</li>
            ))}
          </ul>
        </div>
        <div className="homePage__why--containers-item">
          <img
            id="company-img"
            src={companyImg}
            alt="Why choose Virittämö company picture"
          />
          <h3>{company.title}</h3>
          <ul className="homePage__why--containers-list">
            {company.description.map((item, index) => (
              <li key={index}>&#9656; {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

Why.propTypes = {
  title: PropTypes.string.isRequired,
  employee: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  employeeImg: PropTypes.string.isRequired,
  company: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  companyImg: PropTypes.string.isRequired,
};
