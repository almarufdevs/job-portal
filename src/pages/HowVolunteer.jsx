import React from 'react';

const HowVolunteer = () => {
    return (
        <div>
            <section className="px-4 py-12 text-center bg-gradient-to-b from-amber-100">
    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">1. Find a Need</h3>
        <p className="text-gray-600">Browse available volunteer opportunities suited to your interests.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">2. Join In</h3>
        <p className="text-gray-600">Click "Volunteer" and commit to the post with a few simple steps.</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">3. Make an Impact</h3>
        <p className="text-gray-600">Show up, help out, and be the reason someone smiles today!</p>
      </div>
    </div>
  </section>
        </div>
    );
};

export default HowVolunteer;