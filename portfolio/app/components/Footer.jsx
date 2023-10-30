
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Footer() {

  return (
    <div className='flex justify-between items-center bg-white text-grey-300 mt-1 w-full h-full px-2  min-h-[80px] shadow-xl'>
      <div >
        <ul className='flex justify-between items-center w-full h-full'>
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
        
        </ul>
    </div>
  </div>
  )
}

export default Footer
