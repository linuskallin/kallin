import React, { useState, lazy, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import loadable from "@loadable/component";

import Menu from "./components/Menu";
import Home from "./components/Home";
import Linus from "./components/Linus";
import Programming from "./components/Programming";
import Design from "./components/Design";
import Music from "./components/Music";
import Contact from "./components/Contact";
// const Linus = lazy(() => import("./components/Linus"));
// const Programming = lazy(() => import("./components/Programming"));
// const Design = lazy(() => import("./components/Design"));
// const Music = lazy(() => import("./components/Music"));
// const Contact = lazy(() => import("./components/Contact"));
// const Linus = loadable(() => import("./components/Linus"));
// const Programming = loadable(() => import("./components/Programming"));
// const Design = loadable(() => import("./components/Design"));
// const Music = loadable(() => import("./components/Music"));
// const Contact = loadable(() => import("./components/Contact"));

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
      {/* <Suspense fallback={<div>Loading...</div>}>
        <div> */}
          <Linus addTimeline={addTimeline} />
          <Programming addTimeline={addTimeline} />
          <Design addTimeline={addTimeline} />
          <Music addTimeline={addTimeline} />
          <Contact addTimeline={addTimeline} />
        {/* </div>
      </Suspense> */}
      <Menu addTimeline={addTimeline} />
    </div>
  );
}

export default App;
