import Title from "./components/title";

import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function About () {

  const skills = [
    { name: 'react.js', icon: <i className="text-2xl devicon-react-original"></i>},
    { name: 'next.js', icon: <i className="text-2xl text-white devicon-nextjs-original"></i>},
    { name: 'typescript', icon: ''},
    { name: 'tailwindcss', icon: ''},
    { name: 'node.js', icon: ''},
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
          STACK
        </div>
        <div className="flex flex-col w-full h-full border-t border-white font-display-2">
          {
          skills.map((skill) => (
            <div className="flex items-end justify-end gap-2">
              

              <span className="text-4xl">{skill.name}</span>

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
        <div className="flex items-center justify-center text-black transition-all duration-1000 bg-white rounded-full cursor-pointer hover:bg-pine w-44 h-44 group box-glow-white">
          <span className="text-lg font-bold text-center transition-all duration-1000 group-hover:text-white text-pine font-glow-black" >
            ABOUT
          </span>
        </div>
      </div>

      
      
    </div>
  )
}