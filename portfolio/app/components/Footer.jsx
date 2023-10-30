
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Footer() {

  return (
    <div className='flex flex-col justify-center items-center bg-white gray mt-1 w-full h-full p-2  min-h-[70px] shadow-xl'>
      <div >
        <ul className='flex justify-between items-center w-full h-full gap-2 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4'>
          <li className='text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className=' text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#about'>About</Link>
          </li>
          <li className=' text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#skills'>Skills</Link>
          </li>
          <li className=' text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#projects'>Projects</Link>
          </li>
          <li className=' text-sm uppercase hover:border-b hover:text-blue-500'>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
    </div> 
    <di className="text-center py-4 text-gray-600 text-sm">&copy; 2023  All rights reserved.
    </di>
  </div>
  )
}

export default Footer
