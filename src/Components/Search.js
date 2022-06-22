import React, { useState } from "react";
import "../styles/Search.css"

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
  const handleSubmit = event => {
    event.preventDefault();
    props.handleFormSubmit(inputSearch, maxResults);
  }
  
  //render () {
    return(
      <>
        <section className='search__form ui segment'>
          <form onSubmit={handleSubmit} className='ui form'>
            <div className='field'>
              <input
                type="text"
                onChange={handleSearchChange} 
                name='search'
                placeholder="Search"  
                value={inputSearch}
              />
              <input
                type="number"
                onChange={handleMaxResultsChange} 
                name='max-results'
                value={maxResults}
              />
              <button 
                className="btn">Search
              </button>
            </div>
          </form>
        </section>
      </>
    )
  //}  
}

export default Search;