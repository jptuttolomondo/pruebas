import { useState } from 'react'
import axios from'axios'
import './App.css'
function App() {
 
  const conectar=async()=> {
const port =import.meta.env.VITE_PORT
const res= await axios.get(`http://localhost:${port}/ruta1`)
setResponse(res.data)
}

const[Response, setResponse]=useState(null)
  return (
    <>
      <div>
      {Response}
      </div>
      <h1>pruebas </h1>
      <div className="card">
  <button onClick ={conectar}>conectar</button>
      </div>
      </>
  )
}

export default App
