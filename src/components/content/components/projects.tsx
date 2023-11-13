import { div } from 'three/examples/jsm/nodes/Nodes.js'
import dnmDashboard from '../../../assets/projectPictures/daynestmetrics/dashboard.png'
import dnmEntries from '../../../assets/projectPictures/daynestmetrics/entries.png'
import dnmInsights from '../../../assets/projectPictures/daynestmetrics/insights.png'
import dnmInsights2 from '../../../assets/projectPictures/daynestmetrics/insights2.png'
import dnmLifestylefactors from '../../../assets/projectPictures/daynestmetrics/lifestylefactors.png'
import dnmLangingPage from  '../../../assets/projectPictures/daynestmetrics/landingPage.png'
import dnmAbout from  '../../../assets/projectPictures/daynestmetrics/about.png'
import dnmEntryDialog from  '../../../assets/projectPictures/daynestmetrics/entryDialog.png'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons"
import YouTubeIcon from '@mui/icons-material/YouTube';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export default function Projects () {

  const projects = [
    { 
      name: 'Daynestmetrics', 
      description: 'Track your lifestyle habits or factors in order to find correlations with mood and productivity. Featuring interactive data visualizations, calendar view, table view, and more!',
      images: [ 
        {
          src: dnmLangingPage
        }, 
        {
          src: dnmDashboard, 
          description: `This is the dashboard or home page, where the user can view general statistics about their daily entries, as well 
          as the entries for each day in calendar view. The number you see for each day is the combined average of mood and productivity for 
          that specific day. The user can click on an already existing entry where there will be a pop up that has options to edit or delete the entry. If a day does not already exist and its either today or any date before, there is a + icon instead where the user can click and add an entry `
        }, 
        {
          src: dnmEntries,
          description: `This is the entries page, it's an alternate view to the calendar component which provides slightly different 
          details and with more depth. As you can see the user can sort some by columns and even view some of the details. The 
          user can also edit, delete, or even delete multiple entries using the selectors on the left hand side.`
        }, 
        {
          src: dnmEntryDialog,
          description: `This is the entry dialog where you input all of the details of your day such as mood, productivity, and all of the lifestyle factors or habits you did or did not do. You can also not input anything for the lifestyle factors if it makes sense to do so.`
        }, 
        {
          src: dnmInsights,
          description: `This is where the magic happens. This takes all of the daily entries and all the data related to it in order to create a scatter plot which can show you important information about how much impact and correlations the lifestyle factors has with mood and productivity. You can also filter using the date range, or filter by lifestyle factors you did or did not do. `
        }, 
        {
          src: dnmInsights2,
          description: `This section of the insights tab shows the top 3 factors for each statistics category.`
        }, 
        {
          src: dnmLifestylefactors,
          description: `This is where you add all of the lifestyle factors you want to track, which are then shown as options in the entry dialog which you can mark as did or did not do for the day. You can also archive the factors you do not want to use anymore which then are not shown and ignored on the other pages of the application.`

        }, 
        {
          src: dnmAbout,
          description: `Explanation of how to use the application and other details about each page or component.`
        }, 
        
      ], 
      stack: ['react.js', 'next.js', 'typescript', 'tailwindcss', 'postgresql'],
      websiteUrl: '',
      youtubeUrl: 'https://www.youtube.com/@untalentedwebdev'
    },
    { name: 'Polyglot Pal', description: '', images: [], stack: []},
    { name: 'Jobtrackr', description: '', images: [], stack: []},
  ]
  return (
    <div className="relative flex ">

      <div className="absolute top-0 w-12 border-t border-white left-8"></div>
      <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text-lr">
        FEATURED WORK
      </div>

      <div className="flex flex-col justify-between w-64 h-full p-2 pt-4 pb-4">
        {
        projects.map((proj, index) => (
          <Sheet>
            <SheetTrigger className="flex items-end justify-between gap-2 transition-colors hover:text-stone-500">
              <span className="pl-2 mb-1 text-4xl">{index + 1}. {proj.name}</span>
            </SheetTrigger>

            <SheetContent className='flex flex-col h-full max-h-screen gap-4 pt-16 pb-12 overflow-y-auto bg-black bg-opacity-75 border-t-black font-main' side={'bottom'}>
              <SheetTitle className='flex items-center justify-between '>
                <span className='text-3xl font-glow-white'>{proj.name}</span>
                
              </SheetTitle>
              
              <div className='flex flex-wrap items-center gap-2'>
                {
                proj.stack.map((tech, index) => (
                  <span key={tech}>{tech}</span>
                ))
                }
              </div>
              {
              proj.name === 'Daynestmetrics' &&
              <Alert className='border'>
                <RocketIcon className="w-4 h-4" />
                <AlertTitle>I built a big portion of this project in public on my youtube channel!</AlertTitle>
                <AlertDescription className=''>
                   <a className='flex items-center gap-2 text-red-500 rounded-lg hover:underline w-fit' href={proj.youtubeUrl} target='_blank'>
                    <YouTubeIcon />
                    <span className='flex flex-wrap whitespace-prewrap'>My Youtube Channel</span>
                  </a>
                </AlertDescription>
              </Alert>
             
              }
              <SheetDescription className='flex flex-col p-4 text-sm font-semibold text-white border border-white opacity-75 '>
                <span className='text-lg font-bold'>Description</span>
                <span>{proj.description}</span>
              </SheetDescription>
              <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                {
                proj.images.map((data, index) => (
                  <div className='relative flex items-start justify-center w-full h-full overflow-hidden rounded-lg group'>
                    <img className='transition-all duration-500 bg-cover rounded-lg grayscale hover:grayscale-0 hover:opacity-90 opacity-70' key={data.src} src={data.src} />
                    {
                    data.description &&
                    <div className='absolute w-full max-h-full p-2 overflow-y-auto text-sm transition-all duration-700 bg-black -bottom-full group-hover:bottom-0 bg-opacity-90'>{data.description}</div>
                    }
                  </div>
                ))
                }

              </div>

              <SheetClose className='flex items-center justify-center w-full mt-4'>
                <div className='p-2 border border-white '>Close X</div>
              </SheetClose>
              <a className='fixed top-0 left-0 z-50 flex items-center justify-center w-24 h-12 text-black bg-white shadow-lg rounded-b-2xl shadow-stone-400' href={proj.websiteUrl} target='_blank'>
                <span className='font-bold text-black '>Visit Site</span>
              </a>
              
            </SheetContent>

          </Sheet>
          
        ))
        }
      </div>

      
    </div>
  )
}

//DESIGN IS HARD