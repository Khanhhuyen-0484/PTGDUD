import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [text, setText] = useState('');

  function handlesAssign(e) {
    setText(e.target.value);
  }

  function handlesClick() {
    setName(text)
  }
  return (
    <>
      <input onChange={handlesAssign} type="text" />
      <br />
      <button onClick={handlesClick}>Click</button>   
      <br /> 
      <span>{name}</span>
    </>
  )
}

export default App
