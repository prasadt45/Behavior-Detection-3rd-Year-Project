import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat backdrop-blur-lg"
    style={{
      backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/imentiv-assets/o/image-tool%2Fbanner-bg-2.jpg?alt=media&token=4dd6b17a-88e1-448a-a14f-f70ec1d278ca')",
    }}
  >
    </div>
  )
}

export default App
