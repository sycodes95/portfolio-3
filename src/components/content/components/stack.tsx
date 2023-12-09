

export default function Stack () {

  const skills = [
    { name: 'react.js', icon: <i className="text-2xl text-center text-white rounded-full devicon-react-original"></i>, padding: 'pl-0'},
    { name: 'next.js', icon: <i className="text-2xl text-white devicon-nextjs-original"></i>, padding: 'pl-2'},
    { name: 'typescript', icon: <i className="text-2xl devicon-typescript-plain"></i>, padding: 'pl-4'},
    { name: 'tailwindcss', icon:  <i className="text-2xl text-white devicon-tailwindcss-plain"></i>, padding: 'pl-6'},
    { name: 'node.js', icon: <i className="text-2xl text-white devicon-nodejs-plain"></i>, padding: 'pl-8'},
    { name: 'postgresql', icon:<i className="text-2xl text-white devicon-postgresql-plain"></i> , padding: 'pl-10'},
  ]
  
  return (
    <div className="relative flex">
      <div className="absolute top-0 w-12 border-t border-white left-8"></div>
      
      <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text-lr text-glitch">
        THE STACK
      </div>

      <div className="flex flex-col w-64 h-full p-2">
        {
        skills.map((skill) => (
          <div className="flex items-end justify-between gap-2" key={skill.name}>
            <span className={` mb-1 text-lg md:text-xl ${skill.padding} text-glitch`}>{skill.name}</span>
            {skill.icon}
          </div>
        ))
        }
      </div>
    </div>
  )
}