
import './App.css'
import { InfinitySpin } from  'react-loader-spinner'
import Smoke from './components/smokeThreeJs/smokeThreeJs'
import Content from './components/content/content'
import Borders from './components/borders/borders'
import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



function App() {
  const [loading, setLoading] = useState(true)
  const [spinning, setSpinning] = useState(true)
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
  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen pt-4 pb-12 bg-none font-main'>
      <Borders />
      <div className={` z-10 flex flex-col items-center justify-center w-full h-full max-w-6xl gap-12 overflow-hidden transition-all duration-1000   bg-none grow `}>
        <Content />
      </div>
      <Smoke/>
      <div className={`fixed flex items-center justify-center top-0 right-0 w-screen h-screen ${loading ? 'left-0' : '-left-full'} z-[60] bg-white transition-all duration-1000 `}>
        {
        spinning &&
        <InfinitySpin
          width='200'
          color="#000000"
        />
        }
        <span className={`${!spinning && 'text-opacity-100'} absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-black text-opacity-0 transition-all duration-1000 text-4xl font-main`}>welcome.</span>

        

      </div>
    </div>
  )
}

export default App
