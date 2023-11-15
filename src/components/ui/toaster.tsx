import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import gmailIcon from "../../assets/gmailIcon.png"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast className="z-10 hidden w-full text-white bg-black border-none lg:flex bg-opacity-80" key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className="text-lg">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="flex items-center gap-2 text-sm font-bold">{description} <a href="https://gmail.com/" target="_blank"><img className="object-contain w-8 h-8 transition-all duration-700 hover:grayscale" src={gmailIcon} /></a> </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
