import { motion } from "framer-motion";
import { useEffect } from "react";

export function Instagram() {
  const setCookieAttributes = () => {
    document.cookie = "mid=value; SameSite=None; Secure";
    document.cookie = "ig_did=value; SameSite=None; Secure";
    document.cookie = "csrftoken=value; SameSite=None; Secure";
  };

  useEffect(() => {
    const handleLoad = () => {
      if (navigator.userAgentData) {
        const brands = navigator.userAgentData.brands;
        if (brands.some((brand) => brand.brand === "Google Chrome")) {
          setCookieAttributes();
        }
      } else {
        if (isChrome()) {
          setCookieAttributes();
        }
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const isChrome = () => {
    return (
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    );
  };

  return (
    <motion.iframe
      className="carousel__item--instagram"
      src="https://www.instagram.com/virittamohelsinki/embed/"
      width="100%"
      height="100%"
      scrolling="no"
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    ></motion.iframe>
  );
}
