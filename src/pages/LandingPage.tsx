import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header>
        <nav>
          <a href="#get-started">Get Started</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Reverse Your Habits, Step by Step</h1>
          <p>Understand and break your habits with AI-driven insights and actionable steps</p>
          <Link to="/login" className="cta-button">Get Started</Link>
        </section>

        <section id="features">
          <div className="feature-grid">
            <div className="feature-card">Habit Mapping</div>
            <div className="feature-card">Micro-step Tracking</div>
            <div className="feature-card">Personalized AI Coaching</div>
            <div className="feature-card">Calendar and Analytics</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/help">Help Center</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
