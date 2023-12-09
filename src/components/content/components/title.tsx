
export default function Title() {
  
  return (
    <div className="relative z-10 flex flex-col items-center w-full rounded-lg ">
      <div className={` flex items-center gap-4 text-white text-opacity-0 font-outline-white transition-all duration-1000  text-6xl font-display md:text-8xl font-outline-black `}>
        <span className='text-glitch'>Kevin</span>
        <span className='text-glitch'>Kim</span>
      </div>
      
      <div className={` duration-1000 flex flex-col items-center w-full text-3xl font-outline-white text-white transition-all font-display md:text-5xl`}>
        <span className='whitespace-nowrap text-glitch font-outline-black'>Front-end Developer</span>
        <span></span>

      </div>

    </div>
  )
}
