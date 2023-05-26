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
  },
  {
    component: Uraohjain_2,
    title_fi: "Hankkeen tavoite",
    title_en: "Hankkeen tavoite",
    subtitle_fi: "Kestävän työllistymisen malli",
    subtitle_en: "Kestävän työllistymisen malli",
    text_fi:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, modi voluptatibus, praesentium minus quibusdam ipsam ullam quaerat, tempore distinctio ab possimus architecto voluptates. Deserunt earum optio accusamus, aperiam delectus facilis maxime ipsum ab hic corrupti saepe at beatae omnis vel ullam, consequatur nulla, magnam necessitatibus suscipit. Fugiat, cupiditate quod dolorem sequi tempore assumenda dicta consectetur inventore maiores soluta sed labore harum alias deleniti nostrum, iste facere? Fugiat voluptatibus vitae repudiandae, inventore voluptates aliquam explicabo! Veritatis nesciunt hic corporis earum odio quas, laudantium atque totam ex ab unde maxime placeat molestias. Aliquid, incidunt fugit repellat consectetur voluptates quam atque facilis cupiditate?",
    text_en:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, modi voluptatibus, praesentium minus quibusdam ipsam ullam quaerat, tempore distinctio ab possimus architecto voluptates. Deserunt earum optio accusamus, aperiam delectus facilis maxime ipsum ab hic corrupti saepe at beatae omnis vel ullam, consequatur nulla, magnam necessitatibus suscipit. Fugiat, cupiditate quod dolorem sequi tempore assumenda dicta consectetur inventore maiores soluta sed labore harum alias deleniti nostrum, iste facere? Fugiat voluptatibus vitae repudiandae, inventore voluptates aliquam explicabo! Veritatis nesciunt hic corporis earum odio quas, laudantium atque totam ex ab unde maxime placeat molestias. Aliquid, incidunt fugit repellat consectetur voluptates quam atque facilis cupiditate?",
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
