import React from 'react';

const footerStyle = {
  padding: '5px',
  backgroundColor: 'lightgrey',
  textAlign: 'center',
  fontFamily: 'Calibri',
  fontSize: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100vw',
  bottom: '0px',
};

const Header = () => {
  return (
    <div style={footerStyle}>
      Copyright Reserved 2022. Rao Akif
    </div>
  );
};

export default Header;
