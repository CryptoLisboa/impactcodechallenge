import React, { useState, useEffect } from 'react'
import { getWines } from '../../api/mock'
import { searchWines } from './util'
import './WineMock.css'
import WineUI from './WineUI'

const WineMockContainer = () => {
  const [wines, setWines] = useState([])
  const [selectedWine, setSelectedWine] = useState(undefined)
  const [winesFiltered, setWinesFiltered] = useState(undefined)

  const handleSearchResults = (results) => {
    setWines(results)
    setSelectedWine(results.length ? results[0] : undefined)
  }
  useEffect(async () => {
    handleSearchResults(await getWines())
  }, [])

  const onSearchSubmit = (term) => {
    if (term) {
      const winesFilteredGen = searchWines(wines, term) || []
      if (
        winesFilteredGen.length &&
        !winesFilteredGen
          .find(wine => wine === selectedWine)
      ) {
        setSelectedWine(winesFilteredGen[0])
      } else {
        setSelectedWine(undefined)
      }
      setWinesFiltered(winesFilteredGen)
    } else {
      setWinesFiltered(undefined)
    }
  }

  const addNewWine = (wine) => {
    setWines([wine, ...wines])
    setSelectedWine(wine)
  }
  const WineUIProps = {
    onSearchSubmit,
    addNewWine,
    wines: winesFiltered || wines,
    setSelectedWine,
    selectedWine
  }
  return (<WineUI {...WineUIProps} />)
}

export default WineMockContainer
