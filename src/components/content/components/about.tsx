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


export default function About () {
  const peopleWhoInspireMe = [
    
  ]
  return (
    <Sheet>
      <SheetTrigger className="group">
        <div className="flex items-center justify-center text-white transition-all duration-500 bg-white rounded-full cursor-pointer hover:bg-black hover:bg-opacity-0 w-44 h-44 group box-glow-dna">
          <Icon className="text-black transition-all duration-500 text-opacity-80 group-hover:text-white " path={mdiDna} size={1.5} />
        </div>
      </SheetTrigger>
      <SheetContent className="w-full max-h-screen overflow-y-auto text-lg text-white bg-black border-none bg-opacity-90 md:-translate-x-1/2 fe h-fit min-h-fit md:w-1/2 font-main md:left-1/2" side={'bottom'}>
        <SheetHeader className="flex flex-col gap-4">
          <SheetTitle className="flex items-center justify-center w-full text-2xl">
            <Icon className="text-white duration-500 text-opacity-80" path={mdiDna} size={1.5} />
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <InfoIcon/>
              <span className="text-lg font-bold">my story</span>
            </div>
            <div className="flex flex-col gap-2 pl-6 ml-3 text-left border-l border-white">
              <span className="text-lg font-main">
                I initially got into programming due to my realization of how useful it could be to learn this skill, especially because tech is where the future is headed.
                My journey started with telling myself that I will fully commit to learning this craft for 1 month to see if it's something I could 
                see myself continue doing and more importantly, to see if I even enjoyed it at all.
              </span>

              <span className="text-lg font-main">
                As I kept improving and developing my skills as a web developer, programming pretty much became a video game for me which felt more fulfilling and rewarding
                than playing actual video games and thus saw myself doing this professionally.
              </span>

              <span className="text-lg font-main">
                The blend of creativity, problem solving, and challenge is what makes this all so worth it and fulfilling for me. 
                I love the fact that with programming, there's never a finish line, there's always areas I can improve and there's always new technologies to learn. 
              </span>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <PsychologyIcon/>
                <span className="text-lg font-bold">people who inspire me</span>
              </div>
              <div className="flex flex-col gap-2 pl-6 ml-3 text-lg border-l border-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat animi, magnam exercitationem expedita quia omnis saepe reiciendis dolor beatae cupiditate excepturi temporibus. Impedit doloribus corrupti vel, officia expedita repellendus repellat!
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <AudiotrackIcon/>
                <span className="text-lg font-bold">my playlists</span>
              </div>
              <div className="flex flex-col gap-2 pl-6 ml-3 border-l border-white">
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/6lD7xfEIqSwcMht4VCxsMD?si=5390d4fb2af1403c" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-500">Spotify</span> 
                    <span>Work Out Music</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/3l5usPy4BnZOmKPwxvLkav?si=03dce61af85344ac" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-500">Spotify</span> 
                    <span>Sweaty</span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://open.spotify.com/playlist/2lko74v3Zr9nIHiPjybgnM?si=8ad539a55e894216" className="flex gap-2 text-lg hover:underline" target="_blank">
                    <span className="font-bold text-green-500">Spotify</span>
                    <span>Basic Bitch</span> 
                  </a>
                </div>
                {/* <span className="text-lg font-main">
                  I initially got into programming due to my realization of how useful it could be to learn this skill, especially because tech is where the future is headed.
                  My journey started with telling myself that I will fully commit to learning this craft for 1 month to see if it's something I could 
                  see myself continue doing and more importantly, to see if I even enjoyed it at all.
                </span>

                <span className="text-lg font-main">
                  As I kept improving and developing my skills as a web developer, programming pretty much became a video game for me which felt more fulfilling and rewarding
                  than playing actual video games and thus saw myself doing this professionally.
                </span> */}
              </div>
            </div>

            <SheetClose className="p-2 mt-4 text-white border border-white rounded-2xl" asChild={true} >
              <span>Close X</span>
            </SheetClose>

            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}