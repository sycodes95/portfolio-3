import Title from "./components/title";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import SocialMedia from "./components/socialMedia";
import Stack from "./components/stack";
import Projects from "./components/projects";

export default function Content () {

  
  return (
    <div className="z-10 flex flex-col items-center w-full gap-4 p-8 md:w-fit">
      <Title />

      <SocialMedia />

      <div className="flex flex-col gap-4 md:flex-row">
        <Stack />
        <Projects />
      </div>

      <div className="flex flex-col items-center w-full pt-12">
        <Sheet>
          <SheetTrigger className="group">
            <div className="flex items-center justify-center text-white transition-all duration-500 bg-white rounded-full cursor-pointer hover:bg-black hover:bg-opacity-0 w-44 h-44 group box-glow-white">
              <span className="text-sm font-bold text-center text-black transition-all duration-500 group-hover:text-white font-glow-black" >
                MY STORY
              </span>
            </div>
          </SheetTrigger>
          <SheetContent className="w-full max-h-screen overflow-y-auto text-lg text-white bg-black border-none bg-opacity-90 md:-translate-x-1/2 fe h-fit min-h-fit rounded-t-3xl md:w-1/2 font-main md:left-1/2" side={'bottom'}>
            <SheetHeader>
              <SheetTitle className="text-2xl">ME</SheetTitle>
              <SheetDescription className="flex flex-col gap-2">
                <span className="text-lg font-main">
                  I initially got into programming due to my realization of how useful it could be to learn this skill, especially because the future is tech.
                  My journey started with telling myself that I will fully commit to learning this craft for 1 month to see if it's something I could 
                  see myself continue doing and more importantly, to see if I even enjoyed it at all.

                </span>
                <span className="text-lg font-main">Eventually as I kept improving and growing as a developer, programming and creating web applications felt like a video game. To the point where I stopped playing actual video games and 
                just built applications instead.
                

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur temporibus hic quam exercitationem labore deleniti maxime praesentium, at sunt ex enim obcaecati minus dolorum ipsam, consectetur quibusdam molestias tempore!
                </span>

                <SheetClose className="p-2 mt-4 text-white border border-white rounded-2xl" asChild={true} >
                  <span>Close X</span>
                </SheetClose>

                
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        
      </div>

      
      
    </div>
  )
}