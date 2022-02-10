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

import "./css/App.scss";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [masterTl] = useState(gsap.timeline());

  const addTimeline = (tl, position) => {
    masterTl.add(tl, position);
  };

  return (
    <div className="App">
      <Home addTimeline={addTimeline} />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <div id="linus"></div>
          <Linus addTimeline={addTimeline} />
          <div id="programming"></div>
          <Programming addTimeline={addTimeline} />
          <div id="design"></div>
          <Design addTimeline={addTimeline} />
          <div id="music"></div>
          <Music addTimeline={addTimeline} />
          <div id="contact"></div>
          <Contact addTimeline={addTimeline} />
        </div>
      </Suspense>
      <Menu addTimeline={addTimeline} />
    </div>
  );
}

export default App;
