import React, { useState } from "react";
import "../styles/Search.css"
import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//class Search extends React.Component {
function Search (props) {

  const [inputSearch, setInputSearch] = useState('');
  const [maxResults, setMaxResults] = useState(1);
  //
  // state = {
  //   keyWord: ''
  // };
  const handleSearchChange = (event) => {
    // this.setState({
    //   keyWord: event.target.value
    // });
    setInputSearch(event.target.value)
  };
  const handleMaxResultsChange = (event) => {
    // this.setState({
    //   keyWord: event.target.value
    // });
    setMaxResults(event.target.value)
  };
  const handleResetForm = () => {
    setInputSearch('')
    setMaxResults(1)
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.handleFormSubmit(inputSearch, maxResults);
    handleResetForm();
  }
  
  //render () {
    return(
      <>
        <div className='search__form'>
          <form className='ui form'>
            <Grid spacing={2}>
              
              <TextField 
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
             </Grid>
             <Grid>
              <Button 
                  variant="contained"
                  color="error"
                  onClick={handleSubmit}
                >
                Search
              </Button>
             </Grid>
          </form>
        </div>
      </>
    )
  //}  
}

export default Search;