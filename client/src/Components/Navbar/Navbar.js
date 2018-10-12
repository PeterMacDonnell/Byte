import React from 'react';
import './Navbar.css';

export default class NavBar extends React.Component{
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light my-nav">
        <a className="navbar-brand" href="/">Byte</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse my-nav-font" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active my-nav-font" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link my-nav-font" href="/">About</a>
            <a className="nav-item nav-link my-nav-font" href="/">Meet the Team</a>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
};



      
      