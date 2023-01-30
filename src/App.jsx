import React, { useState } from 'react'
import './app.sass'
import FormControl from './components/FormControl'
import Sidebar from './components/Sidebar'

const PRICES = {
  plans: {
    arcade: {
      monthly: 9,
      yearly: 90
    },
    advanced: {
      monthly: 12,
      yearly: 120
    },
    pro: {
      monthly: 15,
      yearly: 150
    }
  },
  addOns: {
    onlineService: {
      title: 'Online service',
      description: 'Access to multiplayer games',
      prices: {
        monthly: 1,
        yearly: 10
      }
    },
    largerStorage: {
      title: 'Larger storage',
      description: 'Extra 1TB of storage',
      prices: {
        monthly: 2,
        yearly: 20
      }
    },
    customizableProfile: {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      prices: {
        monthly: 2,
        yearly: 20
      }
    }
  }
}

function App () {
  const [stage, setStage] = useState(1)

  return (
    <main>
      <Sidebar stage={stage} />
      <FormControl stage={stage} setStage={setStage} prices={PRICES} />
    </main>
  )
}

export default App
