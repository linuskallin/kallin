import React, { useState } from "react";

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
      <Linus addTimeline={addTimeline} />
      <Programming addTimeline={addTimeline} />
      <Design addTimeline={addTimeline} />
      <Music addTimeline={addTimeline} />
      <Contact addTimeline={addTimeline} />
      <Menu addTimeline={addTimeline} />
    </div>
  );
}

export default App;
