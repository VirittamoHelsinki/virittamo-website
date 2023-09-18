// Import necessary modules
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../../utils/langContext";
import { useParams } from "react-router-dom";
import { PinkBar } from "../../../components/PinkBar";
import { Image } from "../../../components/Image";

export function ProjectDetails() {
  // Extract id and team from URL params
  const { id, team } = useParams();

  // Get language data from context
  const { lang } = useContext(LanguageContext);
  const projects_page = lang.projects_page;

  // Get project data using id and team
  const project = projects_page.carousels.slides[team]?.find(
    (item) => item._id == id
  );

  // Scroll to top of page on mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="projectDetails__wrapper">
      <section className="projectDetails__title">
        <h1>{project?.project_title}</h1>
        <h2 id="projectDetails__title--client">{project?.client_name}</h2>
        <p>{project?.completion_year}</p>
        <p id="projectDetails__title--desc">{project?.description}</p>
      </section>
      <section className="projectDetails__image--container">
        <Image src={project?.img_src} alt={project?.alt} />
      </section>
      <PinkBar />
    </main>
  );
}
