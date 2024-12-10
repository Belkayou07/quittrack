import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const NewHabitPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [habitName, setHabitName] = useState('');
  const [habitDescription, setHabitDescription] = useState('');

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="habit-details-step">
            <h2>Name Your Habit</h2>
            <input 
              type="text" 
              placeholder="Habit Name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />
            <textarea 
              placeholder="Describe your habit"
              value={habitDescription}
              onChange={(e) => setHabitDescription(e.target.value)}
            />
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div className="habit-triggers-step">
            <h2>Identify Triggers</h2>
            {/* Trigger identification UI */}
            <div className="trigger-options">
              <label>
                <input type="checkbox" /> Emotional Trigger
              </label>
              <label>
                <input type="checkbox" /> Environmental Trigger
              </label>
              {/* More trigger types */}
            </div>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        );
      case 3:
        return (
          <div className="ai-analysis-step">
            <h2>AI Habit Analysis</h2>
            <div className="ai-generated-map">
              {/* AI-generated habit map */}
              Habit Map Generated by AI
            </div>
            <button onClick={() => setStep(4)}>Next</button>
          </div>
        );
      case 4:
        return (
          <div className="micro-steps-step">
            <h2>Micro-Steps</h2>
            <div className="ai-suggested-steps">
              <h3>AI Suggested Micro-Steps</h3>
              {/* Dynamically generated micro-steps */}
              <ul>
                <li>
                  <input type="checkbox" /> 
                  Suggested Micro-Step 1
                </li>
                <li>
                  <input type="checkbox" /> 
                  Suggested Micro-Step 2
                </li>
              </ul>
            </div>
            <button>Create Habit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="new-habit-page">
      <Sidebar />
      <main className="new-habit-content">
        <header>
          <h1>Create a New Habit</h1>
          <div className="step-progress">
            Step {step} of 4
          </div>
        </header>

        {renderStepContent()}
      </main>
    </div>
  );
};

export default NewHabitPage;
