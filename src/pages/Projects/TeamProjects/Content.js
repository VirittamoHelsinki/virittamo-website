import { Carousel_Item } from "./ProjectCarousel/Carousel_Item";

import tempIMG from "../../Home/assets/teams-section-ict.webp";
import Pilvipalvelu from "../assets/carousel/ICT_PILVIPALVELU.webp";
import Virtualisointi from "../assets/carousel/ICT_VIRTUALISOINTIPROJEKTI.webp";
import Tietoliikenne from "../assets/carousel/ICT_TIETOLIIKENNEKAAPPI.webp";

export const media_text = [
  {
    title: "Media",
    description: "Etsitkö media-alan osaajaa projektiisi? Ota yhteyttä!",
    contact: "Kai Rintamaa / Puh: +358 40 334 8943 / kai.rintamaa@edu.hel.f",
  },
];

export const media_slides = [
  {
    component: Carousel_Item,
    client_name: "Client Name",
    project_title: "Project Name",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 2",
    project_title: "Project Name 2",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 3",
    project_title: "Project Name 3",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
];

export const ict_text = [
  {
    title: "ICT",
    description:
      "Meiltä löydät osaavia ICT-ammattilaisia monenlaisiin toimeksiantoihin. Ota yhteyttä!",
    contact: "Ari Tuomi / Puh: 09 310 27571 / ari.tuomi@edu.hel.f",
  },
];

export const ict_slides = [
  {
    component: Carousel_Item,
    client_name: "Virittämö",
    project_title: "Pilvipalvelu",
    completion_year: "2023",
    img_src: Pilvipalvelu,
    alt: "Pilvipalvelu project image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Virittämö",
    project_title: "Virtualisointiprojekti",
    completion_year: "2023",
    img_src: Virtualisointi,
    alt: "Virtualisointi project image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Virittämö",
    project_title: "Tietoliikennekaapin siistiminen",
    completion_year: "2023",
    img_src: Tietoliikenne,
    alt: "Tietoliikenne project image",
    link: "https://virittamohelsinki.fi/",
  },
];

export const softa_text = [
  {
    title: "Softa",
    description: "Tarvitsetko Softa-puolen osaajaa projektiisi? Ota yhteyttä!",
    contact: "Joonas Pitkonen / Puh. 09 310 27555 / joonas.pitkonen@edu.hel.f",
  },
];

export const softa_slides = [
  {
    component: Carousel_Item,
    client_name: "Client Name",
    project_title: "Project Name",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 2",
    project_title: "Project Name 2",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 3",
    project_title: "Project Name 3",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
  },
];
