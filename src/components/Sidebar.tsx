import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>QuitTrack</h1>
      </div>
      <nav>
        <Link 
          to="/dashboard" 
          className={`nav-link ${isActive('/dashboard')}`}
        >
          Dashboard
        </Link>
        <Link 
          to="/journal" 
          className={`nav-link ${isActive('/journal')}`}
        >
          Journal
        </Link>
        <Link 
          to="/new-habit" 
          className={`nav-link ${isActive('/new-habit')}`}
        >
          New Habit
        </Link>
        <Link 
          to="/upgrade" 
          className={`nav-link ${isActive('/upgrade')}`}
        >
          Upgrade Plan
        </Link>
      </nav>
      <div className="sidebar-footer">
        <Link to="/settings">Account Settings</Link>
        <button>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
