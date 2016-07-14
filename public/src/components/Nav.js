import React, { Component } from 'react';
import Search from './search';

const Nav = ({ search }) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search search={search}/>
    </div>
  </nav>
);

export default Nav;
