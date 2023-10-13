import { useContext } from "react";
import { type Lang, LanguageContext } from "../../utils/langContext";

import { PinkBar } from "../../components/PinkBar";
import { TeamProjects } from "./TeamProjects/TeamProjects";

export function ProjectsPage() {
  // Get the language data from the context
  const { lang } = useContext(LanguageContext) as Lang;

  // Extract the title and description from the language data
  const { title, desc } = lang.projects_page;

  return (
    <main className="projectPage__wrapper">
      <div className="projectPage__introduction">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <PinkBar />
      <TeamProjects />
      <PinkBar />
    </main>
  );
}
