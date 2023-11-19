import Title from "./components/title";
import SocialMedia from "./components/socialMedia";
import Stack from "./components/stack";
import Projects from "./components/projects";
import About from "./components/about";
import { useToast } from '@/components/ui/use-toast';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Content () {
  const email = "sycodes95@gmail.com"
  const { toast } = useToast()

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

  const gridNumbers = Array(200).fill('')
  return (
    <div className="z-10 flex flex-col items-center justify-center w-full h-full gap-12 p-8 overflow-hidden md:w-fit grow">
      <Title />

      <SocialMedia />

      <div className="flex flex-col gap-4 md:flex-row">
        <Stack />
        <Projects />
      </div>

      <div className="flex flex-col items-center w-full ">
        <About/>
      </div>

      <button className='flex items-center gap-2 text-sm font-bold text-white transition-colors backdrop-blur-md bottom-10 hover:text-black font-glow-white' onClick={()=> copyToClipboard()}>
        <span>{email}</span>
        <ContentCopyIcon className='text-[20px]' fontSize='small'/>
      </button>

      <div className="absolute top-0 left-0 grid w-full h-full grid-flow-col overflow-hidden -z-10 min-w-screen">
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
      </div>

      
      
    </div>
  )
}