import React, { useState } from 'react'
import Modal from 'react-modal'
import CocktailModal from './CokctailModal'

Modal.setAppElement('#root')

const AddCocktail = ({ itemsDispatch }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <div>
      <button type="button" onClick={openModal} className="ui green button">Add new wine</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <CocktailModal itemsDispatch={itemsDispatch} closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default AddCocktail
