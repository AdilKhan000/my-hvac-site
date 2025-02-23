import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/Logo.png';

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            className="me-2 logo-img rounded-circle"
          />
          HVAC Services
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={toggleDropdown}
              >
                Settings
              </a>
              <ul className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`}>
                <li>
                  <a className="dropdown-item" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#check-spears">
                    Check Spears
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#services">
                    Services
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
