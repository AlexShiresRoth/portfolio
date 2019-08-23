import React from "react";

import "../css/main.css";

export const Loader = () => {
  return (
    <div className="load-fallback">
      <img src={require("../../images/logo.png")} alt="logo" />
    </div>
  );
};
