import React, { useState, useReducer } from 'react'
import SearchEngine from './SearchEngine/SearchEngine'
// import DemoPicker from './demoPicker'
import './global.css'
import { itemsInitialState, itemsReducer } from '../state/CocktailReducer'
import ProductsDisplay from './ProductsDisplay/ProductsDisplay'
import AddCocktail from './ProductsDisplay/AddCocktail'

const configMockChooser = {
  title: 'Pick a Demo',
  WINE_DEMO: 'WINE_DEMO',
  COCKTAIL_DEMO: 'COCKTAIL_DEMO'
}

// const switchMock = (setter) => {
//   const { WINE_DEMO, COCKTAIL_DEMO } = configMockChooser
//   return (value) => {
//     if (value === WINE_DEMO) {
//       return () => setter(WINE_DEMO)
//     }
//     return () => setter(COCKTAIL_DEMO)
//   }
// }

const App = () => {
  // const [demo, setDemo] = useState('COCKTAIL_DEMO')
  const [demo] = useState('COCKTAIL_DEMO')
  // const handleMockChange = switchMock(setDemo)
  // const mockProps = { configMockChooser, handleMockChange, demo }
  const [itemsStore, itemsDispatch] = useReducer(itemsReducer, itemsInitialState)
  const SearchEngineConfig = {
    itemsDispatch, demo, ...configMockChooser, loadingItemsList: itemsStore.loadingItemsList
  }
  const ProductsDisplayConfig = {
    ...itemsStore, itemsDispatch, demo, ...configMockChooser
  }
  const AddCocktailConfig = { itemsDispatch }
  return (
    <div className="ui container">
      {/* <section className="v-space-xxl">
        <DemoPicker {...mockProps} />
      </section> */}
      <section>
        <SearchEngine {...SearchEngineConfig} />
      </section>
      <section>
        <AddCocktail {...AddCocktailConfig} />
      </section>
      <section className="v-space-xl">
        <ProductsDisplay {...ProductsDisplayConfig} />
      </section>
    </div>
  )
}

export default App
