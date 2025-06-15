import React from 'react';
import { getElectionStatus } from '../../utils/electionUtils';

const CandidateCard = ({ candidate, election }) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
        <span className="text-sm text-gray-600">{candidate.votes} votes</span>
      </div>
      <p className="text-sm text-gray-600">{candidate.party}</p>
      {getElectionStatus(election) === 'completed' && (
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full"
              style={{ 
                width: `${election.totalVotes > 0 ? (candidate.votes / election.totalVotes * 100) : 0}%` 
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateCard;