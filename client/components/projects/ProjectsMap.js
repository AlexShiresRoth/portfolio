import React from "react";

import "../../css/main.css";

export const ProjectsMap = props => {
  const renderProjects = props.projects.map(project => {
    return (
      <div className="section__projects--item">
        <div className="section__projects--item--title">
          <h2>{project.title}</h2>
        </div>
        <div className="section__projects--item--tech">
          <p>{project.tech}</p>
        </div>
        <div className="section__projects--item--desc">
          <p>{project.desc}</p>
        </div>
        <div className="section__projects--item--img">
          <p>{project.img}</p>
        </div>
      </div>
    );
  });

  return <div>{renderProjects}</div>;
};
