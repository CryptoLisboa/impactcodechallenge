/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

const regIsNumber = /^$|^\d+$/

const config = {
  addWine: 'Add new wine',
  name: 'Name:',
  year: 'Year:',
  description: 'Description:',
  imageLink: 'Image link:',
  save: 'Save',
  discard: 'Discard'
}

const WineModal = ({ addNewWine, closeModal }) => {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div>
      <div className="header"><h2>{config.addWine}</h2></div>
      <div className="content" style={{ marginTop: '1.25%' }}>
        <div>
          <div>
            <label>
              {config.name}
            </label>
          </div>
          <div className="ui input">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={e => setName(e.target.value.trim())}
            />
          </div>
        </div>
        <div>
          <div>
            <label>
              {config.year}
            </label>
          </div>
          <div className="ui input">
            <input
              value={year || ''}
              onChange={(e) => {
                const { target: { value } } = e
                if (regIsNumber.test(value)) setYear(parseInt(value, 10))
                else if (!value) setYear('')
              }}
            />
          </div>
        </div>
        <div>
          <label>
            {config.description}
          </label>
          <div className="ui fluid input">
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              onBlur={e => setDescription(e.target.value.trim())}
            />
          </div>
        </div>
        <div>
          <label>
            {config.imageLink}
          </label>
          <div className="ui fluid input">
            <input
              value={img}
              onChange={e => setImg(e.target.value)}
              onBlur={e => setImg(e.target.value.trim())}
            />
          </div>
        </div>
      </div>
      <div className="content" style={{ marginTop: '5%' }}>
        <button
          type="button"
          onClick={() => {
            addNewWine({
              name, year, image: img, description
            })
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

export default WineModal
