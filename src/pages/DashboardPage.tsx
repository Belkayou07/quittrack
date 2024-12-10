import React from 'react';
import Sidebar from '../components/Sidebar';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <main className="dashboard-content">
        <header>
          <h1>Welcome, [User Name]</h1>
          <p>Here's your progress today!</p>
        </header>

        <section className="quick-stats">
          <div className="stat-card">
            <h3>Micro-steps Completed</h3>
            <p>5/10</p>
          </div>
          <div className="stat-card">
            <h3>Success Rate</h3>
            <p>50%</p>
          </div>
        </section>

        <section className="habit-grid">
          <h2>Your Habits</h2>
          <div className="habits-container">
            {/* Habit Cards will be dynamically rendered here */}
            <div className="habit-card">
              <h3>Habit Name</h3>
              <div className="progress-bar"></div>
              <button>View Details</button>
            </div>
          </div>
          <button className="add-habit-btn">+ Add New Habit</button>
        </section>

        <section className="calendar-overview">
          <h2>Your Habit Calendar</h2>
          {/* Calendar component will be implemented later */}
          <div className="calendar-placeholder">
            Calendar View
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
