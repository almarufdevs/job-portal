
import React from 'react';

const VolunteerStats = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 bg-amber-50">
      <h2 className="text-3xl font-bold text-center mb-6">Volunteer Dashboard Summary</h2>
      <div className="stats shadow w-full">
        
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zM3 11a2 2 0 104 0 2 2 0 00-4 0z"
              />
            </svg>
          </div>
          <div className="stat-title font-bold">Total Volunteers</div>
          <div className="stat-value text-primary font-bold">1.2K</div>
          <div className="stat-desc font-bold">15% more than last month</div>
        </div>

        
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20h9M12 4h9M4 4h.01M4 12h.01M4 20h.01M8 4h.01M8 12h.01M8 20h.01"
              />
            </svg>
          </div>
          <div className="stat-title font-bold">Volunteer Posts</div>
          <div className="stat-value text-secondary">320</div>
          <div className="stat-desc font-bold">8 new this week</div>
        </div>

        
        <div className="stat">
          <div className="stat-figure text-success">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src="/team2.jpg" alt="Volunteer" />
              </div>
            </div>
          </div>
          <div className="stat-value text-success">92%</div>
          <div className="stat-title font-bold">Tasks Completed</div>
          <div className="stat-desc font-bold">12 tasks left to complete</div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerStats;
