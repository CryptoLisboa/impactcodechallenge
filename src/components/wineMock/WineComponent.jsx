import React, { Component } from 'react'
import { prop } from 'ramda'
import { getWines } from '../../api/mock'
import { searchWines } from './util'
import SearchBarContainer from './searchBar/SearchBar';
import WineAdder from './wine/WineAdder';
import WineList from './wine/WineList';

export default class WineMock extends Component {
    state = {
      wines: [],
      selectedWine: undefined,
      winesFiltered: undefined
    }

    async componentDidMount () {
      this.handleSearchResults(await getWines())
    }

    handleSearchResults = results => this.setState({ wines: results, selectedWine: results.length ? results[0] : undefined })

    onWineClick = wine => this.setState({ selectedWine: wine })

    onSearchSubmit = (term) => {
      const { wines, selectedWine } = this.state
      if (term) {
        const winesFiltered = searchWines(wines, term) || []
        if (
          prop('length', winesFiltered) && !winesFiltered.find(wine => wine === selectedWine)
        ) { this.onWineClick(winesFiltered[0]) } else this.onWineClick(undefined)
        this.setState({ winesFiltered })
      } else {
        this.setState({ winesFiltered: undefined })
      }
    }

    addNewWine = (wine) => {
      const { wines } = this.state
      this.setState({ wines: [wine, ...wines], selectedWine: wine })
    }

    render () {
      const { wines, selectedWine, winesFiltered } = this.state
      const wineList = winesFiltered || wines
      return (
        <div className="ui container">
          <SearchBarContainer onSearchSubmit={this.onSearchSubmit} />
          <div className="WineAdder">
            <WineAdder addNewWine={this.addNewWine} />
          </div>
          <div
            className="ui grid"
          >
            <div className={wineList.length ? 'three wide column' : ''}>
              <WineList wines={wineList} onWineClick={this.onWineClick} />
            </div>
            {selectedWine && (
              <div className={wineList.length ? 'thirteen wide column' : ''}>
                <WineDetail {...selectedWine} />
              </div>
            )}
          </div>
        </div>
      )
    }
}
