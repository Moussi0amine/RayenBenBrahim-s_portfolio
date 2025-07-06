import React from 'react';
import './Sidebar.css';

const navItems = [
  { label: 'Home', icon: '/home_icon.png' },
  { label: 'About', icon: '/about_icon.png' },
  { label: 'Resume', icon: '/resume_icon.png' },
  { label: 'Portfolio', icon: '/portfolio_icon.png' },
  { label: 'Services', icon: '/service_icon.png' },
  { label: 'Contact', icon: '/contact_icon.png' },
];



function Sidebar({ currentSection, onSectionChange, isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="profile">
        <img src="/profile_img.jpg" alt="Profile" className="profile-img" />
        <h2>Rayen Ben Brahim</h2>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/rayen.ben.brahim.942739" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.jpeg" alt="Facebook" className="social-img-icon" />
        </a>
        <a href="https://www.instagram.com/rayenben_brahim" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.jpeg" alt="Instagram" className="social-img-icon" />
        </a>
        <a href="https://www.linkedin.com/in/rayen-ben-brahim-5775aa261/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.jpeg" alt="LinkedIn" className="social-img-icon" />
        </a>
      </div>
      <nav className="nav-menu">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`nav-item${currentSection === item.label ? ' active' : ''}`}
            onClick={() => onSectionChange(item.label)}
          >
            <img src={item.icon} alt={item.label} className="nav-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar; 