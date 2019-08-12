import React, { useState } from 'react'

const regIsNumber = /^$|^\d+$/

const WineModal = ({ addNewWine, closeModal }) => {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div>
      <div className="header"><h2>Add new wine</h2></div>
      <div className="content" style={{ marginTop: '1.25%' }}>
        <div>
          <div><label>Name: </label></div>
          <div className="ui input">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={e => setName(e.target.value.trim())}
            />
          </div>
        </div>
        <div>
          <div><label>Year: </label></div>
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
          <label>Description: </label>
          <div className="ui fluid input">
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              onBlur={e => setDescription(e.target.value.trim())}
            />
          </div>
        </div>
        <div>
          <label>Image link: </label>
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
          onClick={() => {
            addNewWine({
              name, year, image: img, description
            })
            closeModal()
          }}
          className="ui primary button"
        >
Save

        </button>
        <button onClick={() => closeModal()} className="ui red button">Discard</button>
      </div>
    </div>
  )
}

export default WineModal
