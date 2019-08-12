import React from "react"
import { FixedSizeList as List } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import './WineList.css'
import WineItem from './WineItem'

const WineList = ({ wines, onWineClick }) => {
    return !wines.length
        ? (
            <div class="ui container centered">
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
            <p></p>
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
                <div className="WineItem" style={style} onClick={() => onWineClick(wines[index])}>
                  <WineItem {...wines[index]}/>
                  <div class="ui divider"/>
                </div>
              )}
            </List>
          )}
        </AutoSizer>
    )
}

export default WineList
