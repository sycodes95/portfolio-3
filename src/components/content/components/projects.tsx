import dnmDashboard from '../../../assets/projectPictures/daynestmetrics/dashboard.png'
import dnmEntries from '../../../assets/projectPictures/daynestmetrics/entries.png'
import dnmInsights from '../../../assets/projectPictures/daynestmetrics/insights.png'
import dnmInsights2 from '../../../assets/projectPictures/daynestmetrics/insights2.png'
import dnmLifestylefactors from '../../../assets/projectPictures/daynestmetrics/lifestylefactors.png'
import dnmLangingPage from  '../../../assets/projectPictures/daynestmetrics/landingPage.png'
import dnmAbout from  '../../../assets/projectPictures/daynestmetrics/about.png'
import dnmEntryDialog from  '../../../assets/projectPictures/daynestmetrics/entryDialog.png'

import pgpApp from '../../../assets/projectPictures/polyglotpal/app.png'
import pgpLandingPage from '../../../assets/projectPictures/polyglotpal/landingPage.png'

import jtDashboard from '../../../assets/projectPictures/jobtrackr/dashboard.png'
import jtTable from '../../../assets/projectPictures/jobtrackr/table.png'
import jtLogin from '../../../assets/projectPictures/jobtrackr/login.png'
import jtEntry from '../../../assets/projectPictures/jobtrackr/application-entry.png'
import DescriptionIcon from '@mui/icons-material/Description';


import { RocketIcon } from "@radix-ui/react-icons"
import YouTubeIcon from '@mui/icons-material/YouTube';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export default function Projects () {

  const projects = [
    { 
      name: 'daynestmetrics', 
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
      websiteUrl: 'https://daynestmetrics.up.railway.app/',
      youtubeUrl: 'https://www.youtube.com/@untalentedwebdev',
      // youtubeDemo: <iframe className='w-full' width="" height="500" src="https://www.youtube.com/embed/KnOYuX3RQzY?si=-fx7s8GUscBLm87T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    },
    { 
      name: 'polyglot pal', 
      description: 'Polyglot Pal is designed to help language learners improve their speaking and communication skills with the help of AI, in a specific language and level of your choice.', 
      images: [
        { src: pgpLandingPage, description: ''},
        { src: pgpApp, description: 'The user can either speak to the AI using their microphone, or text and you can also control whether the AI speaks to you or only texts you back. If you wish the save the settings set for a specific conversation you can simply click save and the conversation will be added on the left hand side. '},
      ], 
      websiteUrl: 'https://polyglotpal.up.railway.app/',
      stack: ['react.js', 'typescript', 'tailwindcss', 'convex'],
      youtubeUrl: 'https://youtu.be/PJjk4Qg_GiU?si=eZEPVYk85dUh1vJh&t=574'
    },
    { 
      name: 'jobtrackr', 
      description: 'Jobtrackr was created to help job seeker keep track of applications and find ways to improve their job seeking strategies using data visualization tools', 
      images: [
        { src: jtLogin, description: ''},
        { src: jtDashboard, description: 'Dashboard that provides statistics and data visualizations to give the users insights into their job seeking strategies'},
        { src: jtEntry, description: 'Job application entry modal.'},
        { src: jtTable, description: 'Table view of all job applications. Features sorting by columns, filtering, and pagination.'},
      ], 
      websiteUrl: 'https://jobtrackr.pro',
      stack: ['react.js', 'tailwindcss', 'node.js', 'express.js', 'postgresql'],
      youtubeUrl: ''
    },
  ]
  
  return (
    <div className="relative flex ">

      <div className="absolute top-0 w-12 border-t border-white left-8"></div>
      <div className="pt-2 pb-2 text-lg font-bold text-black bg-white h-fit w-fit vertical-text-lr text-glitch">
        FEATURED WORK
      </div>

      <div className="flex flex-col justify-between w-64 h-full p-2 pt-4 pb-4">
        {
        projects.map((proj, index) => (
          <Sheet key={proj.name}>
            <SheetTrigger className="flex items-end justify-between gap-2 transition-colors hover:text-pink-400 ">
              <span className="pl-2 mb-1 text-2xl md:text-4xl text-glitch hover-text-glitch">{index + 1}. {proj.name}</span>
            </SheetTrigger>

            <SheetContent className='left-0 flex flex-col items-center w-full h-full max-w-full max-h-screen gap-0 overflow-y-auto text-black bg-white bg-opacity-100 border-none md:w-1/2 font-main bg-pattern-white' side={'bottom'}>
              <SheetTitle className='flex items-center justify-center w-full p-8 text-white transition-all duration-700 border-b border-white hover:bg-black group box-glitch'>
                <span className='mt-3 text-4xl text-white text-opacity-0 transition-all duration-500 text-glitch-alt text-glitch font-outline-black group-hover:text-white font-display md:text-5xl lg:text-7xl '>{proj.name}</span>
                
              </SheetTitle>
              
              {/* <div className='flex flex-wrap items-center justify-center pl-2 pr-2 text-sm font-semibold border-black md:text-lg text-stone-700 gap-x-2' >
                {
                proj.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))
                }
              </div> */}
              {
              proj.name === 'daynestmetrics' &&
              <div className='flex items-center w-full text-lg text-black border-b border-white box-glitch'>
                
                <div className='flex flex-col w-full gap-2 p-4 bg-opacity-75 border-t border-b border-r border-black'>
                  {/* <span className='font-semibold'>I built a big portion of this project in public on my youtube channel!</span> */}
                  <span className='text-sm'>
                    <a className='flex items-center gap-2 text-red-500 rounded-lg hover:underline w-fit text-glitch' href={proj.youtubeUrl} target='_blank'>
                      <div className='text-4xl'>
                        <YouTubeIcon fontSize='inherit' />
                      </div>
                      <span className='flex flex-wrap whitespace-prewrap'>My Youtube Channel</span>
                    </a>
                  </span>
                </div>
              </div>
              }
              {
              proj.name === 'polyglot pal' &&
              <div className='flex items-center w-full text-lg '>
                <div className='flex items-center justify-center w-20 h-full p-4 bg-black border border-black'>
                  <RocketIcon className="w-8 h-full text-white" />
                </div>
                <div className='flex flex-col w-full gap-2 p-4 text-black bg-opacity-75 border-t border-b border-r border-black'>
                  <span className='font-semibold'>This project won the honorable mention category of an online hackathon.</span>
                  <span className='text-sm'>
                    <a className='flex items-center gap-2 text-red-500 rounded-lg hover:underline w-fit' href={proj.youtubeUrl} target='_blank'>
                      <YouTubeIcon />
                      <span className='flex flex-wrap whitespace-prewrap'>Here are the winners of the Hackathon</span>
                    </a>
                  </span>
                </div>
              </div>
              
              }
              <div className='flex items-center w-full text-lg '>
                <div className='flex items-center justify-center w-20 h-full p-4 bg-black border border-black'>
                  <DescriptionIcon className="h-full text-white " fontSize='large' />
                </div>
                <div className='flex flex-col w-full gap-2 p-4 text-black bg-opacity-75 border-t border-b border-r border-black'>
                  <span className='font-semibold'>Description</span>
                  <span className='text-sm'>
                    {proj.description}
                  </span>
                </div>
              </div>

              
              {/* <div className='w-full h-full'>
                {proj.youtubeDemo}
              </div> */}
              <div className='flex flex-col grow'>
                {
                proj.images.map((data, index) => (
                  <div className='relative flex items-start justify-center w-full h-full overflow-hidden rounded-lg group' key={data.src}>
                    <img className={`${index % 2 !== 0 ? 'invert hover:invert-0' : 'invert-0 hover:invert' } transition-all duration-500 bg-cover rounded-lg grayscale hover:grayscale-0 hover:opacity-90 opacity-70`} key={data.src} src={data.src} />
                    {
                    data.description &&
                    <div className='absolute w-full max-h-full overflow-y-auto text-sm text-black transition-all duration-700 bg-white -bottom-full group-hover:bottom-0 bg-opacity-90'>
                      <div className='p-4 font-bold border border-black'>{data.description}</div>
                    </div>
                    }
                  </div>
                ))
                }

              </div>

              <div className='flex items-center justify-center w-full mt-4'>
                <SheetClose className='p-2 border border-white '>Close X</SheetClose>
              </div>
              <a className='fixed left-0 z-50 flex items-center justify-center w-8 h-32 text-black transition-all duration-500 bg-white shadow-sm hover:bg-black hover:text-white whitespace-nowrap top-1/2 rounded-r-2xl shadow-zinc-600 vertical-text-rl' href={proj.websiteUrl} target='_blank'>
                <span className='text-xl font-bold '>Visit Site</span>
              </a>

              {/* <SheetClose className='fixed top-0 right-0 hidden w-1/2 h-full cursor-default lg:contents'>
              
                <SheetContent className='hidden lg:flex fixed top-0 z-50 items-center text-black text-opacity-60 justify-center w-1/2 min-h-screen p-4   border-none cursor-default font-display text-[20vh] right-0 vertical-text-rl shadow-none bg-white bg-opacity-5 ' side={'right'}>
                  
                  <span className=''>{proj.name}</span>

                </SheetContent>
              </SheetClose> */}
              
              
            </SheetContent>
            

          </Sheet>
          
        ))
        }
      </div>

      
    </div>
  )
}

//DESIGN IS HARD