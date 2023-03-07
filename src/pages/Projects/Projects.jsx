// import context
import { LanguageContext } from "../../langLocal/context/langContext";
import { useContext, Suspense } from "react";

// import loading page to be used when page is loading
import Loading from "../Loading/Loading";

// import components
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const Projects = () => {
  const { lang } = useContext(LanguageContext);

  const { home_page } = lang;

  console.log(home_page);

  return (
    <Suspense fallback={<Loading />}>
      <main className="projectPage__wrapper">
        <Header />
        <Footer />
      </main>
    </Suspense>
  );
};

export default Projects;
