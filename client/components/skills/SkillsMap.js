import React, { Fragment } from "react";

import "../../css/main.css";

export const SkillsMap = props => {
  const renderSkills = props.skills.map(skill => {
    return (
      <div className="section__skills--container--skill-row--icon-block">
        {skill.icon ? (
          <i className={`${skill.icon}`} />
        ) : (
          <h3>{skill.title}</h3>
        )}
      </div>
    );
  });
  return <Fragment>{renderSkills}</Fragment>;
};
