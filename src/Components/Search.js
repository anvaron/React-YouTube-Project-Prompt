import React, { useEffect, useRef, useState } from "react";
import "../styles/Search.css"
import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Search (props) {
  // >> Setting hooks
  const [inputSearch, setInputSearch] = useState('');
  const [maxResults, setMaxResults] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [open, setOpen] = useState(false);
  const search = useRef(null);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      setInputSearch(value);
      setIsValid(true);
    }
  };

  const handleMaxResultsChange = (event) => {
    const { value } = event.target;
    if (value !== 0){
      setMaxResults(value);
      //setIsValid(true);
    }
  };

  const handleResetForm = () => {
    setInputSearch('')
    setMaxResults(1)
    setIsValid(false)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isValid) {
      props.handleFormSubmit(inputSearch, maxResults);
      handleResetForm();
    } else {
      handleClickOpen();
    }
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  }
  
  // useEffect(() => {
  //   search.current.focus();
  // }, []);

  return(
    <>
      <div className='search__form'>
        <form className='ui form'>
          <Box m="auto"
            maxWidth="sm"
            display="flex" 
            alignItems="center"
            justifyContent="center"
            className="search__form"
          >
            <TextField 
              ref={search}
              id="outlined-size-small"
              label="Search"
              type="search"
              name="search"
              size="small"
              onChange={handleSearchChange}
              value={inputSearch}
            />
            <TextField
              id="outlined-size-small"
              label="Max Results"
              type="number"
              name="max-results"
              size="small"
              value={maxResults}
              onChange={handleMaxResultsChange}
            />
          </Box>
          <Box m="auto"
            maxWidth="sm"
            display="flex" 
            
            alignItems="center"
            justifyContent="center"
            className="search__form"
          >
            <Button 
                variant="contained"
                color="error"
                onClick={handleSubmit}
              >
              Search
            </Button>
          </Box>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Youtube React App - search validation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please provide a valid search keyword.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Got it
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </>
  )
}

export default Search;