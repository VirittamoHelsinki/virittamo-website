import { Carousel_Item } from "./ProjectCarousel/Carousel_Item";

import Qteatteri from "../assets/carousel/MEDIA_OODI_2_SMALL.webp";
import Oodi from "../assets/carousel/MEDIA_OODI_SMALL.webp";
import MoiPanda from "../assets/carousel/MEDIA_MOIPANDA_SMALL.webp";
import RadioHelsinki from "../assets/carousel/MEDIA_RADIOHELSINKI_SMALL.webp";
import Henkilökuvaus from "../assets/carousel/MEDIA_HENKILÖKUVAUS_SMALL.webp";

import Pilvipalvelu from "../assets/carousel/ICT_PILVIPALVELU_SMALL.webp";
import Virtualisointi from "../assets/carousel/ICT_VIRTUALISOINTIPROJEKTI_SMALL.webp";
import Tietoliikenne from "../assets/carousel/ICT_TIETOLIIKENNEKAAPPI_SMALL.webp";

import Digirasti from "../assets/carousel/SOFTA_DIGIRASTI_SMALL.webp";
import Liikuntakoutsaus from "../assets/carousel/SOFTA_LIIKUNTAKOUTSAUS_SMALL.webp";
import SoteApp from "../assets/carousel/SOFTA_SOTEAPP_SMALL.webp";

/*

MEDIA EXPORTS

*/

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
    img_src: MoiPanda,
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
    img_src: Henkilökuvaus,
    alt: "placeholder image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Mediatiimin toistuviin projekteihin kuuluu asiakkaan tarpeisiin soveltuva henkilökuvaus, jota olemme toteuttaneet esimerkiksi CV-kuvauspisteen muodossa. Asiakkaitamme ovat olleet muun muassa Ohjaamo Studia-messuilla ja Helsingin Kaupunki Oodin kesätyörekryssä.",
  },
];

/*

ICT EXPORTS

*/

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

/*

SOFTA EXPORTS

*/
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
    client_name: "Helsingin työllisyyspalvelut",
    project_title: "Digirasti",
    completion_year: "2023",
    img_src: Digirasti,
    alt: "Digirasti project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Digirasti on tehtäväkokonaisuus nettisivu Helsingin työllisyyspalveluille, joka tukee ja kehittää suomalaisten digitaitoja ja osaamista älylaitteiden ja digitaalisten palvelujen käytössä. Digirastin tarkoituksena on mahdollisesti auttaa suomalaisia pysymään mukana nopeassa digitaalisessa muutoksessa ja parantamaan heidän taitonsa älylaitteiden ja digipalvelujen käytössä. Digirastissa tarjolla on erilaisia tehtäviä ja pelejä, joiden avulla käyttäjät voivat parantaa taitojaan älylaitteiden ja digitaalisten palvelujen käytössä. Nämä tehtävät ja pelit tarjoavat hauskan ja interaktiivisen tavan kehittää digitaitoja ja osaamista.",
  },
  {
    component: Carousel_Item,
    client_name: "Helsinki",
    project_title: "Liikuntakoutsaus",
    completion_year: "2023",
    img_src: Liikuntakoutsaus,
    alt: "Liikuntakoutsaus project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Liikuntakoutsaus-sovellus on kehitetty tukemaan henkilöstön liikuntaharrastuksia ja hyvinvointia. Se tarjoaa yksilöllistä ohjausta ja neuvontaa sekä mahdollisuuden seurata omaa edistymistä. Sovellus tarjoaa neljä tapaamiskertaa henkilökohtaisen liikuntakouluttajan kanssa, joissa keskustellaan elämäntavoista ja tavoitteista ja luodaan juuri sinulle sopiva suunnitelma aktiivisempaan arkeen. Sovellus on kehitetty yhteistyössä työterveyshuollon kanssa ja toteutus tapahtuu henkilöstöliikunnassa.",
  },
  {
    component: Carousel_Item,
    client_name: "Helsinki",
    project_title: "Sote-App",
    completion_year: "2023",
    img_src: SoteApp,
    alt: "Sote-App project image",
    link: "https://virittamohelsinki.fi/",
    description:
      "Sote-App on suunniteltu tarjoamaan terveydenhuollon työntekijöille mahdollisuuden arvioida potilaan tilannetta yksityiskohtaisesti. Sovellus kysyy työntekijältä potilaan tietoja, kuten sydämen sykettä, lämpötilaa ja muuta potilaan hyvinvointiin liittyvää tietoa, ja terveydenhuollon työntekijä voi arvioida potilaan tilan ja tarvittaessa tarjota tarvittavia hoitotoimenpiteitä. Sote-App on erittäin kätevä ja helppokäyttöinen, ja se tarjoaa terveydenhuollon työntekijöille mahdollisuuden tarjota parhaan mahdollisen hoidon potilailleen. Se on tärkeä apuväline terveydenhuollon työntekijöille, jotka haluavat tarjota tehokasta ja laadukasta hoitoa potilailleen.",
  },
];
