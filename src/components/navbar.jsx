// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdViewModule, MdTimeline, MdLayers, MdBrush, MdFactory, MdWidgets } from 'react-icons/md';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/designpattern" className="navbar-link">
            <MdFactory className="navbar-icon" /> Design Patterns
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/decorator" className="navbar-link">
            <MdBrush className="navbar-icon" /> Decorator Pattern
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/strategy" className="navbar-link">
            <MdTimeline className="navbar-icon" /> Strategy Pattern
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/observer" className="navbar-link">
            <MdViewModule className="navbar-icon" /> Observer Pattern
          </Link>
        </li>
      
        <li className="navbar-item">
          <Link to="/templatemethod" className="navbar-link">
            <MdWidgets className="navbar-icon" /> Template Method Pattern
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/factory" className="navbar-link">
            <MdFactory className="navbar-icon" /> Factory Pattern
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link to="/adaptar" className="navbar-link">
            <MdLayers className="navbar-icon" /> Adaptar Pattern
          </Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
