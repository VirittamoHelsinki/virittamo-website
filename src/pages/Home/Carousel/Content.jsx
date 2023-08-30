import Companies from "./SubComponents/Companies/Companies";
// import Instagram from "./SubComponents/Instagram";
// import Article from "./SubComponents/Article";
// import Video from "./SubComponents/Video";
import Image from "./SubComponents/Image/Image";
import Feedback from "./SubComponents/Feedback/Feedback";
import Uraohjain from "./SubComponents/Uraohjain/Uraohjain";
import Uraohjain_2 from "./SubComponents/Uraohjain/Uraohjain_2";

// import Mock_Video from "../../Home/assets/carousel/mock-video.mp4";
import Image_1 from "../../Home/assets/carousel/carousel-img-1.webp";
import Image_2 from "../../Home/assets/carousel/carousel-img-2.webp";

import Uraohjain_Img from "../../Home/assets/carousel/uraohjain-1.webp";
import Uraohjain_Logo from "../../Home/assets/carousel/uraohjain-logo.webp";
import EU_Logo from "../../Home/assets/carousel/eu_funding.png";
import Laurea_Logo from "../../Home/assets/carousel/laurea.png";
import Metropolia_Logo from "../../Home/assets/carousel/metropolia.png";
import Stadin_AO_Logo from "../../Home/assets/carousel/stadinao.png";

import Uraohjain_Img_2 from "../../Home/assets/carousel/uraohjain-2.webp";

export const slides = [
  {
    component: Feedback,
    number: 4.2,
    scale_fi: "(Asteikko 1—5)",
    scale_en: "(Scale 1—5)",
    question_fi:
      "Miten tyytyväinen olet Virittämö- jaksoosi kokonaisuudessaan?",
    question_en: "How satisfied were you with your time at Virittämö?",
  },
  {
    component: Image,
    src: Image_1,
    alt: "Image taken by Emilia Rautio",
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
    component: Uraohjain,
    bg_image: Uraohjain_Img,
    alt: "Uraohjain image taken by Jesse Ahonen",
    logo: Uraohjain_Logo,
    eu_logo: EU_Logo,
    laurea_logo: Laurea_Logo,
    metropolia_logo: Metropolia_Logo,
    stadinao_logo: Stadin_AO_Logo,
  },
  {
    component: Uraohjain_2,
    title_fi: "Hankkeen tavoite",
    title_en: "The goal of the project",
    subtitle_fi: "Kestävän työllistymisen malli",
    subtitle_en: "To create a new model of sustainable employment",
    text_fi:
      "Hanke keskittyy nuorten ja pitkäaikaistyöttömien työ- ja toimintakyvyn sekä työllistymisedellytysten vahvistamiseen. Hankkeella haastetaan työnhakijat, työnantajat, työllisyyspalvelut ja oppilaitokset yhdessä pohtimaan, kehittämään ja mallintamaan kestäviä työllisyysratkaisuja, joissa asiakkaan osaaminen ja työnantajan tarpeet aidosti kohtaavat ja työllistyminen helpottuu. Hankkeen tavoitteena on luoda uudenlainen kestävän työllistymisen malli.",
    text_en:
      "The project focuses on strengthening the work and functional capacity and employment conditions of young people and the long-term unemployed. The project challenges job seekers, employers, employment services, and educational institutions to jointly consider, develop and model sustainable employment solutions, where the customer's and the employer's needs truly meet and employment become easier. The project aims to create a new model for sustainable employment.",
    src: Uraohjain_Img_2,
    alt: "Uraohjain image taken by Jesse Ahonen",
    logo: Uraohjain_Logo,
  },
  /*
  {
    component: Video,
    src: Mock_Video,
    alt: "placeholder video",
  },
  */
  /*
  {
    component: Article,
    title_fi: "Testi otsikko Virittämö Artikkelille",
    title_en: "Test title for a Virittämö Article",
    text_fi:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit et obcaecati voluptatum eaque ipsam rerum quia possimus quidem saepe? Amet iste accusamus pariatur voluptatibus ad? Voluptate voluptatibus illum iure aliquam numquam quibusdam dignissimos assumenda autem pariatur itaque, accusamus asperiores ratione reprehenderit consequatur dolores sapiente deserunt sunt ducimus aliquid qui deleniti! Explicabo labore ipsum ducimus error vel alias libero repudiandae modi suscipit, iure officia, sint sapiente officiis cumque, minus ipsa aut? Vitae nulla similique pariatur beatae inventore blanditiis, omnis accusantium rem tempora ex fuga illo, suscipit totam culpa tempore odio non? Quaerat reiciendis tempora amet a nobis non, saepe aliquid.",
    text_en:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde fugit et obcaecati voluptatum eaque ipsam rerum quia possimus quidem saepe? Amet iste accusamus pariatur voluptatibus ad? Voluptate voluptatibus illum iure aliquam numquam quibusdam dignissimos assumenda autem pariatur itaque, accusamus asperiores ratione reprehenderit consequatur dolores sapiente deserunt sunt ducimus aliquid qui deleniti! Explicabo labore ipsum ducimus error vel alias libero repudiandae modi suscipit, iure officia, sint sapiente officiis cumque, minus ipsa aut? Vitae nulla similique pariatur beatae inventore blanditiis, omnis accusantium rem tempora ex fuga illo, suscipit totam culpa tempore odio non? Quaerat reiciendis tempora amet a nobis non, saepe aliquid.",
    bg_image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://virittamohelsinki.fi/",
  },
  */
  /*
  {
     component: Instagram,
  },
  */
];
