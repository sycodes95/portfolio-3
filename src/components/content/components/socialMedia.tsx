import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useToast } from '@/components/ui/use-toast';
      

export default function SocialMedia () {
  const { toast } = useToast()
  const email = "sycodes95@gmail.com"
  const links = [
    { href : "https://github.com/sycodes95", icon : <GitHubIcon className="w-5 h-5 " />, cn:'text-white hover:text-gray-500 transition-colors duration-300'},
    { href : "https://www.youtube.com/@untalentedwebdev", icon : <YouTubeIcon className="w-5 h-5 " />, cn:'text-white hover:text-red-500 transition-colors duration-300'},
    { href : "https://www.linkedin.com/in/kevinsykim/", icon : <LinkedInIcon className="w-5 h-5" />, cn:'text-white hover:text-blue-500 transition-colors duration-300'},

  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email Copied To Clipboard :)",
        description: "Come say hi ->",
      })
      console.log('Email copied to clipboard');

      // Optionally, show some feedback to the user here
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        title: "Error copying to clipboard",
        description: ":(",
      })
      // Optionally, handle the error case
    }
  };
  return (
    <div className="fixed bottom-0 z-40 flex flex-col items-center justify-center gap-2 w-fit ">
      <button className='fixed flex items-center h-8 gap-2 p-2 font-bold text-white transition-colors bg-black bg-opacity-50 backdrop-blur-md rounded-b-2xl top-2 hover:text-gray-400 ' onClick={()=> copyToClipboard()}>
        <span>{email}</span>
        <ContentCopyIcon fontSize='extra-small'/>
      </button>
      <div className='flex items-center justify-center gap-4 p-2 bg-black border-8 border-b-0 border-white backdrop-blur-md bg-opacity-90'>
        {
        links.map((data, index) => (
          <a className={`${data.cn} flex items-center justify-center object-contain w-8 h-6 `} href={data.href} target='_blank'>{data.icon}</a>
        ))
        }

      </div>
      
    </div>
  )
}