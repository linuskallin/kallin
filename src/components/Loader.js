import React, { useEffect } from 'react';

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

function Loader(props) {

  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(".loader p", {
      duration: 3,
      text: "Loading...",
      ease: "none",
    });
  }, []);


  return (
    <div className="loader">
      <p> </p>
    </div>
  );
}

export default Loader;