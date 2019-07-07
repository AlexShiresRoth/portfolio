import React, { Component } from "react";
import "../css/main.css";

import { Icons } from "./reusable/Icons";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [
        {
          icon: <i className="fab fa-github" />,
          url: `https://github.com/AlexShiresRoth?tab=repositories`
        },
        {
          icon: <i className="fab fa-codepen" />,
          url: `https://codepen.io/Alexroth96/#`
        },
        {
          icon: <i className="fab fa-twitter" />,
          url: `https://twitter.com/AlexShiresRoth`
        }
      ]
    };
  }

  render() {
    return (
      <section className="section__header">
        <div className="section__header--overlay" />
        <div className="section__header--logo">
          <img src={require("../../images/logotwo.png")} alt="asr logo" />
        </div>
        <div className="section__header--title-and-desc">
          <h1>Alex Shires Roth</h1>
          <hr />
          <p>Self Taught Software Developer</p>
          <Icons icons={this.state.urls} />
        </div>
      </section>
    );
  }
}
