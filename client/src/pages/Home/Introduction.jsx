import PropTypes from "prop-types";

import { PinkBar } from "../../components/PinkBar";

export const Introduction = ({ title, text }) => {
  return (
    <section className="homePage__introduction">
      <h1>{title}</h1>
      <p>{text}</p>
      <PinkBar />
    </section>
  );
};

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
