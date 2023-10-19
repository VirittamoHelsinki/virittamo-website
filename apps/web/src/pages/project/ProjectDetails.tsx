import { useContext } from "react";
import { type Lang, LanguageContext } from "../../utils/langContext";
import { useParams } from "react-router-dom";
import { PinkBar } from "../../components/PinkBar";
import { Image } from "../../components/Image";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../utils/getStrapiData";

export function ProjectDetails() {
  // Extract id and team from URL params
  const { id, team } = useParams();

  // Get language data from context
  const { lang, fi } = useContext(LanguageContext) as Lang;
  const { isLoading: isProjectFiLoading, data: projectFiData } = useQuery({
    queryKey: ["projectFiData"],
    queryFn: () =>
      getMe(
        `http://localhost:1337/api/project-page?locale=fi&populate[projects][populate][project][populate]=*`,
      ),
  });
  const { isLoading: isProjectEnLoading, data: projectEnData } = useQuery({
    queryKey: ["projectEnData"],
    queryFn: () =>
      getMe(
        `http://localhost:1337/api/project-page?locale=en&populate[projects][populate][project][populate]=*`,
      ),
  });

  const projectData = lang === fi ? projectFiData : projectEnData;
  const isProjectLoading =
    lang === fi ? isProjectFiLoading : isProjectEnLoading;

  if (isProjectLoading || !projectData) {
    return <div>Loading...</div>;
  }

  const prj =
    projectData.data.attributes.projects[
      team === "media" ? 0 : team === "ict" ? 1 : 2
    ].project[Number(id) - 1];

  return (
    <main className="flex w-full max-w-[75ch] flex-col items-center justify-center gap-10">
      <header className="flex w-full flex-col pt-5">
        <h1 className="text-7xl">{prj.title}</h1>
        <p className="text-lg">
          {prj.description} <span>{prj.date}</span>
        </p>
        <figure className="">
          <Image
            src={prj.image.data.attributes.url}
            alt={prj.description}
            className="h-full max-h-[300px] w-full object-cover"
          />
        </figure>
      </header>
      <p className="">{prj.content}</p>
      <PinkBar />
    </main>
  );
}
