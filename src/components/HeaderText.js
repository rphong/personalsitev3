import React from 'react';
import { useTransition, animated } from 'react-spring';

const HeaderText = ({ text, bgColor }) => {
  const transitions = useTransition(null, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },  
  });

  return (
    <div className='header-text-container'>
      <div
        className='header-text-cover'
        style={{ backgroundColor: bgColor }}
      ></div>
      {transitions((style) => {
        <animated.h1 className='header-text' style={{style}}>
          {text}
        </animated.h1>;
      })}
      <div
        className='header-text-cover'
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
};

export default HeaderText;
