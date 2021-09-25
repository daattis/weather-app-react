import React from "react";
import "./SearchPage.css";

const SearchPage = ({ onSearch, handleChange, city }) => {
  return (
    <div className="container">
      <img className="search-img flex-item" src="./icons/perfect-day.svg" alt="weather app intro"></img>
      <h3 className="search-title flex-item">Find Weather for your city</h3>

      <form className="flex-item" onSubmit={onSearch}>
        <div className="input-group">
          <input onChange={handleChange} type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
