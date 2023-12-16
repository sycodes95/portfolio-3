import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// import { useToast } from '@/components/ui/use-toast';
      

export default function SocialMedia () {
  // const { toast } = useToast()
  // const email = "sycodes95@gmail.com"
  const links = [
    { href : "https://github.com/sycodes95", icon : <GitHubIcon className="w-5 h-5 " />, cn:'text-white hover:text-gray-500 transition-colors duration-300'},
    { href : "https://www.youtube.com/@untalentedwebdev", icon : <YouTubeIcon className="w-5 h-5 " />, cn:'text-white hover:text-red-500 transition-colors duration-300'},
    { href : "https://www.linkedin.com/in/kevinsykim/", icon : <LinkedInIcon className="w-5 h-5" />, cn:'text-white hover:text-blue-500 transition-colors duration-300'},

  ];
  
  return (
    <div className="fixed bottom-0 z-[60] flex flex-col items-center justify-center p-2 pb-0 bg-black border-8 border-b-0 border-white w-fit backdrop-blur-md bg-opacity-90">
      
      <div className='flex items-center justify-center gap-4 p-2 '>   
        {
        links.map((data) => (
          <a className={`${data.cn} flex items-center justify-center object-contain w-8 h-6 `} href={data.href} target='_blank' key={data.href}>{data.icon}</a>
        ))
        }

      </div>
      
    </div>
  )
}