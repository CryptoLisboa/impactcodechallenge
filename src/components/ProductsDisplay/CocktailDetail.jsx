import React, { useEffect } from 'react'
import { getDrink } from '../SearchEngine/util'
import Loader from '../lib/Loader'

const CocktailDetail = ({
  item, loadingItem, itemId, itemsDispatch, itemsList
}) => {
  const {
    name, image, instructions, id, alcoholic, ingredients
  } = item || {}
  useEffect(() => {
    if (loadingItem) {
      getDrink({ itemId, itemsDispatch, itemsList })
    }
  }, [loadingItem, itemId, itemsDispatch])
  if (loadingItem) return <Loader />
  return item ? (
    <div className="ui segment" style={{ minHeight: 500 }} key={id}>
      <div className="ui left floated image large">
        <img src={image} alt="Wine bottle" />
      </div>
      <div>
        <b>{name}</b>
        {alcoholic && ' - '}
        <b>{alcoholic}</b>
      </div>
      <p>{instructions}</p>
      <br />
      {ingredients && (
        <div
          role="list"
          className="ui bulleted list"
          style={{
            position: 'absolute',
            verticalAlign: 'middle',
            marginLeft: 500
          }}
        >
          {ingredients.map(({ ingredient, measure }) => (
            <div role="listitem" className="item">
              {ingredient}
              {measure && ' - '}
              {measure}
            </div>
          ))}
        </div>
      )}
    </div>
  ) : <div />
}

export default CocktailDetail
