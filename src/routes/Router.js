import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "../pages/Intro";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export const pathIndex = [
  { path: "/", index: 1 },
  { path: "/experience", index: 2 },
  { path: "/projects", index: 3 },
  { path: "/contact", index: 4 },
];

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
