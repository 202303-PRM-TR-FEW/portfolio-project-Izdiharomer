
import React from 'react';
import ProjectItem from './ProjectItem';
import projects from '../data/projects.json';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-sm tracking-widest uppercase text'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-4 gap-2'>
          {projects.projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              title={project.title} 
              imageUrl={project.imageUrl}
              description={project.description} 
              liveDemoUrl={project.liveDemoUrl}
              githubUrl={project.githubUrl} 
              tech={project.technologies.join(', ')} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
