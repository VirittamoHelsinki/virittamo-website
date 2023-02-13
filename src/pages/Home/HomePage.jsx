/*
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext } from "react";
*/

// import components
import Header from "../../components/Header/Header";

const HomePage = () => {
  /*
  const {
    lang: { home_page },
  } = useContext(LanguageContext);
  */

  return (
    <main className="homePage__wrapper">
      <Header />
    </main>
  );
};

export default HomePage;
