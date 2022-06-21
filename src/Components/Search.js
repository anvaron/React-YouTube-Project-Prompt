import React, { useState } from "react";
// import SearchIcon from '@material-ui/icons/Search';
// import { TextField } from "@material-ui/core";
// import { Box } from "@material-ui/core";


// function Search (props) {
class Search extends React.Component {
  //
  state = {
    keyWord: ''
  };
  handleChange = (event) => {
      this.setState({
        keyWord: event.target.value
      });
  };
  handleSubmit = event => {
      event.preventDefault();
      this.props.handleFormSubmit(this.state.keyWord);
  }
  

  // handleChange = e => {
  //   
  // };

  // const handleClick = (e) => {
  //   console.log('Button was clicked');
  //   //console.log(videoSearch);

  // };

  //const { videoSearch, handleOnChange, handleOnClick } = props;
  render () {
  return(
    <>
      <div className='search-bar ui segment'>
          <form onSubmit={this.handleSubmit} className='ui form'>
              <div className='field'>
              {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <input
                  type="text"
                  onChange={this.handleChange} 
                  name='video-search'
                  placeholder="Search"  
                  value={this.state.keyWord}
                />
                <button 
                  //onSubmit={this.handleSubmit} 
                  className="btn">Search
                  {/* <SearchIcon /> */}
                </button>
              </div>
          </form>
          
      </div>

      {/* <input
        onChange={handleOnChange}
        type='text' 
        name="videoSearch" 
        placeholder="Search" 
        value={videoSearch}  
      />
      <button 
        onClick={handleOnClick} 
        className="btn">
        <SearchIcon />
      </button> */}
    </>
  )
  }  
}

export default Search;