// import context
import { useContext } from "react";
import { LanguageContext } from "../../langLocal/context/langContext";

// import assets
import HeaderImg from "./assets/main-header-img.jpeg";

// import components
import Header from "../../components/Header/Header";

const HomePage = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang;

  return (
    <main className="homePage__wrapper">
      <Header />
      <img src={HeaderImg} alt="Home page main image" />
      <h1>{home_page.home_title}</h1>
    </main>
  );
};

export default HomePage;
