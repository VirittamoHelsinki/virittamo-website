// import react depencies
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// loader
import Loading from "../pages/Loading/Loading";

// import page components
const HomePage = lazy(() => import("../pages/Home/HomePage"));

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
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
