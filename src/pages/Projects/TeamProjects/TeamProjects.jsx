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
  {
    component: Carousel_Item,
    src: tempIMG,
    alt: "placeholder image",
    link: "",
  },
  {
    component: Carousel_Item,
    src: tempIMG,
    alt: "placeholder image",
    link: "",
  },
];

export const TeamProjects = () => {
  return (
    <section className="projectPage__teams--container">
      <h2>Lorem ipsum</h2>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Qui quas, dolorum quae in amet suscipit? At perspiciatis sapiente
          rerum quam.
        </p>
      </div>
      <ProjectCarousel slides={slides} />
    </section>
  );
};
