import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MockChooser from './mockChooser'
import WineMock from './wineMock/WineMockContainer'
import './global.css'

const configMockChooser = {
  title: 'Pick an App',
  WINE_DEMO: 'WINE_DEMO',
  COCKTAIL_DEMO: 'COCKTAIL_DEMO'
}

const switchMock = (setter) => {
  const { WINE_DEMO, COCKTAIL_DEMO } = configMockChooser
  return (value) => {
    if (value === WINE_DEMO) {
      return () => setter(WINE_DEMO)
    }
    return () => setter(COCKTAIL_DEMO)
  }
}

const App = () => {
  const { WINE_DEMO, COCKTAIL_DEMO } = configMockChooser
  const [demo, setDemo] = useState('WINE_DEMO')
  const handleMockChange = switchMock(setDemo)
  const mockProps = { configMockChooser, handleMockChange, demo }
  return (
    <div className="ui container">
      <section className="v-space-xxl">
        <MockChooser {...mockProps} />
      </section>
      <div>
        {demo === WINE_DEMO && <WineMock />}
      </div>
    </div>
  )
}

export default App
