
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '@/public/assets/profile/logo.png';
import React, { useState, useEffect } from 'react';
import list from '@/public/list.svg';
import deleteIcon from '../../public/deleteIcon.svg';

function Navbar({ isDarkMode, setIsDarkMode }) {
    const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
    style={{ backgroundColor: `${navBg}` }}
    className={
      shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100]'
    }
  >
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'>
        
          <Image
            src={NavLogo}
            alt='/'
            width='30'
            height='30'
            className='cursor-pointer'
          />
        
      </Link>
      <div>
        <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#contact'>Contact</Link>
          </li>
          <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-500'>
          <button
  onClick={() => setIsDarkMode(!isDarkMode)}
  className="mode-toggle-button"
>
  {isDarkMode ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-sun-filled"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#fff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        stroke-width="0"
        fill="currentColor"
      />
      <path
        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-moon-filled"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#ffec00"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
        stroke-width="0"
        fill="currentColor"
      />
    </svg>
  )}
</button>

          </li>
        </ul>
        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className='md:hidden'
        >
          <Image src={list} alt='list icon' width={33} height={33}/>
        </div>
      </div>
    </div>

    <div
      className={
        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
      }
    >
      <div
        className={
          nav
            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
                <Image
                  src={NavLogo}
                  width={87}
                  height={35}
                  alt='logo_image'
                  className='h-auto w-[87px]'
                />
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <Image src={deleteIcon} alt='list icon' width={33} height={33}/>
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Let&#39;s build something legendary together
            </p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Projects
              </li>
            </Link>
            <Link href='/resume'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Resume
              </li>
            </Link>
            <Link href='/#contact'>
              <li onClick={() => setNav(false)} className='py-4 text-sm'>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
