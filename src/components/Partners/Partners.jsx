import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, useEffect } from "react";

import Helsinki from "./assets/helsinki-logo.webp";
import Metropolia from "./assets/metropolia-logo.webp";
import Ohjaamo from "./assets/ohjaamo-logo.webp";
import Laurea from "./assets/laurea-logo.webp";
import TyöPalv from "./assets/työpalv-logo.webp";
import Europe from "./assets/eu-logo.webp";

export const Partners = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang;

  // preloads images
  useEffect(() => {
    const images = [Helsinki, Metropolia, Ohjaamo, Laurea, TyöPalv, Europe];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const partner_images = [
    Helsinki,
    Metropolia,
    Ohjaamo,
    Laurea,
    TyöPalv,
    Europe,
  ];

  return (
    <section className="homePage__partners">
      <h2>{home_page.partners}</h2>
      <div className="homePage__partners--container">
        <div className="homePage__partners--container-images">
          {partner_images.map((item, index) => (
            <img
              src={item}
              key={index}
              className="partner-image"
              alt="partner image"
            ></img>
          ))}
        </div>
      </div>
    </section>
  );
};
