import React, { Suspense, lazy } from "react";

import { Loader } from './loader/Loader';

const Header = lazy(() => import("./components/Header"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

import "./css/main.css";

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Suspense>
  );
};
