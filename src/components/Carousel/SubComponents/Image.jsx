import PropTypes from "prop-types";

export const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt} className="carousel--item-image"></img>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
