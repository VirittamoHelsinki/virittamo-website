import PropTypes from "prop-types";

import { PinkBar } from "../../components/PinkBar";
import applyImg from "./assets/apply.jpeg";

export function Apply({ apply }) {
  return (
    <section className="homePage__apply">
      <h2>{apply.title}</h2>
      <p>{apply.description}</p>
      <div className="homePage__apply--container">
        <ul className="homePage__apply--container-list">
          {apply.qualifications.map((item, index) => (
            <li key={index} className="homePage__apply--container-list-item">
             <ul className="unset-list"><li className="heading">{item.title}</li></ul>
              <ul className="list-style">
                {item.desc.map((des, index) => (
                  <li key={index}>{des}</li>
                ))}
              </ul>
            </li>
          ))}
          <p>{apply.qual_desc}</p>
        </ul>
        <figure>
          <img src={applyImg} alt="Apply" />
        </figure>
      </div>
      <PinkBar />
    </section>
  );
}

Apply.propTypes = {
  apply: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    qualifications: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
    ).isRequired,
    qual_desc: PropTypes.string.isRequired,
  }).isRequired,
};
