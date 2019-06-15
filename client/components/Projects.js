import React, { Component } from "react";
import { ProjectsMap } from "./projects/ProjectsMap";

import "../css/main.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "Italiano Bros Website",
          tech: "ReactJS, Express, Javascript, NodeJS",
          desc:
            "Simple dynamic and responsive website for a construction company.",
          img: "img1.jpg"
        },
        {
          title: "Send Noods",
          tech: "ReactJS, Express, Javascript, NodeJS",
          desc: `Dynamic and responsive web app for finding ramen restaurants around user location. 
            Integrated with Google Places/Maps API.`,
          img: "img1.jpg"
        },
        {
          title: "Timer App",
          tech: "PassportJS, Express, Javascript, NodeJS",
          desc: `Simple timer app made with vanilla js and passportjs for user authentication.`,
          img: "img1.jpg"
        },
        {
          title: "Rothenberg Law Offices",
          tech: "Express, Javascript, NodeJS",
          desc: `Responsive and dynamic website for a law office.`,
          img: "img1.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <section className="section__projects">
        <ProjectsMap projects={this.state.projects} />
      </section>
    );
  }
}
