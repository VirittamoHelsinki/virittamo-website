// import react depencies
import { Routes, Route, useLocation } from "react-router-dom";

// import page components
import HomePage from "../pages/Home/HomePage";

const Router = () => {
  // location variable
  const location = useLocation();

  // shorten for cleanness
  const path = location.pathname;

  return (
    <Routes key={path} location={useLocation()}>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
