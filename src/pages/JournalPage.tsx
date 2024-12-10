import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const JournalPage: React.FC = () => {
  const [entries, setEntries] = useState([
    { id: 1, title: 'First Entry', date: '2024-01-10', snippet: 'My first journal entry...' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="journal-page">
      <Sidebar />
      <main className="journal-content">
        <header>
          <h1>Your Personal Journal</h1>
          <div className="journal-actions">
            <input 
              type="text" 
              placeholder="Search entries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>New Entry</button>
          </div>
        </header>

        <section className="journal-entries">
          {entries.map(entry => (
            <div key={entry.id} className="journal-entry-card">
              <h3>{entry.title}</h3>
              <p>{entry.date}</p>
              <p>{entry.snippet}</p>
              <button>Read More</button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default JournalPage;
