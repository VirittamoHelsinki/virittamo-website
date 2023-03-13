import { ProjectCarousel } from "./ProjectCarousel/ProjectCarousel";

import { text } from "./Content";

import { slides } from "./Content";

export const TeamProjects = () => {
  return (
    <section className="projectPage__teams--container">
      <ProjectCarousel text={text.media} slides={slides.media} />
      <ProjectCarousel text={text.ict} slides={slides.ict} />
      <ProjectCarousel text={text.softa} slides={slides.softa} />
    </section>
  );
};
