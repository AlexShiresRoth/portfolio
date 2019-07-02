import React from "react";

import "../../css/main.css";

export const SkillsMap = props => {
  const renderSkills = props.skills.map(skill => {
    return (
      <div className="section__skills--container--skill-row">
        <div className="section__skills--container--skill-row--icon-block">
          {skill.icon ? <i class={`${skill.icon}`} /> : <h3>{skill.title}</h3>}
        </div>
        <p>{skill.experience}</p>
      </div>
    );
  });
  return <div>{renderSkills}</div>;
};
