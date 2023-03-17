// import context
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// import loading page to be used when page is loading
import Loading from "../Loading/Loading";

// import components
import { Header } from "../../components/Header/Header";
import { Partners } from "../../components/Partners/Partners";
import { Footer } from "../../components/Footer/Footer";

import { TeamProjects } from "./TeamProjects/TeamProjects";

const Projects = () => {
  const { lang } = useContext(LanguageContext);

  const { projects_page } = lang[3];

  return (
    <Suspense fallback={<Loading />}>
      <main className="projectPage__wrapper">
        <Header />
        <section className="projectPage__introduction">
          <h2>{projects_page.projects_title}</h2>
          <p>{projects_page.projects_desc}</p>
        </section>
        <TeamProjects />
        <Partners />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Projects;
