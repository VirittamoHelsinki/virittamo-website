// Importing LanguageContext and useContext hooks from React
import { LanguageContext } from "../../../utils/langContext";
import { useContext } from "react";

// Importing the ProjectCarousel component
import { ProjectCarousel } from "./ProjectCarousel/ProjectCarousel";

export const TeamProjects = () => {
  // Accessing the language context using useContext hook
  const { lang } = useContext(LanguageContext);

  // Extracting the projects_page data from the language context
  const { carousels } = lang.projects_page;

  // Creating an array of project carousels
  const projectCarousels = [
    {
      text: carousels.text.media,
      slides: carousels.slides.media,
    },
    {
      text: carousels.text.ict,
      slides: carousels.slides.ict,
    },
    {
      text: carousels.text.softa,
      slides: carousels.slides.softa,
    },
  ];

  // Rendering the section with ProjectCarousel component for each projectCarousel item
  return (
    <section className="projectPage__teams--container">
      {projectCarousels.map((item, index) => (
        <ProjectCarousel key={index} text={item.text} slides={item.slides} />
      ))}
    </section>
  );
};
