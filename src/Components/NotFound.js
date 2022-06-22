import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from "@mui/material";
import Modal from 'react-modal/lib/components/Modal';
import "../styles/NotFound.css"
import logo from "../images/youtube-123.svg"

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
          <Box 
            m="auto"
            alignItems="center"
            justifyContent="center" 
          >
          <h1>Something went wrong.</h1>
          <img width="300rem" src={logo} alt="Youtube Logo" />
          <button type="button" onClick={handleOnClick}>
            Go home
          </button>
          </Box>
        </section>
      </Modal>
    </>
  )
}

export default NotFound;