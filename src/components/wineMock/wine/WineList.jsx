import React from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import './WineList.css'
import WineItem from './WineItem'

const WineList = ({ wines, onWineClick }) => (!wines.length
  ? (
    <div className="ui container centered">
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p />
    </div>
  )
  : (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={wines.length}
          itemSize={150}
          width={width}
          data={wines}
        >
          {({ index, style }) => (
            <div role="presentation" className="WineItem" style={style} onClick={() => onWineClick(wines[index])}>
              <WineItem {...wines[index]} />
              <div className="ui divider" />
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  ))

export default WineList
