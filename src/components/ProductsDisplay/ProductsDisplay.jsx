import React from 'react'
import { pick } from 'ramda'
import ProductsList from './ProductsList'
import CocktailDetail from './CocktailDetail'
import WineDetail from './WineDetail'

const ProductsDisplay = (props) => {
  const { demo, COCKTAIL_DEMO } = props
  return (
    <div className="ui grid">
      <div className="four wide column">
        <ProductsList {...productListPicker(props)} />
      </div>
      <div className="twelve wide column">
        {demo === COCKTAIL_DEMO
          ? <CocktailDetail {...cocktailItemPicker(props)} />
          : <WineDetail />}
      </div>
    </div>
  )
}

export default ProductsDisplay

const productListPicker = pick([
  'itemsList',
  'loadingItemsList',
  'itemsDispatch',
  'demo',
  'WINE_DEMO',
  'COCKTAIL_DEMO'
])

const cocktailItemPicker = pick([
  'item',
  'itemsList',
  'loadingItem',
  'itemId',
  'itemsDispatch'
])
