import Title from "./components/title";

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function About () {

  const skills = [
    { name: 'react.js', icon: <i className="text-2xl text-center text-white rounded-full devicon-react-original"></i>},
    { name: 'next.js', icon: <i className="text-2xl text-white devicon-nextjs-original"></i>},
    { name: 'typescript', icon: <i className="text-2xl devicon-typescript-plain"></i>},
  
    { name: 'tailwindcss', icon:  <i className="text-2xl text-white devicon-tailwindcss-plain"></i>},
           
          
    { name: 'node.js', icon: <i className="text-2xl text-white devicon-nodejs-plain"></i>},
            
          
    { name: 'postgresql', icon: ''},
  ]
  return (
    <div className="flex flex-col w-full md:w-fit">
      <Title />

      <div className="flex items-center gap-2 p-2 border-dashed">
        <GitHubIcon className="text-white" />
        <YouTubeIcon className="text-red-500 " fontSize="large" />
      </div>
      {/* <div className="flex flex-col items-center w-full pt-8 md:items-start">
        <div className="flex items-center justify-center text-black bg-white rounded-full w-52 h-52 box-glow-white">
          <span className="font-bold text-center text-pine" >
            Wassup 
          </span>
        </div>
      </div> */}

      <div className="flex items-start gap-4 pt-2">
        <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text">
          THE STACK
        </div>
        <div className="flex flex-col w-full h-full border-t border-white font-display-2">
          {
          skills.map((skill) => (
            <div className="flex items-end justify-between gap-2">
              <span className="text-3xl">{skill.name}</span>

              {skill.icon}

              {/* <div className="flex text-2xl ">
                {
                Array.from(skill.name).map((letter) => (
                  <span className="">
                    {letter}
                  </span>
                ))
                }
              </div> */}

            </div>
          ))
          }
        </div>

      </div>

      <div className="flex flex-col items-center w-full pt-12">
        <Sheet>
          <SheetTrigger className="group">
            <div className="flex items-center justify-center text-black transition-all duration-500 bg-white rounded-full cursor-pointer hover:bg-pine w-44 h-44 group box-glow-white">
              <span className="text-lg font-bold text-center transition-all duration-500 group-hover:text-white text-pine font-glow-black" >
                ABOUT
              </span>
            </div>
          </SheetTrigger>
          <SheetContent className="w-full text-lg bg-white md:-translate-x-1/2 fe h-fit min-h-fit rounded-t-3xl md:w-1/2 text-pine font-main md:left-1/2" side={'bottom'}>
            <SheetHeader>
              <SheetTitle className="text-2xl">ME</SheetTitle>
              <SheetDescription className="">
                <span className="text-4xl font-display">
                  "I got into programming for the money and then realized I actually like it."
                  "If you cannot choose your thoughts, are we really in control or are we just watching
                  the movie of life play out how it's supposed to"
                </span>
                
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
      </div>

      
      
    </div>
  )
}