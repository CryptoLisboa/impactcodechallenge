/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, createRef } from 'react'

// error: 'ui input error',
// disabled: 'ui disabled input'
const config = {
  cssLoading: 'ui icon input loading',
  cssDefault: 'ui input',
  cssFocus: 'ui input focus',
  serchBarLabel: 'Search wine',
  placeholder: 'Search videos...'
}

const getSearchBarCSS = ({ isLoading, focus }) => {
  if (isLoading) {
    return config.cssLoading
  } if (focus) {
    return config.cssFocus
  }
  return config.cssDefault
}

const SearchEngineUI = (props) => {
  const {
    onSubmit, term, onSearchChange
  } = props
  const searchBarRef = createRef()
  useEffect(() => {
    searchBarRef.current.focus()
  }, [])
  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <label>{config.serchBarLabel}</label>
        <div className="field">
          <input
            ref={searchBarRef}
            className={getSearchBarCSS(props)}
            value={term}
            placeholder={config.placeholder}
            onChange={onSearchChange}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchEngineUI
