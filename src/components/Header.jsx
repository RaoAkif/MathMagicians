import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const headerStyle = {
  padding: '5px',
  fontSize: '20px',
  fontFamily: 'Calibri',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'lightgrey',
};

const logoStyle = {
  fontSize: '26px',
  fontWeight: 'bold',
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={logoStyle}>Math Magicians</div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '200px',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
