import { Carousel_Item } from "./ProjectCarousel/Carousel_Item";

import tempIMG from "../../Home/assets/teams-section-ict.webp";

import Qteatteri from "../assets/carousel/MEDIA_OODI_2.webp";
import Oodi from "../assets/carousel/MEDIA_OODI.webp";
import RadioHelsinki from "../assets/carousel/MEDIA_RADIOHELSINKI.webp";

import Pilvipalvelu from "../assets/carousel/ICT_PILVIPALVELU.webp";
import Virtualisointi from "../assets/carousel/ICT_VIRTUALISOINTIPROJEKTI.webp";
import Tietoliikenne from "../assets/carousel/ICT_TIETOLIIKENNEKAAPPI.webp";

export const media_text = [
  {
    title: "Media",
    description: "Etsitkö media-alan osaajaa projektiisi? Ota yhteyttä!",
    contact: "Kai Rintamaa / Puh: +358 40 334 8943 / kai.rintamaa@edu.hel.fi",
  },
];

export const media_slides = [
  {
    component: Carousel_Item,
    client_name: "Q-teatteri",
    project_title: "Tarinateatteri",
    completion_year: "2023",
    img_src: Qteatteri,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Projektissamme Q-teatterin kanssa teimme videotallenteita muun muassa oppilaitosten ja sosiaali- ja terveysalan palveluiden hankkimasta yleisötyö- ja yhteisöteatterista. Tarinateatteri on soveltavaa ja osallistavaa improvisaatiota, joka perustuu yleisön kertomiin ajatuksiin, tunteisiin ja tarinoihin. Näyttelijät tekevät näkyväksi ihmisen välisiä vuorovaikutussuhteita, antavat osallistujille mahdollisuuden tarkastella tilannettaan itsensä ulkopuolelta ja nähdä vaihtoehtoisia ratkaisuja. Virittämön tuottamaa videomateriaalia käytetään muun muassa rohkaistaessa opiskelijoita laajentamaan osaamistaan, sekä perhevalmennuksessa.",
  },
  {
    component: Carousel_Item,
    client_name: "Oodi",
    project_title: "Valokuvaus",
    completion_year: "2023",
    img_src: Oodi,
    alt: "Oodi photography project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Toteutimme Oodille tuotannolliset valokuvat heidän laitteistaan nettisivua ja somea varten. Oodi on Helsingin keskustakirjasto, jonka palveluihin ja laitteisiin kuuluu monipuolisesti niin ompelukoneita, keittiö kuin valokuvastudiokin.",
  },
  {
    component: Carousel_Item,
    client_name: "Moi Panda",
    project_title: "Media & Design",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Virittämön Mediatiimi on tehnyt Moi Pandalle peligrafiikkaa, hahmosuunnittelua, animaatioita, äänisuunnittelua sekä mainosvideon. Moi Panda-sovelluksen kautta lapset voivat ystävystyä toistensa kautta ympäri maailman, oppia uusia kieliä, sosiaalisia taitoja, kommunikaatiotaitoja ja uutta toistensa kulttuureista pelien, videopuhelujen ja chattien välityksellä. Myös heidän vanhempansa voivat olla sovelluksen kautta ystäviä keskenään ja jakaa pedagogisia vinkkejä ja vanhemmuuteen liittyviä asioita, kokemuksia, tunteita ja ongelmia globaalisti.",
  },
  {
    component: Carousel_Item,
    client_name: "Radio Helsinki",
    project_title: "Sound Design",
    completion_year: "2023",
    img_src: RadioHelsinki,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Radio Helsinki on ollut Virittämön harjoittelupaikka, jossa äänisuunnittelijamme on päässyt tututustumaan monipuolisesti radiotyöhön, muun muassa lähetyksiin, perehtymään tuotantopuolen työskentelyyn sekä spiikkaamaan radiomainoksia. Radio Helsinki on tarjonnut mahdollisuuden kehittää omaa osaamista ja antanut sopivassa määrin vastuuta sekä tukea.",
  },
  {
    component: Carousel_Item,
    client_name: "Ohjaamo, Helsingin Kaupunki jne",
    project_title: "Henkilökuvaus",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Mediatiimin toistuviin projekteihin kuuluu asiakkaan tarpeisiin soveltuva henkilökuvaus, jota olemme toteuttaneet esimerkiksi CV-kuvauspisteen muodossa. Asiakkaitamme ovat olleet muun muassa Ohjaamo Studia-messuilla ja Helsingin Kaupunki Oodin kesätyörekryssä.",
  },
];

export const ict_text = [
  {
    title: "ICT",
    description:
      "Meiltä löydät osaavia ICT-ammattilaisia monenlaisiin toimeksiantoihin. Ota yhteyttä!",
    contact: "Ari Tuomi / Puh: 09 310 27571 / ari.tuomi@edu.hel.fi",
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
    description:
      "Projekteissamme nojataan vahvasti Microsoftin julkipilveen. Azuressa pyörii mm. virtuaalikoneita, webbisovelluksia ja tietokantoja. Azuren kaverina tiivisti toimii konttiteknologiat (Docker) ja CI/CD putket. Virittämöllä  pääset halutessasi osallistumaan mielenkiintoisiin projekteihin ja kehittämään osaamistasi pilviteknologioiden parissa.",
  },
  {
    component: Carousel_Item,
    client_name: "Virittämö",
    project_title: "Virtualisointiprojekti",
    completion_year: "2023",
    img_src: Virtualisointi,
    alt: "Virtualisointi project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Palvelinympäristön vaihto Proxmoxista ESXi:in: IT-projekti, jonka tarkoituksena siirtyä yhden palveluntuottajan piiriin. Siirtymä tapahtui niin kutsuttuna migraatioprojektina. Tämä toteutettiin vaiheittain, jotta Virittämön verkko pysyy toiminnassa.",
  },
  {
    component: Carousel_Item,
    client_name: "Virittämö",
    project_title: "Tietoliikennekaapin siistiminen",
    completion_year: "2023",
    img_src: Tietoliikenne,
    alt: "Tietoliikenne project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Laitettiin verkkokaapelit siistiin järjestykseen. Fyysistä verkkoa aina helpompi hahmottaa ja ylläpitää, kun kaikki tietoliikennekaapelit ovat siistissä järjestyksessä ja oikein kytkettynä.",
  },
];

export const softa_text = [
  {
    title: "Softa",
    description: "Tarvitsetko Softa-puolen osaajaa projektiisi? Ota yhteyttä!",
    contact: "Joonas Pitkonen / Puh. 09 310 27555 / joonas.pitkonen@edu.hel.fi",
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
    description: "",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 2",
    project_title: "Project Name 2",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description: "",
  },
  {
    component: Carousel_Item,
    client_name: "Client Name 3",
    project_title: "Project Name 3",
    completion_year: "2023",
    img_src: tempIMG,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description: "",
  },
];
