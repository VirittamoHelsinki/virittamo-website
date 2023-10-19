import { useContext } from "react";
import { type Lang, LanguageContext } from "../../utils/langContext";
import { PinkBar } from "../../components/PinkBar";
import { ProjectCarousel } from "../../components/Carousel-project/ProjectCarousel";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../utils/getStrapiData";

export function ProjectsPage() {
  // Get the language data from the context
  const { lang, fi } = useContext(LanguageContext) as Lang;

  const { isLoading: isProjectsFiLoading, data: projectsFiData } = useQuery({
    queryKey: ["projectsFiData"],
    queryFn: () =>
      getMe("http://localhost:1337/api/project-page?locale=fi&populate=*"),
  });

  const { isLoading: isProjectsEnLoading, data: projectsEnData } = useQuery({
    queryKey: ["projectsEnData"],
    queryFn: () =>
      getMe("http://localhost:1337/api/project-page?locale=en&populate=*"),
  });

  const { isLoading: isProjectFiLoading, data: projectFiData } = useQuery({
    queryKey: ["projectFiData"],
    queryFn: () =>
      getMe(
        "http://localhost:1337/api/project-page?locale=fi&populate[projects][populate][project][populate]=*",
      ),
  });

  const { isLoading: isProjectEnLoading, data: projectEnData } = useQuery({
    queryKey: ["projectEnData"],
    queryFn: () =>
      getMe(
        "http://localhost:1337/api/project-page?locale=en&populate[projects][populate][project][populate]=*",
      ),
  });

  const projectsData = lang === fi ? projectsFiData : projectsEnData;
  const isProjectsLoading =
    lang === fi ? isProjectsFiLoading : isProjectsEnLoading;

  const projectData = lang === fi ? projectFiData : projectEnData;
  const isProjectLoading =
    lang === fi ? isProjectFiLoading : isProjectEnLoading;

  if (isProjectsLoading || !projectsData || isProjectLoading || !projectData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="projectPage__wrapper">
      <div className="projectPage__introduction">
        <h2>{projectsData.data.attributes.heading}</h2>
        <p>{projectsData.data.attributes.description}</p>
      </div>
      <PinkBar />
      <section className="projectPage__teams--container">
        {projectData.data.attributes.projects.map((item, index) => (
          <ProjectCarousel
            key={index}
            name={item.project_team}
            description={item.call_to_action}
            slides={item.project}
          />
        ))}
      </section>
      <PinkBar />
    </main>
  );
}
