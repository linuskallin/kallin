import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Home from "../images/svg/Home2.svg";
import Smiley from "../images/svg/Smiley.svg";
import Code from "../images/svg/Code1.svg";
import Pen from "../images/svg/Pen.svg";
import Note from "../images/svg/Note1.svg";
import Mail from "../images/svg/Mail1.svg";

const Menu = ({ addTimeline }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  let menu = useRef(null);

  useEffect(() => {
    const menuTl = gsap.timeline();

    menuTl.from(
      menu,
      {
        opacity: 0,
        xPercent: -40,
        ease: "power3.in",
        // delay: 1,
        duration: 3,
      },
      "start"
    );

    addTimeline(menuTl, "start");
  }, [addTimeline]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".wrapper__perspective");
    const navLinks = gsap.utils.toArray(".menu__dot-svg");

    sections.forEach((section, i) => {
      if(i == 0){
        ScrollTrigger.create({
          trigger: section,
          // start: "top top",
          end: "bottom top",
          // markers: true,
  
          onToggle: () => {
            navLinks.forEach((e) => {
              e.classList.remove("menu--active");
            });
            navLinks[i].classList.add("menu--active");
          },
        });
      }else{
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          // markers: true,
  
          onToggle: () => {
            navLinks.forEach((e) => {
              e.classList.remove("menu--active");
            });
            navLinks[i].classList.add("menu--active");
          },
        });

      }

    });
  }, [addTimeline]);

  const tooltipAdd = (el) => {
    if (el.currentTarget.className.includes("menu__dot-svg")) {
      el.currentTarget.setAttribute("data-title", el.currentTarget.title);
    }
  };

  return (
    <div className="menu" ref={(el) => (menu = el)}>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 0 })}
        title="Home"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Home} alt="Home" />
      </div>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 1450 })}
        title="Linus"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Smiley} alt="Smiley" />
      </div>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 2600 })}
        title="Programming"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Code} alt="Code" />
      </div>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 3100 })}
        title="Graphic Design"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Pen} alt="Pen" />
      </div>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 4100 })}
        title="Music"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Note} alt="Musical note" />
      </div>
      <div
        onClick={() => gsap.to(window, { duration: 1, scrollTo: 5200 })}
        title="Contact"
        className="menu__dot-svg"
        onMouseEnter={(e) => tooltipAdd(e)}
      >
        <div className="menu__dot"></div>
        <img className="menu__img" src={Mail} alt="Mail" />
      </div>
    </div>
  );
};

export default Menu;
