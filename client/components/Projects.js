import React, { useState, useEffect } from "react";
import { ProjectsMap } from "./projects/ProjectsMap";

import "../css/main.css";

const Projects = props => {

  const apps = [
    {
      title: "Italiano Bros Website",
      tech: "ReactJS, Express, Javascript, NodeJS",
      desc:
        "Simple, dynamic and responsive website for a construction company.",
      img: ["italiano-bros.png"],
      url: "http://www.italianobrosenterprise.com/",
      codeurl: "https://github.com/AlexShiresRoth/italiano-bros"
    },
    {
      title: "Send Noods",
      tech: "ReactJS, Express, Javascript, NodeJS",
      desc: `Dynamic and responsive web app for finding ramen restaurants around user location. 
        Integrated with Google Places/Maps API.`,
      img: ["send-noods.png"],
      url: "https://shrouded-reef-43110.herokuapp.com/",
      codeurl: "https://github.com/AlexShiresRoth/send-noods"
    },
    {
      title: "Timer App",
      tech: "PassportJS, Express, Javascript, NodeJS",
      desc: `Simple timer app made with vanilla js and passportjs for user authentication.`,
      img: ["timerapp.png"],
      url: "http://personaltimerapp.herokuapp.com/login",
      codeurl: "https://github.com/AlexShiresRoth/timerapp"
    },
    {
      title: "Rothenberg Law Offices",
      tech: "Express, Javascript, NodeJS",
      desc: `Responsive and dynamic website for a law office.`,
      img: ["lawoffice.png"],
      url: "http://www.urmyattorney.com/",
      codeurl: "https://github.com/AlexShiresRoth/lawoffice"
    }
  ];

  const games = [
    {
      title: "Room Escape",
      tech: "Unreal Engine 4, C++",
      desc:
        "Escape from rooms by finding hidden triggers, before time runs out.",
      img: [],
      url: "http://www.urmyattorney.com/",
      codeurl: "https://github.com/AlexShiresRoth/lawoffice"
    },
    {
      title: "Battlgrounds",
      tech: "Unreal Engine 4, C++",
      desc: "Fight against enemy vehicles on an alien terrain.",
      img: [],
      url: "http://www.urmyattorney.com/",
      codeurl: "https://github.com/AlexShiresRoth/lawoffice"
    }
  ];

  const [projects, toggleProjects] = useState(apps);

  useEffect(() => {
    toggleProjects(apps);
  }, []);

  return (
    <section className="section__projects">
      <div className="section__projects--buttons">
        <a onClick={() => toggleProjects(apps)}>WebApps</a>
        <a onClick={() => toggleProjects(games)}>Games</a>
      </div>
      <ProjectsMap projects={projects} />
    </section>
  );
};

export default Projects;
