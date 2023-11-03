import { useState } from "react"

export default function Projects () {

  const [projects, setProjects] = useState([
    'Polyglot Pal',
    '',
    '',
    '',
    
  ])
  return (
    <div className="flex flex-col w-full h-full gap-4 md:pl-8 grow rounded-2xl">
      <div className="flex items-center justify-center w-full h-full bg-white md:justify-start md:w-fit ">
        <span className="flex items-center p-2 ml-2 mr-2 text-2xl font-bold w-fit text-pine ">
          LOOK WHAT I MADE
        </span>
      </div>

      <div className="flex flex-col w-full gap-2">
        {
        projects.map((project, index) => (
          <div className="flex items-center gap-4">
            <span className="mt-4 text-6xl text-pine font-outline-yellow font-display whitespace-nowrap">{project}</span>
          </div>
        ))
        }
      </div>
    </div>
  )
}