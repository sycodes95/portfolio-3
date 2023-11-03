export default function ColorBar () {

  const colors = [
    'bg-gray-300',
    'bg-yellow-500',
    'bg-cyan-400',
    'bg-green-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-blue-600',





  ]
  return (
    <div className='flex w-full h-2 bg-white'>
      {
        colors.map((color) => (
          <div className={`w-10 h-2 ${color}`} key={color}></div>
        ))
      }

      <a href="https://www.youtube.com/watch?v=fsU9AAktB5w" target="_blank" className="flex items-center justify-center w-10 font-bold text-black smol-font whitespace-nowrap hover:bg-black hover:text-white">
        LGFU
      </a>
      
      

    </div>
  )
}