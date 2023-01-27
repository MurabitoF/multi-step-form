import React, { useState } from 'react'
import './app.sass'
import FormControl from './components/FormControl'
import Sidebar from './components/Sidebar'

function App () {
  const [stage, setStage] = useState(1)

  return (
    <main>
      <Sidebar stage={stage} />
      <FormControl stage={stage} setStage={setStage} />
    </main>
  )
}

export default App
