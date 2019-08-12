/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { addItem } from '../../state/CocktailAction'

const regIsNumber = /^$|^\d+$/

const config = {
  addWine: 'Add new wine',
  name: 'Name:',
  instructions: 'Instructions:',
  alcoholic: 'Alcoholic:',
  category: 'Category:',
  id: 'ID:',
  imageLink: 'Image link:',
  save: 'Save',
  discard: 'Discard'
}

const attribute = ({
  label, value, setter, isNumeric, fluid
}) => (
  <div>
    <div>
      <label>{label}</label>
    </div>
    <div className={fluid ? 'ui input fluid' : 'ui input'}>
      <input
        value={value}
        onChange={!isNumeric ? e => setter(e.target.value) : (e) => {
          const { target: { value: valueTarget } } = e
          if (regIsNumber.test(valueTarget)) setter(parseInt(valueTarget, 10))
          else if (!valueTarget) setter('')
        }}
        onBlur={!isNumeric ? e => setter(e.target.value.trim()) : null}
      />
    </div>
  </div>
)

const CocktailModal = ({ itemsDispatch, closeModal }) => {
  /*
    id: idDrink,
  */
  const [name, setName] = useState('')
  const [instructions, setInstructions] = useState('')
  const [img, setImg] = useState('')
  const [alcoholic, setAlcoholic] = useState('')
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')
  return (
    <div>
      <div className="header"><h2>{config.addWine}</h2></div>
      <div className="content" style={{ marginTop: '1.25%' }}>
        {attribute({ label: config.name, value: name, setter: setName })}
        {attribute({
          label: config.instructions, value: instructions, setter: setInstructions, fluid: true
        })}
        {attribute({ label: config.alcoholic, value: alcoholic, setter: setAlcoholic })}
        {attribute({ label: config.category, value: category, setter: setCategory })}
        {attribute({
          label: config.id, value: id, setter: setId, isNumeric: true
        })}
        {attribute({
          label: config.imageLink, value: img, setter: setImg, fluid: true
        })}
      </div>
      <div className="content" style={{ marginTop: '5%' }}>
        <button
          type="button"
          onClick={() => {
            itemsDispatch(addItem({
              name, instructions, alcoholic, image: img, category, id
            }))
            closeModal()
          }}
          className="ui primary button"
        >
          {config.save}
        </button>
        <button type="button" onClick={() => closeModal()} className="ui red button">
          {config.discard}
        </button>
      </div>
    </div>
  )
}

export default CocktailModal
