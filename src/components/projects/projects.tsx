import { useState } from "react"

export default function Projects () {

  const [projects, setProjects] = useState([
    { title: 'Daynestmetrics', color: 'border-white'},
    { title: 'Polyglot Pal', color: 'border-yellow-500'},

    { title: 'Jobtrackr', color: 'border-blue-300'}

    
  ])
  return (
    <div className="flex flex-col w-full h-full gap-4 md:pl-8 grow rounded-2xl">
      <div className="flex items-center justify-center w-full h-full bg-white md:justify-start md:w-fit ">
        <span className="flex items-center p-2 ml-2 mr-2 text-2xl font-bold w-fit text-pine ">
          LOOK WHAT I MADE
        </span>
      </div>

      <div className="flex flex-col w-full gap-8 p-4 rounded-xl bg-opacity-10">
        {
        projects.map((project, index) => (
          <div className="relative flex items-center gap-4 p-2 overflow-hidden group hover:cursor-pointer">
            <span className="z-10 w-10 h-10 text-4xl text-center text-white transition-colors duration-1000 rounded-full whitespace-nowrap ">{project.title}</span>
            <div className={`absolute top-0 w-full h-full transition-all duration-700 border-b ${project.color} group-hover:left-0 left-full`}></div>
          </div>
        ))
        }
      </div>
    </div>
  )
}