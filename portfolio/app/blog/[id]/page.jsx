
"use client" 
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projects from '../../data/projects.json';

const Page = () => {
//const Page = ({ projectId }) => {
  // const getId = (id) => {
  //   const project = projects.find((p) => p.id === parseInt(id));
  //   return project ? project.id : '';
  // };

  // const projectIDFromFunction = getId(projectId);

  // // Find the project based on the ID.
  // const project = projects.projects.find((p) => p.id === parseInt(projectIDFromFunction));

  // if (!project) {
  //   return <div>Project not found</div>;
  // }
  const project = projects.projects.find((p) => p.id === 3);
  
  return (
    <div className='w-full' key={project.id}>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={project.imageUrl}
          alt='Tip_calculator Image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{project.title}</h2>
          <h3>{project.technologies.join(', ')}</h3>
        </div>
      </div>

      <div className='max-w-[1240px]  mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Overview</h2>
          <p>{project.description}</p>
          <a
            href={project.liveDemoUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Live</button>
          </a>
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Github code</button>
          </a>
          <div className='px-8 py-2 mt-4'>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>

        </div >

      </div>
      
    </div>
  );
};

export default Page;
