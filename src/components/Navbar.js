import { Link } from 'gatsby';
import React, { useState } from 'react';
import facebook from '../img/social/facebook.webp';
import instagram from '../img/social/instagram.webp';

//import logo from '../img/logo.svg';

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className=''>
      <div className='bg-white pt-7'>
        <div className='flex bg-black flex-wrap items-center justify-between w-11/12 p-4 mx-auto md:p-5'>
          <Link to='/'>
            <h1 className='flex items-center text-white no-underline'>{}</h1>
          </Link>

          <button
            className='items-center block px-3 py-2 text-white border border-white rounded md:hidden'
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className='w-3 h-3 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
            } md:block md:items-center w-full md:w-auto`}
          >
            {[
              {
                route: `/`,
                title: `Home`,
              },
              {
                route: `/blog`,
                title: `Blog`,
              },
              {
                route: `/story`,
                title: `My Story`,
              },
              {
                route: `/work`,
                title: `Work With Me`,
              },
            ].map((link) => (
              <Link
                className='block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6'
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className='bg-white h-16 w-full'>
        <div className='mx-auto flex justify-between w-11/12 border-black border-2 h-full'>
          <div className='my-auto w-1/3 '>
            <a
              className='inline-block mx-5'
              title='facebook'
              href='https://facebook.com'
            >
              <img
                src={facebook}
                alt='Facebook'
                style={{ width: '1.6rem', height: '1.6rem' }}
              />
            </a>
            <a
              className='inline-block'
              title='instagram'
              href='https://instagram.com'
            >
              <img
                src={instagram}
                alt='Instagram'
                style={{ width: '1.6rem', height: '1.6rem' }}
              />
            </a>
          </div>
          <div className=' w-36'>
            <a
              href='/'
              className='inline-block green h-full w-full text-center '
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
