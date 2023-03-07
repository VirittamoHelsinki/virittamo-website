// import react depencies
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// loader
import Loading from "../pages/Loading/Loading";

// import page components
const Home = lazy(() => import("../pages/Home/Home"));
const Projects = lazy(() => import("../pages/Projects/Projects"));

const Router = () => {
  // location variable
  const location = useLocation();

  // shorten for cleanness
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes key={path} location={useLocation()}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
