import React from 'react';
import line2 from '../img/line2.png';
//import logo from '../img/logo.svg';

const Hero = () => {
  return (
    <div className='mb-32 '>
      <div className='relative ml-10 pt-28  mb-32 '>
        <img
          alt='graphics'
          className=' absolute  -left-24 top-24  z-0 w-72'
          src={line2}
        />
        <p className='hero-text  z-40 font-semibold relative w-2/3'>
          BE EFFECTIVE IN YOUR BODY{' '}
        </p>
      </div>
      <div className='text-white mx-auto  px-5 bg-black opacity-75 mt-28'>
        <h1 className='text-5xl font-medium  mb-10'>
          Hi, I'm Marina Muraskins
        </h1>
        <p>
          My goal is to give people the opportunity to live an active life
          without being ashamed of their bodies, and not to suffer from pain. My
          goal is to help you to become a better game player, be effective in
          your own body for everyday life, to be able to play with your kids.
          Future of fitness stand by functional fitness and no matter how old
          you are it will help you to create or return your better body. I keep
          learning about the human body and movements. Let's join in my journey.
        </p>
      </div>
    </div>
  );
};

export default Hero;
