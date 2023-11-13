
import './App.css'

import Smoke from './components/smokeThreeJs/smokeThreeJs'
import Content from './components/content/content'
import Borders from './components/borders/borders'


function App() {

  return (
    <div className='flex flex-col items-center w-full h-full min-h-screen pt-4 pb-12 bg-none font-main'>
      <Borders />
      <div className='flex flex-col items-center w-full h-full max-w-6xl gap-12 overflow-hidden bg-none grow '>
        <Content />
      </div>
      <Smoke/>
    </div>
  )
}

export default App
