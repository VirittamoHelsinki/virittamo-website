import { Companies } from "./SubComponents/Companies";
import { Image } from "./SubComponents/Image";
import { Feedback } from "./SubComponents/Feedback";
import { Uraohjain } from "./SubComponents/Uraohjain";
import { Uraohjain_2 } from "./SubComponents/Uraohjain_2";

import Image_1 from "../../assets/carousel/carousel-img-1.webp";
import Image_2 from "../../assets/carousel/carousel-img-2.webp";
import Uraohjain_Img from "../../assets/carousel/uraohjain-1.webp";
import Uraohjain_Logo from "../../assets/carousel/uraohjain-logo.webp";
import EU_Logo from "../../assets/carousel/eu_funding.png";
import Laurea_Logo from "../../assets/carousel/laurea.png";
import Metropolia_Logo from "../../assets/carousel/metropolia.png";
import Stadin_AO_Logo from "../../assets/carousel/stadinao.png";
import Uraohjain_Img_2 from "../../assets/carousel/uraohjain-2.webp";

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
    title_fi: "URAOHJAIN+",
    title_en: "CAREERDRIVER+",
    subtitle_fi: "Kirkasta uratavoitteesi ja vahvista osaamistasi",
    subtitle_en: "Clarify your career goals and improve your skills",
    text_fi: `Uraohjain+ on palvelu, joka tukee työpaikan saamista.\nPalvelussa voi:\n\n• Täydentää osaamista\n• Suunnitella työuraa\n• Oppia markkinoimaan osaamista\n• Vahvistaa hyvinvointia\n\nUraohjain+ palvelussa voi suorittaa ICT-, ohjelmistokehitys- ja media-alan täydentäviä opintoja. Opinnot kestävät 3-6 kuukautta. Laurea ammattikorkeakoulu ja Metropolia ammattikorkeakoulu järjestävät opinnot.`,
    text_en: `Careerdriver+ is a service that supports you in getting a job.\nIn the service you can:\n\n• Improve your skills\n• Plan your career\n• Learn to market your skills\n• Strengthen your well-being\n\nThe service offers complementary studies in ICT, software development and media. The studies last 3-6 months. The studies are organized by Laurea University of Applied Sciences and Metropolia University of Applied Sciences.`,
    src: Uraohjain_Img_2,
    alt: "Uraohjain image taken by Jesse Ahonen",
    logo: Uraohjain_Logo,
  },
];
