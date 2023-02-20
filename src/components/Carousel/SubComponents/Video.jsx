import PropTypes from "prop-types";

export const Video = (props) => {
  return (
    <video src={props.src} controls className="carousel--item-image"></video>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
};
