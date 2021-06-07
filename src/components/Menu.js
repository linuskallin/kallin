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

const Menu = ({ homeRef, addTimeline }) => {
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
    
    const menuTl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        pin: true,
        scrub: 0.5,
        toggleActions: "play none none none",
        markers: true,
      }
    });

    menuTl
      .addLabel("start menu")
      .from(
        menu,
        {
          opacity: 0,
          ease: "power2.in",
        },
        "start"
      )
      .addLabel("end menu");

    addTimeline(menuTl, "start");
  }, [addTimeline, homeRef]);

  return (
    <div className="menu" ref={(el) => (menu = el)}>
      <BrowserRouter>
        <NavHashLink smooth to="#top" className="menu__dot-svg home--menu">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Home} alt="Home" />
        </NavHashLink>
        <NavHashLink smooth to="#linus" className="menu__dot-svg">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Smiley} alt="Smiley" />
        </NavHashLink>
        <NavHashLink smooth to="#programming" className="menu__dot-svg">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Code} alt="Code" />
        </NavHashLink>
        <NavHashLink smooth to="#design" className="menu__dot-svg">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Pen} alt="Pen" />
        </NavHashLink>
        <NavHashLink smooth to="#music" className="menu__dot-svg">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Note} alt="Musical note" />
        </NavHashLink>
        <NavHashLink smooth to="#bottom" className="menu__dot-svg">
          <div className="menu__dot"></div>
          <img className="menu__img" src={Mail} alt="Mail" />
        </NavHashLink>
      </BrowserRouter>
    </div>
  );
};

export default Menu;
