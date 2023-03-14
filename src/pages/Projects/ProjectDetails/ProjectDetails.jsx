import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "../../../components/Header/Header";
import { Partners } from "../../../components/Partners/Partners";
import { Footer } from "../../../components/Footer/Footer";

import Loading from "../../Loading/Loading";

import { slides } from "../TeamProjects/Content";

const ProjectDetails = () => {
  const { id, team } = useParams();

  const project = slides[team].find((item) => item._id == id);

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
          <h1>{project.client_name}</h1>
          <h2>{project.project_title}</h2>
          <p>{project.completion_year}</p>
        </section>
        <section className="projectDetails__image--container">
          <img src={project.img_src} alt={project.alt} />
          <p>{project.description}</p>
        </section>
        <div id="pink-bar"></div>
        <Partners />
        <Footer />
      </main>
    </Suspense>
  );
};

export default ProjectDetails;
