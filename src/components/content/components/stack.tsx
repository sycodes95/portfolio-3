
export default function Stack () {

  const skills = [
    { name: 'react.js', icon: <i className="text-2xl text-center text-white rounded-full devicon-react-original"></i>},
    { name: 'next.js', icon: <i className="text-2xl text-white devicon-nextjs-original"></i>},
    { name: 'typescript', icon: <i className="text-2xl devicon-typescript-plain"></i>},
    { name: 'tailwindcss', icon:  <i className="text-2xl text-white devicon-tailwindcss-plain"></i>},
    { name: 'node.js', icon: <i className="text-2xl text-white devicon-nodejs-plain"></i>},
    { name: 'postgresql', icon: ''},
  ]

  
  return (
    <div className="relative flex">
      <div className="absolute top-0 w-12 border-t border-white left-8"></div>
      
      <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text-lr">
        THE STACK
      </div>

      <div className="flex flex-col h-full p-2 w-72">
        {
        skills.map((skill) => (
          <div className="flex items-end justify-between gap-2">
            <span className="pl-2 mb-1 text-xl">{skill.name}</span>
            {skill.icon}
          </div>
        ))
        }
      </div>
    </div>
  )
}