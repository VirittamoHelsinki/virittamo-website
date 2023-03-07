import { motion } from "framer-motion";

const Instagram = () => {
  return (
    <motion.iframe
      className="carousel__item--instagram"
      src="https://www.instagram.com/virittamohelsinki/embed/"
      width="100%"
      height="100%"
      scrolling="no"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    ></motion.iframe>
  );
};

export default Instagram;
