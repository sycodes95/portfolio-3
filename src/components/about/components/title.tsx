
export default function Title() {
  return (
    <div className="relative flex flex-col rounded-lg w-fit font-outline-nude ">
      <div className="flex items-center gap-4 pb-10 text-black text-opacity-0 transition-all font-display text-8xl md:text-9xl">
        <span className=''>Kevin</span>
        <span className=''>Kim</span>
      </div>
      {/* <div className="flex gap-4 text-gray-300 text-opacity-0 font-display text-7xl font-outline-nude">
        <span className=''>KEVIN</span>
        <span className=''>KIM</span>
      </div> */}
      {/* <div className="flex gap-4 text-5xl text-black text-opacity-0 font-outline-nude font-display font-glow-nude">
        <span className=''>WEB</span>
        <span className=''>DEVELOPER</span>
      </div> */}
      <div className="absolute bottom-0 flex w-full gap-4 text-5xl transition-all font-display md:text-6xl">
        <span className='whitespace-nowrap'>Front-end Developer</span>
        <span className='text-black text-opacity-0 font-display'>.</span>

      </div>

    </div>
  )
}