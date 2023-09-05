import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projects from '../data/projects.json';

const ProjectItem = ({ id, title, imageUrl, tech, liveDemoUrl, description, githubUrl}) => {
  

  return (
    <div className='relative flex justify-center m-2 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#07beb8] to-[#3dccc7]'>
      <Image
        className='rounded-xl group-hover:opacity-10 w-[405px] h-[220px]'
        src={imageUrl}
        alt='project_image'
        width={390}
        height={220}
        priority
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full m-0 p-1'>
        <h3 className='text-1xl text-white tracking-wider text-center'>{title}</h3>
        <p className=' pt-2 text-sm text-white opacity-90 text-center'>
          {tech}
        </p>
        <p className='text-xs py-1 p-1 text-white w-full text-center '>
          {description}
        </p>
        <div className='flex justify-center items-center gap-2'>
        <a
            href={liveDemoUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 mt-2 pink_button'>Live</button>
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-1 mt-2 pink_button'>code</button>
          </a>
          </div>
      
      </div>
    </div>
  );
};

export default ProjectItem;