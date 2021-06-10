import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Rudolstadt from "../images/other/rudolstadt.jpg";
import Syster from "../images/other/syster.jpg";
import Cloud1 from "../images/other/cloud1.png";
import Cloud2 from "../images/other/cloud2.png";

function Music({ addTimeline }) {
  gsap.registerPlugin(ScrollTrigger);

  let music = useRef(null);
  let maskMusic = useRef(null);
  let music__cloud1 = useRef(null);
  let music__cloud2 = useRef(null);
  let music__cloud3 = useRef(null);
  let music__cloud4 = useRef(null);
  let music__cloud5 = useRef(null);
  let music__cloud6 = useRef(null);

  useEffect(() => {
    const musicTl = gsap.timeline({
      scrollTrigger: {
        trigger: music,
        end: -1000,
        pin: true,
        scrub: 0.5,
        toggleActions: "play pause reverse none",
      },
    });

    musicTl
    .addLabel("start music")
    .to(
      maskMusic,
      {
        strokeDashoffset: 0,
        duration: 5,
      },
      "start music"
    )
    .fromTo(
      [music__cloud1, music__cloud2, music__cloud3, music__cloud4, music__cloud5, music__cloud6],
      {
        xPercent: () => Math.floor(Math.random() * (40 - 10) + 10),
        duration: 5,
      },
      {
        xPercent: () => Math.floor(Math.random() * (-40 - 10) - 10),
      },
      "start music"
    )
    .addLabel("end music");

    addTimeline(musicTl);
  }, [addTimeline]);

  return (
    <section id="music" className="music" ref={(el) => (music = el)}>
      <div className="music__title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.66 31.84">
          <defs>
            <g id="music-mask">
              <mask id="music-mask-music">
                <polyline
                  ref={(el) => (maskMusic = el)}
                  className="music-mask"
                  points="0.84 31.8 0.6 28.63 1.36 22.19 2.64 15.1 3.2 10.04 3.22 8.13 5.29 15.24 6.23 18.27 7.1 19.19 8.62 16.44 12.99 6.35 15.88 2.51 14.71 8.13 13.22 18.83 13.08 27.06 18.49 20.13 18.12 22.41 18.16 24.79 18.49 25.95 19.56 27.06 20.5 25.95 21.19 24.42 23.25 19.34 28.19 17.42 27.26 18.83 25.76 20.41 25.39 21.39 25.86 22.36 27.67 23.29 28.92 23.98 29.55 24.56 29.55 25.37 28.74 25.89 27.68 26.68 25.68 27.06 24.31 27.06 22.58 26.07 31.89 19.5 31.61 22.04 32.95 27.37 30.43 15.16 32.58 17.42 41.04 18.68 39.65 19.62 37.28 20.83 35.55 22.59 35.04 24.65 35.62 25.56 36.92 25.89 38.37 25.41 41.8 23.65"
                />
              </mask>
            </g>
          </defs>
          <g id="music-text">
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M32.17,17.42c.14-.69-.31-1.1-.75-1.5-.11-.09-.26-.18-.4.09"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M9.29,14.94a9.12,9.12,0,0,0,1.18-2.2c.49-1.3,1.15-2.52,1.65-3.81a19.12,19.12,0,0,1,2.41-4.08,1.2,1.2,0,0,1,.24-.26c.15-.12.3-.29.51-.06a4.15,4.15,0,0,1-.46,1.81A2.51,2.51,0,0,0,14.6,7a44.67,44.67,0,0,0-.92,5.27c0,.67-.17,1.33-.27,2s-.26,1.48-.33,2.23c-.24,2.48-.52,5-.52,7.47a19.41,19.41,0,0,0,.15,2,1.35,1.35,0,0,0,.2.55.39.39,0,0,0,.3.14.41.41,0,0,0,.26-.22,1.48,1.48,0,0,0,0-.59,17.94,17.94,0,0,1,0-4.27c.22-2.44.37-4.9.66-7.34.24-2.08.62-4.15.95-6.23.23-1.4.48-2.81.71-4.22a3.73,3.73,0,0,0,0-.82c0-.17-.34-.28-.48-.16a1.72,1.72,0,0,0-.32.34c-.34.48-.68,1-1,1.46A18.08,18.08,0,0,0,13,6.35c-1.2,2.32-2.37,4.66-3.54,7a4.77,4.77,0,0,0-.4,1C9,14.47,9.18,14.65,9.29,14.94Z"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M3.22,8.14a8.39,8.39,0,0,0-.4,1.23,11.14,11.14,0,0,0,0,1.42c0,.12,0,.23,0,.35a68.33,68.33,0,0,1-1,7.54A99.93,99.93,0,0,0,.31,29.16a9.22,9.22,0,0,0,0,1.66.85.85,0,0,0,.17.43.39.39,0,0,0,.3.14c.1,0,.26-.1.27-.19a2.65,2.65,0,0,0,0-.69A13.54,13.54,0,0,1,1,28.61c.16-1.89.33-3.79.62-5.67.56-3.72,1.27-7.42,1.72-11.16a2.47,2.47,0,0,1,.33-1.21c.37.18.31.49.34.75A15.3,15.3,0,0,0,4.22,13a30.66,30.66,0,0,0,1.53,5,3.34,3.34,0,0,0,.45.83,2.66,2.66,0,0,0,.59.57.51.51,0,0,0,.8-.21,3.13,3.13,0,0,0,.15-.32c.29-.7.58-1.39.86-2.09a1.62,1.62,0,0,0,0-.32c-.25,0-.27.18-.33.3-.24.46-.45.93-.71,1.38a2.37,2.37,0,0,1-.46.5,3.52,3.52,0,0,1-1-1.78A74.6,74.6,0,0,1,3.84,9,1.14,1.14,0,0,0,3.22,8.14Z"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M40.24,19.29a2.71,2.71,0,0,0-1.49.27A8.72,8.72,0,0,0,35.58,22a3.82,3.82,0,0,0-.88,2.41,1.77,1.77,0,0,0,1.62,1.86,2,2,0,0,0,.82,0,13.82,13.82,0,0,0,1.67-.6c.61-.28,1.19-.62,1.77-.95.26-.15.5-.35.79-.55-.17-.07-.25-.13-.32-.12a5.1,5.1,0,0,0-2.32.82,3.45,3.45,0,0,1-1.77.63A1.17,1.17,0,0,1,35.58,24a2.86,2.86,0,0,1,.28-.9,4.58,4.58,0,0,1,1.22-1.58A11.56,11.56,0,0,1,39.49,20C39.81,19.88,40.17,19.78,40.24,19.29Z"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M23.1,26.12c-.24.1-.24.29-.16.48a1.06,1.06,0,0,0,.83.6,6.29,6.29,0,0,0,5.67-1.37,1.15,1.15,0,0,0,.07-1.93,3.6,3.6,0,0,0-.67-.49c-.34-.19-.71-.34-1.07-.51s-1-.49-1.47-.77a.75.75,0,0,1-.44-.78c.17-.68.21-1.44,1-1.81a1.48,1.48,0,0,0,.38-.29c.1-.1.27-.21.05-.42a5.48,5.48,0,0,0-2.06,1.88,1.21,1.21,0,0,0,.18,1.63,3.44,3.44,0,0,0,1.26.87c.51.22,1,.43,1.52.68a3.44,3.44,0,0,1,.77.54.58.58,0,0,1,0,.93,5.79,5.79,0,0,1-3.07,1.43A3,3,0,0,1,23.1,26.12Z"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M23.25,19.34c-.3.1-.48.11-.54.2a6,6,0,0,0-.49.94c-.56,1.44-.89,3-1.55,4.36,0,.7-.59,1-1,1.39a.41.41,0,0,1-.62-.11,3.43,3.43,0,0,1-.4-1A16.84,16.84,0,0,1,18.47,23c0-.68.07-1.35.09-2,0-.13-.09-.27-.16-.48-.2.11-.38.16-.44.27a1.26,1.26,0,0,0-.14.57c0,1.11-.07,2.21-.06,3.32a3.3,3.3,0,0,0,.5,1.69c.67,1.13,1.58,1.15,2.32.06a9.06,9.06,0,0,0,1.31-3.29,8,8,0,0,1,.47-1.58C22.67,20.89,22.91,20.19,23.25,19.34Z"
            />
            <path
              mask="url(#music-mask-music)"
              className="music-text"
              d="M31.72,19.79c-.28.17-.06.44-.14.64s-.2.43-.28.65a.82.82,0,0,0,0,.35,27,27,0,0,0,1,5.13,1,1,0,0,0,.25.4.36.36,0,0,0,.31.09.33.33,0,0,0,.24-.22A3.13,3.13,0,0,0,33,26c-.07-.3-.25-.59-.31-.89-.3-1.48-.56-3-.85-4.44C31.81,20.4,32,20.06,31.72,19.79Z"
            />
          </g>
        </svg>
      </div>

      <div className="music__line"></div>
      <div className="wrapper__image">
        <img
          className="music__img"
          src={Rudolstadt}
          alt="Rudolstadt festival"
        />
        <h6 className="sub-white">
          Rudolstadt festival with Partiet, thousands in the crowd
          <br />
          Foto: Matthias Kimpel
        </h6>
      </div>
      <div className="wrapper__image2">
        <img
          className="music__img"
          src={Syster}
          alt="Syster Sol på Öland Roots"
        />
        <h6>
          Playing with Syster Sol at Öland Roots
          <br />
          Foto: Ali Jehad
        </h6>
      </div>
      <div className="music__p">
        <p>
          Music is my biggest passion. I've been playing piano since I was 12.
          And since then I've been doing all kinds of stuff related to music:
        </p>
        <ul>
          <li>
            Playing live gigs all over Sweden, Europe and sometimes The World
          </li>
          <li>Recording</li>
          <li>Producing</li>
          <li>Writing songs</li>
          <li>Mixing</li>
          <li>Mastering</li>
          <li>Creating music videos</li>
        </ul>
        <br />
        <p>A selection of artists I've played with:</p>
        <ul>
          <li>Svenska Akademien</li>
          <li>Syster Sol</li>
          <li>Looptroop Rockers</li>
          <li>Dani M</li>
          <li>Amy Diamond</li>
        </ul>
      </div>
      <h5 className="music__h5">Music</h5>
      <img
        className="music__cloud1"
        src={Cloud1}
        alt="Cloud"
        ref={(el) => (music__cloud1 = el)}
      />
      <img
        className="music__cloud2"
        src={Cloud2}
        alt="Cloud"
        ref={(el) => (music__cloud2 = el)}
      />
      <img
        className="music__cloud3"
        src={Cloud1}
        alt="Cloud"
        ref={(el) => (music__cloud3 = el)}
      />
      <img
        className="music__cloud4"
        src={Cloud2}
        alt="Cloud"
        ref={(el) => (music__cloud4 = el)}
      />
      <img
        className="music__cloud5"
        src={Cloud1}
        alt="Cloud"
        ref={(el) => (music__cloud5 = el)}
      />
      <img
        className="music__cloud6"
        src={Cloud2}
        alt="Cloud"
        ref={(el) => (music__cloud6 = el)}
      />
    </section>
  );
}

export default Music;
