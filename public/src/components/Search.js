import React, { Component } from 'react';

let searchText;

const Search = ({ search }) => (
  <div className="search-bar form-inline">
    <form onSubmit={ e => search(e, searchText.value) }>
      <input className="form-control" type="text" ref={ input => searchText = input }/>
      <button className="btn hidden-sm-down" onClick={ e => search(e, searchText.value) }>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  </div> 
);

export default Search;
