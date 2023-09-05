
'use client'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={`flex flex-col min-h-screen  h-full w-full justify-between items-between ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer/>
    </main>
  )
}
