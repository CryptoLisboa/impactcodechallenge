import React from 'react'
import './WineList.css'
import VirtualList from 'react-virtual-list'
import WineItem from './WineItem'
import Loader from '../lib/Loader'
import { setItemId, loadingItem } from '../../state/CocktailAction'
import CocktailItem from './CocktailItem'

const ITEM_HEIGHT = 160
const SCALE = 4

const ProductsList = ({
  itemsList, loadingItemsList, itemsDispatch, demo, WINE_DEMO
}) => {
  const rowRenderer = ({
    virtual: { items, style },
    itemHeight
  }) => {
    const height = Math.min(itemsList.length * ITEM_HEIGHT, SCALE * ITEM_HEIGHT)
    return (
      <div style={{ ...style, height }}>
        {items.map(item => (
          <div
            role="presentation"
            key={`item_${item.id}`}
            style={{ height: itemHeight }}
            onClick={() => {
              itemsDispatch(loadingItem(true))
              itemsDispatch(setItemId(item.id))
            }}
          >
            {demo === WINE_DEMO
              ? <WineItem {...item} />
              : <CocktailItem {...item} />}
          </div>
        ))}
      </div>
    )
  }
  const MyVirtualList = VirtualList()(rowRenderer)
  if (loadingItemsList) return <div className="v-space-xxl"><Loader /></div>
  return (
    <div style={{
      overflow: 'auto',
      height: Math.min(itemsList.length * ITEM_HEIGHT, SCALE * ITEM_HEIGHT)
    }}
    >
      <MyVirtualList
        items={itemsList}
        itemHeight={ITEM_HEIGHT}
      />
    </div>
  )
}

export default ProductsList
