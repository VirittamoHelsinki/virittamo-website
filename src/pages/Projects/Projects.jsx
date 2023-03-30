// import context
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// import loading page to be used when page is loading
import Loading from "../Loading/Loading";

// import components
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import { TeamProjects } from "./TeamProjects/TeamProjects";

const Projects = () => {
  const { lang } = useContext(LanguageContext);

  const { title, desc } = lang.projects_page;

  return (
    <Suspense fallback={<Loading />}>
      <main className="projectPage__wrapper">
        <Header />
        <section className="projectPage__introduction">
          <h2>{title}</h2>
          <p>{desc}</p>
        </section>
        <div id="pink-bar"></div>
        <TeamProjects />
        <div id="pink-bar"></div>
        <Footer />
      </main>
    </Suspense>
  );
};

export default Projects;
