import React from 'react';
import './SearchPage.css'

const SearchPage = () => {
    return (
    <div className="search-box">
      <h2 className="search-title">Find Weather for your city</h2>
      <img className="search-img" src="./icons/perfect-day.svg" alt="weather app intro"></img>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon2"></input>
        <div className="input-group-append">
          <button className="btn btn-dark" type="button">Search</button>
        </div>
      </div>

    </div>
)
}

export default SearchPage;