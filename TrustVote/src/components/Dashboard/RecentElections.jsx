import React from 'react';

const RecentElections = ({ elections }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Recent Elections</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {elections.slice(0, 3).map(election => (
            <div key={election.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{election.title}</h3>
                <p className="text-sm text-gray-600">{election.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Status</span>
                <span className="text-sm text-gray-600">Votes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentElections;
