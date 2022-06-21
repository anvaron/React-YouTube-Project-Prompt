import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';
import "../styles/NotFound.css"

function NotFound () {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('/', {replace: true}), [navigate], () => setIsOpen(false));
  
  Modal.setAppElement("#root");  

  return (
    <>
      <Modal
        isOpen={isOpen}
        contentLabel="Not Found"
      >
        <section className='modal__view'>
          <h1>Something went wrong.</h1>
          <button type="button" onClick={handleOnClick}>
            Go home
          </button>
        </section>
      </Modal>
    </>
  )
}

export default NotFound;