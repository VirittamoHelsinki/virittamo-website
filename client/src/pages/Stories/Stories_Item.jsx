import PropTypes from "prop-types";
import { Image } from "../../components/Image";

export const Stories_Item = ({
  alt,
  img_src,
  full_name,
  story_text,
  job_title,
}) => {
  return (
    <div className="storiesPage__featuredStory--item">
      <Image src={img_src} alt={alt} />
      <div className="storiesPage__featuredStory--item-title">
        <h3>{full_name}</h3>
        <h4>{job_title}</h4>
      </div>
      <div className="storiesPage__featuredStory--item-text">
        {story_text.map((text_part, index) => (
          <p key={index}>{text_part}</p>
        ))}
      </div>
    </div>
  );
};

Stories_Item.propTypes = {
  alt: PropTypes.string,
  img_src: PropTypes.string.isRequired,
  full_name: PropTypes.string.isRequired,
  job_title: PropTypes.string.isRequired,
  story_text: PropTypes.array.isRequired,
};
