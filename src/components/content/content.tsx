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

  
  return (
    <div className="z-10 flex flex-col items-center w-full gap-12 p-8 md:w-fit">
      <Title />

      <SocialMedia />

      <div className="flex flex-col gap-4 md:flex-row">
        <Stack />
        <Projects />
      </div>

      <div className="flex flex-col items-center w-full ">
        <About/>
        
      </div>

      
      
    </div>
  )
}