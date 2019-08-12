import React, { useState, useEffect } from 'react'
import SearchEngineUI from './SearchEngineUI'
import { loadingItemList, setItemList } from '../../state/CocktailAction'
import SearchType from './SearchType'
import { getDrinks } from './util'

const SEARCH_TYPES = {
  DRINK: 'Drink',
  INGREDIENT: 'Ingredient'
}
const setSearch = (setter, itemsDispatch, searchType) => type => (type === SEARCH_TYPES.DRINK
  ? () => {
    setter(SEARCH_TYPES.DRINK)
    if (searchType !== SEARCH_TYPES.DRINK) itemsDispatch(setItemList([]))
  }
  : () => {
    setter(SEARCH_TYPES.INGREDIENT)
    if (searchType !== SEARCH_TYPES.INGREDIENT) itemsDispatch(setItemList([]))
  })

const SearchEngine = ({
  demo, COCKTAIL_DEMO, itemsDispatch, loadingItemsList
}) => {
  const [term, setTerm] = useState('')
  const [searchType, setSearchType] = useState(SEARCH_TYPES.DRINK)
  const onSearchChange = e => setTerm(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    itemsDispatch(loadingItemList(true))
  }
  useEffect(() => {
    if (loadingItemsList) {
      getDrinks({
        searchType, SEARCH_TYPES, term, itemsDispatch
      })
    }
  }, [loadingItemsList, itemsDispatch, searchType, term])
  return (
    <div>
      <SearchEngineUI
        term={term}
        onSearchChange={onSearchChange}
        onSubmit={onSubmit}
        hasCocktailSwitch={demo === COCKTAIL_DEMO}
        {...SEARCH_TYPES}
        searchType
        setSearch
      />
      {demo === COCKTAIL_DEMO && (
        <SearchType
          value={searchType}
          setter={setSearch(setSearchType, itemsDispatch, searchType)}
          title="Set search type"
          options={Object.values(SEARCH_TYPES)}
        />
      )}
    </div>
  )
}

export default SearchEngine
