import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Intro from "../pages/Intro";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Router = () => {
  return (
    <TransitionGroup >
      <CSSTransition key={useLocation().key} timeout={1000} classNames={'right'}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
