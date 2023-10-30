
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '@/public/assets/profile/logo.png';
import React, { useState, useEffect } from 'react';
import list from '@/public/list.svg';
import deleteIcon from '../../public/deleteIcon.svg';
import dark_mode from '@/public/dark_mode.svg';
import light_mode from '@/public/light_mode.svg';


function Navbar({ isDarkMode, setIsDarkMode }) {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  //const [linkColor, setLinkColor] = useState('#1f2937');
  const [linkColor, setLinkColor] = useState(isDarkMode ? 'white' : '#1f2937');

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
  useEffect(() => {
    setNavBg(isDarkMode ? 'black' : '#ecf0f3');
    setLinkColor(isDarkMode ? 'white' : '#1f2937');
  }, [isDarkMode]);

  return (
    <div
      style={{ backgroundColor: `${isDarkMode ? 'black' : navBg}` }}
      className={
        shadow
          ? `fixed w-full h-20 ${isDarkMode ? 'bg-pink-300 text-[#fff]' : ''} shadow-xl z-[100] ease-in-out duration-300`
          : `fixed w-full h-20 ${isDarkMode ? 'bg-pink-300 text-[#fff]' : ''} z-[100]`
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='/'
            width='43'
            height='43'
            className='cursor-pointer '
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
                  <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={light_mode} alt='light mode icon' width={33} height={33} />
                ) : (
                  <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={dark_mode} alt='dark mode icon' width={33} height={33} />
                )}
              </button>

            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <Image src={list} alt='list icon' width={33} height={33} />
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
              ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen ${isDarkMode ? 'bg-black' : 'bg-[#ecf0f3]'
              } p-10 ease-in duration-500`
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
                <Image src={deleteIcon} alt='list icon' width={33} height={33} />
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
              <Link href='/#resume'>
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
