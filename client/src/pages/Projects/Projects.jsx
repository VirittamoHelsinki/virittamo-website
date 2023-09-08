// Import the language context and useContext hook from React
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// Import the Loading component
import Loading from "../../components/Loading/Loading";

// Import the Header, PinkBar, and Footer components
import { PinkBar } from "../../components/PinkBar";

// Import the TeamProjects component
import { TeamProjects } from "./TeamProjects/TeamProjects";

const Projects = () => {
  // Get the language data from the context
  const { lang } = useContext(LanguageContext);

  // Extract the title and description from the language data
  const { title, desc } = lang.projects_page;

  return (
    <Suspense fallback={<Loading />}>
      <main className="projectPage__wrapper">
        <section className="projectPage__introduction">
          <h2>{title}</h2>
          <p>{desc}</p>
        </section>
        <PinkBar />
        <TeamProjects />
        <PinkBar />
      </main>
    </Suspense>
  );
};

export default Projects;
