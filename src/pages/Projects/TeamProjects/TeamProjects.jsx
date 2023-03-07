import { ProjectCarousel } from "./ProjectCarousel/ProjectCarousel";
import { Carousel_Item } from "./ProjectCarousel/Carousel_Item";

import tempIMG from "../../Home/assets/teams-section-ict.webp";

const slides = [
  {
    component: Carousel_Item,
    src: tempIMG,
    alt: "placeholder image",
    link: "",
  },
];

export const TeamProjects = () => {
  return (
    <section className="projectPage__team--container">
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas,
        dolorum quae in amet suscipit? At perspiciatis sapiente rerum quam.
      </p>
      <ProjectCarousel slides={slides} />
    </section>
  );
};
