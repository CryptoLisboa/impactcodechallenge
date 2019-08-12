import React from 'react'
// import './WineItem.css'

const CocktailItemAttribute = ({ label, value }) => (value ? (
  <div>
    {label}
    <span className="header">{value}</span>
  </div>
) : null)

const CocktailItem = ({
  image, name, id, category, alcoholic
}) => (
  <div className="test" key={id}>
    <img className="ui tiny image" src={image} alt="Wine" />
    <div className="content">
      <div><h5 className="ui header">{name}</h5></div>
      <CocktailItemAttribute label="Category: " value={category} />
      <CocktailItemAttribute value={alcoholic} />
    </div>
  </div>
)

export default CocktailItem
