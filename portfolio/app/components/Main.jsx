import React from 'react';

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
      <div>
        <p className='uppercase text-sm tracking-widest gray'>
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <h1 className='py-4 text-gray-700'>
          Hi, I&#39;m <span className='text-[#F652A0]'> Izdihar</span>
        </h1>
        <h1 className='py-2 text-gray-700'>Front-End Web Developer</h1>
        <p className='py-4 gray sm:max-w-[70%] m-auto'>
        I am passionate about creating user-friendly interfaces that provide a seamless and enjoyable experience for users. Through my expertise in frontend development, I strive to craft interfaces that are not only visually appealing but also intuitive and easy to navigate
        </p> 
        <a href="/assets/izdihar-resume.pdf"  target="_blank">
          <button className='pink_button p-2 text-bold'>Download CV</button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Main