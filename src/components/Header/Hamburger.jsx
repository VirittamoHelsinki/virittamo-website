import PropTypes from "prop-types";

export const Hamburger = ({ onClick }) => {
  return (
    <svg
      viewBox="0 0 100 80"
      width="30"
      height="30"
      fill="#050505"
      onClick={onClick}
      id="header__hamburger"
    >
      <rect width="100" height="16"></rect>
      <rect y="30" width="100" height="16"></rect>
      <rect y="60" width="100" height="16"></rect>
    </svg>
  );
};

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};
