import React, { useState, useEffect } from "react";

import logoJavascript from "@iconify/icons-ion/logo-javascript";
import unrealIcon from "@iconify/icons-mdi/unreal";

import { SkillsMap } from "./skills/SkillsMap";
import "../css/main.css";

const Skills = () => {
  const skillsArr = [
    {
      title: "JavaScript",
      icon: logoJavascript,
      projects: "10"
    },
    {
      title: "Sass",
      icon: sassIcon,
      projects: "4"
    },
    {
      title: "CSS",
      icon: css3Alt,
      projects: "10"
    },
    {
      title: "React",
      icon: reactIcon,
      projects: "3"
    },
    {
      title: "HTML",
      icon: htmlFive,
      projects: "10"
    },
    {
      title: "Node.js",
      icon: logoNodeJs,
      projects: "6"
    },
    {
      title: "ExpressJS",
      icon: expressIcon,
      projects: "6"
    },
    {
      title: "Redux",
      icon: reduxIcon,
      projects: "2"
    },
    {
      title: "Git",
      icon: gitAlt,
      projects: null
    },
    {
      title: "MongoDB",
      icon: mongodbIcon,
      projects: null
    },
    {
      title: "Unreal Engine 4",
      icon: unrealIcon,
      projects: 2
    },
    {
      title: "C++",
      icon: cPlusPlus,
      projects: 2
    }
  ];

  const [skills, setSkills] = useState(skillsArr);

  useEffect(() => {
    setSkills(skillsArr);
  });

  return (
    <section className="section__skills">
      <div className="section__skills--heading">
        <h2>Tech Skills</h2>
      </div>
      <div className="section__skills--container">
        <SkillsMap skills={skills} />
      </div>
    </section>
  );
};

export default Skills;
