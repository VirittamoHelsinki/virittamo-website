// import react depencies
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// import page components
import HomePage from "../pages/Home/HomePage";

const Router = () => {
  // location variable
  const location = useLocation();

  // shorten for cleanness
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes key={path} location={useLocation()}>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
