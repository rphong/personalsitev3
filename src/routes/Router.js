import React from 'react';
import { animated, useTransition, easings } from 'react-spring';
import { Routes, Route, useLocation } from 'react-router-dom';

import Intro from '../pages/Intro';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from '../components/Header';

export const pathIndex = [
  { path: '/', index: 1 },
  { path: '/experience', index: 2 },
  { path: '/projects', index: 3 },
  { path: '/contact', index: 4 },
];

const Router = () => {
  const location = useLocation();

  const prevIdx =
    location.state === null
      ? -1
      : pathIndex.find((x) => x.path === location.state.previousPath).index;
  const currIdx = pathIndex.find((x) => x.path === location.pathname).index;
  const reverse = prevIdx > currIdx ? true : false;

  const transitions = useTransition(location, {
    from: {
      transform: `translate3d(${reverse ? '-100vw' : '100vw'}, 0vw, 0vw)`,
    },
    enter: {
      transform: 'translate3d(0vw, 0vw, 0vw)',
    },
    leave: {
      transform: `translate3d(${reverse ? '100vw' : '-100vw'}, 0vw, 0vw),`,
    },
    // "initial: null" should only disable the 'from' initial transition, not the subsequent 'leave' transition (on the first manually triggered transition)
    initial: null,
    config: {
      duration: 1000,
      easing: easings.easeInOutQuart,
    },
  });

  console.log(reverse);

  return transitions((style, item) => (
    <Header>
      <animated.div style={style} className={'animated-routes'}>
        <Routes location={item}>
          <Route path='/' element={<Intro />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </animated.div>
    </Header>
  ));
};

export default Router;
