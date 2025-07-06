import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  const [section, setSection] = useState('Home');
  // Set sidebar open by default on desktop, closed on mobile
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (window.innerWidth <= 900 && 
          isSidebarOpen && 
          sidebarRef.current && 
          !sidebarRef.current.contains(event.target) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    // Close sidebar when pressing Escape key
    function handleEscapeKey(event) {
      if (event.key === 'Escape' && isSidebarOpen) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSectionChange = (section) => {
    setSection(section);
    if (window.innerWidth <= 900) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <button 
        ref={menuButtonRef}
        onClick={toggleSidebar} 
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={isSidebarOpen}
      >
        <span>{isSidebarOpen ? '✕' : '☰'}</span>
      </button>
      <div ref={sidebarRef}>
        <Sidebar
          currentSection={section}
          onSectionChange={handleSectionChange}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <MainContent section={section} />
    </div>
  );
}

export default App;
