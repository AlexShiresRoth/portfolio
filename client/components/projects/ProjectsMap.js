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
        <div className="section__projects--item--info">
          <div className="section__projects--item--title">
            <h2>{project.title}</h2>
            <hr></hr>
          </div>
          <div className="section__projects--item--desc">
            <p className="paragraph__mobile">{project.desc}</p>
          </div>
          <div className="section__projects--item--tech">
            <p className="paragraph__mobile"><span>Tech</span>: {project.tech}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderProjects}</div>;
};
