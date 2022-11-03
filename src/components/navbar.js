import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.PureComponent {
  render() {
    return (
      <header className="nav">
        <h1>Math Magicians</h1>
        <nav className="nav-links">
          <Link className="nav-link" to="/"> Home</Link>
          <Link className="nav-link" to="/calculator">Calculator</Link>
          <Link className="nav-link" to="/quotes">
            Quote
          </Link>
        </nav>
      </header>
    );
  }
}
export default NavBar;
