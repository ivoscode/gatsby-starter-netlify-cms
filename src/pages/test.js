import React from 'react';
import line from '../img/line.svg';
const Test = () => {
  return (
    <div className='bg-black w-1/3'>
      <img
        alt='graphics'
        className='hero-line absolute text-black  -left-24 top-10  z-0 w-72'
        src={line}
      />
      <p className='hero-text absolute z-20 w-2/3'>
        BE EFFECTIVE IN YOUR BODY{' '}
      </p>
    </div>
  );
};

export default Test;
