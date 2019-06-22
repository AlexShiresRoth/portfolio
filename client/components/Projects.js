import React, { Component } from "react";
import { ProjectsMap } from "./projects/ProjectsMap";

import "../css/main.css";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  apps = [
    {
      title: "Italiano Bros Website",
      tech: "ReactJS, Express, Javascript, NodeJS",
      desc:
        "Simple, dynamic and responsive website for a construction company.",
      img: ["italiano-bros.png"]
    },
    {
      title: "Send Noods",
      tech: "ReactJS, Express, Javascript, NodeJS",
      desc: `Dynamic and responsive web app for finding ramen restaurants around user location. 
        Integrated with Google Places/Maps API.`,
      img: ["send-noods.png"]
    },
    {
      title: "Timer App",
      tech: "PassportJS, Express, Javascript, NodeJS",
      desc: `Simple timer app made with vanilla js and passportjs for user authentication.`,
      img: ["timerapp.png"]
    },
    {
      title: "Rothenberg Law Offices",
      tech: "Express, Javascript, NodeJS",
      desc: `Responsive and dynamic website for a law office.`,
      img: ["lawoffice.png"]
    }
  ];

  games = [
    {
      title: "Room Escape",
      tech: "Unreal Engine 4, C++",
      desc:
        "Escape from rooms by finding hidden triggers, before time runs out.",
      img: ["img1.jpg"]
    },
    {
      title: "Battlgrounds",
      tech: "Unreal Engine 4, C++",
      desc: "Fight against enemy vehicles on an alien terrain.",
      img: ["img1.jpg"]
    }
  ];

  toggleGames() {
    if (this.state.projects === this.apps) {
      return this.setState({ projects: this.games });
    }
  }
  toggleApps() {
    if (this.state.projects === this.games) {
      return this.setState({ projects: this.apps });
    }
  }

  componentDidMount() {
    this.setState({ projects: this.apps });
  }
  render() {
    return (
      <section className="section__projects">
        <div className="section__projects--buttons">
          <a onClick={() => this.toggleApps()}>WebApps</a>
          <a onClick={() => this.toggleGames()}>Games</a>
        </div>
        <ProjectsMap projects={this.state.projects} />
      </section>
    );
  }
}
