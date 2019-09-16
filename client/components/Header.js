import React, { useState, useEffect } from "react";
import "../css/main.css";

import { Icons } from "./reusable/Icons";
import HeaderTag from "./header/HeaderTag";

const Header = _ => {
  const urls = [
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
  ];

  const [icons, setIcons] = useState(urls);

  useEffect(() => {
    setIcons(urls);
  }, []);

  const scrollDown = () => {
	  window.scrollTo({
		  behavior: 'smooth',
		  top: window.innerHeight
	  })
  }
  return (
    <section className="section__header">
      <div className="section__header--overlay" />
      <div></div>
      <div className="section__header--title-and-desc">
        <div className="section__header--logo">
          <img
            src={
              "https://res.cloudinary.com/snackmanproductions/image/upload/v1567980650/portfolio/logo_od9hrb.png"
            }
            alt="asr logo"
          />
        </div>
        <h1>Alex Shires Roth</h1>
        <hr />
        <HeaderTag />
        <Icons icons={icons} />
      </div>
      <div className="section__header--down--arrow">
        <i onClick={() => scrollDown()} class="fa fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Header;
