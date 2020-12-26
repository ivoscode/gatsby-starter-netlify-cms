import { Link } from 'gatsby';
import React, { useState } from 'react';
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
              {
                route: `/contact`,
                title: `Contact`,
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
        <div className='mx-auto w-11/12 border-black border-2 h-full'>
          inner contents
        </div>
      </div>
    </header>
  );
}

export default Navbar;
