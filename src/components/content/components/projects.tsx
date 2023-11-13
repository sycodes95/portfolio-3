import { div } from 'three/examples/jsm/nodes/Nodes.js'
import dnmDashboard from '../../../assets/projectPictures/daynestmetrics/dashboard.png'
import dnmEntries from '../../../assets/projectPictures/daynestmetrics/entries.png'
import dnmInsights from '../../../assets/projectPictures/daynestmetrics/insights.png'
import dnmLifestylefactors from '../../../assets/projectPictures/daynestmetrics/lifestylefactors.png'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Projects () {

  const projects = [
    { 
      name: 'Daynestmetrics', 
      description: 'Track your lifestyle habits or factors in order to find correlations with mood and productivity. Featuring interactive data visualizations, calendar view, table view, and more!',
      images: [dnmDashboard, dnmEntries, dnmInsights, dnmLifestylefactors], 
      stack: ['react.js', 'next.js', 'typescript', 'tailwindcss', 'postgresql'] },
    { name: 'Polyglot Pal', description: '', images: [], stack: []},
    { name: 'Jobtrackr', description: '', images: [], stack: []},
  ]
  return (
    <div className="relative flex ">

      <div className="absolute top-0 w-12 border-t border-white left-8"></div>
      <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text-lr">
        FEATURED WORK
      </div>

      <div className="flex flex-col justify-between h-full p-2 pt-4 pb-4 w-72">
        {
        projects.map((proj, index) => (
          <Sheet>
            <SheetTrigger className="flex items-end justify-between gap-2 transition-colors hover:text-stone-500">
              <span className="pl-2 mb-1 text-4xl">{index + 1}. {proj.name}</span>
            </SheetTrigger>

            <SheetContent className='flex flex-col h-full max-h-screen gap-4 pt-12 pb-12 overflow-y-auto bg-black bg-opacity-75 border-t-black font-main' side={'bottom'}>
              <SheetTitle className='text-3xl font-glow-white'>{proj.name}</SheetTitle>
              <div className='flex items-center gap-2'>
                {
                proj.stack.map((tech, index) => (
                  <span key={tech}>{tech}</span>
                ))
                }
              </div>
              <SheetDescription className='p-4 text-sm font-semibold text-white border-2 border-white opacity-75 '>
                <span>{proj.description}</span>
              </SheetDescription>
              <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                {
                proj.images.map((src, index) => (
                  <div className='flex justify-center rounded-lg'>
                    <img className='bg-cover rounded-lg grayscale opacity-70' key={src} src={src} />
                  </div>
                ))
                }

              </div>
              
            </SheetContent>

          </Sheet>
          
        ))
        }
      </div>

      
    </div>
  )
}

//DESIGN IS HARD