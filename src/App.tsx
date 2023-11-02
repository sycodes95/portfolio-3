import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/about'
import Projects from './components/projects/projects'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ColorBar from './components/colorBar/colorBar'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen bg-pine md:max-h-screen font-main'>
      {/* <div className='flex w-full h-full max-w-6xl p-8 overflow-hidden grow'>
        <About />
        <Projects />
      </div> */}
      <ColorBar />
      <div className='flex flex-col w-full h-full max-w-6xl gap-8 p-8 pl-4 pr-4 overflow-hidden grow md:flex-row'>
        <About />
        <Projects />
      </div>
      <Footer />

    </div>
  )
}

export default App
