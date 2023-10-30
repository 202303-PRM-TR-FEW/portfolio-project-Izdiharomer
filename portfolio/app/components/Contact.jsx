import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import contact from '@/public/assets/contacts/contact.jpg';
import github from '@/public/github.svg';
import linkedin from '@/public/linkedin.svg';
import cv from '@/public/cv.svg';
import EmailCopyButton from './EmailCopyButton'

const Contact = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div id='contact' className='w-full lg:h-screen '>
      <div className='max-w-[1200px] m-auto px-2 py-1 w-full'>
        <p className='text-xl tracking-widest uppercase text'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8 '>
          <div className='col-span-3 lg:col-span-2 bg-[#fff] w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                 <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contact}
                  alt='/'
                  width={400}
                  height={400}
                /> 
              </div>
              <div>
                <h2 className='py-2'>Izdihar Omer</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
                <div className='flex flex-col gap-1'>
                  <em className='flex flex-row'> 
                    {/* <Image src='/assets/mail.svg' width={25} height={25} alt='mail.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1'/>
                    <a href='mailto:ezdiharomerrrr@gmail.com'>ezdiharomerrrr@gmail.com</a> */}
                    <EmailCopyButton/>
                  </em>
                  <em className='flex flex-row'> 
                    <Image src='/assets/whatsapp.svg' width={25} height={25} alt='whatsapp.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1'/>
                    <tel>+90 941 887 8291</tel>
                  </em>
                </div>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-evenly py-4'>
                  <a
                    href='https://www.linkedin.com/in/izdihar-omar-a09373242/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 bg-[#ecf0f3] p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Image className={`rounded-xl hover:scale-105 ease-in duration-300  ${isDarkMode ? 'bg-white' : ''}`} src={linkedin} alt='/' width={33} height={33}/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/Izdiharomer'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 bg-[#ecf0f3] p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <Image className={`rounded-xl hover:scale-105 ease-in duration-300 ${ isDarkMode ? 'bg-white' : ''}`} src={github} alt='/' width={33} height={33}/>
                    </div>
                  </a>
                  <Link href="/assets/izdihar-resume.pdf" >
                    <div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300'>
                      <Image className={`rounded-xl hover:scale-105 ease-in duration-300 ${isDarkMode ? 'bg-white' : ''}`} src={cv} alt='/' width={33} height={33}/>
                    </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-0 bg-[#fff]'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/a0e05b8f-1e4f-4350-9774-1cf82c262b72'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-2 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-1'>Name</label>
                    <input
                      className='border-2 rounded-lg p-1  flex border-gray-300 bg-[#ecf0f3]'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-1'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-1 flex border-gray-300 bg-[#ecf0f3]'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Email</label>
                  <input
                    className='border-2 rounded-lg p-1 flex border-gray-300 bg-[#ecf0f3]'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-1 flex border-gray-300 bg-[#ecf0f3]'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-1'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 bg-[#ecf0f3]'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-2 text-gray-100 mt-4 pink_button'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;