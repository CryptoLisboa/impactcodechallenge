import React, { useState } from 'react'
import SearchBarForm from './SearchBarForm';

const SearchBarContainer = props => {
    const [term, setTerm] = useState('')
    const onSearchChange = e => setTerm(e.target.value)
    const onSubmit = e => {
        e.preventDefault()
        props.onSearchSubmit(term)
    }

    return <SearchBarForm 
        term={term}
        onSearchChange={onSearchChange}
        onSubmit={onSubmit}
    />
}

export default SearchBarContainer