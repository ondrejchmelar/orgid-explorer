/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
  <div id="app-header">
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <LinkContainer to='/'>
          <a className="navbar-brand mr-2">Winding Tree</a>
        </LinkContainer> 
        <a 
          href='https://windingtree.com/'
          className='nav-link'
          target="_blank"
          rel="noopener noreferrer"
        >
          Winding Tree website
        </a>
        <a 
          href='https://developers.windingtree.com/overview.html#orgid'
          className='nav-link'
          target="_blank"
          rel="noopener noreferrer"
        >
          About ORG.ID
        </a>
        <LinkContainer to='/'>
          <a className="nav-link">List</a>
        </LinkContainer>
      </div>
    </nav>
  </div>
);

export default Header;
