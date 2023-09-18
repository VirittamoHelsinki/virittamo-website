import { motion } from "framer-motion";

export function Image({ src, alt }: {src: string, alt: string}) {
  return (
    <motion.img
      className="carousel__item--image"
      src={src}
      alt={alt}
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    />
  );
};
