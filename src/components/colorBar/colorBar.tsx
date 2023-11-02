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
          <div className={`w-10 h-2 ${color}`} ></div>
        ))
      }

      <span className="flex items-center pl-2 font-bold text-black smol-font">
        ur geh
      </span>
      
      

    </div>
  )
}