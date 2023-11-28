import Title from "./components/title";
import Stack from "./components/stack";
import Projects from "./components/projects";
import About from "./components/about";
import { useToast } from '@/components/ui/use-toast';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Atropos from 'atropos';
import { useEffect, useRef } from "react";


export default function Content () {
  const email = "sycodes95@gmail.com"
  const { toast } = useToast()
  const contentContainer = useRef<HTMLDivElement | null>(null)

  // const myAtropos = Atropos({
  //   el: '.my-atropos',
  //   activeOffset: 80,
  //   shadow: false,
  //   highlight: false,
  //   onEnter() {
  //     console.log('Enter');
  //   },
  //   onLeave() {
  //     console.log('Leave');
  //   },
  //   onRotate(x, y) {
  //     console.log('Rotate', x, y);
  //   }

  // });

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email Copied To Clipboard :)",
        description: "Come say hi ->",
      })
      console.log('Email copied to clipboard');

      // Optionally, show some feedback to the user here
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error copying to clipboard",
        description: ":(",
      })
      // Optionally, handle the error case
    }
  };

 

  useEffect(() => {
    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 80,
      shadow: false,
      highlight: false,
    });
    const handleResize = () => {
      
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      myAtropos.destroy();
    }
  }, []); 

  useEffect(()=> {
   

  },[])

  // const gridNumbers = Array(200).fill('')
  return (
    <div className={`z-50 flex flex-col items-center justify-center w-full h-full gap-12 pt-12 pb-24 overflow-hidden grow atropos my-atropos`} ref={contentContainer}>
      <div className="flex w-full h-full atropos-scale">
        <div className="flex w-full h-full atropos-rotate">
          <div className="flex flex-col items-center justify-center w-full h-full gap-8 atropos-inner" >
            
            {/* <img src="image-bg.png" data-atropos-offset="-5" />
            
            <img src="image-middle.png" data-atropos-offset="0" />
            
            <img src="image-front.png" data-atropos-offset="5" /> */}
            <div className="w-full h-full " data-atropos-offset="0" data-atropos-opacity="1;0.6">
              <Title />
            </div>

            

            <div className="flex flex-col gap-4 md:flex-row " data-atropos-offset="5" data-atropos-opacity="1;0.6">
              <Stack />
              <Projects />
            </div>

            <div className="flex flex-col items-center w-full " data-atropos-offset="0" data-atropos-opacity="1;0.6">
              <About/>
            </div>

            <button className='flex items-center gap-2 text-sm font-bold text-white transition-colors bottom-10 hover:text-stone-500' onClick={()=> copyToClipboard()} data-atropos-offset="5">
              <span>{email}</span>
              <ContentCopyIcon className='text-[20px]' fontSize='small'/>
            </button>

            {/* <div className="absolute top-0 left-0 grid w-full h-full grid-flow-col overflow-hidden -z-10 min-w-screen">
              {
              gridNumbers.map((_,index) => (
                <div className="w-[10px] border-r border-r-black border-opacity-5" key={index}>
                  
                </div>
              ))
              }
            </div>

            <div className="absolute top-0 left-0 grid w-full h-full max-h-screen grid-flow-row overflow-hidden -z-10 min-w-screen max-w-screen">
              {
              gridNumbers.map((_,index) => (
                <div className="h-[10px] border-b border-b-black border-opacity-5 " key={index}>
                  
                </div>
              ))
              }
            </div> */}
          </div>
        </div>
      </div>

      
      
    </div>
  )
}