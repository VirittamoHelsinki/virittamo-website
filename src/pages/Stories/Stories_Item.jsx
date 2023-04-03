import PropTypes from "prop-types";

import { PinkBar } from "../../components/PinkBar";

export const Stories_Item = ({ alt, img_src, full_name, story_text }) => {
  return (
    <li className="storiesPage__list--item">
      <img src={img_src} alt={alt} />
      <h3>{full_name}</h3>
      <div className="storiesPage__list--item-text">
        {story_text.map((text_part, index) => (
          <p key={index}>{text_part}</p>
        ))}
      </div>
      <PinkBar />
    </li>
  );
};

Stories_Item.propTypes = {
  alt: PropTypes.string,
  img_src: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  story_text: PropTypes.array.isRequired,
};
