import React, { useRef, useEffect, useState, forwardRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LinusImg from "../images/other/linus1.jpg";
import LinusImg2 from "../images/other/linus.jpg";
import LinusImg3 from "../images/other/linus2.jpg";
import LinusImg4 from "../images/other/linus3.jpg";

function Linus({ addTimeline, forwardRef }) {
  gsap.registerPlugin(ScrollTrigger);

  let linus = useRef(null);
  let maskLi = useRef(null);
  let maskN = useRef(null);
  let maskU = useRef(null);
  let maskS = useRef(null);
  let p = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let box1 = useRef(null);

  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    // console.log(forwardRef)

    const linusTl = gsap.timeline({
      scrollTrigger: {
        trigger: linus,
        pin: true,
        end: "4000",
        // snap: {
        //   snapTo: "labels",
        //   duration: 0.5,
        // },
        scrub: true,
        toggleActions: "play pause reverse none",
      },
    });

    linusTl
      .addLabel("linus fadein")
      .from(linus,{
        opacity: 0,
        duration: 4,
      },
      "linus fadein")
      .addLabel("start linus")
      .to(box1, {
        rotate: 190,
        xPercent: 180,
        duration: 10,
      })
      .to(
        maskLi,
        {
          strokeDashoffset: 0,
          duration: 3,
        },
        "start linus"
      )
      .to(
        maskN,
        {
          strokeDashoffset: 0,
          duration: 2,
        },
        ">"
      )
      .to(
        maskU,
        {
          strokeDashoffset: 0,
          duration: 2,
        },
        ">-0.4"
      )
      .to(
        maskS,
        {
          strokeDashoffset: 0,
          duration: 2,
        },
        ">-0.4"
      )
      .to([], { duration: 4 })
      .fromTo(
        img1,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          duration: 6,
          y: 0,
        },
        "start linus"
      )
      .fromTo(
        p,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          duration: 6,
          y: 0,
        },
        "start linus>1"
      )
      .addLabel("img2")
      .from(img2, {
        rotate: -10,
        opacity: 0,
        xPercent: -200,
        zIndex: 10,
        duration: 5,
      })
      .addLabel("img3")
      .from(img3, {
        rotate: -10,
        opacity: 0,
        xPercent: 200,
        zIndex: 10,
        duration: 5,
      })
      .addLabel("img4")
      .from(img4, {
        rotate: 10,
        opacity: 0,
        xPercent: -200,
        zIndex: 10,
        duration: 5,
      })
      .to({}, { duration: 5 })
      // .addLabel("disperse")
      // .to([img2, img3, img4], {
      //   xPercent: 100,
      //   opacity: 0,
      //   duration: 5,
      // },
      // "disperse")
      .addLabel("end linus")
      .to(linus,{
        opacity: 0,
        duration: 4,
      })

    addTimeline(linusTl);

    if (fullscreen) {
      linus.style.cssText = "perspective: none; position: fixed;";
    } else if (!fullscreen) {
      linus.style.cssText = "perspective: 1000px; position: fixed;";
    }
  }, [addTimeline, fullscreen, forwardRef]);

  return (
    <div className="wrapper__perspective" ref={(el) => (linus = el)}>
      <section id="linus" className="linus">
        <div className="linus__title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.1 20.84">
            <title>Linus written</title>
            <defs>
              <g id="linus-mask">
                <mask id="linus-mask-li">
                  <path
                    ref={(el) => (maskLi = el)}
                    id="mask-li"
                    className="linus-mask"
                    d="M20,10.89l-1.48,9.35L20,16.08l-2.88,1-5.78,2-6.71,1L.6,18.62l2.15-4.74L6.37,6.94l5-6.34"
                  />
                </mask>
                <mask id="linus-mask-n">
                  <polyline
                    ref={(el) => (maskN = el)}
                    id="mask-n"
                    className="linus-mask"
                    points="19.53 7.96 20.43 9 21.29 10.55 21.75 12.52 21.75 15.72 21.69 17.07 22.67 13.98 24.44 11.66 25.32 12.78 24.27 17.04"
                  />
                </mask>
                <mask id="linus-mask-u">
                  <path
                    ref={(el) => (maskU = el)}
                    id="mask-u"
                    className="linus-mask"
                    d="M28.15,12.2l-.34,1.56-.3,1.92c.61.82,1.38,1.44,2,.61l1.11-1.47.59-1.4a11.91,11.91,0,0,0,0-1.43l.36-.9"
                  />
                </mask>
                <mask id="linus-mask-s">
                  <polyline
                    ref={(el) => (maskS = el)}
                    id="mask-s"
                    className="linus-mask"
                    points="36.4 11.03 33.58 11.5 34.28 12.98 38.09 13.47 39.5 14.82 37.64 15.79 33.58 17.43 29.18 18.96"
                  />
                </mask>
              </g>
            </defs>
            <g id="linus-text">
              <path
                mask="url(#linus-mask-li)"
                id="text-li"
                className="linus-text"
                d="M11.78.77c-.09-.15-.24-.29-.44-.17a2.7,2.7,0,0,0-.58.54c-.58.67-1.15,1.33-1.69,2A66.07,66.07,0,0,0,2.45,13.72c-.6,1.15-1.07,2.36-1.56,3.57A5.83,5.83,0,0,0,.6,18.62a.71.71,0,0,0,.43.74,3.54,3.54,0,0,0,.53.23,13.17,13.17,0,0,0,5.88.54,31.54,31.54,0,0,0,7.63-2c.71-.28,1.4-.61,2.11-.88.38-.14.75-.4,1.24-.2,0,.27,0,.53,0,.79a4.54,4.54,0,0,0,.13.9c0,.12.2.3.29.29a.64.64,0,0,0,.46-.23,1.59,1.59,0,0,0,.11-1.33.9.9,0,0,1,.17-1l.44-.44a1,1,0,0,1-.37-1.15c.23-1,.47-2.09.7-3.13a5.71,5.71,0,0,0,.07-.71c-.32.24-.55.33-.63.5a4.07,4.07,0,0,0-.31,1c-.18.86-.34,1.72-.5,2.59a1.42,1.42,0,0,1-1,1.2,28.31,28.31,0,0,0-3.1,1.19,27.25,27.25,0,0,1-6.6,1.85A12.74,12.74,0,0,1,2,19c-.58-.2-.73-.43-.61-1a3.28,3.28,0,0,1,.19-.66c.29-.74.58-1.49.9-2.22A59,59,0,0,1,6.28,8.1,43.07,43.07,0,0,1,9.7,3.23Z"
              />
              <path
                mask="url(#linus-mask-n)"
                id="text-n"
                className="linus-text"
                d="M20.06,8.2A1,1,0,0,0,19.81,8a.65.65,0,0,0-.28,0,.16.16,0,0,0,0,.1.8.8,0,0,0,.26.16,1.26,1.26,0,0,0,.33-.05,1.58,1.58,0,0,0,.21,1.41,9.8,9.8,0,0,1,1,5.11,18,18,0,0,0,0,1.94.41.41,0,0,0,.38.44,2.47,2.47,0,0,0,.35-.48c.33-.69.62-1.4.95-2.08a6.38,6.38,0,0,1,1.16-1.83.42.42,0,0,1,.54-.11,2.22,2.22,0,0,1,.07,1.2c-.14.59-.29,1.18-.43,1.78-.08.37-.19.73-.24,1.11,0,.11.12.25.18.37a1.33,1.33,0,0,0,.35-.2.68.68,0,0,0,.11-.32c.14-.63.28-1.27.41-1.9s.24-1.28.31-1.92a.92.92,0,0,0-.51-1,.87.87,0,0,0-1,.44c-.57.81-1.11,1.64-1.66,2.46-.1.14-.09.39-.39.34,0-.31-.06-.61-.06-.91A12.4,12.4,0,0,0,21,9.62,2.71,2.71,0,0,0,20.06,8.2Z"
              />
              <path
                mask="url(#linus-mask-u)"
                id="text-u"
                className="linus-text"
                d="M28.53,12.15a1.71,1.71,0,0,0-.38,0,.8.8,0,0,0-.26.22,4.43,4.43,0,0,0-.5,3.31,1.29,1.29,0,0,0,2.1.87l.19-.13a5.43,5.43,0,0,0,1.7-3c.11-.63.2-1.28.28-1.92,0-.09,0-.18-.07-.42A4.07,4.07,0,0,0,31,12.65a10.91,10.91,0,0,1-.43,1.54c-.37.88-.78,1.76-1.88,2a.88.88,0,0,1-.6-.76,5.34,5.34,0,0,1,0-.69A6,6,0,0,1,28.53,12.15Z"
              />
              <path
                mask="url(#linus-mask-s)"
                id="text-s"
                className="linus-text"
                d="M37.64,15.79c.8.37,1.39-.09,2-.52a.62.62,0,0,0,0-.92,3.29,3.29,0,0,0-1-.69c-.85-.32-1.73-.58-2.61-.82-.51-.14-1-.2-1.56-.34a.55.55,0,0,1-.36-.37.58.58,0,0,1,.26-.45,8,8,0,0,1,1.07-.37c.32-.1.66-.17,1-.28.12,0,.2-.18.35-.32a1.82,1.82,0,0,0-1.52,0c-.54.27-1.11.49-1.65.77a.57.57,0,0,0-.11,1,1.92,1.92,0,0,0,1,.55l1.45.29a9.31,9.31,0,0,1,2.55,1,.69.69,0,0,1,.45.68,3.45,3.45,0,0,1-.54.3,1.25,1.25,0,0,0-.7.55,3.72,3.72,0,0,0-.68.09q-2.45.78-4.88,1.59c-.8.27-1.58.57-2.36.88a2.1,2.1,0,0,0-.56.37s0,.15,0,.21a.21.21,0,0,0,.15.13,1.08,1.08,0,0,0,.44-.08c.68-.25,1.33-.56,2-.79,1.3-.42,2.63-.77,3.93-1.2a10.4,10.4,0,0,0,1.66-.77C37.51,16.18,37.55,16,37.64,15.79Z"
              />
            </g>
          </svg>
        </div>
        <div className="linus__line"></div>
          <div
            className="wrapper__image"
            onClick={() => setFullscreen(!fullscreen)}
            ref={(el) => (img1 = el)}
          >
            <img
              className="linus__img"
              src={LinusImg}
              alt="Linus with hands behind head"
            />
            <h6>Photo: Johan Sund</h6>
          </div>
          {fullscreen &&
            <div className="wrapper__fullscreen">
              <p className="close" onClick={() => setFullscreen(!fullscreen)}>
                X
              </p>
              <img
                className="fullscreen"
                src={LinusImg}
                alt="Linus with hands behind head"
              />
              <h6 className="sub-fullscreen">Photo: Johan Sund</h6>
            </div>
          }
        <div className="boxes">
          <div className="box1" ref={(el) => (box1 = el)}></div>
        </div>
        <p className="linus__p" ref={(el) => (p = el)}>
          I love music, art, movies, creativity, meditation, nature, travel,
          learning new things, discussions, meeting people.
          <br />
          <br />
          Born in 1985 in Jönköping, Sweden.
          <br />
          <br />
          Bachelors degree in Musicology.
          <br />
          <br />
          Freelancing as a musician/graphic-designer/whatever since 2013.
          <br />
          <br />
          My latest endeavour has been to learn Front End Programming and in the summer of
          2021 I finished my two year Higher Vocational Education
          (Yrkeshögskola) as a Front End Developer.
        </p>
        <h5 className="linus__h5">Linus</h5>
        <div className="linus__flying-images">
          <div className="wrapper__image2" ref={(el) => (img2 = el)}>
            <img
              className="linus__img2"
              src={LinusImg2}
              loading="lazy"
              alt="Linus jumping with crowd in the background"
            />
            <h6 className="sub-white">
              På festival
              <br />
              Foto: Matteus Bartlett
            </h6>
          </div>
          <div className="wrapper__image3 " ref={(el) => (img3 = el)}>
            <img
              className="linus__img3"
              src={LinusImg3}
              loading="lazy"
              alt="Linus smiling"
            />
            <h6 className="sub-white">
              En vanlig dag på IT-högskolan
              <br />
              Foto: IT-högskolan
            </h6>
          </div>
          <div className="wrapper__image4" ref={(el) => (img4 = el)}>
            <img
              className="linus__img4"
              src={LinusImg4}
              loading="lazy"
              alt="Linus with dreadlocks"
            />
            <h6 className="sub-white">Dem dreads</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default forwardRef(Linus);
