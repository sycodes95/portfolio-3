
import './App.css'
import 'atropos/css'

import Smoke from './components/smokeThreeJs/smokeThreeJs'
import Content from './components/content/content'
import Borders from './components/borders/borders'
import { useEffect, useRef, useState } from 'react'
import { Toaster } from "@/components/ui/toaster"
import SocialMedia from './components/content/components/socialMedia'
import AtroposEffect from './components/content/components/atroposEffect'
import { InfinitySpin } from 'react-loader-spinner'


function App() {
  const [loading, setLoading] = useState(true)
  const [spinning, setSpinning] = useState(true)
  const [atroposEnabled, setAtroposEnabled] = useState(true)
  const loadingScreen = useRef<HTMLDivElement | null>(null)
  
  
  useEffect(()=>{
    if(spinning) {
      setTimeout(()=>{
        setSpinning(false)
      },1250)
    }
  },[spinning])
  useEffect(()=>{
    if(loading) {
      setTimeout(()=>{
        setLoading(false)
      },2500)
    }
  },[loading])

  useEffect(()=> {
    if(!loading){
      setTimeout(()=> {
        if(loadingScreen && loadingScreen.current){
          loadingScreen.current.remove()
        }
      },1000)
    }
  },[loading])

  useEffect(()=> {
    const handleResize = () => {
      window.innerWidth > 1024 ? setAtroposEnabled(true) : setAtroposEnabled(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen font-main box-glitch'>
      <Borders />
      {/* <img className='absolute top-0 left-0 object-cover -z-10' src={background} alt="" /> */}
      <div className={` z-10 flex flex-col items-center justify-center w-full h-full gap-12 overflow-hidden transition-all duration-1000 bg-none grow `}>

        {
        atroposEnabled ? 
        <AtroposEffect>
          <Content />

        </AtroposEffect>
        :
        <Content/>
        }

        {/* <Content /> */}
        <SocialMedia />
      </div>
      
      <div className='absolute top-0 w-full h-full'>
        <Smoke inverted={false} side='left'/>
        {/* <Smoke inverted={true} side='right'/> */}

      </div>
      {/* <SmokeBackground /> */}
      {/* <div className='absolute top-0 left-0 w-full h-full '>
        <TVStatic />
      </div> */}
      <div className={`fixed flex items-center justify-center top-0 right-0 w-screen h-[100dvh] ${loading ? 'left-0' : '-left-full'} z-[60] bg-white transition-all duration-1000 `} ref={loadingScreen}>
        {
        spinning &&
        <InfinitySpin
          width='200'
          color="#000000"
        />
        }
        <span className={`${!spinning && 'text-opacity-100'} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black text-opacity-0 transition-all duration-1000 text-4xl font-main`}>welcome.</span>

        

      </div>

      <Toaster />
    </div>
  )
}

export default App
