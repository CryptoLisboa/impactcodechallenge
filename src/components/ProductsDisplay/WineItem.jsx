import React from 'react'
import './WineItem.css'

const WineItem = ({ image, name, year }) => {
  debugger
  return (
    <div className="container">
      <img className="ui tiny image" src={image} alt="Wine" />
      <div className="content">
        <div><h5 className="header">{name}</h5></div>
        <div>
          {'Year: '}
          <span className="header">{year}</span>
        </div>
      </div>
    </div>
  )
}

export default WineItem
// name: strDrink
// instructions: strInstructions,
//   id: idDrink,
//   image: strDrinkThumb,
//   alcoholic: strAlcoholic,
//   category: strCategory
