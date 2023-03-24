import PropTypes from "prop-types";

export const Stories_Item = ({ alt, img_src, full_name, story_text }) => {
  return (
    <li className="storiesPage__list--item">
      <img src={img_src} alt={alt} />
      <h2>Tarinoita</h2>
      <p>{full_name}</p>
      <div id="pink-bar"></div>
      <p>{story_text}</p>
    </li>
  );
};

Stories_Item.propTypes = {
  alt: PropTypes.string,
  img_src: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  story_text: PropTypes.string.isRequired,
};
