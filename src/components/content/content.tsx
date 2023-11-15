import Title from "./components/title";
import { mdiDna } from '@mdi/js';
import { mdiInformationVariant } from '@mdi/js';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { mdiHeadHeart } from '@mdi/js';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import SocialMedia from "./components/socialMedia";
import Stack from "./components/stack";
import Projects from "./components/projects";
import InfoIcon from '@mui/icons-material/Info';
import Icon from "@mdi/react";
import About from "./components/about";


export default function Content () {

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