import React from 'react'
import SearchBar from './searchBar/SearchBar'
import WineDetail from './wine/WineDetail'
import WineAdder from './wine/WineAdder'
import WineList from './wine/WineList'
import './WineMock.css'

const WineUI = ({
  onSearchSubmit,
  addNewWine,
  wines,
  setSelectedWine,
  selectedWine
}) => (
  <div className="ui container">
    <SearchBar onSearchSubmit={onSearchSubmit} />
    <div className="WineAdder">
      <WineAdder addNewWine={addNewWine} />
    </div>
    <div
      className="ui grid"
    >
      <div className={wines.length ? 'three wide column' : ''}>
        <WineList wines={wines} onWineClick={setSelectedWine} />
      </div>
      {selectedWine && (
        <div className={wines.length ? 'thirteen wide column' : ''}>
          <WineDetail {...selectedWine} />
        </div>
      )}
    </div>
  </div>
)

export default WineUI
