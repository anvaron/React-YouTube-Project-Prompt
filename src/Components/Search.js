import React, { useState } from "react";
// import SearchIcon from '@material-ui/icons/Search';
// import { TextField } from "@material-ui/core";
// import { Box } from "@material-ui/core";

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
  
  render () {
    return(
      <>
        <div className='search-bar ui segment'>
          <form onSubmit={this.handleSubmit} className='ui form'>
            <div className='field'>
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
      </>
    )
  }  
}

export default Search;