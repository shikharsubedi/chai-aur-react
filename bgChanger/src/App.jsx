import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12'>
        <div className="flex flex-wrap justify-center align-center gap-3 shadow-log bg-white
        px-3 py-3 rounded-3xl"></div>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-small'
        style={{backgroundColor:'red'}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-small'
        style={{backgroundColor:'green'}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-small'
        style={{backgroundColor:'blue'}}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-small'
        style={{backgroundColor:'black'}}>Black</button>
      </div>
    </div>
  )
}

export default App
