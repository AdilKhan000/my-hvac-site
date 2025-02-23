import React from 'react';


const Header: React.FC = () => {
  return (
    <header
      className="py-5 text-white text-center"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div className="container">
        <h1 className="display-4">Welcome to HVAC Services</h1>
        <p className="lead">
          Your trusted partner for premium HVAC solutions.
        </p>
      </div>
    </header>
  );
};

export default Header;
