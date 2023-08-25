import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import projects from '../data/projects.json';

const ProjectItem = ({ id, title, imageUrl, tech }) => {
  const project = projects.projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>No project found with id {id}</div>;
  }

  return (
    <div className='relative flex justify-center  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#07beb8] to-[#3dccc7]'>
      <Image
        className='rounded-xl group-hover:opacity-10 w-[405px] h-[220px]'
        src={imageUrl}
        alt='project_image'
        width={390}
        height={220}
        priority
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-1xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-sm text-white tracking-wider text-center'>
          {tech}
        </p>
        {/* Use Link to create a dynamic link */}
        <Link href={`/blog/${project.id}`}>
          <p className='text-center py-1 m-1 rounded-lg bg-white text-gray-700 font-bold text-sm cursor-pointer'>
            <span className='px-3 py-2'>More Info</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
