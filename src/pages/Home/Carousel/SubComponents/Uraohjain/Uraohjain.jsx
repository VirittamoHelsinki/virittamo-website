import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Uraohjain = ({
  bg_image,
  alt,
  logo,
  eu_logo,
  laurea_logo,
  metropolia_logo,
  stadinao_logo,
}) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      alt={alt}
      className="carousel__item--uraohjain"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <img
        src={logo}
        alt="uraohjain logo"
        className="carousel__item--uraohjain-logo"
      />
      <div className="carousel__item--bottom-row-logos">
        <img
          src={stadinao_logo}
          alt="stadin ao logo"
          className="carousel__item--stadinao-logo"
        />
        <img
          src={laurea_logo}
          alt="laurea logo"
          className="carousel__item--laurea-logo"
        />
        <img
          src={metropolia_logo}
          alt="metropolia logo"
          className="carousel__item--metropolia-logo"
        />
        <img src={eu_logo} alt="eu logo" className="carousel__item--eu-logo" />
      </div>
    </motion.div>
  );
};

Uraohjain.propTypes = {
  logo: PropTypes.string.isRequired,
  stadinao_logo: PropTypes.string.isRequired,
  laurea_logo: PropTypes.string.isRequired,
  metropolia_logo: PropTypes.string.isRequired,
  eu_logo: PropTypes.string.isRequired,
  bg_image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Uraohjain;
