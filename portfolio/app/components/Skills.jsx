import Image from 'next/image';
import skills from '../data/skills.json';
import { useState } from 'react';
import '../globals.css';

const Skills = () => {
  const [hoveredText, setHoveredText] = useState('');

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div
                className='grid grid-cols-1 gap-2 justify-center items-center w-full h-full'
              >
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.title}</h3>
                </div>
                <div className='m-auto grid grid-flow-col gap-4'>
                  {skill.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className='relative'
                      onMouseEnter={() => setHoveredText(image.alt)}
                      onMouseLeave={() => setHoveredText('')}
                    >
                      <Image
                        src={image.src}
                        width={64}
                        height={64}
                        alt={image.alt}
                        className='w-[44px] h-[38px]'
                      />
                      {hoveredText === image.alt && (
                        <div className='absolute  p-1 text-sm rounded-lg shadow-md'>
                          {hoveredText}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
