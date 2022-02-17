import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Home = ({ addTimeline }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  let home = useRef(null);
  let scroll = useRef(null);
  let progressBar = useRef(null);
  let maskLinus = useRef(null);
  let maskPrick1 = useRef(null);
  let maskPrick2 = useRef(null);

  useEffect(() => {
    const homeTl = gsap.timeline({
      scrollTrigger: {
        trigger: home,
        pin: true,
        end: "+=2000",
        pinSpacing: true,
        // pinnedContainer: true,
        fastScrollEnd: true,
        preventOverlaps: true,
        scrub: 0.2,
        // markers: true,
        toggleActions: "play pause reverse none",
      },
    });

    homeTl
      .addLabel("start")
      .to(maskLinus, {
        onEnter: () => {
          gsap.to(maskLinus, {
            strokeDashoffset: 0,
            duration: 4.8,
            delay: 1,
          });
        },
      })
      .to(maskPrick1, {
        onEnter: () => {
          gsap.to(maskPrick1, {
            strokeDashoffset: 0,
            duration: 0.5,
            delay: 4.3,
          });
        },
      })
      .to(maskPrick2, {
        onEnter: () => {
          gsap.to(maskPrick2, {
            strokeDashoffset: 0,
            duration: 0.5,
            delay: 4.6,
          });
        },
      })
      .addLabel("scroll")
      .from(progressBar, {
        transformOrigin: "bottom",
        scaleY: 0,
        autoAlpha: 0.3,
        duration: 3,
      }, "start")
      .fromTo(
        scroll,
        {
          autoAlpha: 0,
        },
        {
          onEnter: () => {
            gsap.to(scroll, {
              autoAlpha: 1,
              duration: 2,
              delay: 4.5,
            });
          },
        },
        "scroll"
      )
      .addLabel("end home")
      .to(
        home,
        {
          autoAlpha: 0,
          duration: 1,
          ease: "power3.in",
        },
        ">"
      );

    addTimeline(homeTl);
  }, []);

  return (
    <div className="wrapper__perspective" ref={(el) => (home = el)}>
      <section id="home" className="home">
        <h4 className="home__h4">LINUS KALLIN - Portfolio</h4>
        <div className="scroll" ref={(el) => (scroll = el)} onClick={() => gsap.to(window, { duration: 1, scrollTo: {y:"#linus", offsetY: -570} })}>
          <p>Scroll down</p>
          <p className="arrow">--{`>`}</p>
        </div>
        <div className="home__signature">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517.65 423.42">
            <defs>
              <g id="Mask">
                <mask id="signatur-mask-linus">
                  <path
                    ref={(el) => (maskLinus = el)}
                    id="mask-linus"
                    className="signatur-mask"
                    d="M236.48,22.88,210,105.75l-21.41,41.13-38,57.19L69.71,318.6l-21.3,17.92L25.33,352.69,9.92,340.85l-6.11-46,13.41-58.15L40.48,186.8l35.35-51.58L115,92.51l17.32-8.81,12.82,5.15,10.2,12.9,2.34,20.54-.5,18.4-4.85,24.75-11,34.95-30.09,75.4L107,295a3.61,3.61,0,0,0,2.45,4l4-.12L129.08,288l11.76-12.47,8.82-11.18L165,229.68l5.36-14.25-13.25,44.42,8.54,4.08,5.59-11.9,14.55-35.35-10.52,34.83,1.26,9.39,2.74,3.87,5.68-3.87,5.22-9.34,6.08-20,3.6-.87-5.64,20.63,1.47,7.58,4.84,4.42,5.48-3.79,4.21-8.42,7.69-20.43-5,22.74,1.69,7.5,2.1,3.66,4.63.42,4-4.08L230,254l2.46-19.75L232,259.57l3-.69,7.37-22.1L244.8,246l6.93-29.59-1.72,21-3.1,14.5,2.08,6.41,5.39,3.54,6.07,1.33,13.14-3.54,19-7.3,16.8-9.77,17.91-15,26.53-25.86,20.34-21.3L397,145.37l14.81-30.5,7.07-22.11,4.65-19.46,3.09-26.08-2-16.58-5.56-12.16-9.5-9.25L400.81,6l-.48,2.69L398.13,7l-2.69,3-1.17-2.57-2,2.76-1.73-2-4,1.07L374.3,16.6,362.45,26.73l-10.82,8.33L327.75,62.69,301.22,101.6,285.53,129l-14.15,27.42-18.13,42L242.2,232.92,232,274l-3.32,35.37,1.1,30.07,5.31,34.26L240.87,391l6.41,15,8,8.62,4.77,3.25,1.44-.16.58,1,1.44-.21,3,1,4.77-1.28,1.35.34,1-1,1.7.13.61-.95,1.76-.13,2.61-2.41,10.94-13.71L305.64,370l15.48-45.55,13.71-46,16.8-55.38L362.46,186l.22-7.35-3-2-3.54-.23-1.07.35-.94-.43-1.12,1.1-1.53-.25-1.11,1.35-4.05,1.1-1.2.57-5.2,2.47L323.77,200.2,309,223.08l-8.84,21.25L294.37,265l-.22,13.71.88,7.74,5.53,9.16,7.52,2.33,8.84-2.33,12.83-9.38,14.76-25.3,11-22.23,8.75-24.32L366,203.91l-.22-6.4-7.3-3.72-16.72,23.65-1.85,10.84v10.61l1.85,6,9.87,9.81h7.29l7.3-3.62,6.41-8.45,8.66-28.07-6.67,29.8,2.66,6.37,4-2.75,8-22.44-1.77,17.09,1.55,7.56,2.44,6.57,3.9,1.28,6.7-10.28,3.84-21.39-.74,21.39,3.53,5.86,3.47,1.76,2.61-3.53,1.44-3.87,6.58-23.37.5,11.43,3.31,11.28,3.54,5.75,4.42,1.63,3.57-10.47.72-22.3,2.48,24.75,5.34.68,1.82-10.87,5.64,8.48,12,7.88,7.18,2.63,6.65.92,7.47-.93,8.07-1,8-4.32,4.66-3.46,3.87-5.87,1.88-6.29v-8.85L502.28,205.7"
                  />
                </mask>
                <mask id="signatur-mask-prick1">
                  <polyline
                    ref={(el) => (maskPrick1 = el)}
                    id="mask-prick1"
                    className="signatur-mask"
                    points="448.34 185.41 439.11 188.46 432.5 181.97"
                  />
                </mask>
                <mask id="signatur-mask-prick2">
                  <polyline
                    ref={(el) => (maskPrick2 = el)}
                    id="mask-prick2"
                    className="signatur-mask"
                    points="254.38 181.54 238.96 183.12 248.99 174.9"
                  />
                </mask>
              </g>
            </defs>

            <g id="Text">
              <path
                mask="url(#signatur-mask-linus)"
                d="M286.22,412a3.09,3.09,0,0,1-.42.92m0,0c-2.72,3.7-4.18,4.72-11.33,8.19-3.53.74-5.6,1.39-8.34.74-1.11-.26-2.28-.29-3.4-.51-4.39-.83-7.93-3.27-11-6.28a44.65,44.65,0,0,1-6.59-8.55c-3.52-5.59-5.37-11.73-7.21-17.94-.48-1.63-1.15-3.21-1.72-4.82a145.83,145.83,0,0,1-4-15,152.14,152.14,0,0,1-3-16.92c-.74-6-1.25-11.94-1.73-17.93-.33-4.15-.47-8.31-.64-12.47-.07-1.84-.07-3.69,0-5.53.29-7.17.48-14.34,1-21.49.38-5.31,1.1-10.6,1.88-15.87.67-4.59,1.6-9.15,2.48-13.71a3.58,3.58,0,0,0-.58-3.06,19,19,0,0,1-1.55-3.37c-1,.37-1.25,1.28-1.64,2a14.6,14.6,0,0,1-6.38,6.44,5.18,5.18,0,0,1-4.87.09,7.19,7.19,0,0,1-4.39-5c-.56-2.16-1.13-4.32-1.72-6.6-.77.2-.86,1-1.17,1.63a22.11,22.11,0,0,1-5.37,7.16c-2.81,2.43-5.46,2.19-8-.52a10.61,10.61,0,0,1-2.51-4.39c-.61-2-1.5-4-1.34-6.15,0-.16-.17-.33-.44-.79-.43.73-.75,1.28-1.06,1.84-1.4,2.5-2.69,5.07-4.2,7.5a13.74,13.74,0,0,1-4.77,4.69,4.79,4.79,0,0,1-6.61-2.51,14.35,14.35,0,0,1-1.35-6.36,14.16,14.16,0,0,0-.16-2.09c-.62.77-1,1.18-1.32,1.64a20.65,20.65,0,0,1-7.06,7c-3.88,2.2-7.75.38-8.54-4.08-.16-.9-.36-1.8-.55-2.72-1.32.11-1.68,1-2.13,1.71-1.7,2.72-3.36,5.47-5.07,8.19-1.46,2.3-2.9,4.62-4.5,6.83a30.2,30.2,0,0,1-2.64,2.53c-1.95,2.11-3.82,4.28-5.74,6.41a104,104,0,0,1-13,12.18,41.06,41.06,0,0,1-10,5.46,9.79,9.79,0,0,1-2.79.6c-2.49.2-3.85-.8-4.49-3.23a14.6,14.6,0,0,1,0-7.51c1.25-4.89,2.53-9.77,4-14.61,1.22-4.12,2.62-8.19,4.05-12.23a29.32,29.32,0,0,1,2.09-3.82L115,258c-1.14,1.32-2.17,2.38-3,3.57-1.16,1.58-2.18,3.28-3.3,4.91-3.42,4.94-6.83,9.89-10.28,14.8-2.82,4-5.59,8.1-8.57,12C85.5,298.9,81,304.42,76.64,310c-2.29,2.89-4.62,5.75-6.93,8.62-.3.37-.62.73-.95,1.08-2.22,2.32-4.38,4.68-6.67,6.93a104.67,104.67,0,0,1-8.37,7.82c-2.58,2-4.93,4.3-7.47,6.35-1.9,1.54-4,2.77-6.09,4.13a64.22,64.22,0,0,1-11.52,6.19c-2,.82-4.16,1.4-6.39.65a12.46,12.46,0,0,1-1.2-.54c.52-.9,1.31-.75,2-.88,1.48-.27,3-.52,4.41-.89A1.48,1.48,0,0,0,28.7,348c.15-1.44,1-2,2.39-1.56a3,3,0,0,0,3-.65c2-1.37,4-2.6,6-3.9a1.56,1.56,0,0,0,.34-.23c4.33-4.06,9.64-7,13.48-11.6.39-.48.84-.9,1.27-1.34,3.94-4.06,7.92-8.09,11.79-12.22,1.54-1.63,2.83-3.5,4.24-5.26,2.23-2.76,4.52-5.48,6.68-8.3,2.53-3.3,4.94-6.69,7.42-10,1.8-2.4,3.69-4.74,5.45-7.17,2.45-3.36,4.82-6.79,7.22-10.19,3-4.18,5.93-8.35,8.85-12.55,2.17-3.14,4.24-6.36,6.41-9.5s4.55-6.32,6.76-9.52c2-2.86,4-5.73,5.78-8.69a35.66,35.66,0,0,0,2.26-4.8c1.14-2.7,2.23-5.42,3.3-8.14,1.18-3,2.33-6,3.44-9,.53-1.46.86-3,1.41-4.45,1.86-4.94,2.92-10.17,5.72-14.75a18.77,18.77,0,0,0,1.35-3.41c.84-2.31,1.7-4.61,2.47-6.94.58-1.75,1-3.55,1.54-5.31.64-2.15,1.44-4.27,1.94-6.45,1.2-5.24,3.08-10.32,3.83-15.67,1-6.9,2.13-13.77,2.86-20.69.42-4,.09-8,.19-12.08a57,57,0,0,0-1.46-14.22,44.39,44.39,0,0,0-4.14-11.49,24.49,24.49,0,0,0-10.77-10.59,10.46,10.46,0,0,0-6.4-.85,28.84,28.84,0,0,0-14.24,6.34q-4.56,3.81-9.08,7.66a17.91,17.91,0,0,0-1.62,1.84c-.26.31-.44.74-.77.93-3.75,2.09-6.07,5.65-8.88,8.69-3.53,3.8-6.85,7.8-10.21,11.75-1.68,2-3.26,4-4.91,6-2.92,3.52-5.91,7-8.77,10.54-2.14,2.66-4.13,5.43-6.18,8.16-3.15,4.2-6.36,8.36-9.42,12.63-1.7,2.37-3.15,4.94-4.71,7.42-2.44,3.86-4.92,7.71-7.32,11.59Q45,183.64,43,187.31q-4.8,8.69-9.5,17.43c-1.21,2.28-2.24,4.65-3.31,7-2,4.46-4.15,8.89-6.05,13.41-1.72,4.09-3.2,8.28-4.76,12.43-.7,1.86-1.38,3.72-2,5.6-.86,2.73-1.64,5.48-2.46,8.22a20.66,20.66,0,0,1-.69,2.36,66.48,66.48,0,0,0-3.27,11.83c-.74,3.4-1.72,6.75-2.43,10.15-.55,2.6-.77,5.26-1.27,7.88a110.12,110.12,0,0,0-1.77,18.11,21.16,21.16,0,0,1-.37,3.46c-.07.37-.52.67-.79,1-.32-.31-.78-.58-.91-1a4.36,4.36,0,0,1-.1-1.62q.24-4.39.52-8.79c0-.75.16-1.49.24-2.24.29-2.71.52-5.42.88-8.12.44-3.24.9-6.48,1.5-9.69.56-3,1.23-6,2-9s1.39-5.94,2.44-8.86c1.73-4.79,2.81-9.81,4.26-14.71.56-1.89,1.37-3.7,2.07-5.54q2.61-7,5.24-14c.19-.51.45-1,.67-1.49.83-1.87,1.64-3.75,2.5-5.6,1-2.22,2.13-4.41,3.19-6.62.12-.24.3-.46.42-.7,1.34-2.68,2.66-5.38,4-8.05,1.52-3,3-5.93,4.65-8.84a141.62,141.62,0,0,1,9.08-15c.76-1,1.22-2.29,1.93-3.37,2.88-4.39,5.75-8.79,8.71-13.12,2.5-3.65,5.11-7.23,7.69-10.83s5.24-7.31,7.91-10.92c.77-1,1.74-1.92,2.59-2.91,3.8-4.44,7.22-9.2,11.07-13.6q8.23-9.37,16.69-18.57c2.59-2.8,5.41-5.4,8.18-8A26.22,26.22,0,0,1,115,92.51q4.47-3.08,9-6.07a6.77,6.77,0,0,1,1.66-.77c2.22-.69,4.42-1.46,6.67-2a14.47,14.47,0,0,1,13.79,3.78,36.11,36.11,0,0,1,9.23,14.27,63.8,63.8,0,0,1,3.88,21.06c.23,9,0,18-2,26.91-.73,3.33-1.2,6.72-1.87,10.07-.4,1.93-1,3.84-1.47,5.75-1.43,5.21-2.76,10.44-4.35,15.6-2,6.58-4.1,13.16-6.73,19.55s-5,12.85-7.51,19.29c-.33.85-.53,1.76-.79,2.64l.47.27a17.85,17.85,0,0,0,1.56-1.7c2.52-3.57,5-7.17,7.5-10.75,3.77-5.36,7.56-10.71,11.32-16.08.74-1.06,1.4-2.18,2.12-3.26,1.48-2.2,3-4.38,4.46-6.59.86-1.31,1.61-2.69,2.47-4,3.87-5.87,7.8-11.71,11.63-17.6,3.54-5.44,7-10.91,10.44-16.43,2-3.31,3.88-6.75,5.78-10.15,2.56-4.59,5.18-9.14,7.59-13.81,2.32-4.48,4.4-9.08,6.58-13.63.44-.93.86-1.86,1.3-2.79a180.63,180.63,0,0,0,7.71-19.18c1-2.9,2.23-5.73,3.21-8.63,1.26-3.69,2.39-7.41,3.53-11.13,1.71-5.54,3.47-11.07,5-16.65,1.48-5.25,2.73-10.57,4.11-15.86.37-1.44.83-2.87,1.25-4.31.56-2,1.1-3.94,1.69-5.9.13-.45.29-1,.63-1.24a2.23,2.23,0,0,1,1.62-.32c.24.06.5.93.4,1.36-1.42,6-2.81,12.09-4.38,18.09-1.86,7.07-3.77,14.12-5.88,21.12-2,6.66-4.28,13.25-6.47,19.86-1.3,4-2.55,7.94-4,11.83-1.38,3.63-3.05,7.15-4.58,10.72-.7,1.63-1.28,3.31-2.07,4.89-3,6-6.06,12.09-9.19,18.08-2.72,5.2-5.44,10.4-8.41,15.46-3.1,5.3-6.52,10.41-9.77,15.63-2.52,4.05-5,8.16-7.52,12.19-1.83,2.88-3.79,5.68-5.72,8.49q-3.18,4.65-6.4,9.27c-1.79,2.57-3.64,5.11-5.42,7.69s-3.34,5-5,7.46q-5.19,7.5-10.42,14.95c-3.6,5.15-7.23,10.27-10.8,15.44a63.26,63.26,0,0,0-4.42,6.88c-1.85,3.65-3.26,7.52-5.11,11.17-2.82,5.59-4.12,11.7-6.23,17.54a87.69,87.69,0,0,0-5.17,20.82,22.61,22.61,0,0,0-.22,3.06c.07,1.61,1.27,2.54,2.65,1.8,2.74-1.48,5.85-2.29,8.19-4.54,1-.94,2.27-1.52,3.31-2.38,1.89-1.57,3.7-3.24,5.55-4.86.51-.45,1.09-.83,1.56-1.32q1.81-1.92,3.55-3.91c.72-.82,1.37-1.7,2.06-2.55,2.16-2.63,4.31-5.29,6.51-7.89,1.19-1.4,2.49-2.7,3.71-4.06a7.54,7.54,0,0,0,1.09-1.48c1.38-2.59,2.7-5.21,4.07-7.8,1.55-3,3.18-5.88,4.67-8.86.82-1.65,1.48-3.38,2.14-5.09,1.25-3.26,2.5-6.51,3.65-9.8a21.47,21.47,0,0,0,1.29-4.93,21.4,21.4,0,0,1,2.73-7.87,27,27,0,0,1,1.86-3.16,1.59,1.59,0,0,1,2.11-.75,2,2,0,0,1,1.06,2.25c-.3,1.67-.65,3.34-1,5s-.75,3.46-1.22,5.16c-.33,1.18-.86,2.3-1.22,3.47s-.5,2.1-.78,3.15c-.57,2.1-1.16,4.19-1.75,6.29-.08.26-.23.5-.29.77a10.59,10.59,0,0,1-3.39,5.87,4.26,4.26,0,0,0-1.21,2.29c-.52,2.74-.92,5.5,0,8.28,1,2.95,3.1,3.48,5.26,1.37a21.92,21.92,0,0,0,5.41-7.31c2.43-5.86,5.34-11.53,7.16-17.63.84-2.81,1.49-5.67,2.32-8.48.64-2.17,1.4-4.29,2.14-6.42a9.42,9.42,0,0,1,.9-1.83c.45-.73,1.05-1.3,2-1a2,2,0,0,1,1.32,2.27,27.07,27.07,0,0,1-.83,3.8c-1.13,3.5-2.34,7-3.53,10.46a86.91,86.91,0,0,0-4.68,19.9,47.21,47.21,0,0,0,.26,6.92,3.07,3.07,0,0,0,.25,1c.73,1.73,2.34,2.18,3.53.75a35.57,35.57,0,0,0,4.21-6c1.46-2.77,2.52-5.74,3.75-8.62,1.1-2.57,2.25-5.12,3.31-7.71.85-2.08,1.6-4.21,2.38-6.32.19-.51.28-1.06.49-1.56.68-1.64,2.38-2.1,3.6-.87a2.19,2.19,0,0,1,.24,1.68,38.51,38.51,0,0,1-1.06,4,59.53,59.53,0,0,0-2.63,14.89,12.72,12.72,0,0,0,2.25,8.35c1.34,1.85,3.21,2.1,4.64.35a27.76,27.76,0,0,0,4.14-6.28c1.8-4.13,3.21-8.43,4.68-12.69.67-1.93,1-4,1.66-5.9a7.22,7.22,0,0,1,1.25-2.51c.87-1,1.9-.86,2.39.37a4.52,4.52,0,0,1,.25,2.36c-.83,4.63-1.75,9.25-2.65,13.88a1.18,1.18,0,0,0,0,.2c.1,3.67.1,7.33,1.37,10.88a3.88,3.88,0,0,0,6.2,1.58,14.89,14.89,0,0,0,3.76-5.53,54.45,54.45,0,0,0,3.41-12.42c.25-1.54.16-3.14.31-4.7a17.48,17.48,0,0,1,.55-3.22,2,2,0,0,1,1.88-1.63,1.89,1.89,0,0,1,1.73,2c0,1.83-.2,3.67-.26,5.5-.1,3.41-.18,6.83-.23,10.24a3.73,3.73,0,0,0,.67,2.09,5.08,5.08,0,0,0,.72-1.22c.95-4.05,1.85-8.12,2.79-12.18.42-1.79.87-3.58,1.35-5.35.35-1.32.7-2.64,1.17-3.92,1-2.73,2.24-5.4,3.16-8.16,1.73-5.18,3.31-10.41,5-15.61.23-.72.55-1.4.81-2.11,1.79-4.78,3.49-9.6,5.39-14.34,2.57-6.39,5.21-12.76,8-19.07,2.68-6.13,5.52-12.18,8.34-18.24q2.4-5.2,5-10.34c1.71-3.41,3.55-6.77,5.31-10.16,1.28-2.48,2.51-5,3.81-7.47.92-1.74,1.9-3.45,2.86-5.17,1.44-2.55,2.82-5.15,4.38-7.63,1.41-2.24,2.17-4.85,4.08-6.81.78-.8,1.07-2,1.69-3,2.82-4.42,5.63-8.85,8.53-13.22,2.69-4,5.45-8,8.23-12,4.24-6,8.38-12.12,12.84-18,3.69-4.83,7.7-9.41,11.72-14S347.53,37,351.9,32.69c5.26-5.15,10.57-10.29,16.6-14.59.83-.59,1.59-1.29,2.39-1.93a55.42,55.42,0,0,1,13.85-8.23c4.87-1.95,10-3.39,15.36-3.13a16.27,16.27,0,0,1,7.08,1.84,38.12,38.12,0,0,1,15.11,14.26A42.06,42.06,0,0,1,428,39.35,113.42,113.42,0,0,1,426.72,64c-.32,2.23-.45,4.49-.87,6.7-.93,4.82-2,9.62-3,14.42-.71,3.26-1.42,6.54-2.35,9.74-1.21,4.12-2.63,8.18-4,12.26-.95,2.84-1.92,5.68-3,8.5-.84,2.3-1.74,4.59-2.7,6.85-1.27,3-2.5,6-3.95,9-2.16,4.33-4.41,8.63-6.79,12.85-2.71,4.82-5.51,9.6-8.45,14.28-2,3.17-4.28,6.16-6.47,9.21-2,2.77-4,5.57-6.08,8.24-4.16,5.24-8.41,10.41-12.65,15.59-.68.83-1.27,1.63-.91,2.77.11.31.22.77.46.87,1.82.81,1.58,2.55,1.78,4,.85,6.09-.42,12-2.16,17.74-1.45,4.76-3.19,9.44-5,14.08-1.26,3.24-2.88,6.34-4.31,9.5-1.36,3-2.72,6-4,9-.81,1.9-.46,2.25,1.61,2.68,4.35.9,7.85-.8,10.79-3.66a32.32,32.32,0,0,0,8.89-16.29c1.07-4.64,2.48-9.21,3.79-13.79a5.92,5.92,0,0,1,1.12-1.94c.8-1,1.64-1.23,2.5-.78a2.23,2.23,0,0,1,1.27,2.36,42.81,42.81,0,0,1-2.08,10.61,96.56,96.56,0,0,0-2.77,9.41,39.79,39.79,0,0,0-.64,5.69,6.36,6.36,0,0,0,.09,1.63c.12.78.43,1.53,1.29,1.65s1.06-.67,1.39-1.26c2.61-4.76,4.13-9.93,5.78-15,.6-1.89,1.07-3.82,1.59-5.73,0-.13.06-.26.1-.4.52-1.68,1.53-2.55,2.66-2.29s2,1.76,1.71,3.47c-.52,3.3-1,6.61-1.54,9.91-.86,5.55.37,10.87,1.85,16.14a5.16,5.16,0,0,0,2.83,3.11,5.08,5.08,0,0,0,2.36-2.51,41.92,41.92,0,0,0,3.2-8c.63-2.51,1.54-5,2.15-7.48.51-2.11.76-4.28,1.15-6.42a27,27,0,0,1,.66-3,1.85,1.85,0,0,1,1.82-1.4,1.69,1.69,0,0,1,1.83,1.34,11.58,11.58,0,0,1,.3,3.21c-.26,3.74-.47,7.5-1,11.21a11.06,11.06,0,0,0,1.33,6.49,17.71,17.71,0,0,0,1.33,2.31c1.05,1.5,2.7,1.4,3.32-.3.87-2.36,1.55-4.79,2.25-7.2.55-1.9.92-3.86,1.53-5.73,1.27-3.89,2.65-7.74,4-11.6a2,2,0,0,1,2-1.49,2.13,2.13,0,0,1,2.11,1.37,5.64,5.64,0,0,1,.43,2.17,45.55,45.55,0,0,0,2,14.13,20.78,20.78,0,0,0,3.36,7.63c.45.56,1,1,1.74,1.81a17.15,17.15,0,0,0,1-1.78,31,31,0,0,0,1.65-4.58,42.82,42.82,0,0,0,.81-6.28c.32-4.84.52-9.69.81-14.52a3.52,3.52,0,0,1,.57-1.71,1.76,1.76,0,0,1,3.16.13,4.3,4.3,0,0,1,.59,1.92c.05,2.73,0,5.45,0,8.17a4.35,4.35,0,0,0,.37,2,7.2,7.2,0,0,1,.72,4.35c-.17,1.65.51,3.12,1.62,4.87a7.75,7.75,0,0,0,1.06-1.75c.43-1.78.75-3.59,1.08-5.4a12.66,12.66,0,0,0,.15-1.63,2,2,0,0,1,1.67-2c1.12-.26,1.76.31,2.39,1.14,2.09,2.77,4.2,5.53,6.39,8.22a14.81,14.81,0,0,0,2.48,2.1c1.45,1.12,2.89,2.28,4.4,3.31a30.7,30.7,0,0,0,3.7,2.11,28.3,28.3,0,0,0,12.09,2.8,50.76,50.76,0,0,0,5.89-.45c1.57-.16,3.12-.42,4.67-.66a33.9,33.9,0,0,0,9.46-3.11c2.34-1.09,4.08-2.93,6.25-4.19a4.72,4.72,0,0,0,1.36-1.51,22.47,22.47,0,0,0,3.67-16.94,36.27,36.27,0,0,0-4.17-10.83c-.87-1.61-1.54-3.34-2.28-5-.53-1.18-1-2.36-1.52-3.56a5,5,0,0,1-.18-1.14c.93-.24,1.2.39,1.56.85,2.18,2.78,4.35,5.59,6.56,8.35a6.6,6.6,0,0,1,1,2.15,11.84,11.84,0,0,0,2.25,4.72,21.87,21.87,0,0,1,2.2,2.69,5.48,5.48,0,0,1,.89,2c.28,1.45.34,2.95.62,4.41.79,4-.32,7.81-1.64,11.4a18.36,18.36,0,0,1-4.31,6.37c-2.76,2.76-6.23,4.39-9.49,6.32a22.56,22.56,0,0,1-5.79,1.94c-2.9.78-5.82,1.41-8.74,2.1a4.9,4.9,0,0,1-1.21.16c-2.38,0-4.76,0-7.15-.05a27.66,27.66,0,0,1-13.26-3.64c-1.37-.75-2.77-1.46-4.17-2.17a34.07,34.07,0,0,1-9-7.06c-.14-.14-.27-.31-.41-.46-1.48-1.54-2.13-1.43-3.16.53a8.84,8.84,0,0,1-1.14,1.93c-1.76,1.92-3.72,2.14-6.05.79-1.5-.88-2.32-.63-3,1-.58,1.45-1.07,2.95-1.54,4.44-1.07,3.42-3.2,3.69-6.27,2.22a9.77,9.77,0,0,1-4.81-5.14c-1.23-2.87-2.21-5.86-3.26-8.82-.49-1.38-.88-2.79-1.42-4.5a8.41,8.41,0,0,0-.51,1.16c-.49,2.19-.86,4.4-1.46,6.56-1,3.67-1.93,7.41-4.78,10.23a4.63,4.63,0,0,1-5.6.85,8.6,8.6,0,0,1-3.89-4.06c-.35-.66-.66-1.33-1-2a3.05,3.05,0,0,0-2.8,2.33,11.73,11.73,0,0,1-5,6.3c-2.26,1.28-3.69,1.15-5.52-.68a13.58,13.58,0,0,1-3.85-6.65c-.49-2.12-1.06-4.23-1.61-6.35,0-.17-.23-.3-.54-.69-.45.72-.81,1.34-1.21,1.92a42.07,42.07,0,0,1-3.18,4.48c-2.36,2.6-5.58,1.76-6.73-1.63-.24-.71-.46-1.42-.77-2.11a6.62,6.62,0,0,0-.87-1.17c-1.12,1.32-2.18,2.52-3.19,3.76-4.87,5.9-11,8.34-18.55,6.68a1.69,1.69,0,0,0-2.18.93c-.92,1.75-1.82,3.52-2.72,5.28-2.67,5.23-5.46,10.4-7.94,15.71a66.57,66.57,0,0,0-3,8.67c-1.71,5.69-3.29,11.42-5,17.11q-3.48,11.44-7.12,22.86c-1.95,6.11-4,12.18-6.09,18.25-2.17,6.4-4.29,12.81-6.61,19.15-1.37,3.71-3.05,7.32-4.66,10.93q-3.17,7.11-6.48,14.15c-.89,1.91-1.94,3.75-2.94,5.61a2.27,2.27,0,0,0-.27,2.32c.58,1.08.18,2.11-.1,3.18a2.69,2.69,0,0,1-2.31,2,2.38,2.38,0,0,0-1.22.72m51.92-147.62c.44-.49,1-.94.41-1.78-.13.61-.26,1.21-.38,1.84-.13.32-.27.64-.4,1l.37.08ZM296.31,248c.67-1.49,1.17-3.06,1.77-4.58,1.71-4.38,3.18-8.88,5.23-13.1,2.64-5.45,5.87-10.62,8.61-16,2.58-5.11,6.12-9.53,9.58-14,2.17-2.8,4.53-5.46,6.87-8.13a58.57,58.57,0,0,1,9.17-9.05c1.31-1,2.69-1.84,4-2.77.95-.66,1.88-1.36,2.84-2s2.21-1.36,3.28-2.09c3.08-2.1,6.4-3.36,10.19-2.74a8.33,8.33,0,0,1,4.54,1.64c2.4,2.07,3,4.61,2.55,7.56l-.27,1.93a2.47,2.47,0,0,0,3-.84c2.68-3.27,5.42-6.5,8-9.85,2.46-3.18,4.68-6.55,7.15-9.73,4.12-5.3,7.42-11.14,10.9-16.85,3.12-5.11,5.78-10.52,8.43-15.9s5.12-11,7.57-16.57c1-2.24,1.78-4.58,2.59-6.9,1.24-3.54,2.5-7.07,3.58-10.65C417,93.55,418,89.72,419,85.89c.47-1.85.82-3.73,1.19-5.6.75-3.81,1.6-7.61,2.2-11.45.63-4,.95-8.14,1.51-12.2a72.88,72.88,0,0,0,0-20,35.17,35.17,0,0,0-4.58-14.11c-1.26-2-2.22-4.23-3.47-6.26a8.66,8.66,0,0,0-2.15-2.07,20.51,20.51,0,0,0-2.26-1.36c-1.82-1.05-3.59-2.22-5.49-3.12-1.3-.61-2.77-.82-4,.47a2.83,2.83,0,0,1-2.46.63,7.18,7.18,0,0,0-3.36.39c-2.2,1.13-4.32.64-6.32-.11a4.34,4.34,0,0,0-3.72.11c-3.19,1.68-6.36,3.4-9.46,5.24a49.28,49.28,0,0,0-4.25,3.13l.92,1.33c-1,1.09-1.76.31-2.6-.25a57.81,57.81,0,0,0-4.37,4,9.08,9.08,0,0,1-2.27,2c-.92.51-2,1-2.35,2.22l1.1.62-.06-.05a7.7,7.7,0,0,1-4.06,3.26,11.23,11.23,0,0,0-3.11,1.51c-2.6,2.38-5.07,4.91-7.52,7.47a3.44,3.44,0,0,0-.82,2,2.23,2.23,0,0,1-1.95,2.23,5.69,5.69,0,0,0-2.62,1.42c-2.26,2.45-4.41,5-6.51,7.6-3,3.7-5.85,7.52-8.89,11.18-1.69,2-2.66,4.49-4.44,6.51-2.46,2.8-4.49,6-6.67,9-.71,1-1.39,2-.81,3.39.3.76-.45,1.33-1.16,1.37-1.46.06-2.09,1-2.77,2.09-1.78,2.89-3.66,5.74-5.51,8.59s-3.75,5.52-5.48,8.37c-2.27,3.72-4.44,7.52-6.58,11.32-3,5.29-5.93,10.58-8.79,15.93-2.15,4-4.17,8.11-6.17,12.22-2.93,6-5.86,12-8.66,18.07q-3.94,8.55-7.58,17.22c-2.24,5.34-4.34,10.74-6.37,16.17-2.23,6-4.32,12.07-6.45,18.12-.26.74-.7,1.51-.16,2.26.16,0,.23.09.28.07a5.62,5.62,0,0,0,.58-.19c1.61-.53,2.17-.24,2.27,1.42a15.23,15.23,0,0,1-.1,4.27,25.5,25.5,0,0,0-.91,5.95,1.77,1.77,0,0,1,0,.2c-.13,1-.57,2,.56,2.79.17.12.16.64.1.95-.37,1.8-.83,3.58-1.18,5.38-.79,4.09-1.75,8.16-2.24,12.28a9,9,0,0,0,3.2,8.25,11.3,11.3,0,0,0,10.17,2.44c4.66-1,9.29-2.23,14-3.18m-12.11,7.38a17.06,17.06,0,0,1-7.72.3c-6.4-1.56-10.12-5.84-11.95-12-.61-2-.41-4.39-2.23-6-.24-.21-.14-.77-.23-1.17s-.22-.73-.47-1.58c-.4,1-.67,1.49-.83,2-1.23,4.19-2.48,8.37-3.66,12.58a179.19,179.19,0,0,0-4.4,23.55c-1.55,11.26-1.83,22.6-1.88,33.94,0,5.59.38,11.18.63,16.78.31,6.82.82,13.63,2.78,20.23a6.22,6.22,0,0,1,.1,1.22c.09,1.29.09,2.59.28,3.87.42,2.83.84,5.67,1.44,8.47a67.24,67.24,0,0,0,3.09,11.66c.46,1.13.73,2.34,1.12,3.5,1.38,4.21,2.61,8.48,4.2,12.62a58.1,58.1,0,0,0,6,10.94,24,24,0,0,0,9.35,8.58c6.23,3.18,11.92,2.39,17.4-1.85a54.47,54.47,0,0,0,8.42-8.89c1.08-1.32,1.92-2.86,1.21-4.73-.08-.2.11-.5.17-.73,2.27-.28,2.27-.28,3.62-2.36.3-.46.56-.94.81-1.42a206.65,206.65,0,0,0,10.84-22.92c2.08-5.41,4.21-10.8,6.24-16.23,1.77-4.72,3.42-9.48,5.12-14.23q1.17-3.27,2.33-6.54c.13-.39.23-.78.34-1.18.38-1.3.7-2.62,1.13-3.91,1.07-3.24,2.19-6.46,3.27-9.69.5-1.49.94-3,1.41-4.5,1.21-3.84,2.43-7.68,3.62-11.52.38-1.24.62-2.52,1-3.76.8-2.6,1.67-5.18,2.48-7.78.22-.74.31-1.52.47-2.28a4.19,4.19,0,0,0-2.06,1.18,30,30,0,0,1-11,7.64c-2.65,1-5.28,2.11-8.28,2a14.42,14.42,0,0,1-12.86-7.72,25.51,25.51,0,0,1-2.79-8.73,58.17,58.17,0,0,1-.6-8.76,105.08,105.08,0,0,1,1.78-18.74,11.87,11.87,0,0,0,0-1.52m3.49,4.64a68.94,68.94,0,0,0-1.23,12.63c0,5.3-.15,10.69,1.95,15.75.7,1.71,1.05,3.75,3.26,4.38.16.05.26.3.37.47a5.49,5.49,0,0,0,3.76,2.21c5.62,1.07,10.63-.62,15-4a51.17,51.17,0,0,0,11.19-11.88,14.18,14.18,0,0,0,1.87-3.83c1.4-4.64,2.6-9.34,4-14,.95-3.21,2-6.39,3.11-9.55a5.63,5.63,0,0,0-.34-4.72,22.59,22.59,0,0,1-2.47-9,64.45,64.45,0,0,1,1.67-18.89c-.25.19-.52.37-.76.59-5.38,4.84-10.83,9.61-16.12,14.54-5.06,4.72-10.74,8.65-16.23,12.81m-2.26-3.56c5-3.45,9.66-7.36,14.35-11.22,6.44-5.3,12.48-11,18.56-16.7.8-.75,1.54-1.56,2.35-2.28a43.37,43.37,0,0,0,8.19-9.37,85.6,85.6,0,0,1,5.23-6.82,13.51,13.51,0,0,1,.89-1.11c.79-.83,1.62-1.62,2.43-2.42,1-1,2.29-1.73,2.83-2.88a20.76,20.76,0,0,0,2-8.93c0-3-1.91-4.12-4.64-2.93-2.11.92-4.28,1.72-6.44,2.53a2.76,2.76,0,0,1-1-.07c-.26-.68.24-1.71-.48-1.8a22.11,22.11,0,0,1-2.71,2.18,32.74,32.74,0,0,0-7,5.62c-3.4,3.35-6.66,6.85-9.92,10.34a59.89,59.89,0,0,0-4.55,5.27c-2.43,3.29-4.69,6.71-7,10.08a3.64,3.64,0,0,0-.65,3.87,11.92,11.92,0,0,0-4.19,4.36,146.89,146.89,0,0,0-8.69,17.84c-.67,1.69-1.14,3.45-1.7,5.18l.51.34m55.62-18.74a70.41,70.41,0,0,0,6.12-23.47,14.19,14.19,0,0,0-.49-4.23c-.09-.41-.88-.87-1.37-.91-.33,0-.87.61-1,1.06-.29.82-.31,1.75-.57,2.59-1.28,4.1-2.64,8.18-3.91,12.28-1.36,4.43-2.64,8.88-4,13.33-.31,1-.68,2.07-1,3.12-1.05,3.6-2.08,7.21-3.14,10.8-.56,1.9-1.23,3.77-1.76,5.68-.21.79-.67,1.7.61,2.7a24.87,24.87,0,0,0,1.32-2.17c1.1-2.42,2.13-4.88,3.22-7.3m.67-26.26c.94-3,1.84-6.1,2.76-9.15l-.49-.28c-1.54,1.87-3.09,3.74-4.62,5.62-.85,1.05-1.67,2.13-2.51,3.2A23.31,23.31,0,0,0,346.2,215a27.84,27.84,0,0,0-2.94,8.2c-.49,2-.81,4-1.11,6a30,30,0,0,0,.49,12.16,7.15,7.15,0,0,0,.65,1.24c.27-.33.45-.46.5-.63m-98.65-6.17c.94-1.69,2-8.23,1.72-10.29C245.7,229.15,244.09,232.24,245.14,235.8Zm2.23-11.89.33,0,.06-.84-.31,0Z"
              />
              <path
                mask="url(#signatur-mask-prick2)"
                d="M248,175.41l-4.59,6.19a12.29,12.29,0,0,0,2.3.37c1.29-.06,2.57-.32,3.86-.4a38.31,38.31,0,0,1,4,0c.65,0,.87.55.79,1.2a2.66,2.66,0,0,1-2.68,2.35c-1.75.11-3.51,0-5.26.13-1.48.09-2.94.32-4.41.51-.4.05-.79.23-1.19.24a1.89,1.89,0,0,1-1.87-2.88,13.11,13.11,0,0,1,2-2.85c1.6-1.67,3.32-3.22,5-4.82C246.43,175,247,174.52,248,175.41Z"
              />
              <path
                mask="url(#signatur-mask-prick1)"
                d="M434.11,182.82a15.15,15.15,0,0,1,1.55,1.19,5.38,5.38,0,0,0,5.47,1.34,26.21,26.21,0,0,1,4.2-.74c1.78-.13,2.4.71,1.59,2.21a9,9,0,0,1-7,4.76c-1.52.21-2.76-.87-3.76-1.8a9.41,9.41,0,0,1-2.68-5.18,5.4,5.4,0,0,1,.12-1.54Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                d="M4.76,318a4.3,4.3,0,0,1-.6-4.29.73.73,0,0,1,1.31-.12A5.78,5.78,0,0,1,5,317.92S4.83,317.94,4.76,318Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                d="M17.83,348.71c.5-.18.82-.41,1-.34s.39.43.58.67c-.26.15-.54.43-.78.41S18.23,349.08,17.83,348.71Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                d="M7.61,333l-.73-1.45c1.11.15,1.28.59,1.21,1.19Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                d="M10.22,340.73a1.57,1.57,0,0,1-.3.12s-.12-.11-.11-.14a1.61,1.61,0,0,1,.17-.28Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                d="M6,324.37l-.18.26s-.14-.08-.14-.12a2,2,0,0,1,0-.34Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                className="signatur-text"
                d="M245.14,235.8c-1-3.56.56-6.65,1.72-10.29C247.15,227.57,246.08,234.11,245.14,235.8Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                className="signatur-text"
                d="M343.87,256.49l.39-1.82c.58.84,0,1.29-.41,1.78Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                className="signatur-text"
                d="M247.37,223.91l.08-.83.31,0-.06.84Z"
              />
              <path
                mask="url(#signatur-mask-linus)"
                className="signatur-text"
                d="M343.85,256.45v1.11l-.37-.08c.13-.33.27-.65.4-1Z"
              />
            </g>
          </svg>
        </div>
        <div className="progress-bar" ref={(el) => (progressBar = el)}></div>
      </section>
    </div>
  );
};

export default Home;
