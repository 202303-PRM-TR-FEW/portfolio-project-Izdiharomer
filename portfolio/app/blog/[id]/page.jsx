import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projects from '../../data/projects.json';

const Page = ({ id }) => {
  // Find the project based on the ID
  const project = getProjectById(id);

  function getProjectById(id) {
    return projects.projects.find((project) => project.id === id);
  }

  if (!project) {
    return <div>No project found with ID {id}</div>;
  }

  return (
    <div className='w-full' key={project.id}>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={project.imageUrl}
          alt='Tip_calculator Image'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{project.title}</h2>
          <p className='pt-2'>{project.technologies.join(', ')}</p>
        </div>
      </div>

      <div className='max-w-[1240px]  mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='pb-4'>Overview</h2>
          <p className='opacity-80'>{project.description}</p>
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
            <button className='px-8 py-2 mt-8'>Github code</button>
          </a>
          <div className='px-8 py-2 mt-4'>
            <Link href='/#projects'>
              <p className='underline cursor-pointer opacity-80 hover:text-blue-500'>Back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
