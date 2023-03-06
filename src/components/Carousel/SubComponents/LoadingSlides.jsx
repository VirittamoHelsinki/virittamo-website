import { motion } from "framer-motion";

export const LoadingSlides = () => {
  return (
    <motion.div
      className="carousel__item--loading"
      layout
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <p>Loading slides..</p>
    </motion.div>
  );
};
