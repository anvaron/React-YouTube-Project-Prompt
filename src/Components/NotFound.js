import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal/lib/components/Modal';

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
        <div>Something went wrong.</div>
        <button type="button" onClick={handleOnClick}>
          Go home
        </button>
      </Modal>
    </>
  )
}

export default NotFound;