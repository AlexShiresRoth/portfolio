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
          icon: "fab fa-js-square",
          projects: "10"
        },
        {
          title: "Sass",
          icon: "fab fa-sass",
          projects: "4"
        },
        {
          title: "CSS",
          icon: "fab fa-css3-alt",
          projects: "10"
        },
        {
          title: "React",
          icon: "fab fa-react",
          projects: "3"
        },
        {
          title: "HTML",
          icon: "fab fa-html5",
          projects: "10"
        },
        {
          title: "Node.js",
          icon: "fab fa-node",
          projects: "6"
        },
        {
          title: "ExpressJS",
          icon: null,
          projects: "6"
        },
        {
          title: "Git",
          icon: "fab fa-git",
          projects: null
        },
        {
          title: "Unreal Engine 4",
          icon: null,
          projects: 2
        },
        {
          title: "C++",
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
