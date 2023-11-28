
export default function Title() {
  
  return (
    <div className="relative z-10 flex flex-col items-center w-full rounded-lg">
      <div className={` flex items-center gap-4 text-white font-outline-white transition-all duration-1000  text-7xl font-display md:text-9xl `}>
        <span className=''>Kevin</span>
        <span className=''>Kim</span>
      </div>
      
      <div className={` duration-1000 flex flex-col items-center w-full text-4xl font-outline-white text-white transition-all font-display md:text-7xl`}>
        <span className='whitespace-nowrap'>Front-end Developer</span>
        <span></span>

      </div>

    </div>
  )
}
