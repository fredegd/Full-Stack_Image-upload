import { useState } from 'react'
import './App.css'
import InputForm from "./components/InputForm"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InputForm/>
    </>
  )
}

export default App
