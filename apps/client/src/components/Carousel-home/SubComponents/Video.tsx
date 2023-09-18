import { motion } from "framer-motion";

export function Video({
    src,
    onPlayStatusChange
    }: {
        src: string,
        onPlayStatusChange: (value: boolean)=> void
        }) {
  const handlePlay = () => {
    onPlayStatusChange(true);
  };

  const handlePause = () => {
    onPlayStatusChange(false);
  };

  return (
    <motion.video
      className="carousel__item--video"
      src={src}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    />
  );
}
