import React from "react";

import "../css/main.css";
import { SkillsMap } from "./skills/SkillsMap";

export default class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          title: "JavaScript",
          experience: "1.5 years",
          icon: "fab fa-js-square",
          projects: "10"
        },
        {
          title: "Sass",
          experience: "5+ months",
          icon: "fab fa-sass",
          projects: "4"
        },
        {
          title: "CSS",
          experience: "2 years",
          icon: "fab fa-css3-alt",
          projects: "10"
        },
        {
          title: "React",
          experience: "6 months",
          icon: "fab fa-react",
          projects: "3"
        },
        {
          title: "HTML",
          experience: "6 months",
          icon: "fab fa-html5",
          projects: "10"
        },
        {
          title: "Node.js",
          experience: "1 year",
          icon: "fab fa-node",
          projects: "6"
        },
        {
          title: "ExpressJS",
          experience: "1 year",
          icon: null,
          projects: "6"
        },
        {
          title: "Git",
          experience: "1 year",
          icon: "fab fa-git",
          projects: null
        },
        {
          title: "Unreal Engine 4",
          experience: "4 months",
          icon: null,
          projects: 2
        },
        {
          title: "C++",
          experience: "4 months",
          icon: null,
          projects: 2
        }
      ]
    };
  }

  render() {
    return (
      <section className="section__skills">
        <div className="section__skills--heading">
          <h2>Tech Skills</h2>
        </div>
        <div className="section__skills--container">
          <SkillsMap skills={this.state.skills} />
        </div>
      </section>
    );
  }
}
