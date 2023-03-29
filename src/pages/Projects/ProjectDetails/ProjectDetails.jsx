import { useContext, useEffect } from "react";

import { LanguageContext } from "../../../langLocal/context/langContext";
import { useParams } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";

import Loading from "../../Loading/Loading";

const ProjectDetails = () => {
  const { id, team } = useParams();
  const { lang } = useContext(LanguageContext);

  const projects_page = lang.projects_page;
  const project = projects_page.carousels.slides[team]?.find(
    (item) => item._id == id
  );

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
        <div id="pink-bar"></div>
        <Footer />
      </main>
    </Suspense>
  );
};

export default ProjectDetails;
