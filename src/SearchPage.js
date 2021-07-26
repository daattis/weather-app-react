import React from 'react';
import './SearchPage.css'

const SearchPage = ({ onSearch, handleChange, inputText }) => {

    return (
    <div className="search-box">
    <h1 className="header">My weather app</h1>
     
      <img className="search-img" src="./icons/perfect-day.svg" alt="weather app intro"></img>
      <h2 className="search-title">Find Weather for your city</h2>

      <form onSubmit={onSearch}>
      <div className="input-group mb-3">
        <input onChange={handleChange} type="text" value={inputText} className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon2"></input>
        <div className="input-group-append">
          <button className="btn btn-dark" type="submit">Search</button>
        </div>
      </div>
      </form>

    </div>
)
}

export default SearchPage;