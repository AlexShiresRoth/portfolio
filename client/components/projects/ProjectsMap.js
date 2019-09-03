import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import "../../css/main.css";

export const ProjectsMap = props => {
  const renderProjects = props.projects.map(project => {
    return (
      <div className="section__projects--item">
        <div className="section__projects--item--image-container">
        <div className="section__projects--item--image-overlay"></div>
          {project.img.map((img, i) => {
            return (
              <figure className="section__projects--item--image-container--image">
                <img
                  src={require(`../../../images/projects/${img}`)}
                  key={`${i}`}
                  alt={`${project.title}`}
                />
              </figure>
            );
          })}
          <div className="section__projects--item--info">
            <div className="section__projects--item--title">
              <h2>{project.title}</h2>
            </div>
            <div className="section__projects--item--links">
              <a href={project.url} target="_blank"><button>Live</button></a>
             <a href={project.codeurl} target="_blank"><button>Code</button></a>
           </div>
          </div>
        </div>
      </div>
    );
  });

  return <Fragment>{renderProjects}</Fragment>;
};
