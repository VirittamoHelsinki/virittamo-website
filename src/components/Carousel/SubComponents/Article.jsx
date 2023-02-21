import PropTypes from "prop-types";

const Article = ({ title, text, bg_image, link }) => {
  const titleLimit = title.length > 150 ? text.substring(0, 150) + ".." : title;
  const textLimit = text.length > 500 ? text.substring(0, 500) + ".." : text;

  return (
    <a
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="carousel__item--article"
      rel="noreferrer"
      target="_blank"
      href={link}
    >
      <div className="carousel__item--article-text">
        <h3>{titleLimit}</h3>
        <p>{textLimit}</p>
      </div>
    </a>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bg_image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Article;
