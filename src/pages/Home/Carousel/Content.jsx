import Companies from "./SubComponents/Companies";
// import Instagram from "./SubComponents/Instagram";
import Article from "./SubComponents/Article";
import Video from "./SubComponents/Video";
import Image from "./SubComponents/Image";
import Feedback from "./SubComponents/Feedback";

import Mock_Video from "../../Home/assets/carousel/mock-video.mp4";
import Image_1 from "../../Home/assets/carousel/carousel-img-1.webp";
import Image_2 from "../../Home/assets/carousel/carousel-img-2.webp";

export const slides = [
  {
    component: Feedback,
    number: 4.2,
    scale_fi: "(Asteikko 1-5)",
    scale_en: "(Spectrum 1-5)",
    question_fi:
      "Miten tyytyväinen olet Virittämö- jaksoosi kokonaisuudessaan?",
    question_en: "How satisfied were you with your time at Virittämö?",
  },
  {
    component: Video,
    src: Mock_Video,
    alt: "placeholder video",
  },
  {
    component: Companies,
  },
  {
    component: Image,
    src: Image_2,
    alt: "Image taken by Emilia Rautio",
  },
  {
    component: Article,
    title: "Test title for a Virittämö Article about stuff",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit et obcaecati voluptatum eaque ipsam rerum quia possimus quidem saepe? Amet iste accusamus pariatur voluptatibus ad? Voluptate voluptatibus illum iure aliquam numquam quibusdam dignissimos assumenda autem pariatur itaque, accusamus asperiores ratione reprehenderit consequatur dolores sapiente deserunt sunt ducimus aliquid qui deleniti! Explicabo labore ipsum ducimus error vel alias libero repudiandae modi suscipit, iure officia, sint sapiente officiis cumque, minus ipsa aut? Vitae nulla similique pariatur beatae inventore blanditiis, omnis accusantium rem tempora ex fuga illo, suscipit totam culpa tempore odio non? Quaerat reiciendis tempora amet a nobis non, saepe aliquid.",
    bg_image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://virittamohelsinki.fi/",
  },
  // {
  //   component: Instagram,
  // },
  {
    component: Image,
    src: Image_1,
    alt: "Image taken by Emilia Rautio",
  },
];
