import { useState, useEffect, useRef } from 'react'
import './App.css';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = ()=> {
      let pass = '';
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) {
        str  += '0123456789';
      }
      if(charAllowed) {
        str += "!@#$%^&*-_+=[]{}~`"
      }
      for(let i=1;i<=length;i++) {
        let index = Math.floor(Math.random()*str.length) +1
        pass += str.charAt(index)
      }
      setPassword(pass)
    }
  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  };

    useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed])
    return (
    <>
   <h1 className='text-4xl text-center text-black mb-3 mt-3'>Password Generator</h1>
   <div style={{display:'flex', justifyContent:'center', marginBottom: '10px'}}>
   <input readOnly value={password} className='text-black' style={{border: 'solid black 3px', borderRadius: '10px', width: '500px', marginRight: '10px', backgroundColor:'olive', color: 'white'}} ref={passwordRef} ></input>
   
   <button style={{backgroundColor: 'olive', width: '60px', border:'solid yellow 2px', borderRadius: '10px', color:'white'}} onClick={() => copyToClipboard()}>Copy</button>
   </div>
    
   <div style={{display:'flex', justifyContent:'center', marginBottom: '10px'}}>
    <div className="flex-item">
    <input type="range" min={6} max={100} value={length} className='cursor-pointer mr-2'
    onChange={(e) => setLength(e.target.value)} />
    
    <label>Length {length}</label>
    </div>
    <div className="flex-item">
    <label>
    <input type='checkbox' defaultChecked={numberAllowed} onChange={() => setNumberAllowed(prevValue =>!prevValue)} className='mr-1' />
     numbers
    </label>
    </div>
    <div className="flex-item"></div>
      <label>
      <input type='checkbox' className='flex-item' defaultChecked={charAllowed} onChange={() => setCharAllowed(prevValue =>!prevValue)} />
         special chars
      </label>
    <div className="flex-item"></div>
    </div>

   </>
  )
}

export default App
