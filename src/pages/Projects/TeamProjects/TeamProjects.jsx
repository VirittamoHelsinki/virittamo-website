import { LanguageContext } from "../../../langLocal/context/langContext";
import { useContext } from "react";

import { ProjectCarousel } from "./ProjectCarousel/ProjectCarousel";

export const TeamProjects = () => {
  const { lang } = useContext(LanguageContext);

  const projects_page = lang.projects_page;

  const projectCarousels = [
    {
      text: projects_page.carousels.text.media,
      slides: projects_page.carousels.slides.media,
    },
    {
      text: projects_page.carousels.text.ict,
      slides: projects_page.carousels.slides.ict,
    },
    {
      text: projects_page.carousels.text.softa,
      slides: projects_page.carousels.slides.softa,
    },
  ];

  return (
    <section className="projectPage__teams--container">
      {projectCarousels.map((item, index) => (
        <ProjectCarousel key={index} text={item.text} slides={item.slides} />
      ))}
    </section>
  );
};
