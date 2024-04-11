import { useState } from 'react'
import Card from "./Card"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
        <Card />

    </body>
  )
}

export default App
