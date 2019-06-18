import React from "react";

import "../../css/main.css";

export const ProjectsMap = props => {
  const renderProjects = props.projects.map(project => {
    return (
      <div className="section__projects--item">
        <div className="section__projects--item--image-container">
          { project.img.map((img,i) => {
            return <figure className="section__projects--item--image-container--image">
                  <img src={require(`../../../images/projects/${img}`)} key={`${i}`} alt={`${project.title}`}/>
            </figure>
          })}
        </div>
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
