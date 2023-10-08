import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-1'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-2'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 gray'>
            I specialize in building web responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,
            React and next.js. I live currently in Turkey, Sanliurfa city. I am looking for a job.
          </p>
          <p className='py-2 gray'>
            I graduated from <Link className='text-blue-500 underline' href='https://www.re-coded.com/'>Re:Coded</Link>  Turkey Frontend Web Development Bootcamp 
            which is an immersive program designed to equip individuals with the skills and
            knowledge needed to excel in frontend web development. Through instructor-led classes and 
            a supportive community, participants learn not only technical aspects but also essential power
            skills like communication, teamwork, and leadership.
          </p>
          <Link href='/#projects'>
            <p className='py-2 gray underline cursor-pointer hover:text-blue-500'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-black rounded-lg flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src= "/assets/profile/my_photo.jpg" width={600} height={500} className='rounded-xl' alt='my profile image' />
        </div>
      </div>
    </div>
  );
};

export default About;