import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: 'Shikhar',
    bio: 'I am enthusiastic about learning React',
    btnText: 'View my Linkedin'
  }
  let newArray = [1, 3, 2]

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl'>Tailwind test</h1>
     <Card
     data={myObject}
     />
    </>
  )
}

export default App
