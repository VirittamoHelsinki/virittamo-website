import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Carousel_Item = ({
  _id,
  team,
  img_src,
  client_name,
  project_title,
  completion_year,
}) => {
  return (
    <div className="projectPage__teams--carousel-item">
      <div className="carousel-img-container">
        <Link to={`/projects/${team}/${_id}`}>
          <img src={img_src} alt="temp image" />
        </Link>
      </div>
      <div className="carousel-title-container">
        <h3>{client_name}</h3>
        <h3>{project_title}</h3>
      </div>
      <p>{completion_year}</p>
    </div>
  );
};

Carousel_Item.propTypes = {
  _id: PropTypes.number,
  team: PropTypes.string,
  img_src: PropTypes.string.isRequired,
  client_name: PropTypes.string.isRequired,
  project_title: PropTypes.string.isRequired,
  completion_year: PropTypes.string.isRequired,
};
