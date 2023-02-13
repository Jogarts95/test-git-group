import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EdwinEspinoza from './components/EdwinEspinoza'
import SebastianCastillo from './components/SebastianCastillo'
import UlisesSalvador from './components/UlisesSalvador'
import JosueGallardo from './components/JosueGallardo'

function App() {

  return (
    <div className='App flex gap-6 min-h-screen justify-center items-center'>
      <EdwinEspinoza/>
      <SebastianCastillo/>
      <UlisesSalvador/>
      <JosueGallardo/>
    </div>
  )
}

export default App
