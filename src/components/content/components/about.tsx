import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import Icon from "@mdi/react";
import { mdiDna } from '@mdi/js';
import InfoIcon from '@mui/icons-material/Info';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PsychologyIcon from '@mui/icons-material/Psychology';
import tonyFerg from '../../../assets/people/tonyFerg.webp'
import davidGoggins from '../../../assets/people/davidGoggins.webp'
import sonHeungMin from '../../../assets/people/sonHeungMin.webp'
import frankYang from '../../../assets/people/frankYang.webp'
import { Dna } from "react-loader-spinner";


export default function About () {

  const peopleWhoInspireMe = [
    { name : 'Tony Ferguson', src: tonyFerg, occupation: 'El Cucuy'},
    { name : 'Son Heung Min', src: sonHeungMin, occupation: 'Soccer Player'},
    { name : 'David Goggins', src: davidGoggins, occupation: 'Full-time savage'},
    { name : 'Frank Yang', src: frankYang, occupation: 'Infinite Brah'        }
  ]

  
  return (
    <Sheet>
      <SheetTrigger className="group">
        <div className="flex items-center justify-center text-white transition-all duration-700 bg-white rounded-full cursor-pointer w-36 h-36 hover:bg-black hover:bg-opacity-0 group box-glow-dna hover-box-glitch">
          <Icon className="text-black transition-all duration-700 text-opacity-80 group-hover:text-white " path={mdiDna} size={1.5} />
        </div>
      </SheetTrigger>

      <SheetContent className="flex flex-col w-full h-full max-h-full p-4 overflow-y-auto text-lg text-black bg-opacity-75 border-none bg-pattern-white md:-translate-x-full min-h-fit md:w-1/2 font-main md:left-full grow" side={'bottom'}>
        <SheetHeader className="flex flex-col h-full gap-4">
          <SheetTitle className="flex items-center justify-center w-full text-2xl rotate-90">
            <Dna   />
          </SheetTitle>
          <SheetDescription className="flex flex-col h-full gap-2 grow">
            <div className="flex items-center gap-2">
              <InfoIcon/>
              <span className="text-lg font-bold">my story</span>
            </div>
            <div className="flex flex-col gap-2 pl-6 ml-3 text-left border-l border-black">
              <span className="text-lg font-main">
                I started programming because I recognized its importance in a tech-centric world. I challenged myself to learn the ropes for a month, just to see if it was something I'd enjoy or even be good at.
              </span>

              <span className="text-lg font-main">
                Although I wasn't particularly good at it, I did enjoy the challenge and as I improved my web development skills, programming became less of a chore and more like a game. One that was actually more fulfilling than any video game. This realization steered me towards a professional path in this field.
              </span>

              <span className="text-lg font-main">
                The real draw for me is the mix of creativity, problem-solving, and the ongoing challenge. In programming, there's always something new to learn, no finish line. That constant evolution is what keeps it interesting. 
              </span>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <PsychologyIcon/>
                <span className="text-lg font-bold">people i like</span>
              </div>
              <div className="grid items-center w-full grid-cols-2 gap-4 p-4 pl-6 ml-3 text-lg border-l border-black xl:grid-cols-4">
                {
                peopleWhoInspireMe.map((person) => (
                  <div className="flex flex-col items-center gap-2 p-4 border border-black" key={person.name}>
                    <img className="object-cover w-20 h-20 rounded-full" src={person.src} />
                    <div className="flex flex-col items-center">
                      <span className="overflow-hidden whitespace-nowrap text-ellipsis">{person.name}</span>
                      <span className="text-sm font-bold">{person.occupation}</span>
                    </div>
                    

                  </div>
                ))
                }
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <AudiotrackIcon/>
                <span className="text-lg font-bold">my playlists</span>
              </div>
              <div className="flex flex-col gap-2 pl-6 ml-3 border-l border-black">
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/6lD7xfEIqSwcMht4VCxsMD?si=5390d4fb2af1403c" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-700">Spotify</span> 
                    <span>Work Out Music</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/3l5usPy4BnZOmKPwxvLkav?si=03dce61af85344ac" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-700">Spotify</span> 
                    <span>Sweaty</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/2lko74v3Zr9nIHiPjybgnM?si=8ad539a55e894216" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-700">Spotify</span>
                    <span>Basic</span> 
                  </a>
                </div>
                
              </div>
            </div>

            <div className="flex items-end justify-center w-full h-full grow">
              <SheetClose className="p-2 text-black border border-black cursor-pointer w-fit" asChild={true} >
                <span>Close X</span>
              </SheetClose>

            </div>

            

            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}