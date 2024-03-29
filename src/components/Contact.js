import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact({ addTimeline }) {
  gsap.registerPlugin(ScrollTrigger);

  let contact = useRef(null);
  let maskContact = useRef(null);
  let maskDrawing = useRef(null);

  useEffect(() => {
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: contact,
        end: "+=5000",
        fastScrollEnd: true,
        preventOverlaps: true,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
        toggleActions: "play pause reverse none",
      },
    });

    contactTl
      .addLabel("contact fadein")
      .from(contact, {
        autoAlpha: 0,
        duration: 2,
      })
      .addLabel("start contact")
      // .to(
      //   maskContact,
      //   {
      //     strokeDashoffset: 1,
      //     duration: 6,
      //   },
      //   "start contact"
      // )
      .to({}, { duration: 8 })
      .to(
        maskDrawing,
        {
          strokeDashoffset: 0,
          duration: 10,
        },
        ">"
      )
      .addLabel("end contact");

    addTimeline(contactTl);
  }, []);

  return (
    <div className="wrapper__perspective" ref={(el) => (contact = el)}>
      <section className="contact">
        <div className="contact__title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.41 25.43">
            <defs>
              <g id="contact-mask">
                <mask id="contact-mask-contact">
                  <path
                    ref={(el) => (maskContact = el)}
                    className="contact-mask"
                    d="M57.86,14.3l3.8-1.49,2.9-1-2.71,3.27-1.35,3.8-.74-4.06-.07-.39.49-.4-.63-.36-.32-7.3-1.14-.4-1.88,7.93,1.49,1.18-1.93,2.27-1.55,1.17-1.5.47-1.43-.64-.58-.69-.11-1,.14-.91.53-1.08L53,13.76,50.63,12,48.89,19.2l-1.38.86L46,18.39l-.82-1.27,0-2.5-1.32,2.7-1.38,1.11-.58-.25,0-.72.83-2L44,14.63l1.08-.87,1.73.13.7-1.1-7.27-.32L38,13.82l-5,1.23,6.73,1.57-1.63,3.27s-.36.45-.57.4c-.55-.13-1-1.31-1.09-1.86a69.7,69.7,0,0,1-.58-7l-.24-4L33,8.21l-1.77,12L31,17.74V15.22L30.79,13l-.3-.52-1.55,1.63-1.05,2.51-.47,3-1-6-5.78-.47L22.5,13l1.16.64.72,1.07v1.36l-.29,1.38-.54,1.13L22.23,19l-1-.3-1.13-.67-.91-.69-.17-1,.17-1.16L21,13.26l-4.1,2.48-3,2.19a7.47,7.47,0,0,1-3,1.16L8,19.44c-3.65.16-4.44-1.17-5.22-1.86L1.2,15.25c-.95-3.4-.78-5.83.53-7.83L4.09,4.8c.72-1.11,5-3.11,6.24-3.49h0l.59-.14L14.19.59"
                  />
                </mask>
              </g>
            </defs>
            <g id="contact-text">
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M39.44,12.73a6.68,6.68,0,0,1-3,1.08c0-.22-.12-.44-.14-.67-.08-1.34-.15-2.69-.24-4a11.1,11.1,0,0,0-.17-1.29c0-.13-.17-.23-.3-.39A6.36,6.36,0,0,0,35.19,10c.05,1,.12,2,.17,3,0,.39.14.79-.11,1.14s-.77.18-1.16.26a5.36,5.36,0,0,0-1,.34.4.4,0,0,0-.13.3c0,.1.13.25.22.26a3.15,3.15,0,0,0,.81,0,2.05,2.05,0,0,1,1.52,0c0,.23.09.46.12.69.1.83.18,1.66.29,2.48a4,4,0,0,0,.88,2.06.83.83,0,0,0,1.33,0,2.39,2.39,0,0,0,.29-.52c.41-.9.83-1.8,1.22-2.71.08-.19.27-.4,0-.68l-2.18,3.12a2.16,2.16,0,0,1-.59-1.21,11.23,11.23,0,0,1-.37-3.78L38.26,14a1.89,1.89,0,0,0,1.17-1.26c.29.07.63.31.81-.24Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M7.66,20a4.6,4.6,0,0,0,.83,0c1-.18,2.11-.35,3.15-.6a8.38,8.38,0,0,0,3.3-1.6c.37-.29.77-.56,1.14-.86a2,2,0,0,0,.38-.44.23.23,0,0,0,0-.21.27.27,0,0,0-.19-.11,1.24,1.24,0,0,0-.45.11,14.37,14.37,0,0,0-1.29.85A8.89,8.89,0,0,1,11,18.7c-.66.14-1.32.26-2,.36a6.64,6.64,0,0,1-6-1.93,6.45,6.45,0,0,1-1.94-4.47A8.76,8.76,0,0,1,2.94,6.44,15.59,15.59,0,0,1,6.4,3.37,10.67,10.67,0,0,1,10,1.8c1-.22,1.95-.35,2.92-.53a3.93,3.93,0,0,0,.67-.19c.06,0,.13-.15.11-.19s-.11-.23-.19-.25a2.35,2.35,0,0,0-.59-.05,14.24,14.24,0,0,0-6,1.7,16,16,0,0,0-5,4.49A5.57,5.57,0,0,0,.63,9.46,21.1,21.1,0,0,0,.26,12.4a7,7,0,0,0,1.91,5.11A7.5,7.5,0,0,0,7.66,20Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M30.22,13.35a1.82,1.82,0,0,1,.36,1.35c-.06,1.22-.09,2.45-.08,3.68a6.44,6.44,0,0,0,.25,1.51.55.55,0,0,0,.44.3.56.56,0,0,0,.44-.31,2.18,2.18,0,0,0,.07-1.15,9.78,9.78,0,0,1-.38-3.64c0-.56,0-1.11,0-1.66a2.71,2.71,0,0,0-.13-.7c-.2-.56-.7-.73-1.11-.33a7.28,7.28,0,0,0-1.22,1.44,8.72,8.72,0,0,0-.68,1.64,2.3,2.3,0,0,1-.65,1.16,6.26,6.26,0,0,1-.41-1.55c-.22-1-.21-1-.66-1.44a2.31,2.31,0,0,0-.22,1.83c.13.82.28,1.64.44,2.45a3.18,3.18,0,0,0,.26.79.43.43,0,0,0,.76.06,2.21,2.21,0,0,0,.28-.65c.15-.57.25-1.16.4-1.73A6.18,6.18,0,0,1,30.22,13.35Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M24.29,13.68a3.06,3.06,0,0,0-2.56-1,3.5,3.5,0,0,0-3.05,3.74,2.29,2.29,0,0,0,1.19,2,9.32,9.32,0,0,1,.94.5,2.32,2.32,0,0,0,2.67.05,1,1,0,0,0,.68-1c0-.25.19-.5.28-.76a4.89,4.89,0,0,0,.39-2A2.07,2.07,0,0,0,24.29,13.68Zm-.5,3.43c-.07.19-.22.39-.21.58a.77.77,0,0,1-.52.75,1.74,1.74,0,0,1-2,0,8,8,0,0,0-.71-.38,1.73,1.73,0,0,1-.91-1.54,2.67,2.67,0,0,1,2.32-2.84,2.35,2.35,0,0,1,1.94.74,1.54,1.54,0,0,1,.4,1.22A3.66,3.66,0,0,1,23.79,17.11Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M57.56,15.35a2.65,2.65,0,0,0-.52.3c-.46.43-.91.88-1.34,1.35a6.71,6.71,0,0,1-1.83,1.3,2.26,2.26,0,0,1-1.28.19,1.77,1.77,0,0,1-1.53-1.7c.06-.92.21-1.83,1.25-2.22a.53.53,0,0,0,.25-.24.36.36,0,0,0,0-.32c-.08-.12-.27-.28-.34-.25a3.05,3.05,0,0,0-1.13.6,3.44,3.44,0,0,0-.93,2.84,2.1,2.1,0,0,0,.31.88,2.6,2.6,0,0,0,2.77,1.2,5.5,5.5,0,0,0,1.43-.55,8.56,8.56,0,0,0,2.88-3C57.61,15.7,57.56,15.57,57.56,15.35Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M48.54,19.3l-1,.18a7.47,7.47,0,0,1-1.66-2.21c-.49-.88-.23-1.84-.38-2.81h-.71a1,1,0,0,1,.78-.37c.37,0,.79.14,1.21-.2a2.86,2.86,0,0,0-.5-.36A2.44,2.44,0,0,0,44,14a6.16,6.16,0,0,0-2.34,3.21,2,2,0,0,0-.07.81.86.86,0,0,0,1.12.76,1.76,1.76,0,0,0,1-.66,2.32,2.32,0,0,1,.49-.5c.21-.15.33-.48.71-.38.16.29.3.62.49.91a7.79,7.79,0,0,0,1.63,2A.92.92,0,0,0,48.4,20a1.16,1.16,0,0,0,.22-.41S48.58,19.42,48.54,19.3Zm-4.66-2.4s0,.14-1.21.81c-1,.57.73-2.81,1.52-2.65C45.13,15.25,43.88,16.9,43.88,16.9Z"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M64.56,11.78c0-.09-.19-.2-.27-.18a10.56,10.56,0,0,0-1.48.33c-.67.23-1.32.54-2,.78a3.07,3.07,0,0,1-.72.06c-.07-.36-.16-.67-.19-1-.12-1.14-.22-2.29-.33-3.43,0-.46-.11-.49-.71-.42h0a11.73,11.73,0,0,0,.05,3A7.49,7.49,0,0,1,59,13.22a8.78,8.78,0,0,0-1,.55.47.47,0,0,0-.13.41.49.49,0,0,0,.35.25,7.71,7.71,0,0,0,1,0c.05.21.11.4.15.59.24,1.16.47,2.32.74,3.48a.6.6,0,0,0,.42.34.77.77,0,0,0,.49-.26,1,1,0,0,0,.17-.43c.24-.91.47-1.83.72-2.74a1.49,1.49,0,0,1,.31-.51,16.72,16.72,0,0,1,2.16-2.52.74.74,0,0,0,.21-.28A.53.53,0,0,0,64.56,11.78Zm-2.94,3.34c-.36.57-.61,2.2-.77,2.2a5,5,0,0,1-.46-3.17c.36-.7,3.44-2,3.56-1.77S62.07,14.39,61.62,15.12Z"
              />
              <polygon
                mask="url(#contact-mask-contact)"
                className="contact-text"
                points="58.87 7.95 58.87 7.95 58.87 7.94 58.87 7.95"
              />
              <path
                mask="url(#contact-mask-contact)"
                className="contact-text"
                d="M59.6,6.9a.58.58,0,0,0-.08-.22c-.1-.18-.38-.22-.47,0a1.32,1.32,0,0,0-.22.52,7,7,0,0,0,0,.79c.26-.22.53-.43.77-.64C59.62,7.13,59.62,7,59.6,6.9Z"
              />
            </g>
          </svg>
        </div>

        <div className="contact__line"></div>
        <p className="contact__p">
          Linus Kallin
          <br />
          <a href="mailto:contact@linuskallin.se">contact@linuskallin.se</a>
          <br />
          {/* <a href="tel:+46738208415">0738-208415</a>
          <br /> */}
          www.linuskallin.se
          <br />
          <span>---------------------</span>
          <br />
          <a
            href="https://www.facebook.com/linuskallin"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/linus-kallin-39466639/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <br />
          <span>---------------------</span>
          <br />
          Website made with:
          <br />
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React
          </a>
          <br />
          <a
            href="https://greensock.com/gsap/"
            target="_blank"
            rel="noreferrer"
          >
            GSAP
          </a>
          <br />
          <a
            href="https://www.adobe.com/se/products/illustrator.html"
            target="_blank"
            rel="noreferrer"
          >
            Illustrator
          </a>
          <br />
          <span>---------------------</span>
          <br />
          Size: 4.6 MB
          <br />
          Files: 61
        </p>
        <h5 className="contact__h5">Contact</h5>
        <div className="contact__drawing">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.9 451.15">
            <defs>
              <g id="contact-mask2">
                <mask id="contact-mask2-drawing">
                  <polyline
                    ref={(el) => (maskDrawing = el)}
                    className="contact-mask2"
                    points="63.13 129.93 111.5 87.71 161.78 51.18 214.32 24.38 196.77 42.49 177.57 61.31 137.38 91.02 55.45 169.54 8.61 220.52 16.35 219.91 154.52 121.75 304.5 33.11 349.61 11.55 327.5 34.41 283.84 70.68 224.29 119.49 168.9 177.16 126.55 230.97 59.57 325.61 93.12 292.33 126.37 260.16 206.19 204.64 308.19 140.43 390.24 100.2 421.21 91.02 375.79 128.63 263.72 210.64 176.31 276.61 109.94 334.64 66.19 378.28 67.89 380.88 85.08 377.3 152.49 334.44 233.02 275.88 297.63 236.65 352.39 209.01 320.47 232.13 269.01 266.31 218.08 307.7 172.53 350.27 140.02 388.16 111.43 421.93 103.04 437.47 101.5 444.71 107.8 447.56 132.7 444.58 220.14 394.52 346.53 324.32 426.54 282.79 476.76 265.48"
                  />
                </mask>
              </g>
            </defs>
            <g id="drawing">
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M65,301.05c-.58-.83-.05-1.21.32-1.6C71.61,293,77.43,286.23,84.16,280c4.81-4.44,9.52-8.93,14.41-13.32,9.06-8.14,18.34-16.12,28.29-23.63q13.52-10.2,27.15-20.3c6.28-4.63,12.68-9.17,19.09-13.69,4.52-3.2,9.17-6.29,13.74-9.45,2.14-1.48,4.18-3,6.33-4.5q7.41-5.06,14.9-10.05,3.77-2.53,7.58-5c6.24-4.06,12.45-8.14,18.76-12.13,5.92-3.74,11.91-7.4,17.93-11,4.38-2.64,8.86-5.17,13.3-7.74,4.76-2.75,9.48-5.53,14.3-8.21,6.93-3.88,13.68-7.93,20.9-11.5,4-2,7.69-4.18,11.59-6.21,4.28-2.23,8.64-4.36,12.95-6.56,3.27-1.67,6.48-3.4,9.77-5,4.11-2.07,8.25-4.09,12.41-6.1,6.64-3.22,13.25-6.49,20-9.61,5-2.33,10.23-4.48,15.36-6.69,3.88-1.68,7.72-3.42,11.67-5,3.49-1.38,7.1-2.59,10.69-3.79a9.51,9.51,0,0,1,2.88-.41c1.59,0,2.28.77,1.71,1.89a23.76,23.76,0,0,1-6,7.73c-5.41,4.56-10.89,9.09-16.47,13.53-4.72,3.76-9.6,7.39-14.45,11-7.43,5.6-14.85,11.2-22.35,16.74-6.74,5-13.61,9.87-20.4,14.81-3.85,2.8-7.64,5.65-11.49,8.44s-7.84,5.63-11.74,8.46q-6.57,4.75-13.08,9.56c-7,5.17-14.06,10.37-21.12,15.53-1.66,1.21-3.45,2.32-5.13,3.51-.67.47-1.19,1.06-1.86,1.55-3.12,2.28-6.28,4.54-9.42,6.81-1.29.93-2.58,1.85-3.84,2.8-4.55,3.46-9.08,6.94-13.65,10.39-5.5,4.16-11.07,8.27-16.56,12.44-3.11,2.37-6.11,4.83-9.17,7.24q-5.76,4.53-11.52,9.05c-4.3,3.37-8.65,6.71-12.9,10.11S180.2,258.6,176,262.12c-4.63,3.88-9.18,7.83-13.79,11.73-4,3.35-8,6.66-11.9,10-4.92,4.17-9.84,8.34-14.66,12.57-3.92,3.44-7.65,7-11.53,10.46-3.67,3.27-7.46,6.47-11.11,9.75-2.63,2.36-5.11,4.82-7.7,7.21-3.63,3.36-7.36,6.65-11,10-3,2.84-5.82,5.79-8.79,8.65-1.79,1.73-3.81,3.32-5.55,5.07-3.73,3.75-7.35,7.56-11,11.34-1.05,1.09-2.1,2.18-3.09,3.3q-1.86,2.1-3.61,4.28a6.82,6.82,0,0,0-.71,1.37,6.15,6.15,0,0,0,5,.29c2.81-1,5.6-2,8.34-3.05a58.16,58.16,0,0,0,6.62-2.92c4.42-2.42,8.78-4.91,13-7.52,5.63-3.45,11.19-7,16.64-10.58,6.73-4.46,13.33-9.05,20-13.6,3.12-2.14,6.21-4.32,9.3-6.49q7.31-5.14,14.58-10.33c7.86-5.61,15.68-11.25,23.55-16.86,4.46-3.18,8.93-6.35,13.47-9.47,5.66-3.88,11.39-7.7,17.12-11.53,5.47-3.67,10.93-7.34,16.46-11,4.44-2.89,8.94-5.72,13.46-8.55,5.48-3.42,11-6.84,16.51-10.21,3.22-2,6.58-3.81,9.83-5.75,3.92-2.35,7.75-4.78,11.7-7.1q9-5.28,18.05-10.42c5.11-2.89,10.29-5.71,15.47-8.53,5.73-3.1,11.43-6.23,17.25-9.22,4.62-2.38,9.4-4.57,14.12-6.83a5.1,5.1,0,0,1,1.61-.54A2,2,0,0,1,345,198c.25.24.19.74.08,1.1a1.58,1.58,0,0,1-.72.7c-1.69.92-2.89,2.33-5,2.84a2.75,2.75,0,0,0-1.16.77,62.58,62.58,0,0,1-10.79,8.07c-1.17.73-2.19,1.59-3.33,2.35-2,1.31-4,2.59-6,3.9-1.68,1.12-3.38,2.22-5,3.38-3.27,2.32-6.46,4.7-9.76,7-3.78,2.63-7.65,5.18-11.47,7.78-1.82,1.23-3.63,2.47-5.38,3.75-6.32,4.59-12.68,9.16-18.91,13.83-5.76,4.32-11.39,8.73-17.05,13.13-4.87,3.78-9.75,7.57-14.55,11.41-2.45,2-4.71,4-7.09,6.05s-4.62,3.82-6.91,5.74c-1.14,1-2.24,2-3.37,2.93-4.24,3.63-8.55,7.2-12.7,10.88-3.25,2.88-6.28,5.91-9.46,8.84-3.43,3.17-7,6.26-10.37,9.44-2.7,2.51-5.27,5.1-7.92,7.65-2.4,2.31-4.88,4.58-7.22,6.93-4.51,4.54-8.93,9.14-13.42,13.7-1.92,2-3.93,3.87-5.86,5.83-2.48,2.52-5,5-7.35,7.61-4,4.47-7.82,9-11.67,13.55-2.7,3.19-5.25,6.46-8,9.64a200.75,200.75,0,0,0-12.63,16.44c-2.7,3.88-5.51,7.72-8,11.67a53.09,53.09,0,0,0-3.73,7.27c-1.2,2.7-2.2,5.45-3.18,8.2a7.26,7.26,0,0,0-.29,2.54c0,1.87,1.28,3.12,3.64,3.63a18.53,18.53,0,0,0,7.6,0c3.09-.64,6.15-1.43,9.12-2.33,6.12-1.87,11.57-4.7,17.26-7.19,1.48-.64,3-1.17,4.49-1.87,3.64-1.77,7.29-3.55,10.84-5.43,5.5-2.9,11-5.87,16.37-8.86,5.15-2.84,10.25-5.75,15.35-8.64,3.63-2.06,7.27-4.11,10.83-6.24,3.92-2.35,7.74-4.8,11.64-7.18,2.92-1.78,5.9-3.5,8.85-5.25s6-3.6,9-5.39c6.37-3.78,12.77-7.53,19.13-11.33,7.59-4.53,15.13-9.13,22.74-13.65,4.55-2.72,9.18-5.35,13.77-8,6.89-4,13.73-8.06,20.69-12,7.8-4.41,15.69-8.73,23.56-13.07,4.52-2.49,9-5,13.63-7.4,5.13-2.69,10.37-5.28,15.55-7.91,3.82-1.95,7.61-3.93,11.44-5.87q9-4.5,17.94-9c4.22-2.11,8.39-4.29,12.71-6.28,8.71-4,17.48-7.93,26.26-11.84q10.46-4.65,21-9.19c3.53-1.53,7.07-3,10.69-4.43,3.38-1.31,6.83-2.54,10.33-3.66a24.78,24.78,0,0,1,4.77-.84,4.36,4.36,0,0,1,3.43.8,1.56,1.56,0,0,1,.47,1.34c-.13.56-.86.68-1.58.61a20.73,20.73,0,0,0-9.28,1.49c-3.81,1.44-7.71,2.76-11.53,4.19-1.53.57-3,1.27-4.44,1.92-5.51,2.43-11,4.84-16.52,7.28q-11.13,4.95-22.23,9.93c-5.54,2.48-11.12,4.92-16.59,7.5-4.63,2.19-9.12,4.53-13.65,6.84-7.7,3.91-15.37,7.86-23.07,11.77-3.93,2-7.94,3.91-11.81,6C332,317.14,325,321,317.86,324.9c-3.15,1.71-6.33,3.4-9.45,5.15-4.7,2.64-9.37,5.31-14.05,8-3.26,1.85-6.52,3.7-9.75,5.59-4.1,2.41-8.16,4.87-12.26,7.29-2.33,1.38-4.7,2.71-7,4.1-2.89,1.72-5.74,3.49-8.63,5.22-4.38,2.61-8.81,5.19-13.18,7.82-3,1.79-5.88,3.68-8.87,5.47-2.68,1.61-5.46,3.13-8.17,4.7-2.29,1.34-4.56,2.7-6.84,4-4.71,2.79-9.45,5.56-14.13,8.38-3,1.8-5.85,3.72-8.84,5.51-3.34,2-6.78,3.92-10.16,5.9-2.18,1.27-4.33,2.59-6.5,3.88-.67.4-1.34.8-2,1.18-3.12,1.74-6.22,3.5-9.38,5.2-2.62,1.41-5.34,2.72-8,4.13-2.25,1.2-4.44,2.48-6.66,3.72a130.61,130.61,0,0,1-15.8,7.86c-4.35,1.73-8.5,3.77-12.81,5.57a76.12,76.12,0,0,1-14.67,4.67,37.87,37.87,0,0,1-7.74.8A13.87,13.87,0,0,1,97,437.62a4.43,4.43,0,0,1-2.86-3.9,16.79,16.79,0,0,1,1.54-7.24c1.47-3.38,3.13-6.71,4.87-10a56.6,56.6,0,0,1,3.52-5.54c3.49-5.05,6.83-10.17,10.6-15.1,4.32-5.66,9-11.17,13.6-16.71q4.36-5.26,8.95-10.43c2.9-3.28,5.91-6.5,8.9-9.72,2.58-2.78,5.16-5.56,7.81-8.3,3.71-3.82,7.48-7.6,11.24-11.4,1.94-1.95,3.89-3.9,5.89-5.82q7.65-7.35,15.37-14.66,5.33-5,10.81-9.94c6.91-6.23,13.77-12.5,20.85-18.62q9.71-8.4,19.86-16.49,13.92-11.06,28.2-21.84c6.57-5,13.39-9.74,20.15-14.57,4.12-2.94,8.3-5.84,12.49-8.73q12.36-8.49,24.76-16.95c2-1.33,3.94-2.65,5.89-4a13.88,13.88,0,0,0,1.15-1c-.39,0-.6-.09-.7,0-6,3.11-12.07,6.19-18,9.37-3.44,1.83-6.72,3.84-10.08,5.74-5.79,3.29-11.64,6.51-17.39,9.84-5.37,3.12-10.64,6.34-16,9.51-5.73,3.43-11.51,6.81-17.17,10.31-6.06,3.74-12,7.6-18,11.4-3.78,2.4-7.6,4.77-11.37,7.18q-4,2.55-7.9,5.2c-3.92,2.66-7.81,5.35-11.71,8-5.59,3.87-11.19,7.72-16.75,11.61q-10.59,7.41-21.13,14.87c-2.79,2-5.59,3.94-8.36,5.92q-5.46,3.9-10.89,7.81c-3.06,2.19-6.12,4.39-9.21,6.56-4.74,3.31-9.48,6.62-14.28,9.87q-8.16,5.53-16.44,11c-2.18,1.44-4.47,2.78-6.75,4.13-3.87,2.31-7.8,4.58-11.65,6.9a53.74,53.74,0,0,1-9.07,4.44c-2.53.95-5,1.95-7.6,2.81a19.1,19.1,0,0,1-9.6.78c-2-.38-2.73-1.21-1.7-2.61a65.06,65.06,0,0,1,4.62-5.58c2.92-3.15,5.87-6.28,9-9.33q8.94-8.78,18.07-17.45c4-3.79,8-7.56,12.1-11.28,5.44-4.95,11-9.84,16.46-14.76,3.28-2.93,6.56-5.87,9.87-8.78,6.94-6.08,13.83-12.19,20.86-18.22q13.56-11.61,27.31-23.09c5.71-4.77,11.54-9.46,17.4-14.12,6.09-4.85,12.28-9.62,18.42-14.42,3.35-2.62,6.65-5.28,10-7.85q13.06-9.92,26.21-19.75c4.92-3.68,10-7.24,15-10.9,6.46-4.78,12.82-9.63,19.3-14.39,8.6-6.33,17.27-12.61,25.92-18.89,5.85-4.25,11.75-8.46,17.58-12.72s11.43-8.42,17.12-12.64q7.56-5.6,15.07-11.23,12.69-9.54,25.33-19.14c3.12-2.36,6.29-4.69,9.32-7.12,2.81-2.25,5.5-4.58,8.16-6.93a46.31,46.31,0,0,0,3.37-3.51,2.26,2.26,0,0,0,.78-2,3.3,3.3,0,0,0-2.77.15,139.87,139.87,0,0,0-13.42,5.34c-4.28,2-8.76,3.63-13.06,5.55-5.82,2.6-11.57,5.3-17.34,8-2.4,1.12-4.76,2.3-7.14,3.46-3.82,1.85-7.65,3.68-11.46,5.55-4.41,2.16-8.83,4.32-13.19,6.55-4.14,2.11-8.19,4.34-12.32,6.47-3.58,1.85-7.23,3.62-10.81,5.48-3,1.55-5.9,3.16-8.81,4.78Q286,140,276.26,145.46c-3.89,2.2-7.71,4.49-11.59,6.71-3.67,2.1-7.42,4.12-11,6.28-3,1.81-5.92,3.79-8.93,5.66-4.43,2.74-8.93,5.43-13.35,8.18-2.79,1.75-5.5,3.56-8.23,5.36-8.1,5.33-16.22,10.63-24.28,16-3.7,2.47-7.26,5.07-10.9,7.59s-7.21,5-10.79,7.46c-1.36,1-2.64,2-4,2.92-7.3,5.27-14.63,10.5-21.88,15.8-3.28,2.39-6.39,4.91-9.62,7.33-5.57,4.18-11.26,8.26-16.75,12.51-5.3,4.1-10.44,8.32-15.58,12.54q-4.95,4.06-9.66,8.31c-2.41,2.17-4.62,4.48-7,6.71s-4.5,4.44-7,6.51a135.16,135.16,0,0,0-12.15,12.14c-1.36,1.47-2.71,2.94-4.08,4.4a1.11,1.11,0,0,1-.57.38c-1.54.08-2.15,1-2.9,1.82C65.79,300.37,65.45,300.65,65,301.05Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M5.54,208.58c1.44-.83,2.91-1.56,4.2-2.44,6.3-4.31,12.59-8.64,18.81-13,5.11-3.6,10.15-7.26,15.18-10.93,4.22-3.08,8.34-6.24,12.57-9.31,3.27-2.39,6.67-4.67,10-7,3-2.13,5.83-4.32,8.8-6.45,2.48-1.78,5-3.5,7.56-5.26,3-2.09,6-4.21,9-6.28,4.06-2.77,8.2-5.47,12.26-8.24,3.17-2.17,6.26-4.41,9.44-6.58,3.47-2.37,7-4.72,10.5-7q11.64-7.63,23.33-15.23c3.75-2.43,7.56-4.82,11.36-7.2q9.42-5.9,18.9-11.75c2.9-1.79,5.95-3.45,8.86-5.23s5.91-3.82,8.92-5.68c4-2.46,8-4.89,12-7.31,6.8-4.09,13.59-8.2,20.45-12.24,4.35-2.56,8.86-5,13.25-7.51,3.76-2.18,7.41-4.46,11.15-6.66,2.34-1.37,4.75-2.67,7.12-4,2.58-1.46,5.14-2.94,7.72-4.41,4.31-2.45,8.58-4.93,12.94-7.33,3.39-1.86,6.91-3.6,10.34-5.43,2.36-1.26,4.61-2.65,7-3.89,5.25-2.72,10.58-5.37,15.86-8.08,4.89-2.51,9.75-5.06,14.63-7.59L339.35.36a2.57,2.57,0,0,1,2.91.19,6.42,6.42,0,0,1-.75,1.22,58.69,58.69,0,0,0-4.91,6.14,49.56,49.56,0,0,1-7.92,8c-2.93,2.44-5.68,5-8.53,7.48-2.21,1.92-4.45,3.82-6.68,5.72-4.37,3.73-8.72,7.48-13.14,11.17-3.06,2.55-6.22,5-9.32,7.54L276.49,59.69c-2.55,2.08-5,4.21-7.65,6.25a13.43,13.43,0,0,0-3.24,2.92A6.5,6.5,0,0,1,264.32,70l-14,11.78a10.39,10.39,0,0,1-1.09.87,48.12,48.12,0,0,0-6.29,5.13c-1.52,1.31-3.24,2.47-4.76,3.78s-2.88,2.7-4.32,4c-.58.54-1.21,1-1.81,1.56l-3.61,3.14c-3.06,2.68-6.17,5.33-9.17,8-1.42,1.29-2.61,2.73-4,4.07-.83.82-1.77,1.58-2.63,2.39-1.72,1.63-3.42,3.27-5.15,4.9q-3.15,3-6.33,5.91c-.5.46-1.06.89-1.56,1.34-1.65,1.49-3.35,2.95-4.91,4.49-3.2,3.16-6.3,6.37-9.48,9.54-2,2-4.17,4-6.17,6-1.64,1.68-3.06,3.48-4.74,5.13-1.23,1.2-2.05,2.63-3.75,3.6a7.48,7.48,0,0,0-2.24,2.24,92.9,92.9,0,0,1-6.34,7.37,1.48,1.48,0,0,0-.45.8,1.66,1.66,0,0,1-1.14,1.48c-.21.1-.48.26-.52.43-.47,1.72-2,2.93-3.28,4.28a19.47,19.47,0,0,0-1.53,2.22c-1.57,2.18-3.13,4.36-4.75,6.52-.8,1.07-1.76,2.07-2.58,3.14s-1.68,2.42-2.58,3.61c-1.14,1.51-2.35,3-3.51,4.48a13.77,13.77,0,0,0-1.51,2.09c-.56,1.14-2.18,1.89-2,3.31,0,.2-.44.47-.74.66-.66.44-1.27.88-1.07,1.65a.42.42,0,0,1-.15.41c-2.3,1.22-2.48,3.57-4.5,4.94-.1.06-.23.17-.21.24.21,1.12-.77,1.75-1.57,2.53a20.31,20.31,0,0,0-2.18,3c-1.68,2.32-3.42,4.62-5,7-1.15,1.68-2,3.47-3.26,5.11-1.68,2.27-3.59,4.43-5.34,6.67-1.1,1.41-2.07,2.87-3.12,4.31s-2.12,2.84-3.19,4.26-2.51,2.91-3.18,4.62c-.21.55-.89,1-1.27,1.51-1.27,1.75-2.48,3.52-3.74,5.27a30.2,30.2,0,0,1-4.34,5.51,12.64,12.64,0,0,0-1.61,2.55c-1.12,1.63-2.28,3.25-3.44,4.86-2.12,2.93-4.25,5.84-6.37,8.77a21,21,0,0,1-2.8,3.32c0-.29-.14-.65,0-.86,1.29-1.68,2.7-3.31,3.92-5,.79-1.08,1.25-2.31,2-3.41,2.26-3.28,4.6-6.51,6.88-9.78s4.46-6.46,6.71-9.68q5.14-7.37,10.35-14.69Q115,225.68,119.2,220q5-6.81,10.08-13.59c1.56-2.08,3.11-4.17,4.86-6.16,2.49-2.81,4.2-5.94,6.4-8.87,1.88-2.51,3.91-5,5.86-7.44,1.17-1.5,2.31-3,3.47-4.53,2.41-3.16,4.81-6.32,7.25-9.46,2.75-3.52,5.51-7,8.33-10.5a40.61,40.61,0,0,1,3-3.13c1.91-1.9,3.89-3.76,5.76-5.69,3.66-3.77,7.22-7.6,10.89-11.37,2.51-2.56,5.11-5.08,7.72-7.58,4.86-4.66,9.79-9.28,14.65-14,3.17-3,6.23-6.18,9.43-9.21,2.51-2.38,5.13-4.69,7.75-7q4.68-4.16,9.46-8.26,9.19-7.92,18.43-15.82c2.62-2.24,5.36-4.4,8-6.64s5-4.37,7.52-6.53c3.37-2.88,6.78-5.73,10.18-8.58q4.58-3.83,9.18-7.64c3-2.47,6-4.9,9-7.39,4.27-3.59,8.49-7.23,12.74-10.85,2.72-2.31,5.48-4.59,8.15-6.93q7.43-6.52,14.76-13.11A34.91,34.91,0,0,0,334.74,7a1.16,1.16,0,0,0,.16-1.14,16.19,16.19,0,0,0-2,.71c-3.66,1.85-7.27,3.75-10.93,5.6-2.95,1.49-6,2.91-8.91,4.41-5.23,2.67-10.46,5.34-15.65,8.05q-8.76,4.59-17.44,9.26c-2.62,1.41-5.12,3-7.72,4.4-2.44,1.35-5,2.58-7.41,4-3.89,2.21-7.68,4.52-11.55,6.76-3.7,2.14-7.47,4.23-11.19,6.37-2.45,1.41-4.87,2.87-7.31,4.3q-7.24,4.26-14.49,8.52c-2.9,1.72-5.77,3.46-8.65,5.21q-9.56,5.78-19.1,11.58c-1.64,1-3.14,2.13-4.78,3.12-5,3-10,6-15,9-4.45,2.72-8.84,5.5-13.24,8.28-6.21,3.92-12.45,7.83-18.61,11.8-5.2,3.36-10.33,6.79-15.47,10.22q-8.82,5.86-17.59,11.79c-4.27,2.88-8.52,5.8-12.75,8.72-4.57,3.16-9.13,6.32-13.66,9.52q-7.81,5.49-15.56,11.06c-4.5,3.22-8.95,6.48-13.42,9.72q-5.62,4.09-11.28,8.17c-5,3.56-10,7.1-15,10.65-2.49,1.78-4.94,3.59-7.47,5.34Q13.93,205.7,9,208.91a5.51,5.51,0,0,1-1.76.55,4.32,4.32,0,0,0-3,1.67A7.17,7.17,0,0,1,1.49,213,1,1,0,0,1,0,211.88a7.55,7.55,0,0,1,1.22-2.35q2.37-3.21,4.89-6.35c3.4-4.23,6.73-8.49,10.29-12.64,5.15-6,10.44-11.9,15.75-17.81q5.67-6.31,11.55-12.53c4.82-5.13,9.65-10.26,14.64-15.29,4.83-4.87,9.86-9.63,14.83-14.41q6.5-6.24,13.06-12.43,6.15-5.76,12.44-11.44c2.8-2.53,5.71-5,8.59-7.44,6.26-5.33,12.44-10.72,18.82-16,9.2-7.56,18.55-15,27.85-22.51,5.33-4.29,10.76-8.51,16-12.85q9.82-8.11,19.43-16.37a111,111,0,0,0,12.67-12.82c.49-.58.85-1.22,1.32-1.89a2.47,2.47,0,0,0-2.14.27c-5.14,2.51-10.3,5-15.38,7.57q-6.22,3.15-12.28,6.49c-3.88,2.15-7.66,4.39-11.43,6.65-4.85,2.9-9.7,5.8-14.44,8.81Q139.25,52,131,57.5q-9.51,6.42-18.8,13c-2.79,2-5.36,4.12-8,6.19-3.08,2.4-6.22,4.75-9.23,7.2-3.28,2.66-6.46,5.4-9.66,8.11-1.89,1.6-3.78,3.2-5.62,4.83Q73.89,102,68.19,107.14c-1.18,1.08-2.19,2.26-3.33,3.35-.77.74-1.69,1.39-2.47,2.12s-1.46,1.54-2.2,2.3c-.38.39-.86.75-1.2,1.16a4.9,4.9,0,0,0-.7,1.18c-.11.23,0,.5-.12.73a2.2,2.2,0,0,1-2.38,1,1.12,1.12,0,0,1-.63-1.81,25.15,25.15,0,0,1,2.41-2.56c2.41-2.31,4.83-4.62,7.28-6.9,3.24-3,6.5-6,9.77-9,1.63-1.5,3.27-3,5-4.46,4-3.39,8-6.75,12-10.12,2.66-2.22,5.28-4.47,8-6.63C102,75.54,104.5,73.76,107,72c2.83-2.09,5.64-4.19,8.52-6.24,3.26-2.33,6.56-4.62,9.87-6.9s6.6-4.59,10-6.76c6.3-4,12.68-7.94,19.06-11.87,4.64-2.86,9.29-5.72,14-8.49,3.39-2,6.91-3.8,10.4-5.67,3.11-1.67,6.18-3.39,9.39-4.95,5.3-2.58,10.7-5.06,16.06-7.58a2.29,2.29,0,0,1,.89-.3,4.21,4.21,0,0,1,1.78.19c.25.13.17.82,0,1.19-1.9,3.89-4.87,7.29-8,10.66-3.27,3.53-7.08,6.7-10.71,10-2.74,2.49-5.73,4.82-8.61,7.22-3.14,2.63-6.27,5.26-9.43,7.87-1.64,1.36-3.35,2.68-5,4L149.87,66.4c-3.06,2.41-6.17,4.78-9.17,7.22-4.53,3.69-9,7.43-13.49,11.13-3.07,2.53-6.19,5-9.25,7.56-1.51,1.25-2.95,2.56-4.4,3.85-1.24,1.1-2.44,2.23-3.68,3.33l-10,8.87c-3.19,2.85-6.39,5.69-9.53,8.58s-6,5.65-9,8.49c-4.19,4-8.38,7.95-12.52,12-2.11,2-4.09,4.16-6.15,6.23-1.5,1.52-3.06,3-4.54,4.53q-5,5.17-10,10.4c-2.66,2.79-5.34,5.58-7.94,8.4C35.58,172,31,177,26.51,182c-3.64,4.09-7.15,8.25-10.68,12.41-1.68,2-3.3,4-4.89,6-1.76,2.23-3.46,4.48-5.16,6.73C5.47,207.52,5,208,5.54,208.58Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M58.11,308.75c.57-2.58,2.61-4.44,4.26-6.6.81.57.49,1.05.19,1.45q-1.68,2.28-3.47,4.52A4.24,4.24,0,0,1,58.11,308.75Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M74.52,284.57c.23-1.61,1.5-2.66,2.57-4A6.73,6.73,0,0,1,74.52,284.57Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M52.6,315.26c-.2-.33-.42-.5-.38-.64a5.94,5.94,0,0,1,2.44-2.09C54.84,313.86,53.49,314.35,52.6,315.26Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M78.09,278.92a3.51,3.51,0,0,1,1.36-2.08l.39.15-1.32,2Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M57.64,309.8l-1.44,1.57C56,309.88,56,309.88,57.64,309.8Z"
                transform="translate(7.35 11)"
              />
              <path
                mask="url(#contact-mask2-drawing)"
                className="contact-drawing"
                d="M71.89,288.82l-.15.25c-.08-.05-.23-.09-.23-.14s.09-.17.14-.25Z"
                transform="translate(7.35 11)"
              />
            </g>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Contact;
