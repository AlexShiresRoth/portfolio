import React from "react";

import "../../css/main.css";

export const TechIcons = props => {
  const icon = <i class={`${props.icon}`} />;

  return <div>{ icon }</div>;
};
