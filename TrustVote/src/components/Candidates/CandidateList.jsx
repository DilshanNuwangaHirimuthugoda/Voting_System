import React from 'react';
import CandidateCard from './CandidateCard';

const CandidateList = ({ election }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">{election.title} - Candidates</h2>
      </div>
      <div className="p-6">
        {election.candidates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {election.candidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} election={election} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No candidates registered for this election yet.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateList;