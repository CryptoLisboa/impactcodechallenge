import React from 'react'

// error: 'ui input error',
// disabled: 'ui disabled input'
const config = {
    cssLoading: 'ui icon input loading',
    cssDefault: 'ui input',
    cssFocus: 'ui input focus',
    serchBarLabel: 'Search wine',
    placeholder: 'Search drinks or ingredients...'
}

const getSearchBarCSS = props => {
    if (props.isLoading) {
        return config.cssLoading 
    } else if (props.focus) {
    return config.cssFocus 
    } else {
        return config.cssDefault
    }
}

const SearchBarForm = props => (
    <div className="ui segment search-bar">
        <form className="ui form" onSubmit={props.onSubmit}>
            <label>{config.serchBarLabel}</label>
            <div className="field">
                <input 
                    className={getSearchBarCSS(props)}
                    value={props.term} placeholder={config.placeholder}
                    onChange={props.onSearchChange}
                />
            </div>
        </form>
    </div>
)

export default SearchBarForm
