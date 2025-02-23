import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} HVAC Services. All rights reserved.</p>
        <p>
          Contact us:&nbsp;
          <a href="mailto:info@hvacservices.com" className="text-light">
            info@hvacservices.com
          </a>
          &nbsp;| Phone: (123) 456‑7890
        </p>
      </div>
    </footer>
  );
};

export default Footer;
