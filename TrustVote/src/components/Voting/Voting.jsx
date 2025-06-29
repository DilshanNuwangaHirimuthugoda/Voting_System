import React from 'react';
import VotingInterface from './VotingInterface';
import { AlertCircle } from 'lucide-react';
import { getElectionStatus } from '../../utils/electionUtils';

const Voting = ({ elections, setElections }) => {
  const activeElections = elections.filter(e => getElectionStatus(e) === 'active');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Elections - Cast Your Vote</h2>
        
        {activeElections.length > 0 ? (
          <div className="space-y-6">
            {activeElections.map(election => (
              <div key={election.id} className="border rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{election.title}</h3>
                  <p className="text-gray-600">{election.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Election ends: {new Date(election.endDate).toLocaleDateString()}
                  </p>
                </div>
                <VotingInterface election={election} setElections={setElections} elections={elections} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Elections</h3>
            <p className="text-gray-600">There are currently no active elections available for voting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;