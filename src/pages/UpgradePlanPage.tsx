import React from 'react';
import Sidebar from '../components/Sidebar';

const UpgradePlanPage: React.FC = () => {
  return (
    <div className="upgrade-plan-page">
      <Sidebar />
      <main className="upgrade-content">
        <header>
          <h1>Upgrade Your QuitTrack Experience</h1>
          <p>Unlock advanced features and personalized coaching</p>
        </header>

        <section className="plan-comparison">
          <div className="plan-card free-plan">
            <h2>Free Plan</h2>
            <ul>
              <li>Basic habit tracking</li>
              <li>Limited AI insights</li>
              <li>Single habit management</li>
            </ul>
            <p>$0/month</p>
            <button disabled>Current Plan</button>
          </div>

          <div className="plan-card premium-plan">
            <h2>Premium Plan</h2>
            <ul>
              <li>Unlimited habit tracking</li>
              <li>Advanced AI coaching</li>
              <li>Comprehensive analytics</li>
              <li>Priority support</li>
            </ul>
            <p>$9.99/month</p>
            <button>Upgrade Now</button>
          </div>
        </section>

        <section className="payment-options">
          <h2>Payment Options</h2>
          <div className="payment-methods">
            <button>Monthly</button>
            <button>Annually (Save 20%)</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UpgradePlanPage;
