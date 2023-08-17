import React, { useLayoutEffect } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { pathIndex } from '../routes/Router';

const Intro = () => {
  const location = useLocation();
  console.log(location);

  useLayoutEffect(() => {
    if (location.state === null) return;
    const prevIdx = pathIndex.find((x) => x.path === location.state.previousPath).index;
    const currIdx = pathIndex.find((x) => x.path === location.pathname).index;
    const direction = prevIdx > currIdx ? '' : '';

    console.log(direction);
  }, []);

  return (
    <>
      <div className=''></div>
      <div className='intro-wrapper header-wrapper'>
        <Header />
        <h1 className='display-name'>Richard Phong</h1>
      </div>
    </>
  );
};

export default Intro;
