import React, { Fragment } from "react";
import { Icon, InlineIcon } from "@iconify/react";

import "../../css/main.css";

export const SkillsMap = ({ skills }) => {
  const renderSkills = skills.map(skill => {
    return (
      <div className="section__skills--container--skill-row--icon-block">
        {skill.icon ? <Icon icon={skill.icon} /> : <h3>{skill.title}</h3>}
      </div>
    );
  });
  return <Fragment>{renderSkills}</Fragment>;
};
