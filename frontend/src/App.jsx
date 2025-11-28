import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Upload from './components/Upload.jsx'
import ChatResponse from './components/ChatResponse.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
      <Upload />
      <ChatResponse />
    </>
  )
}

export default App
