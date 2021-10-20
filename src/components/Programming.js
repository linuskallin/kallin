import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

function Programming({ addTimeline }) {
  gsap.registerPlugin(TextPlugin);

  let programming = useRef(null);
  let p = useRef(null);
  let li1 = useRef(null);
  let li2 = useRef(null);
  let li3 = useRef(null);
  let iframe1 = useRef(null);
  let iframe2 = useRef(null);
  let maskProgramming = useRef(null);

  useEffect(() => {
    const programmingTl = gsap.timeline({
      scrollTrigger: {
        trigger: programming,
        start: "top top",
        end: "2000",
        fastScrollEnd: true,
        pin: true,
        // snap: {
        //   snap: "labelsDirectional",
        // },
        scrub: true,
        toggleActions: "play pause reverse none",
      },
    });

    programmingTl
      .addLabel("programming fadein")
      .from(programming, {
        opacity: 0,
        duration: 4,
      })
      .addLabel("start programming")
      .to(
        maskProgramming,
        {
          strokeDashoffset: 0,
          duration: 20,
        },
        "start programming"
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
        "start programming"
      )
      .fromTo(
        li1,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          duration: 6,
          x: 0,
        },
        ">"
      )
      .fromTo(
        li2,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          duration: 6,
          x: 0,
        },
        ">"
      )
      .fromTo(
        li3,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          duration: 6,
          x: 0,
        },
        ">"
      )
      .to("#code", {
        paused: false,
        text: `
        componentDidUpdate() {
          if(window.location.pathname !== this.state.pathname){
            this.handleScopePosition()
          }
        }
        componentWillUnmount() {
          console.log('unmount');
          window.removeEventListener('resize', this.handleResize)
        }
        handleResize = (e) => {
          if (e.target.innerWidth <= this.state.breakpoint){
            this.setState({
              underBreakpoint: true
            })
          } else {
            this.setState({
              underBreakpoint: null
            })
          }
        }
        `,
        ease: "none",
        duration: 14,
      },
      "start programming"
      )
      .addLabel("pause")
      .to({}, {duration: 8}, "pause")
      .addLabel("iframe")
      .to( p, {
        opacity: 0,
        duration: 4,
      },
      "iframe")
      .fromTo(iframe1, {
        xPercent: -150,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 10,
      },
      "iframe"
      )
      .fromTo(iframe2, {
        xPercent: 150,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 10,
      },
      ">+4"
      )
      .addLabel("paus")
      .to({}, {duration: 14}, "paus")
      .addLabel("end programming")
      .to(programming, {
        opacity: 0,
        duration: 4,
      })

    addTimeline(programmingTl);
  }, [addTimeline]);

  return (
    <section
      id="programming"
      className="programming"
      ref={(el) => (programming = el)}
    >
      <div className="programming__title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.53 35.5">
          <defs>
            <g>
              <mask id="programming-mask">
                <path
                  ref={(el) => (maskProgramming = el)}
                  className="programming-mask"
                  d="M7.74,3.52,6.66,13.07l.24,7.24.65,2.27L1.27,15.06l4.56-1.62L12,9.93l4.38-3.14,1.29-2V3.52l-.7-1.06L15.11,1.4,12.61.75H9.06L6.9,1.17,4.59,2.23,3.25,3.29,2.33,4.58v.64l.23.65.49.88.43.37c2.17,2.86,9.06,8.55,9.06,8.55l.67,6.27.45-6,2.14-2,2.33-.78,1.59.33,1.72,1.36v3l-1.22,1.74-1.71.66-1.29-1.05-.64-1.69,1-2.1L19.5,14l1.37,1.59L21,16.94l-1.72,1.5H18.05l-.27-1,.41-.8.65-.37,7.72-2.36L23.78,16,22.65,17.9l.89,1.19,1.2-.58,1.16-2,.17-2,.06,3.73.43,1.12.86,2.78.69,3-.27,2.26-.79.93-1.82.37-2.32-.42-2.13-.41-2.42-1.94L17.5,24l11.65-9.43L29.68,17l.64,2.51L30.6,15l.92-1.76,1.74-.77L35,12.24l1.35.82L37,15l-2.45.34-.82,1.16-.43,1.13.86.53,1.41-.93.81-1.89.31,1.56L37,18l.81.32,1.65-1.74,1.95-2.7-1.22,4.55,3.14-5,.28,4.47L46.11,13l-.7,5.42,2.48-5.65-.59,6,2.54-6-.23,6.09,3-6.09-.78,5.86,2.91.2V8.68l1.52,8.24,2.58-5.24.51,6.49,1.86-2.3,4.65-2.76-4.39,3.38,1.2.93,2-1.27.86-2-.57,3,0,1.66.18,6.37-.69,2.58L62.85,30l-3.79,2.72-3.27,1.66-2.92.42-2.48-.19L47.3,32.9"
                />
              </mask>
            </g>
          </defs>
          <g id="programming-text">
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M41.26,14.66h0C41,14,41,14,40.68,14.35c-.16.18-.29.79-.1,1a3,3,0,0,0-.32,2.44.59.59,0,0,0,.33.4.57.57,0,0,0,.46-.25,13.1,13.1,0,0,0,.54-1.48c0-.07,1.07-2.31,1-2.32s-1.4,2.12-1.56,2.17l0-1.19h0C41.08,14.9,41.26,14.86,41.26,14.66Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M35.53,17.22c.11-.22.26-.38.55-.29a1.38,1.38,0,0,1,.14.3c.05.14.07.29.12.44a1,1,0,0,0,1.43.66,2.81,2.81,0,0,0,.66-.44,3.71,3.71,0,0,0,.58-.54,1.23,1.23,0,0,0,.41-.76l-1.08.66a5.58,5.58,0,0,1-.58.35c-.34.16-.56,0-.7-.32A3.54,3.54,0,0,1,37,15c-.74-.57-.74-.57-1.54-.22.58.71.58.71.18,1.44a1.22,1.22,0,0,1-.12.19c-.24.31-.1.57.07.83l-1.34-.06c-.34-.89.62-1.18.94-1.9-.3,0-.52,0-.64.06a2.67,2.67,0,0,0-1.25,2.29.55.55,0,0,0,.86.53A14.29,14.29,0,0,0,35.53,17.22Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M7.13,13.11c1.54-.89,3-1.73,4.37-2.53a37.21,37.21,0,0,0,4.7-3.27,5.21,5.21,0,0,0,1.64-2.17,2.31,2.31,0,0,0-.5-2.64A6.16,6.16,0,0,0,14.51.85,14.22,14.22,0,0,0,9.74.39,10.72,10.72,0,0,0,3.5,2.68a7.45,7.45,0,0,0-1.08,1,1.73,1.73,0,0,0-.29,1.92,2.56,2.56,0,0,0,.92,1.13c.12.08.25.19.39,0-.13-.25-.26-.53-.42-.78a1.62,1.62,0,0,1,.25-2.18,5.55,5.55,0,0,1,.49-.48,9.64,9.64,0,0,1,4-1.95,14.16,14.16,0,0,1,4.45-.24,8.9,8.9,0,0,1,3.59,1.07,3.32,3.32,0,0,1,1.36,1.51,1.4,1.4,0,0,1,.1,1.11,4.46,4.46,0,0,1-.85,1.47,29.4,29.4,0,0,1-2.74,2.24c-.8.58-1.67,1.09-2.52,1.59-1,.6-2.05,1.18-3.09,1.75-.21.11-.46.31-.8.06a7.34,7.34,0,0,1,0-.85c.16-2.36.22-4.73.58-7.07a1.27,1.27,0,0,0,0-.43c-.47.08-.59.12-.61.26A11.16,11.16,0,0,0,7,4.92c-.16,2.28-.33,4.56-.46,6.85a1.12,1.12,0,0,1-.63,1.12,17.48,17.48,0,0,1-3.37,1.4,4.53,4.53,0,0,0-1.14.48c-.07,0-.14.23-.1.29s.19.27.3.27A2.87,2.87,0,0,0,3,15c.84-.37,1.67-.75,2.51-1.11a.63.63,0,0,1,.81.08c0,.31,0,.68,0,1.06,0,.61,0,1.22,0,1.83a27.29,27.29,0,0,1,0,2.86,6,6,0,0,0,.65,2.62.36.36,0,0,0,.15.17c.09.06.23.14.3.1s.29-.2.29-.31a2.63,2.63,0,0,0-.12-.66c-.14-.63-.32-1.25-.41-1.89s-.15-1.52-.18-2.28A29.8,29.8,0,0,1,7.13,13.11Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M21,16.94l-.12-.19a2.13,2.13,0,0,0-.44.26c-.33.32-.63.67-1,1a.68.68,0,0,1-.85.12.74.74,0,0,1-.37-.94c.05-.18.16-.36,0-.54-.25,0-.36.24-.46.43s-.2.44-.34.74a2,2,0,0,1-.13-.43,2.92,2.92,0,0,1,2.43-2.66,1.07,1.07,0,0,1,1.18.85c.06.25-.15.54.19.79.09,0,.29,0,.34-.13a1.33,1.33,0,0,0,0-1.42,4.07,4.07,0,0,0-2.36-1.88,4.15,4.15,0,0,0-4,1.09,6.58,6.58,0,0,0-1.41,1.93c-.17.34-.36.66-.52,1-.84.2-.91.27-.89,1a.48.48,0,0,0,0,.12c.24,1.19.48,2.39.73,3.58a1.12,1.12,0,0,0,.23.39.41.41,0,0,0,.67-.08,1.08,1.08,0,0,0,.09-.55,8.15,8.15,0,0,0-.26-1.11,4.43,4.43,0,0,1,0-2.37,7.31,7.31,0,0,1,1.74-3.18,3.5,3.5,0,0,1,3.65-1.06c.16,0,.39.06.4.38-.26.11-.52.25-.8.35a3.26,3.26,0,0,0-1.57,1.29,2.9,2.9,0,0,0,.09,3.51,3.24,3.24,0,0,0,2.33,1.3c.68-.54.71-.62.67-1.6-.22.27-.36.48-.54.67a.83.83,0,0,1-1,.15,1,1,0,0,1-.51-.78,1.68,1.68,0,0,1,.54,0,1.41,1.41,0,0,0,1.47-.68C20.44,17.77,20.7,17.34,21,16.94Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M18.13,24.92a3.69,3.69,0,0,0,1.79,2.75A8.27,8.27,0,0,0,23.42,29a12.85,12.85,0,0,0,2.06,0s.07-.08.11-.13l-.36-.2a10.92,10.92,0,0,1,1.15,0,1.62,1.62,0,0,0,1.67-.75,3.1,3.1,0,0,0,.38-.94,5.84,5.84,0,0,0,.08-2.28,18.53,18.53,0,0,0-1.41-4.93A7.79,7.79,0,0,1,26.19,16a4.68,4.68,0,0,0-.09-.91c0-.22,0-.44,0-.68.22,0,.37,0,.52,0s.28-.14.21-.32a.41.41,0,0,0-.24-.19,1.75,1.75,0,0,0-1.2.32,9.43,9.43,0,0,0-1.15.94,5.37,5.37,0,0,0-1.56,2.74.91.91,0,0,0,.89,1.19,2,2,0,0,0,.78-.12c.21-.06.44-.16.42-.46s-.22-.26-.56-.21c-.07,0-.14.06-.22.07-.37.05-.6-.18-.51-.53a4.82,4.82,0,0,1,1.28-2.26.45.45,0,0,1,.4-.09.52.52,0,0,1,.22.36A2.66,2.66,0,0,1,25,17.61s0,.13,0,.2l.56.05c.27.73.48,1.46.79,2.15a19.91,19.91,0,0,1,1.35,4.84,5.6,5.6,0,0,1-.08,2A1.34,1.34,0,0,1,26.52,28c-.48.1-1,.16-1.46.24a6.25,6.25,0,0,1-4.58-1A7.73,7.73,0,0,1,18.13,24.92Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M50,16c0-.79,0-1.55,0-2.3,0-.2-.08-.4-.31-.42a.59.59,0,0,0-.41.13,3.78,3.78,0,0,0-.92,1.8c0,.15.1.33.2.61l.82-1.18c.09,1.32-.27,2.45.09,3.5A.43.43,0,0,0,50.1,18a4.34,4.34,0,0,0,.28-.62c.22-.57.43-1.14.67-1.69A3.68,3.68,0,0,1,52,14.4a.59.59,0,0,1,.25.74c-.11.48-.29.95-.4,1.43a10.06,10.06,0,0,0-.22,1.22c0,.07.12.2.21.23a.4.4,0,0,0,.32-.06.44.44,0,0,0,.19-.27c.19-1,.4-1.93.54-2.91a4.31,4.31,0,0,0,0-1.24.46.46,0,0,0-.73-.26,3.88,3.88,0,0,0-.62.66C51,14.6,50.5,15.28,50,16Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M42.8,14.84a1,1,0,0,1,.23.91c0,.49-.07,1-.09,1.48a2.22,2.22,0,0,0,.07.57.35.35,0,0,0,.56.11,1.69,1.69,0,0,0,.3-.48c.18-.42.33-.85.49-1.28a2.47,2.47,0,0,1,1.09-1.3,3.82,3.82,0,0,1,0,.48c-.09.6-.19,1.2-.27,1.8a3.1,3.1,0,0,0,0,.68.23.23,0,0,0,.16.14c.1,0,.25,0,.29-.08a1.3,1.3,0,0,0,.21-.52c.1-.94.18-1.89.25-2.85a4.21,4.21,0,0,0-.06-.79c0-.24-.38-.37-.53-.19a4.47,4.47,0,0,0-.74,1,3.07,3.07,0,0,1-1.11,1.33c0-.42,0-.79,0-1.17a3.81,3.81,0,0,0-.07-.67.46.46,0,0,0-.74-.24,5.55,5.55,0,0,0-.71.89.9.9,0,0,0-.17.91Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M29.2,16.15A15.4,15.4,0,0,0,29.82,19a.85.85,0,0,0,.15.3c.1.1.26.25.35.22a.78.78,0,0,0,.4-.34.65.65,0,0,0,0-.44c-.11-.55-.23-1.11-.36-1.7a7.5,7.5,0,0,1,.27-.94,11.66,11.66,0,0,1,.82-1.75,3.11,3.11,0,0,1,3-1.78s.06,0,.15-.12a2.12,2.12,0,0,0-.54-.36,2.14,2.14,0,0,0-1.9.55,5.83,5.83,0,0,0-1.56,1.93c-.14.28-.27.55-.39.83s-.25.61-.36.89Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M48.88,14.12c-.32-.21-.9,2.8-1.21,2.57,0-.36,0-.77.09-1.18s.16-1,.22-1.46a.52.52,0,0,0-.37-.65,1.77,1.77,0,0,0-.25.47,16.73,16.73,0,0,0-.46,3.59,1.37,1.37,0,0,0,.07.45c.07.22.2.44.46.43s.69-1,.79-1.13A10.33,10.33,0,0,0,48.88,14.12Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M29.68,15.33a2.4,2.4,0,0,0-.15-.64.47.47,0,0,0-.38-.12.31.31,0,0,0-.22.19.58.58,0,0,0,.17.35A2.33,2.33,0,0,0,29.68,15.33Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M12.54,15.67a1,1,0,0,0-.15.33.35.35,0,0,0,.15.24c.17.07.33,0,.29-.2S12.71,15.88,12.54,15.67Z"
            />{" "}
            <path
              mask="url(#programming-mask)"
              className="programming-text"
              d="M65.77,13.8c.18-.22.39-.43.13-.69a.63.63,0,0,0-.75,0,1.26,1.26,0,0,0-.43.36c-.12.18-.25.3-.46.25a.81.81,0,0,0-.74.21A15.27,15.27,0,0,0,62.2,15a11.33,11.33,0,0,1-1.94,1.59c-.15.09-.3.26-.58.07,0-.24-.07-.54-.08-.83,0-.73,0-1.46,0-2.18a4.19,4.19,0,0,0-.24-1.22.56.56,0,0,0-1.05-.17,3.37,3.37,0,0,0-.44.67c-.33.68-.63,1.38-1,2.07a5.19,5.19,0,0,1-.36.5,2.82,2.82,0,0,1-.14-.41c-.1-.79-.22-1.59-.3-2.38a8.53,8.53,0,0,0-.68-2.54,4.57,4.57,0,0,0-.71-1c-.1-.12-.27-.1-.36.07a16.43,16.43,0,0,1,1,3.36,1.28,1.28,0,0,1-.29,1.28,1.58,1.58,0,0,0-.32.72,15.8,15.8,0,0,0-.45,3.28,1.93,1.93,0,0,0,.15.78.45.45,0,0,0,.34.21.47.47,0,0,0,.31-.29,1.72,1.72,0,0,0,.06-.56c0-.61,0-1.22.06-1.83a5.58,5.58,0,0,1,.1-.68c0-.21.12-.41.22-.73.11.66.16,1.2.29,1.71s.59.61.93.18a4,4,0,0,0,.49-.89c.36-.8.7-1.61,1.06-2.41.07-.15.16-.35.41-.29A2.19,2.19,0,0,1,59,14.38c0,.83-.1,1.67-.14,2.51,0,.34,0,.71.32.93s.61,0,1-.39a3.89,3.89,0,0,1,1-.91c.61.74,1,.95,1.6.9a3.09,3.09,0,0,0,.88-.23,9.16,9.16,0,0,0,.85-.41,2.83,2.83,0,0,1,.12.49l.15,2.17a40.66,40.66,0,0,1,.07,5.84,5.92,5.92,0,0,1-1.18,3.17,10,10,0,0,1-2.15,2.21A40.67,40.67,0,0,1,58,32.9a12,12,0,0,1-4.79,1.45,7.42,7.42,0,0,1-5-1s-.12,0-.23.09a2.82,2.82,0,0,0,1.72,1.23,8.11,8.11,0,0,0,2.93.43,12.49,12.49,0,0,0,5.39-1.41,20.28,20.28,0,0,0,5.56-4.17,6.93,6.93,0,0,0,2-4.63,48.74,48.74,0,0,0-.22-6.51,18,18,0,0,1,.2-4.22A.84.84,0,0,1,65.77,13.8Zm-2.18,2.69c-.75.49-1.73.32-1.61-.34,0,0,1.74-2.35,2.51-1.3S63.9,16.3,63.59,16.49Z"
            />
          </g>
        </svg>
      </div>
      <div className="programming__line"></div>
      <div className="wrapper__image" ref={(el) => (iframe1 = el)}>
        <iframe
          className="programming__iframe1"
          title="stockholmcityfilms.se"
          src="https://www.stockholmcityfilms.se"
          loading="lazy"
          frameBorder="0"
        />
        <a
          href="https://www.stockholmcityfilms.se"
          target="_blank"
          rel="noreferrer noopener"
          frameBorder="0"
        >
          <h6>stockholmcityfilms.se</h6>
        </a>
        <div className="scroll-inside">
          <p className="arrow-up">--{`>`}</p>
          <p>scroll & click
            <br/> inside frames</p>
        </div>
      </div>
      <div className="wrapper__image2" ref={(el) => (iframe2 = el)}>
        <iframe
          className="programming__iframe2"
          title="språkkraft.se"
          src="https://sprakkraft.se"
          loading="lazy"
          alt=""
        />
        <a
          href="https://sprakkraft.se"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h6>sprakkraft.se</h6>
        </a>
      </div>
      <div className="programming__p" ref={(el) => (p = el)}>
        <p>
          I haven't been programming for so long, I acctually started studying
          front-end-programming in the fall of 2019. But I've still managed to
          make a few things and be a part of a few projects that I can show you.
          Next to this text you can se three websites that I've built.
        </p>
        <ul>
          <li ref={(el) => (li1 = el)}>
            <a
              href="https://sprakraft.se"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i>sprakkraft.se</i>
            </a>{" "}
            as part of an 2 month internship at the NGO Språkkraft.
          </li>
          <li ref={(el) => (li2 = el)}>
            <a
              href="https://stockholmcityfilms.se"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i>stockholmcityfilms.se</i>
            </a>{" "}
            for a production company that produces movies and tv-shows. I spent
            a few days on it.
          </li>
          <li ref={(el) => (li3 = el)}>
            <a
              href="https://linuskallin.se"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i>linuskallin.se</i>
            </a>{" "}
            which I did as my examination project. It took me about one month to
            complete it.
          </li>
        </ul>
      </div>
      <h5 className="programming__h5">Programming</h5>
      <h2 id="code" className="programming__h2">
        {" "}
      </h2>
    </section>
  );
}

export default Programming;
