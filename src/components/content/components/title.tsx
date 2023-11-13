
export default function Title() {
  return (
    <div className="relative z-10 flex flex-col items-center w-full rounded-lg">
      <div className="flex items-center gap-4 text-white transition-all text-8xl font-display md:text-9xl ">
        <span className=''>Kevin</span>
        <span className=''>Kim</span>
      </div>
      {/* <div className="flex gap-4 text-gray-300 text-opacity-0 font-display text-7xl font-outline-white">
        <span className=''>KEVIN</span>
        <span className=''>KIM</span>
      </div> */}
      {/* <div className="flex gap-4 text-5xl text-black text-opacity-0 font-outline-white font-display font-glow-nude">
        <span className=''>WEB</span>
        <span className=''>DEVELOPER</span>
      </div> */}
      <div className="flex flex-col items-center w-full text-4xl text-white transition-all font-display md:text-6xl">
        <span className='whitespace-nowrap'>Front-end Developer</span>
        <span></span>

      </div>

    </div>
  )
}