import React, { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "../images/svg/Home2.svg";
import Smiley from "../images/svg/Smiley.svg";
import Code from "../images/svg/Code1.svg";
import Pen from "../images/svg/Pen.svg";
import Note from "../images/svg/Note1.svg";
import Mail from "../images/svg/Mail1.svg";

const Menu = ({ addTimeline }) => {
  gsap.registerPlugin(ScrollTrigger);

  let menu = useRef(null);

  useEffect(() => {
    // const home = document.querySelector()
    // const menus = gsap.utils.toArray("NavHashLink")

    //  let menuActiveTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: homeRef.current,
    //     start: "top bottom",
    //     end: "1000",
    //     toggleClass: {
    //       targets: ".home--menu",
    //       className: "menu--active"
    //     }
    //   }
    // })

    // addTimeline(menuActiveTl)

    const menuTl = gsap.timeline();

    menuTl
      .from(
        menu,
        {
          opacity: 0,
          xPercent: -40,
          ease: "power3.in",
          duration: 7,
        },
        "start"
      )

    addTimeline(menuTl, "start");
  }, [addTimeline]);

  const tooltipAdd = (el) => {
    if(el.currentTarget.className.includes("menu__dot-svg")){
      el.currentTarget.setAttribute('data-title', el.currentTarget.title)
    }
  }

  return (
    <div className="menu" ref={(el) => (menu = el)}>
      <BrowserRouter>
        <NavHashLink smooth to="#top" title="Home" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)}>
          <div className="menu__dot"></div>
          <img className="menu__img" src={Home} alt="Home" />
        </NavHashLink>
        <NavHashLink smooth to="#linus" title="Linus" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)} >
          <div className="menu__dot"></div>
          <img className="menu__img" src={Smiley} alt="Smiley" />
        </NavHashLink>
        <NavHashLink smooth to="#programming" title="Programming" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)} >
          <div className="menu__dot"></div>
          <img className="menu__img" src={Code} alt="Code" />
        </NavHashLink>
        <NavHashLink smooth to="#design" title="Graphic Design" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)}>
          <div className="menu__dot"></div>
          <img className="menu__img" src={Pen} alt="Pen" />
        </NavHashLink>
        <NavHashLink smooth to="#music" title="Music" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)}>
          <div className="menu__dot"></div>
          <img className="menu__img" src={Note} alt="Musical note" />
        </NavHashLink>
        <NavHashLink smooth to="#contact" title="Contact" className="menu__dot-svg" onMouseEnter={(e)=>tooltipAdd(e)}>
          <div className="menu__dot"></div>
          <img className="menu__img" src={Mail} alt="Mail" />
        </NavHashLink>
      </BrowserRouter>
    </div>
  );
};

export default Menu;
