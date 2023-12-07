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
    <div id='contact' className='w-full lg:h-screen mb-14'>
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
                  <em>
                    <EmailCopyButton />
                  </em>
                  <em className='flex flex-row'>
                    <Image src='/assets/whatsapp.svg' width={25} height={25} alt='whatsapp.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1' />
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
                      <Image className={`rounded-xl hover:scale-105 ease-in duration-300  ${isDarkMode ? 'bg-white' : ''}`} src={linkedin} alt='/' width={33} height={33} />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Izdiharomer'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 bg-[#ecf0f3] p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <Image className={`rounded-xl hover:scale-105 ease-in duration-300 ${isDarkMode ? 'bg-white' : ''}`} src={github} alt='/' width={33} height={33} />
                    </div>
                  </a>
                  <Link href="/assets/izdihar-resume.pdf" id='resume' >
                    <div>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-3 bg-[#ecf0f3] cursor-pointer hover:scale-110 ease-in duration-300'>
                        <Image className={`rounded-xl hover:scale-105 ease-in duration-300 ${isDarkMode ? 'bg-white' : ''}`} src={cv} alt='/' width={33} height={33} />
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
                <div className='grid md:grid-cols-2 gap-4 w-full '>
                  <div className='inputGroup flex flex-col'>
                    <input
                      className='input border-2 flex border-gray-300 bg-[#ecf0f3]'
                      type='text'
                      name='name'
                      required
                    />
                    <label className='label text-sm'>Fullname</label>
                  </div>
                  <div className='inputGroup flex flex-col'>
                    <input
                      className='border-2 input p-1 flex border-gray-300 bg-[#ecf0f3]'
                      type='text'
                      name='phone'
                      required
                    />
                    <label className='label text-sm'>
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className='inputGroup flex flex-col my-4 '>
                  <input
                    className='input border-2 flex border-gray-300 bg-[#ecf0f3]'
                    type='email'
                    name='email'
                    required
                  />
                  <label className='label text-sm'>Email</label>
                </div>
                <div className='inputGroup flex flex-col'>
                  <input
                    className='input border-2 flex border-gray-300 bg-[#ecf0f3]'
                    type='text'
                    name='subject'
                    required
                  />
                  <label className='label text-sm'>Subject</label>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='text-sm py-1 px-4'>Message</label>
                  <textarea
                    className='focus:border-blue-500 rounded-lg p-3 b bg-[#ecf0f3] border-[#F652A0]'
                    rows='15'
                    name='message'
                    required
                  ></textarea>
                </div>
                <button className='w-full p-2 mt-4 rounded-2xl uppercase  bg-[#25D366] text-[#fff] focus:bg-[#197f4c]'>
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