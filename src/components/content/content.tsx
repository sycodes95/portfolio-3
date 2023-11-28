import Title from "./components/title";
import Stack from "./components/stack";
import Projects from "./components/projects";
import About from "./components/about";
import { useToast } from '@/components/ui/use-toast';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRef } from "react";


export default function Content () {
  const email = "sycodes95@gmail.com"
  const { toast } = useToast()
  const contentContainer = useRef<HTMLDivElement | null>(null)

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

 

  // useEffect(() => {
  //   const myAtropos = Atropos({
  //     el: '.my-atropos',
  //     activeOffset: 80,
  //     shadow: false,
  //     highlight: false,
  //   });
  //   const handleResize = () => {
      
  //   };

  //   window.addEventListener('resize', handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     myAtropos.destroy();
  //   }
  // }, []); 

  return (
    <div className={`z-50 flex flex-col items-center justify-center w-full h-full gap-12 pt-12 pb-24 overflow-hidden grow`} ref={contentContainer}>
            
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
      
    </div>
  )
}