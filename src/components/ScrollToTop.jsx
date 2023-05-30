import { SlArrowUpCircle } from "react-icons/sl";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      if (scrollY > innerHeight / 2) {
        setShowArrow(true);
        console.log("At Half the screen");
      } else {
        setShowArrow(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const arrowStyle = {
    borderRadius: "50%",
    background: "white",
    position: "fixed",
    cursor: "pointer",
    color: "black",
    zIndex: "1",
    height: "35px",
    width: "35px",
    bottom: "75px",
    right: "75px",
    ...(isSmallScreen && { left: "50%", transform: "translateX(-50%)" }),
  };

  return showArrow ? (
    <motion.button
      className="scrollToTop__wrapper"
      style={arrowStyle}
      onClick={handleClick}
      initial={{ opacity: 0, ease: "easeInOut" }}
      whileInView={{ opacity: 1, ease: "easeInOut" }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <SlArrowUpCircle style={{ width: "100%", height: "100%" }} />
    </motion.button>
  ) : null;
};
