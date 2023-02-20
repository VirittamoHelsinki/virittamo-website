import PropTypes from "prop-types";

export const Text = (props) => {
  return (
    <div className="carousel--item-text">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
