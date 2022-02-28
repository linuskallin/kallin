import React, { useState, lazy, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Linus from "./components/Linus";
import Programming from "./components/Programming";
import Design from "./components/Design";
import Music from "./components/Music";
import Contact from "./components/Contact";
import Rotate from "./components/Rotate";

import "./css/App.scss";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [masterTl] = useState(gsap.timeline());

  const addTimeline = (tl, position) => {
    masterTl.add(tl, position);
  };

  return (
    <div className="App">
      <Rotate />
      <div className="menu-div">
        <Home addTimeline={addTimeline} />
        <div className="spacer1"></div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <div className="menu-div">
            <div id="linus"></div>
            <Linus addTimeline={addTimeline} />
            <div className="spacer2"></div>
          </div>
          <div className="menu-div">
            <div id="programming"></div>
            <Programming addTimeline={addTimeline} />
            <div className="spacer3"></div>
          </div>

          <div className="menu-div">
            <div id="design"></div>
            <Design addTimeline={addTimeline} />
            <div className="spacer4"></div>
          </div>

          <div className="menu-div">
            <div id="music"></div>
            <Music addTimeline={addTimeline} />
            <div className="spacer5"></div>
          </div>

          <div className="menu-div">
            <div id="contact"></div>
            <Contact addTimeline={addTimeline} />
            <div className="spacer6"></div>
          </div>
        </div>
      </Suspense>
      <Menu addTimeline={addTimeline} />
    </div>
  );
}

export default App;
