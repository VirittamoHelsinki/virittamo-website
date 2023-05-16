// Import necessary modules
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../../langLocal/context/langContext";
import { useParams } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "../../../components/Header/Header";
import { PinkBar } from "../../../components/PinkBar";
import { Footer } from "../../../components/Footer/Footer";
import Loading from "../../Loading/Loading";

const ProjectDetails = () => {
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
    <Suspense fallback={<Loading />}>
      <main className="projectDetails__wrapper">
        <Header />
        <section className="projectDetails__title">
          <h1>{project?.project_title}</h1>
          <h2 id="projectDetails__title--client">{project?.client_name}</h2>
          <p>{project?.completion_year}</p>
          <p id="projectDetails__title--desc">{project?.description}</p>
        </section>
        <section className="projectDetails__image--container">
          <img src={project?.img_src} alt={project?.alt} />
        </section>
        <PinkBar />
        <Footer />
      </main>
    </Suspense>
  );
};

export default ProjectDetails;
