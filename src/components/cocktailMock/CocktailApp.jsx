import React, { Component } from 'react'
import { prop } from 'ramda'
import SearchBar from './searchBar/SearchBar'
import { getWines } from '../../api/mock'
import WineDetail from './wine/WineDetail'
import { searchWines } from './util'
import WineAdder from './wine/WineAdder'
import WineList from './wine/WineList'
import './CocktailApp.css'

export default class WineMock extends Component {
    state = {
      wines: [],
      selectedWine: undefined,
      winesFiltered: undefined,
      searchTerm: ''
    }

    async componentDidMount () {
      this.handleSearchResults(await getWines())
    }

    handleSearchResults = results => this.setState({ wines: results, selectedWine: results.length ? results[0] : undefined })

    onWineClick = wine => this.setState({ selectedWine: wine })

    onSearchSubmit = (term) => {
      if (term) {
        const winesFiltered = searchWines(this.state.wines, term) || []
        if (prop('length', winesFiltered) && !winesFiltered.find(wine => wine === this.state.selectedWine)) { this.onWineClick(winesFiltered[0]) } else this.onWineClick(undefined)
        this.setState({ winesFiltered, searchTerm: term })
      } else {
        this.setState({ searchTerm: term, winesFiltered: undefined })
      }
    }

    addNewWine = wine => this.setState({ wines: [wine, ...this.state.wines], selectedWine: wine })

    render () {
      const { wines, selectedWine, winesFiltered } = this.state
      const wineList = winesFiltered || wines
      return (
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
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
