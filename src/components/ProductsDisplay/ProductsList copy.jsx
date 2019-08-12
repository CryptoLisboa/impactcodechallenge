import React from 'react'
import './WineList.css'
import { List, AutoSizer } from 'react-virtualized'
import WineItem from './WineItem'
import Loader from '../lib/Loader'
import CocktailItem from './CocktailItem'

const ProductsList = ({
  itemsList, loadingItemsList, itemsDispatch, demo, WINE_DEMO
}) => {
  if (loadingItemsList) {
    return (
      <div className="v-space-xl">
        <Loader />
      </div>
    )
  }
  function rowRenderer ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    style // Style object to be applied to row (to position it)
  }) {
    debugger
    return (
      <div
        key={key}
        style={style}
      >
        {demo === WINE_DEMO
          ? <WineItem {...itemsList[index]} />
          : <CocktailItem {...itemsList[index]} />}
      </div>
    )
  }
  return (
    <AutoSizer>
      {({ height, width }) => {
        debugger
        return (
          <List
            // autoHeight
            // className={styles.List}
            // className="List"
            itemSize={100}
            height={1000}
            rowCount={itemsList.length}
            rowHeight={150}
            rowRenderer={rowRenderer}
            width={width}
          />
        )
      }}
    </AutoSizer>
  )
}

export default ProductsList

// return (
//   <AutoSizer>
//     {({ height, width }) => {
//       debugger
//       return (
//         <List
//           className="List"
//           height={height}
//           itemCount={10}
//           width={width}
//           itemSize={150}
//           data={itemsList}
//         >
//           {Row}
//           {/* {({ index, style }) => {
//             debugger
//             return (
//               <div
//                 role="presentation"
//                 className="WineItem"
//                 style={style}
//                 onClick={() => itemsDispatch(setItem(itemsList[index]))}
//               >
//                 {
//                   demo === WINE_DEMO
//                     ? <WineItem {...itemsList[index]} />
//                     : <CocktailItem {...itemsList[index]} />
//                 }
//                 <div className="ui divider" />
//               </div>
//             )
//           }} */}
//         </List>
//       )
//     }}
//   </AutoSizer>
// )
