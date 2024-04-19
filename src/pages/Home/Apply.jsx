import PropTypes from "prop-types";

import { PinkBar } from "../../components/PinkBar";
import applyImg from "./assets/apply.jpeg";

export function Apply({ apply }) {
  return (
    <section className="homePage__apply">
      <h2>{apply.title}</h2>
      <p>{apply.description}<a className="large-link" href={apply.link}>{apply.linktext}</a></p>
      <div className="homePage__apply--container">
        {/* <ul className="homePage__apply--container-list">
          <p>{apply.qual_desc}</p>
        </ul> */}
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
    link: PropTypes.string.isRequired,
    linktext: PropTypes.string.isRequired,
    qualifications: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
    ).isRequired,
    qual_desc: PropTypes.string.isRequired,
  }).isRequired,
};
