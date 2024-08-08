import { useState } from 'react'


function App() {
 const [counter, setCounter] = useState(15)

 const addValue = () => {
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
}
 const decreaseValue = () => {
  counter <= 0 ?setCounter(0) :setCounter(counter -1);
 }

  return (
    <>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br />
    <button onClick={decreaseValue}>Decrease Value {counter}</button> 
    </>
  )
}

export default App
