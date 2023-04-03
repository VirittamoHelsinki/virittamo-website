import PropTypes from "prop-types";

export const Introduction = ({ title, text }) => {
  return (
    <section className="homePage__introduction">
      <h1>{title}</h1>
      <p>{text}</p>
      <div id="pink-bar"></div>
    </section>
  );
};

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
