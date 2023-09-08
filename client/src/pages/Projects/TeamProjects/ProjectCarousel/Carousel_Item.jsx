import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "../../../../components/Image";

export const Carousel_Item = ({
  _id,
  team,
  img_src_small,
  client_name,
  project_title,
  completion_year,
}) => {
  return (
    <div className="projectPage__teams--carousel-item">
      <div className="carousel-img-container">
        <Link to={`/projects/${team}/${_id}`}>
          <Image src={img_src_small} alt="temp image" />
        </Link>
      </div>
      <div className="carousel-title-container">
        <h3>{project_title}</h3>
        <h3 id="carousel-title-container-client">{client_name}</h3>
      </div>
      <p>{completion_year}</p>
    </div>
  );
};

Carousel_Item.propTypes = {
  _id: PropTypes.number,
  team: PropTypes.string,
  img_src_small: PropTypes.string.isRequired,
  client_name: PropTypes.string.isRequired,
  project_title: PropTypes.string.isRequired,
  completion_year: PropTypes.string.isRequired,
};
