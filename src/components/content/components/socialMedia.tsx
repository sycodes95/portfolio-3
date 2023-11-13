import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function SocialMedia () {
  return (
    <div className="flex items-center justify-center gap-2 p-2 w-fit ">
      <GitHubIcon className="w-5 h-5 text-white" />
      <YouTubeIcon className="w-5 h-5 text-red-500" fontSize="large" />
      <LinkedInIcon className="w-5 h-5 text-blue-400"/>
    </div>
  )
}