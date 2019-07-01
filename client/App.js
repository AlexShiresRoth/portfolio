import React from "react";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from './components/Skills';

import "./css/main.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Skills />
    </div>
  );
};
