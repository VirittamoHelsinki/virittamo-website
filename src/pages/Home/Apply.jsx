import PropTypes from "prop-types";

export const Apply = ({ apply }) => {
  const { title, description, qualifications } = apply;
  return (
    <section className="homePage__apply">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="homePage__apply--container">
        <ul className="homePage__apply--container-list">
          {qualifications.map((item, index) => (
            <div key={index} className="homePage__apply--container-list-item">
              <h3>{item.title}</h3>
              <li>&#9656; {item.desc}</li>
            </div>
          ))}
        </ul>
      </div>
      <div id="pink-bar"></div>
    </section>
  );
};

Apply.propTypes = {
  apply: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    qualifications: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
