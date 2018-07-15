import React    from 'react';
import { Link } from 'react-router-dom';
import GoTo     from 'IMG/action-commercial-icon.png';
import Logo     from 'IMG/pool-pros-logo.png';

const AppBar = () => {
  return(
    <div>
      <div id="blue-nav">
        <span className="float-right commercial-service">
          <a href="#"> Commercial Service</a>
          <img src={GoTo} alt="Go to arrow icon" />
        </span>
        <a href="#" className="float-right">Dealers and Distributors</a>
      </div>
      <div id="main-nav">
        <img src={Logo} alt="Pool Pros Logo" />
        <a href="#">Pool & Spas</a>
        <a href="#">Supplies</a>
        <a href="#">Resources</a>
        <a href="#">Services</a>
        <button className="btn-nav blue-text">
          Find a Pool Pro
        </button>
      </div>
    </div>
  );
}

export default AppBar;
