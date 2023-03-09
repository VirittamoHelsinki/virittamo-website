import { ProjectCarousel } from "./ProjectCarousel/ProjectCarousel";

import { media_text } from "./Content";
import { ict_text } from "./Content";
import { softa_text } from "./Content";

import { media_slides } from "./Content";
import { ict_slides } from "./Content";
import { softa_slides } from "./Content";

export const TeamProjects = () => {
  return (
    <section className="projectPage__teams--container">
      <ProjectCarousel text={media_text} slides={media_slides} />
      <ProjectCarousel text={ict_text} slides={ict_slides} />
      <ProjectCarousel text={softa_text} slides={softa_slides} />
    </section>
  );
};
