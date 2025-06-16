import React from 'react';
import { Trophy } from 'lucide-react';

const ResultsView = ({ election }) => {
  const totalVotes = election.totalVotes;
  const winner = election.candidates.reduce((prev, current) => 
    (prev.votes > current.votes) ? prev : current
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
        <h3 className="text-xl font-bold text-gray-900">Election Results</h3>
        <p className="text-gray-600">Total Votes: {totalVotes}</p>
      </div>

      <div className="space-y-3">
        {election.candidates
          .sort((a, b) => b.votes - a.votes)
          .map((candidate, index) => {
            const percentage = totalVotes > 0 ? (candidate.votes / totalVotes * 100).toFixed(1) : 0;
            return (
              <div key={candidate.id} className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    {index === 0 && <Trophy className="w-5 h-5 text-yellow-500" />}
                    <span className="font-medium">{candidate.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{candidate.votes} votes ({percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
      </div>

      {totalVotes > 0 && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-1">Winner</h4>
          <p className="text-green-700">{winner.name} - {winner.party}</p>
        </div>
      )}
    </div>
  );
};

export default ResultsView;