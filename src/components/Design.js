import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Malmo from "../images/other/malmo.webp";
import MalmoSmall from "../images/other/malmo-s.webp";
import Oland from "../images/other/design2.webp";
import OlandSmall from "../images/other/design2-s.webp";
import Bland from "../images/other/bland.webp";
import BlandSmall from "../images/other/bland-s.webp";

function Design({ addTimeline }) {
  gsap.registerPlugin(ScrollTrigger);

  let design = useRef(null);
  let maskGraphic = useRef(null);
  let maskDesign = useRef(null);
  let p = useRef(null);
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let li4 = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);

  useEffect(() => {
    const designTl = gsap.timeline({
      scrollTrigger: {
        trigger: design,
        end: "+=4000",
        fastScrollEnd: true,
        preventOverlaps: true,        
        pin: true,
        pinSpacing: true,
        scrub: 0.2,
        // markers: true,
        toggleActions: "play pause reverse none",
      },
    });

    designTl
      .addLabel("design fadein")
      .from(design, {
        autoAlpha: 0,
        duration: 2,
      })
      .addLabel("start design")
      .to(
        maskGraphic,
        {
          strokeDashoffset: 500,
          duration: 10,
        },
        "start design"
      )
      .to(
        maskDesign,
        {
          strokeDashoffset: 500,
          duration: 10,
        },
        ">-6.5"
      )
      .from(design, {
        rotationX: 0,
      })
      .from(
        p,
        {
          autoAlpha: 0,
          y: 100,
          duration: 6,
        },
        "start design"
      )
      .from(
        [li1, li2, li3, li4],
        {
          autoAlpha: 0,
          x: 100,
          duration: 6,
          stagger: 7,
        },
        ">"
      )
      // .to({}, { duration: 4 }, ">")
      .addLabel("boxes")
      .from(
        box1,
        {
          x: 150,
          rotate: 45,
          duration: 7,
        },
        "boxes"
      )
      .from(
        box2,
        {
          right: 70,
          rotate: 45,
          duration: 7,
        },
        "boxes"
      )
      .from(
        box3,
        {
          x: 70,
          top: 400,
          rotate: -45,
          duration: 7,
        },
        "boxes"
      )
      .addLabel("boxes click")
      .fromTo(
        img1,
        {
          xPercent: -300,
          rotate: 5,
        },
        {
          xPercent: -100,
          duration: 15,
          ease: "circ.in",
        },
        "boxes-=9"
      )
      .to(
        img1,
        {
          xPercent: 0,
          scale: 1.6,
          rotate: 0,
          duration: 7,
          ease: "circ.out",
        },
        ">"
      )
      .to(
        img1,
        {
          xPercent: 100,
          scale: 1,
          rotate: -5,
          duration: 7,
          ease: "circ.in",
        },
        ">"
      )
      .to(
        img1,
        {
          xPercent: 300,
          duration: 15,
          ease: "circ.out",
        },
        ">"
      )
      .fromTo(
        img2,
        {
          xPercent: -300,
          rotate: 5,
        },
        {
          xPercent: -100,
          duration: 15,
          delay: 5,
          ease: "circ.in",
        },
        "-=30"
      )
      .to(
        img2,
        {
          xPercent: 0,
          scale: 1.6,
          rotate: 0,
          duration: 7,
          ease: "circ.out",
        },
        ">"
      )
      .to(
        img2,
        {
          xPercent: 100,
          scale: 1,
          rotate: -5,
          duration: 7,
          ease: "circ.in",
        },
        ">"
      )
      .to(
        img2,
        {
          xPercent: 300,
          duration: 15,
          ease: "circ.out",
        },
        ">"
      )
      .fromTo(
        img3,
        {
          xPercent: -300,
          rotate: 5,
        },
        {
          xPercent: -100,
          duration: 15,
          ease: "circ.in",
        },
        "-=25"
      )
      .to(
        img3,
        {
          xPercent: 0,
          scale: 1.6,
          rotate: 0,
          duration: 7,
          ease: "circ.out",
        },
        ">"
      )
      .to(
        img3,
        {
          xPercent: 100,
          scale: 1,
          rotate: -5,
          duration: 7,
          ease: "circ.in",
        },
        ">"
      )
      .to(
        img3,
        {
          xPercent: 300,
          duration: 15,
          ease: "circ.out",
        },
        ">"
      )
      .addLabel("end design")
      .to(design, {
        autoAlpha: 0,
        duration: 2,
      })
      .to({}, { duration: 1 })

    addTimeline(designTl);
  }, []);

  return (
    <div className="wrapper__perspective" ref={(el) => (design = el)}>
      <section className="design">
        <div className="design__title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.82 37.18">
            <defs>
              <g id="graphicdesign-mask">
                <mask id="graphicdesign-mask-graphic">
                  <polyline
                    ref={(el) => (maskGraphic = el)}
                    className="graphicdesign-mask"
                    points="17.71 4.45 14.63 5.11 12.85 5.33 9.26 6.23 5.8 7.88 3.02 10.09 1.12 12.81 0.6 14.78 0.6 16.58 1.6 18.7 2.85 20.22 4.84 21.5 7.22 21.82 9.74 21.82 12.59 21 14.67 19.66 15.62 18.88 16.1 17.02 15.62 15.98 14.48 15.76 13.37 15.72 12.25 16.17 10.81 17.25 10.52 17.88 18.46 15.97 19.74 20.91 19.18 15.82 19.74 15.11 20.78 13.36 22.2 12.86 23.46 12.86 28.09 14.55 28.79 14.07 27.41 15.54 25.28 16.58 24.54 17.79 24.33 18.39 24.63 18.88 25.32 18.92 25.97 18.5 26.88 17.79 27.75 16.93 28.14 15.32 28.7 15.46 27.96 18.01 28.4 18.5 28.79 18.5 30.73 17.33 33.19 14.81 34.33 12.66 34.15 15.31 33.98 17.97 33.51 19.86 33.19 25.02 33.85 29.61 34.33 32.04 34.99 15.32 37.32 11.95 38.23 11.69 38.95 12.48 39.39 13.36 39.39 14.74 38.74 15.78 38.09 16.89 37.1 17.66 35.84 18.5 35.11 18.83 33.15 18.75 31.95 18.13 31.89 17.57 41.09 7.32 41.47 8.73 41.69 13.56 41.95 15.78 42.17 17.06 43.12 15.98 45.25 13.05 46.1 13.77 46.56 16.48 47.02 17.02 47.41 15.81 48.94 13 48.71 15.18 49.45 15.98 50.35 11.6 48.05 7.32 51.27 9.74 58.79 10.55 57.22 11.46 54.9 12.38 53.6 13.64 53.12 14.74 53.55 15.28 54.51 15.33 55.85 15.33 60 14.42"
                  />
                </mask>
                <mask id="graphicdesign-mask-design">
                  <path
                    ref={(el) => (maskDesign = el)}
                    className="graphicdesign-mask"
                    d="M71.37,3.13l-.3,5.21.2,5.62,1.32,5.22L70.08,13l-.63-2.16L69.2,6.57l1-3.63,1.17-1.25L72.82,1l2-.38,2.33.46,1.87,1,2,1.7,1.12,2.46.13,1.31V9l-.33,1.75-1,2.23-1,1.47-1.85,2-3.27,2.68-2.41,1-1.72.18-1.37-.31-1.23-.9V18.4l.74-1.31L82.73,16l4.81-2.63-.3-1-.77-.33-1,.15-1.31.8-.75,1.32-.11,1,.25,1.39.36.5.89.17L85.91,17l3.45-2.6.52-1,.16-1,2-2.09L93.26,10l.34.07-1.46,1.66-2,2.17,1.37.13L93.6,14l.7.6-.13.72-.65.63-1.07.23-1.82.16-1-.56-.46,0,7.11-5.23v2s0,2.12.52,2,.06-8,.06-8l.89,1.74,1.07,2.86,1.69,2.76,1.64-2.53,1.31-.56v1.54l-.13.81-1.43,1.64-1,.45-.6-1L104,13.19l.55.54.65.83,1,3,.31,1.13-.6,1.71-1,1.18-1.92,1.14-1.77.78H96.41l-2.68-1.35L106.87,9.76v1.41l1.3,2.47.36-1.59,2-2,.78.33.55.81,1.43,3.22"
                  />
                </mask>
              </g>
            </defs>
            <g id="graphicdesign-text">
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M70.73,13.23a6.68,6.68,0,0,1-.36-.71A14.69,14.69,0,0,1,69.74,6a7.75,7.75,0,0,1,.76-2.51,3.85,3.85,0,0,1,2.13-2,5.92,5.92,0,0,1,4.36,0,8.49,8.49,0,0,1,3,1.92,7,7,0,0,1,1.34,1.84,6.27,6.27,0,0,1,.5,2.9,9.45,9.45,0,0,1-1.67,5.38,16.43,16.43,0,0,1-2.3,2.7,25.45,25.45,0,0,1-3.25,2.52,13.85,13.85,0,0,1-1.31.71,6.28,6.28,0,0,1-3.48.36,1.38,1.38,0,0,1-1-.66,1.11,1.11,0,0,1,0-1.09,2,2,0,0,0,0-.65c-.12,0-.21,0-.26.05a1.53,1.53,0,0,0,.25,2.64,5.14,5.14,0,0,0,3.43.56,6.83,6.83,0,0,0,2.35-.88,21.19,21.19,0,0,0,5.94-5.3A11,11,0,0,0,82.49,10a10.11,10.11,0,0,0,.22-2.85,6.75,6.75,0,0,0-2.57-4.68,7.49,7.49,0,0,0-7-1.9,4.73,4.73,0,0,0-3.53,3.11,14.33,14.33,0,0,0-.53,6.66,15.72,15.72,0,0,0,1.45,4.57,10.32,10.32,0,0,1,.74,2.26A8.09,8.09,0,0,0,72.11,19a.33.33,0,0,0,.48.17.74.74,0,0,0,.29-.45,1.07,1.07,0,0,0-.11-.55,21.77,21.77,0,0,1-1.16-6.39,56,56,0,0,1,0-7.44,7,7,0,0,0,0-1c0-.05-.09-.1-.16-.16s-.21.07-.27.15a2.21,2.21,0,0,0-.43,1.28c0,1.68,0,3.35,0,5C70.72,10.74,70.73,11.84,70.73,13.23Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M17,4.83c-.14-.14-.24-.35-.37-.36a4.3,4.3,0,0,0-1,0c-.26,0-.51.14-.77.16A22.66,22.66,0,0,0,7.62,6.58a17,17,0,0,0-4.55,3,8.89,8.89,0,0,0-2.6,4.1,6.56,6.56,0,0,0,1.71,6.44,6.57,6.57,0,0,0,4.35,2.05,13.85,13.85,0,0,0,4.88-.38,9.34,9.34,0,0,0,3.87-2.14,4.13,4.13,0,0,0,1.27-2.13,1.49,1.49,0,0,0-.38-1.48,2.41,2.41,0,0,0-1.6-.81,4.25,4.25,0,0,0-3.42,1.3,1.58,1.58,0,0,0-.34.7c0,.13.12.31.2.49.17-.11.3-.14.36-.23a2.48,2.48,0,0,1,2.42-1.21,2.45,2.45,0,0,0,.79-.12c.45-.13.71.09.95.43a1.23,1.23,0,0,1,.12,1.2,2.57,2.57,0,0,1-.86,1.32,14.1,14.1,0,0,1-2.32,1.46,11.33,11.33,0,0,1-6.06.8,6.11,6.11,0,0,1-4.25-9.64,13.19,13.19,0,0,1,4.43-3.9,23.42,23.42,0,0,1,6.9-2.37,1.38,1.38,0,0,1,.78,0,1.75,1.75,0,0,0,1.33-.09A2.82,2.82,0,0,0,17,4.83Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M42.55,15.79a4.91,4.91,0,0,1-.23-.74c0-.37-.09-.75-.11-1.13-.08-1.26-.19-2.52-.2-3.77a5,5,0,0,0-.92-2.83,2.47,2.47,0,0,0-.19.7c0,.65.15,1.29.19,1.94.06.87.09,1.75.14,2.63s.09,1.9.18,2.85a2.32,2.32,0,0,0,.76,1.62A.56.56,0,0,0,43,17a9.71,9.71,0,0,0,.54-.87c.37-.58.72-1.17,1.11-1.73a1,1,0,0,1,.89-.51,2.13,2.13,0,0,1,.21.49c.11.56.19,1.13.3,1.69a5.19,5.19,0,0,0,.24.88A.42.42,0,0,0,47,17a2.74,2.74,0,0,0,.39-1.21.86.86,0,0,1-.63-.84,6,6,0,0,0-.31-1.45.83.83,0,0,0-1.22-.47,3.28,3.28,0,0,0-1,.76c-.39.42-.69.91-1.05,1.35A9.13,9.13,0,0,1,42.55,15.79Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M108,12.19a6.54,6.54,0,0,1-.38-.59c-.23-.47-.45-1-.68-1.43,0-.05-.13-.08-.2-.08a.3.3,0,0,0-.17.13.35.35,0,0,0-.07.21,5.06,5.06,0,0,0,1.26,3,.44.44,0,0,0,.69-.07,6.16,6.16,0,0,0,.43-.8,4.53,4.53,0,0,1,1.64-2c.63.43.66.42.88.88.33.68.61,1.39.92,2.08a4.83,4.83,0,0,0,.23.52.43.43,0,0,0,.68.05.62.62,0,0,0,.17-.82c-.4-.82-.8-1.64-1.23-2.44a2.45,2.45,0,0,0-.48-.63,1.22,1.22,0,0,0-1.83,0c-.23.25-.48.48-.71.74S108.44,11.68,108,12.19Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M59.47,14.74l0-.25a2.31,2.31,0,0,0-.51-.07c-.79.1-1.58.23-2.37.36a6.67,6.67,0,0,1-2.77-.08A2.72,2.72,0,0,1,54,14a5.09,5.09,0,0,1,2.38-1.88,4.75,4.75,0,0,0,.63-.23c.19-.08.31-.22.19-.46a1.72,1.72,0,0,0-1.32,0,5.63,5.63,0,0,0-3,2.55c-.52.9-.17,1.78,1,1.73,1,0,1.89-.13,2.83-.25a19.34,19.34,0,0,0,2-.41A3.13,3.13,0,0,0,59.47,14.74Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M96.36,10.84a.47.47,0,0,0-.56.49,6.92,6.92,0,0,0,.74,3.31.2.2,0,0,0,.08.08c.1,0,.23.13.3.1a.56.56,0,0,0,.32-.28,1.14,1.14,0,0,0,0-.55c-.13-.56-.29-1.11-.45-1.66S96.5,11.32,96.36,10.84Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M48.39,14.38c0,.28.06.46.09.65a1.93,1.93,0,0,0,.6,1.3c.16.13.35.22.52.08a.72.72,0,0,0,.27-.45,1,1,0,0,0-.19-.63,2.24,2.24,0,0,1-.38-1.39,2.57,2.57,0,0,0-.06-.68.45.45,0,0,0-.3-.26.42.42,0,0,0-.32.24C48.51,13.64,48.45,14.05,48.39,14.38Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M51.27,9.74c-.53-.54-1.05-1.09-1.58-1.62a1.47,1.47,0,0,0-.46-.32.88.88,0,0,0-.87.07c-.13.08-.19.26-.31.44C49.25,8.62,50.07,9.47,51.27,9.74Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M28.78,18a2.32,2.32,0,0,1-.26-1.71c0-.26.15-.52.18-.78a2,2,0,0,0-.28-1.5,2.25,2.25,0,0,1-1.89-.26L26,13.45c-.64-.25-1.27-.54-1.92-.74a3.46,3.46,0,0,0-4.31,1.43c-.19.28-.36.58-.54.87s-.21.45-.39.56A1.27,1.27,0,0,0,18.31,17a6.47,6.47,0,0,0,.14,1.25,23.32,23.32,0,0,0,.77,2.27.38.38,0,0,0,.66,0,1,1,0,0,0,.18-.62,9.18,9.18,0,0,0-.4-1.54,3.09,3.09,0,0,1-.21-1.69,5.16,5.16,0,0,1,1.38-2.59,2.75,2.75,0,0,1,2.72-.79A16.56,16.56,0,0,1,27,14.52c.15.08.24.25.43.44a10.81,10.81,0,0,1-1.08.58,5.19,5.19,0,0,0-2,1.78,1.7,1.7,0,0,0-.34,1.18.9.9,0,0,0,.65.85,1.2,1.2,0,0,0,1-.05,10,10,0,0,0,1.05-.69c.27-.2.51-.42.81-.68a7,7,0,0,0,.48.7.83.83,0,0,0,1.12.27,4.51,4.51,0,0,0,.79-.46A17,17,0,0,0,33,15.3a1,1,0,0,0,.16-.45c-.83.7-1.65,1.41-2.49,2.11A4.54,4.54,0,0,1,28.78,18Zm-2.38-.18s-1.1.94-1.42.69.64-1.36.64-1.36,1.42-1.23,1.75-.87S26.4,17.77,26.4,17.77Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M33.15,14.85l0,0,0,0A.64.64,0,0,0,33.15,14.85Z"
              />
              <path
                mask="url(#graphicdesign-mask-graphic)"
                className="graphicdesign-text"
                d="M39.27,12a1.34,1.34,0,0,0-2-.47,3.51,3.51,0,0,0-.79.65A8.09,8.09,0,0,0,35,14.34c-.06.15-.09.37-.41.3,0-.53.08-1.06.08-1.59,0-.18-.1-.41-.32-.39a.86.86,0,0,0-.46.26.46.46,0,0,0-.1.32,2.2,2.2,0,0,1-.58,1.57h0c.11.15.26.29.27.45,0,.87.06,1.75,0,2.62a.4.4,0,0,1-.61.3c-.31-.16-.61-.36-1-.61a3.77,3.77,0,0,0,.07.56c.16.66.92.78,1.23,1.39,0,.28-.07.62-.1,1-.07.92-.15,1.83-.2,2.74a28.48,28.48,0,0,0,.26,5.14c.12.91.33,1.8.53,2.69a1.41,1.41,0,0,0,.24.51.43.43,0,0,0,.69-.06,1,1,0,0,0,.12-.42A4.67,4.67,0,0,0,34.56,30a10.83,10.83,0,0,1-.39-4.31c.09-1.71.17-3.43.26-5.14,0-.33.11-.66.15-.92a1.21,1.21,0,0,1,.28-.19,6.65,6.65,0,0,0,3.38-2,5.26,5.26,0,0,0,1.53-3.14A3.32,3.32,0,0,0,39.27,12Zm-.35,2.76c-.3,1.1-3.05,4-4.09,3.57-.51-.24.09-1.78.28-2.31.35-1,1.94-4,3-3.78C38.68,12.38,39.08,14.17,38.92,14.78Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M90.88,13.39h0Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M90.91,13h-.08l0,.39h0Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M94.15,13.83a2.92,2.92,0,0,0-1.1-.22c-.61,0-1.22,0-1.83.06a2.2,2.2,0,0,1-.43-.09.75.75,0,0,0,.08-.18c-.48-.44-.51-.52-.27-.92a6.34,6.34,0,0,1,.55-.73c.4-.45.81-.9,1.24-1.32.08-.07.26,0,.54,0l-.79,1.35a5.4,5.4,0,0,0,1.46-1.66.44.44,0,0,0-.06-.41.57.57,0,0,0-.4-.17,1,1,0,0,0-.43.13,7.35,7.35,0,0,0-2.57,2.06,3,3,0,0,0-.73,1.88,1,1,0,0,1-.42.89c-1,.72-2,1.43-3,2.12a1.53,1.53,0,0,1-.64.25,3,3,0,0,1-.9,0,.63.63,0,0,1-.54-.52.52.52,0,0,1,.27-.58c.26-.17.5-.36.75-.53.67-.43,1.35-.85,2-1.29a3,3,0,0,0,.58-.55.87.87,0,0,0-.36-1.48,1.57,1.57,0,0,0-.77-.13,4.3,4.3,0,0,0-2.12.8,3.64,3.64,0,0,0-1.34,4,1.61,1.61,0,0,0,1.57,1.26,2.2,2.2,0,0,0,1-.26,15.28,15.28,0,0,0,1.92-1.23c.6-.46,1.14-1,1.71-1.52a1,1,0,0,1,.93-.32,3.56,3.56,0,0,0,1.59-.08c.41-.06.83-.12,1.24-.14a1,1,0,0,1,1,.48c-.37.71-.5.94-.85,1-1,.21-2.07.64-3-.19-.11-.09-.33.06-.33.2,0,.43.14.69.52.75a4.35,4.35,0,0,0,1.13.12c.68-.06,1.36-.18,2-.3a1.88,1.88,0,0,0,1.19-.85A1,1,0,0,0,94.15,13.83Zm-9.26-1c1-.73,1.82-.47,1.93,0,.19.87-3.11,2.24-3.11,2.24A3.69,3.69,0,0,1,84.89,12.83Z"
              />
              <path
                mask="url(#graphicdesign-mask-design)"
                className="graphicdesign-text"
                d="M106.7,17.28a9.77,9.77,0,0,0-2.34-4.39,3.91,3.91,0,0,1-.37-.44,1.1,1.1,0,0,1-.2-1c.18-.71-.14-1-.83-.82a1.3,1.3,0,0,0-.67.39c-.39.42-.72.89-1.07,1.34-.18.24-.32.53-.68.54a7.43,7.43,0,0,1-1.86-3.1c-.26-.75-.54-1.5-.84-2.24a3.14,3.14,0,0,0-.46-.79c-.1-.12-.3-.15-.49-.24a2.08,2.08,0,0,0,0,1.53L97.39,8c.15.4.28.71.39,1a12.49,12.49,0,0,0,1.67,3.86,1.27,1.27,0,0,1,.22.51c.23.63,0,.13.35.73a2.18,2.18,0,0,1,.36.78c.25.68.76.86,1.34.45a6.72,6.72,0,0,0,.9-.87,4.86,4.86,0,0,1,1-.95,2,2,0,0,1,.83.81,12.41,12.41,0,0,1,1.27,2.8A3.71,3.71,0,0,1,104,21.72,21.89,21.89,0,0,1,101.29,23a4.37,4.37,0,0,1-1.34.26,12.42,12.42,0,0,1-1.83,0A7.26,7.26,0,0,1,94,22.1s-.13,0-.26,0a2.31,2.31,0,0,0,1,1,5.75,5.75,0,0,0,2.28.69c.84.07,1.68.07,2.51.14a6.74,6.74,0,0,0,3.53-.8,7.67,7.67,0,0,0,3-2.41A3.88,3.88,0,0,0,106.7,17.28Zm-3.74-4c-.25.46-1.28,1.55-1.68,1.21s.16-1.41.4-1.78.91-1.22,1.28-1.08S103.16,12.92,103,13.28Z"
              />
            </g>
          </svg>
        </div>
        <div className="design__line"></div>

        <div className="wrapper__image" ref={(el) => (img1 = el)}>
          <img
            className="design__img"
            srcSet={`${MalmoSmall} 700w,
            ${Malmo} 1500w`}
            sizes="(min-width: 1500px) 1500px, 700px"
            src={MalmoSmall}
            alt="Inset from 'Minnen från Malmö'"
            loading="lazy"
          />
          <a href="https://www.akademibokhandeln.se/bok/minnen-fran-malmo-del-2-fran-regementsgatan-till-kopenhamnsvagen/9789163943034/">
            <h6>Inset from "Minnen från Malmö"</h6>
          </a>
        </div>
        <div className="wrapper__image2" ref={(el) => (img2 = el)}>
          <img
            className="design__img"
            srcSet={`${OlandSmall} 700w,
            ${Oland} 1500w`}
            sizes="(min-width: 1500px) 1500px, 700px"
            src={OlandSmall}
            alt=""
            loading="lazy"
          />
          <a href="https://www.naturbokhandeln.se/sv/articles/2.304.10957/under-olands-himlar-johansson">
            <h6>Cover of "Under Ölands himlar"</h6>
          </a>
        </div>
        <div className="wrapper__image3" ref={(el) => (img3 = el)}>
          <img
            className="design__img"
            srcSet={`${BlandSmall} 700w,
            ${Bland} 1500w`}
            sizes="(min-width: 1500px) 1500px, 700px"
            src={BlandSmall}
            alt=""
            loading="lazy"
          />
          <a href="https://open.spotify.com/album/27Lwtp6YBQGHYXAzR2IxYY?si=18fD6qdwRT-LmT_95_vOSw">
            <h6>
              CD-cover of "Each Bend I Pass" by <i>The Bland</i>
            </h6>
          </a>
        </div>
        <p className="design__p" ref={(el) => (p = el)}>
          Graphic design is something I've been doing since about 2014 but have
          had a lifelong interest in. I'm always evolving and learning more
          about both static and animated design and layout. Through the years
          I've done a variety of different stuff:
        <ul>
          <li ref={(el) => (li1 = el)}>
            A lot of Books, both insets and covers
          </li>
          <li ref={(el) => (li2 = el)}>LP/CD-covers</li>
          <li ref={(el) => (li3 = el)}>Posters</li>
          <li ref={(el) => (li4 = el)}>Websites</li>
        </ul>
        </p>
        <h5 className="design__h5">Graphic&nbsp;Design</h5>
        <div className="boxes">
          <div className="box1" ref={(el) => (box1 = el)}></div>
          <div className="box2" ref={(el) => (box2 = el)}></div>
          <div className="box3" ref={(el) => (box3 = el)}></div>
        </div>
      </section>
    </div>
  );
}

export default Design;
