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

    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error copying to clipboard",
        description: ":(",
      })
    }
  };

  return (
    <div className={`z-50 flex flex-col items-center justify-center w-full h-full gap-10 pt-12 pb-12 overflow-hidden grow`} ref={contentContainer}>
            
      <div className="w-full h-full " data-atropos-offset="-2" data-atropos-opacity="1;0.6">
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