
'use client'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import ContactForm from './components/ContactForm';




export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full w-full justify-between items-between">
      <Navbar/>
      <Main/>
      <About/>
       <Skills/>
      <Projects/>
      {/* <ContactForm/>  */}
      <Contact/>
      
      

      
    </main>
  )
}
