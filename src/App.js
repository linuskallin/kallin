import React, { useRef, useState } from 'react'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Loader from './components/Loader'
import Menu from './components/Menu'
import Home from './components/Home'
import Linus from './components/Linus'
import Programming from './components/Programming'
import Design from './components/Design'
import Music from './components/Music'
import Contact from './components/Contact'

import './css/App.scss';

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  let homeRef = useRef(null)

  const [masterTl] = useState(gsap.timeline())

  const addTimeline = (tl, position) => {
    masterTl.add(tl, position)
  }

  return (
    <div className="App">
      {/* {loading &&
        < Loader />
      } */}
      < Menu homeRef={homeRef} addTimeline={addTimeline}/>
      < Home ref={homeRef} addTimeline={addTimeline}/>
      < Linus addTimeline={addTimeline}/>
      < Programming addTimeline={addTimeline}/>
      < Design addTimeline={addTimeline}/>
      < Music addTimeline={addTimeline}/>
      < Contact addTimeline={addTimeline}/>
    </div>
  );
}

export default App;
