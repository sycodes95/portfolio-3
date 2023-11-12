import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/about'
import Projects from './components/projects/projects'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ColorBar from './components/colorBar/colorBar'
import Footer from './components/footer/footer'
import Smoke from './components/smokeThreeJs/smokeThreeJs'


function App() {

  return (
    <div className='flex flex-col items-center w-full h-full max-h-screen min-h-screen border-white bg-none font-main'>
      {/* <div className='flex w-full h-full max-w-6xl p-8 overflow-hidden grow'>
        <About />
        <Projects />
      </div> */}
      <ColorBar />
      <div className='absolute top-0 left-0 z-10 w-full h-full max-h-screen min-w-full min-h-screen border-8 border-white'></div>
      <div className='flex flex-col items-center w-full h-full max-w-6xl gap-12 p-8 pl-4 pr-4 overflow-hidden bg-none grow '>
        <About />
        {/* <Projects /> */}
      </div>
      <Footer />
      <Smoke/>
    </div>
  )
}

export default App
