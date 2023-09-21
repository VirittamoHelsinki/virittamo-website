import { motion } from "framer-motion";

export function LoadingSlides() {
  return (
    <motion.div
      className="carousel__item--loading"
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <p>Loading slides..</p>
    </motion.div>
  );
}
