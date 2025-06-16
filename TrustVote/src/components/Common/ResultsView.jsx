import React from 'react';
import { Trophy } from 'lucide-react';

const ResultsView = ({ election }) => {
  const totalVotes = election.totalVotes;
  const winner = election.candidates.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
        <h3 className="text-xl font-bold text-gray-900">Election Results</h3>
        <p className="text-gray-600">Total Votes: {totalVotes}</p>
      </div>

      {totalVotes > 0 && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-1">Winner</h4>
          <p className="text-green-700">
            {winner.name} - {winner.party}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultsView;
