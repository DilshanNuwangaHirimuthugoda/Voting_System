import React from 'react';
import ElectionCard from './ElectionCard';

const ElectionList = ({ elections }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">All Elections</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {elections.map(election => (
            <ElectionCard key={election.id} election={election} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionList;