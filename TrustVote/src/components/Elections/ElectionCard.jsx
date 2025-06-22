import React from 'react';
import { QrCode, Share2, Download } from 'lucide-react';
import StatusBadge from '../Common/StatusBadge';
import ResultsView from '../Common/ResultsView';
import { getElectionStatus } from '../../utils/electionUtils';

const ElectionCard = ({ election }) => {
  return (
    <div className="border rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{election.title}</h3>
          <p className="text-gray-600">{election.description}</p>
        </div>
        <StatusBadge status={getElectionStatus(election)} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Start Date</p>
          <p className="font-medium">{new Date(election.startDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">End Date</p>
          <p className="font-medium">{new Date(election.endDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Votes</p>
          <p className="font-medium">{election.totalVotes} / {election.maxVoters}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 px-3 py-1 rounded-lg">
            <span className="text-sm font-mono">PIN: {election.pin}</span>
          </div>
          <div className="flex items-center space-x-2">
            <QrCode className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">{election.qrCode}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button className="text-green-600 hover:text-green-800 flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      {getElectionStatus(election) === 'completed' && (
        <div className="mt-4 pt-4 border-t">
          <ResultsView election={election} />
        </div>
      )}
    </div>
  );
};

export default ElectionCard;