import React from 'react';
import Sidebar from '../components/Sidebar';

const HabitManagerPage: React.FC = () => {
  return (
    <div className="habit-manager-page">
      <Sidebar />
      <main className="habit-content">
        <header>
          <h1>Habit Name</h1>
          <p>Brief description of the habit</p>
        </header>

        <section className="habit-map">
          <h2>Habit Map</h2>
          {/* Interactive visualization of habit triggers and steps */}
          <div className="habit-map-placeholder">
            Habit Map Visualization
          </div>
        </section>

        <section className="micro-steps">
          <h2>Micro-Steps</h2>
          <ul>
            <li>
              <input type="checkbox" /> 
              Micro-step description
              <span className="progress">50%</span>
            </li>
            {/* More micro-steps will be dynamically added */}
          </ul>
          <button>Add Micro-Step</button>
        </section>

        <section className="ai-suggestions">
          <h2>AI Suggestions</h2>
          <div className="suggestion-list">
            <p>Personalized tip 1</p>
            <p>Personalized tip 2</p>
          </div>
          <button>Ask AI for Advice</button>
        </section>
      </main>
    </div>
  );
};

export default HabitManagerPage;
