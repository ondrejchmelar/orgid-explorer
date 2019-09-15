/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const { PUBLIC_URL } = process.env;

const Header = () => (
  <div id="app-header">
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
      <div className="container">
        <a className="navbar-brand mr-2" href="https://windingtree.com/">Winding Tree</a>
        <LinkContainer to={`${PUBLIC_URL}/`}>
          <a className="nav-link">Home</a>
        </LinkContainer>
      </div>
    </nav>
  </div>
);

export default Header;
