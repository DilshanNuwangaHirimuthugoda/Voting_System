import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const VotingInterface = ({ election, setElections, elections }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const castVote = () => {
    if (!selectedCandidate) return;
    
    setElections(elections.map(e => 
      e.id === election.id 
        ? {
            ...e,
            candidates: e.candidates.map(c => 
              c.id === selectedCandidate 
                ? { ...c, votes: c.votes + 1 }
                : c
            ),
            totalVotes: e.totalVotes + 1
          }
        : e
    ));
    
    setHasVoted(true);
    setSelectedCandidate(null);
  };

  if (hasVoted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vote Cast Successfully!</h3>
        <p className="text-gray-600">Thank you for participating in the election.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Cast Your Vote</h3>
      {election.candidates.map(candidate => (
        <div 
          key={candidate.id}
          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            selectedCandidate === candidate.id 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
          onClick={() => setSelectedCandidate(candidate.id)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{candidate.name}</h4>
              <p className="text-sm text-gray-600">{candidate.party}</p>
            </div>
            <input 
              type="radio" 
              checked={selectedCandidate === candidate.id}
              onChange={() => setSelectedCandidate(candidate.id)}
              className="w-4 h-4 text-blue-600"
            />
          </div>
        </div>
      ))}
      <button 
        onClick={castVote}
        disabled={!selectedCandidate}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Cast Vote
      </button>
    </div>
  );
};

export default VotingInterface;