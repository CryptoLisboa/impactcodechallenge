import React, { useState } from 'react'
import Modal from 'react-modal'
import WineModal from './WineModal'

Modal.setAppElement('#root')

const WineAdder = ({ addNewWine }) => {
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
        <WineModal addNewWine={addNewWine} closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default WineAdder
