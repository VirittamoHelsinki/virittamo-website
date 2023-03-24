import { useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loading from "../pages/Loading/Loading";

import Home from "../pages/Home/Home";

import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/Projects/ProjectDetails/ProjectDetails";

import Stories from "../pages/Stories/Stories";

const Router = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Routes key={pathname} location={useLocation()}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:team/:id" element={<ProjectDetails />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
