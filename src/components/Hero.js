import React from 'react';
import line from '../img/line.svg';
//import logo from '../img/logo.svg';

const Hero = () => {
  return (
    <div className='mb-32 ml-10'>
      <div className='relative pt-36 ml-4 mb-32 '>
        <img
          alt='graphics'
          className='hero-line absolute  -left-24 top-2  z-0 w-72'
          src={line}
        />
        <p className='hero-text  w-2/3'>BE EFFECTIVE IN YOUR BODY </p>

        <div className='text-white'>
          <h1>Hi, I'm Marina Muraskins</h1>
          <p>
            My goal is to give people the opportunity to live an active life
            without being ashamed of their bodies, and not to suffer from pain.
            My goal is to help you to become a better game player, be effective
            in your own body for everyday life, to be able to play with your
            kids. Future of fitness stand by functional fitness and no matter
            how old you are it will help you to create or return your better
            body. I keep learning about the human body and movements. Let's join
            in my journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
